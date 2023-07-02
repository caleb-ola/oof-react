function SearchingForm(props) {
  console.log(props);
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={props.inputValue}
      />
      <button className="btn btn-outline-success" type="submit">
        {props.buttonName}
      </button>
    </form>
  );
}

export default SearchingForm;
