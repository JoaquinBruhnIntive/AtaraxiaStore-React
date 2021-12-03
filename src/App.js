import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/body/itemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
