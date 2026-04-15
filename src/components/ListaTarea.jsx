import ItemTarea from "./ItemTarea";

const ListaTarea = ({arrayTareasProps, borrarTareaProps}) => {
  return (
    <ul className="list-group">
      {
        arrayTareasProps.map((textoTarea, indice)=> <ItemTarea key={indice} textoTareaProps={textoTarea} deleteTareaProps={borrarTareaProps}></ItemTarea> )
      }
    </ul>
  );
};

export default ListaTarea;
