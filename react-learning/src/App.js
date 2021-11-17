import { useState, useEffect } from "react";

// useState로 컴포넌트를 아예 삭제하거나, 다시 만들 수 있음.
// 컴포넌트가 파괴될 때도 코드를 실행시킬 수 있음.

function Hello() {
  function byeFn() {
    console.log("byebye");
  }
  useEffect(() => {
    // 사람들이 주로 씀
    console.log("hello");
    return () => console.log("goodbye");
  });
  useEffect(() => {
    // 사람들이 잘 안씀
    console.log("hi: ");
    return function () {
      console.log("bye:");
    };
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
