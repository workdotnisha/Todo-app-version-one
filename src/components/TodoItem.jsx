import PropTypes from "prop-types";
function TodoItem({ todoName, todoDate ,onDeleteClick}) {
  return (
    <div className="container">
      <div className="row row-item">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ad-button " onClick={() => onDeleteClick(todoName)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

export default TodoItem;
