import ImageCarousel from "./components/ImageCarousel";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./components/pages/Products"
import Reviews from "./components/pages/Reviews";

const images = [
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
];

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-800">
    <Header />
    <BrowserRouter>
      <Routes>
      <Route path="/product" element={<Products/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
