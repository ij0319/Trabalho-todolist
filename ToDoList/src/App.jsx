import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  
  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
      setTaskName("");
    }
  };

  
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="div1">
      <h1>Minha To-Do List</h1>
      <div className="div2">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={addTask} className="add-button">
          Adicionar
        </button>
      </div>
      <ul className="ul">
        {tasks.map((task) => (
          <li className="li" key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="checkbox"
            />
            <span className={`task-name ${task.completed ? "completed" : ""}`}>
              {task.name}
            </span>
            <button onClick={() => deleteTask(task.id)} className="remove-button">
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
