function TodoItem() {
    let todoName = 'Buy Milk';
    let todoDate = '18/04/2024';
  return (
    <div className="container">
      <div className="row row-item">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ad-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
