import ItemTarea from "./ItemTarea";

const ListaTarea = ({arrayTareasProps}) => {
  return (
    <ul className="list-group">
      {
        arrayTareasProps.map(()=> <ItemTarea></ItemTarea> )
      }
    </ul>
  );
};

export default ListaTarea;
