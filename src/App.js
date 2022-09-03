import "./App.css";
import { Header } from "./components/Header/Header";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> } />
          <Route path="/productos/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={ <ItemDetailContainer /> } />
          <Route path="*" element={ <Navigate to="/"/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
