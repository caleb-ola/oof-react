function ShowChildren(props) {
  return (
    <div>
      <div className="header">
        <h1>THIS IS MY HEADER FOR THIS SECTION</h1>
      </div>

      {props.children}

      <div className="ending">
        <h1>SECTION ENDING IN STYLE</h1>
      </div>
    </div>
  );
}

export default ShowChildren;
