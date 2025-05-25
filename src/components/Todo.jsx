import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import {
  deleteTodo,
  markAsDone,
  markAlldone,
} from "../features/todo/todoSlice";


export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleMarkDone = (id,isDone) => {
        
        dispatch(markAsDone(id));
    }
  
  const handleMarkAllDone = () => {
      dispatch(markAlldone());
    }

    const handleStyle = () => {
       return { fontSize: "10px" }
        // todos.map((todo) => {
        //     todo.isDone
        // })

        const markDone = todos.filter((todo) => todo.isDone);
       // todo.isDone ? {textDecoration:"line-through":""}
    }


    const getStyle = (isDone) => ({
       textDecoration: isDone ? "line-through" : "none"
    });



    // console.log(todos);
    return (
      <div>
        <AddForm />
        <h2>List of Todos</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
              >
                {todo.task}
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className="mt-2" onClick={() => handleDelete(todo.id)}>Delete</button>
              &nbsp;&nbsp;
              <button className="mt-2" onClick={() => handleMarkDone(todo.id,todo.isDone)}>
                Mark As Done
              </button>
            </li>
          ))}
          <button onClick={handleMarkAllDone} className="mt-2">MarkAllDone</button>
        </ul>
      </div>
    );
}