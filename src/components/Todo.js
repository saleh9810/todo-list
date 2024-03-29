import React from 'react';

 const Todo = ({text, setTodos, todo, todos}) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el => el.id !== todo.id)));
   
  };
 const completeHandler = () => {

    setTodos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        })
    )
     
 }
    return (
        <div>
            <div className="todo">
                <li className="todo-item" className={todo.completed ? "completed" : ""} >
                {text}
                </li>
                <button onClick={completeHandler} className="complete-btn">
                    <i className="fas fa-check"></i>
                </button>
                <button onClick={deleteHandler} className="trash-btn">
                    <li className="fas fa-trash"></li>
                </button>
            </div>
        </div>
    )
}

export default Todo