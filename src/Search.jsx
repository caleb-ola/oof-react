import React, { useState } from "react";

const Search = () => {
  // Types of state
  // 1. Local state
  // 2. Global state

  // // DESTRUCTRING EXPLAINATION
  // const Arr = ["busayo", "mercy", "caleb"];

  // console.log(Arr);

  // const [name, name2, name3] = Arr;

  // console.log({ name, name2, name3 });

  const [firstName, setFirstName] = useState("Henry");
  const [lastName, setLastName] = useState("Agba");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ firstName, lastName });
  };

  return (
    <>
      <div className="fw-bold">Firstname: {firstName}</div>
      <div className="fw-bold">Lastname: {lastName}</div>

      <div className="container my-5">
        <div className="text-center">
          <h1>Contact form</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={handleFirstName}
              placeholder="Firstname"
            />
            <br />
            <input
              type="text"
              onChange={handleLastName}
              placeholder="Lastname"
            />
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
