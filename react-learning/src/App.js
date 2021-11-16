import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");
  useEffect(() => {
    console.log("i run only once");
  }, []);
  useEffect(() => {
    console.log("Search for", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("i run 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("running keyword & counter");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>increase</button>
    </div>
  );
}

export default App;
