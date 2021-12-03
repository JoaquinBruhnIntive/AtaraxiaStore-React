import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/body/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

let greeting="Esta es la greeting que se importo desde App.js"

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={greeting}/>
    </div>
  );
}

export default App;
