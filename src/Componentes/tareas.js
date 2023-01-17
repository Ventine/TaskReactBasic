import {useState} from "react";

export default function Tareas({item, onUpdate, onDelete}) {

    const [isEdit, setIsEdit] = useState(false)
    function FormEdit(){
        const [newValue, setNewValue] = useState(item.title);
        function handleSubmit(e){
            e.preventDefault();
        }
        function handleChange(e){
            e.preventDefault();
            const values = e.target.value;
            setNewValue(values);
        }
        function handleClick(e){
            e.preventDefault();
            onUpdate(item.id, newValue);
            setIsEdit(false)
        }
        return(
        <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
            <button className="button-update" onClick={handleClick}>Update</button>
        </form>
        )}
    function TareasElementos(){
        return (
            <div className="tareasInput">
                <span className="todotitle">{item.title}</span>
                <div>
                <button className="btn-edit" onClick={() => setIsEdit(true)}>Edit</button>
                <button className="btn-delete"  onClick={(e) => onDelete(item.id)}>Delete</button>
                </div>
            </div>
        )
    }
    return (
    <div className="tareas">
        {isEdit ? <FormEdit /> : <TareasElementos />}
    </div>
    )
    }