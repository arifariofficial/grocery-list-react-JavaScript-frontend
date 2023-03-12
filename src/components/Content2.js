import { ItemList } from "./ItemList";

const Content2 = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      {items.length ? (
        <div>
          <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        </div>
      ) : (
        <p className="mt-7 text-xl ">Your list is empty</p>
      )}
    </>
  );
};

export default Content2;
