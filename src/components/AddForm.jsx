import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }
    return (
      <>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button>Add Task</button>
        </form>
      </>
    );
}