
import './style.css';
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className="App">
      <header>
      <h1 className="titleRed">Hager's Todo List</h1>
      <div style={{border:1,color:"solidBlack",maxWidth:"100vw" }}>.</div>
      <img src={TodoList.jpg}></img>




      </header>
      <Form/>
      <TodoList/> <br></br>


    </div>
  );
}

export default App;
