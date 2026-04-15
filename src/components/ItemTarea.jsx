const ItemTarea = ({textoTareaProps}) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {textoTareaProps} <button className="btn btn-danger">Borrar</button>
    </li>
  );
};

export default ItemTarea;
