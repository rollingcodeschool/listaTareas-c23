import { useState } from "react";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
const [arrayTareas, setArrayTareas] = useState([])
const [tarea, setTarea] = useState('')

const handleSubmit = (e)=>{
  e.preventDefault()
  //validamos la tarea
  const tareaBuscada = arrayTareas.find((itemTarea)=> itemTarea.toLowerCase() === tarea.toLowerCase().trim() )
  console.log(tareaBuscada)
  if(tareaBuscada){
    return alert('La tarea ya existe')
  }
  //agregar la "tarea" dentro del arrayTareas
  setArrayTareas([...arrayTareas, tarea.trim()])
  //limpiar el input
  setTarea('')
}

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 d-flex ">
          <input
            type="text"
            className="form-control"
            id="inputTarea"
            placeholder="Ingresa una tarea"
            onChange={(e)=> setTarea(e.target.value) }
            value={tarea}
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ListaTarea></ListaTarea>
    </section>
  );
};

export default FormularioTarea;
