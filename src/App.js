import './App.css';
import { Header } from './components/Header/Header';
import { ItemList } from './components/ItemList/ItemList';

function App() {
  return (
    <div className="body">
      <Header />
      <ItemList contenido="Catálogo proximamente..."/>
    </div>
  );
}

export default App;
