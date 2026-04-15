import ItemTarea from "./ItemTarea";

const ListaTarea = ({arrayTareasProps}) => {
  return (
    <ul className="list-group">
      {
        arrayTareasProps.map((textoTarea, indice)=> <ItemTarea key={indice} textoTareaProps={textoTarea}></ItemTarea> )
      }
    </ul>
  );
};

export default ListaTarea;
