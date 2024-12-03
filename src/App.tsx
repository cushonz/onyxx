import ImageCarousel from "./components/ImageCarousel";
import Header from "./components/Header";

const images = [
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
];

function App() {
  return (
    <div className="h-screen w-screen bg-gray-600">
        <Header/>

      <div className="p-4 ">
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}

export default App;
