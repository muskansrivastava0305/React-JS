import { memo } from "react";

const Todo = ({ todo , addTodo }) => {
    console.log("chiled render");

    return (
       <>
       <h2>My Todos</h2>
       {todo.map((todo , index) => {
        return <p key = {index}> {todo + index} </p>
       })}

       <button onClick={addTodo}> Add Todo</button>
       </>
    )
    


}

export default memo(Todo)