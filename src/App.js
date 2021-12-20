import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/body/itemListContainer";
import ApiChallenge from "./components/body/apiChallenge";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

let greeting = "Esta es la greeting que se importo desde App.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting={greeting} />}
          />
          <Route exact path="/pokeapi" element={<ApiChallenge />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
