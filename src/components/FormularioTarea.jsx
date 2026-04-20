import { useEffect, useState } from "react";
import ListaTarea from "./ListaTarea";

const FormularioTarea = () => {
const tareasLocalStorage =  JSON.parse(localStorage.getItem('arrayTareasKey')) || []
const [arrayTareas, setArrayTareas] = useState(tareasLocalStorage)
const [tarea, setTarea] = useState('')
// sintaxis del useEffect solo en montaje
// useEffect(()=>{
//   console.log('desde el useEffect')
// },[])

useEffect(()=>{
  console.log('desde el useEffect')
  localStorage.setItem('arrayTareasKey', JSON.stringify(arrayTareas))
},[arrayTareas])

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

const borrarTarea = (nombreTarea) =>{
  const arrayFiltrado = arrayTareas.filter((itemTarea)=> itemTarea !== nombreTarea)
  // actualizar el state
  setArrayTareas(arrayFiltrado)
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
      <ListaTarea arrayTareasProps={arrayTareas} borrarTareaProps={borrarTarea}></ListaTarea>
    </section>
  );
};

export default FormularioTarea;
