import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content2 from "./components/Content2";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import ApiRequest from "./components/ApiRequest";

const App = () => {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not recieve expected data");
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      fetchItem();
    }, 1500);
  }, []);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppingList", JSON.stringify(newItems));
  };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await ApiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ checked: myItem[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);

    const deleteOptions = {
      method: "DELETE",
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Gorcery List" />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <main className="h-screen flex flex-col justify-start items-center mt-4">
        {isLoading && <p>Items Loading...</p>}
        {fetchError && <p className="text-red-900">{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content2
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            addItem={addItem}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
};

export default App;
