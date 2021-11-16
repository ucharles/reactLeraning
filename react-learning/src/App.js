import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back to React!</h1>
      <Button text={"push me"} />
    </div>
  );
}

export default App;