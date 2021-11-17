import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  // State를 직접 수정하는 코드를 쓰지 말 것!!
  // State를 수정할 땐 함수를 쓰자!
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // useState의 함수 인수를 사용하는 법
    setToDos((currentArray) => [toDo, ...currentArray]); // 값을 설정하기
    setToDo(""); // 값을 보내기
  };
  console.log(toDos);
  return (
    <div>
      <h1>My Todos ({toDos.length})</h1>
      <form>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
