import About, { Exhibit } from "./pages/about";
import Home from "./pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound";
import Countries from "./pages/countries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/exhibit"} element={<Exhibit />} />
        <Route path={"/countries"} element={<Countries />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
