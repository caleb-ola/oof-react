import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Hero from "./Hero";
import Students from "./Students";
import ShowChildren from "./ShowChildren";

function App() {
  return (
    <>
      <Header />
      <Hero />
      {/* THIS IS THE STUDENTS COMPONENT */}
      <Students />
      {/* <ShowChildren>
        <div className="my-5">
          <h3 className="">I AM A CHILD</h3>
          <h3 className="">I AM A CHILD</h3>
          <h3 className="">I AM A CHILD</h3>
        </div>
      </ShowChildren>

      <ShowChildren>
        <div className="my-5">
          <h3>THIS IS THE SECOND CHIDREN WE ARE WORKING ON</h3>
        </div>
      </ShowChildren>

      <ShowChildren>
        <div className="my-5">
          <h3>THIS IS THE THRID.</h3>
        </div>
      </ShowChildren> */}
    </>
  );
}
export default App;
