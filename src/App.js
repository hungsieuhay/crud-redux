import { Route, Switch } from "react-router-dom";
import Counter from "./components/counter";
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/todo-list" component={TodoList} />
      </Switch>
    </div>
  );
}

export default App;
