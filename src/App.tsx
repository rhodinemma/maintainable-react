import "./App.css";
import { Todo } from "./components/Todo";

const items = [
  { id: "1", content: "buy some milk", completed: false },
  { id: "2", content: "buy some bread", completed: true },
  { id: "3", content: "buy some eggs", completed: false },
];

function App() {
  return (
    <div className="App">
      Learn React in 5 minutes
      <Todo items={items} />
    </div>
  );
}

export default App;
