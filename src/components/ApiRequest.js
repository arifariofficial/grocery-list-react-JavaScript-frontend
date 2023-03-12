const ApiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const repsonse = await fetch(url, optionsObj);
    if (!repsonse.ok) throw Error("Please reaload the App");
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};

export default ApiRequest;
