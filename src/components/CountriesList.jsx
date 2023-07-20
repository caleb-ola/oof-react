import { useState, useEffect } from "react";
import axios from "axios";
import CountriesListLoading from "./CountriesListLoading";

const CountriesList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  // C = CREATE (Post request)
  // R = READ (Get request)
  // U = UPDATE (Patch or Put request)
  // D = DELETE (Delete request)

  useEffect(() => {
    // using axios
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // console.log({ data });

  // condtion === true ? run this : run another

  return (
    <div className="countries">
      {loading === true ? (
        <CountriesListLoading />
      ) : (
        <div className="row">
          {data?.map((item, index) => {
            return (
              <div className="col-sm-12 col-md-4 col-lg-3 col-xxl-2 my-2">
                <div class="card h-100" key={index}>
                  <img
                    src={item.flags.png}
                    class="card-img-top"
                    alt="country flag"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.name.official}</h5>
                    <p class="card-text">Population: {item.population}</p>
                    <p class="card-text">Capital: {item.capital}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CountriesList;
