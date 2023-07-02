function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.number}
        </h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button
          className="btn btn-primary px-3"
          onClick={() => props.showClicked(props.name)}
        >
          Alert
        </button>
      </div>
    </div>
  );
}

export default Card;
