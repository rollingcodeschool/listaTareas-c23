const ItemTarea = ({textoTareaProps, deleteTareaProps}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {textoTareaProps} <button className="btn btn-danger" onClick={()=> deleteTareaProps(textoTareaProps)}>Borrar</button>
    </li>
  );
};

export default ItemTarea;
