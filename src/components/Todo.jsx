import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo ,markAsDone} from "../features/todo/todoSlice";


export default function Todo() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleMarkDone = (id,isDone) => {
        
        dispatch(markAsDone(id));
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
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              &nbsp;&nbsp;
              <button onClick={() => handleMarkDone(todo.id,todo.isDone)}>
                Mark As Done
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}