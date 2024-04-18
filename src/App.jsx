import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
        <TodoItem />
        <TodoItem />
        <div className="container">
          <div className="row row-item">
            <div className="col-4">Go to College</div>
            <div className="col-4">18/04/2024</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger ad-button">
                Delete
              </button>
            </div>
          </div>
        </div>
        </div>
      </center>
    </>
  );
}

export default App;
