import {useState} from "react";
import Tareas from "./tareas";
import './tareas.css';
export default function TodoApp() {
    const [title, setTitle] = useState('');
    const [tareas, setTareas] = useState([]);

/*    function handleClick(e){
        e.preventDefault();
        setTitle("Jhonson");
    }*/

    function handleChange(e) {
        const values = e.target.value;
        setTitle(values);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newTareas = {
            id: crypto.randomUUID(),
            title: title,
            complete: false
        }
        const temp = [...tareas];
        temp.unshift(newTareas);
        setTareas(temp);
        setTitle("");
    }
    function handleUpdate(id, values){
        const temp = [...tareas];
        const item = temp.find(item => item.id === id);
        item.title = values;
        setTareas(temp);
    }
    function handleDelete(id){
        const temp = tareas.filter((item) => item.id !== id);
        setTareas(temp);
    }

    return <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
            <input onChange={handleChange} className="todoInput" value={title}/>
            <input onClick={handleSubmit} type="submit" value="Crear tarea" className="buttonCreate"/>
        </form>
        <div className="todosContainer">
            {tareas.map((item) => (
                <Tareas key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
            ))}
        </div>
    </div>
}