import Card from "./Card";

function Students() {
  const array = [
    {
      name: "Mr. Mercy",
      number: "8962874512",
    },
    {
      name: "Mr. Adeyemi",
      number: "2478689274",
    },
    {
      name: "Mr. Bashir",
      number: "7839256423",
    },
    {
      name: "Mr. Busayo",
      number: "78695242173",
    },
  ];
  // This is the function to get data from the child components
  function CollectFromChild(name) {
    alert("You clicked on" + name);
  }
  return (
    <div className="container ">
      <div className="row py-5">
        {array.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <Card
                name={item.name}
                number={item.number}
                showClicked={CollectFromChild}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Students;
