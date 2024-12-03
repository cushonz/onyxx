import ImageCarousel from "./components/ImageCarousel";

const images = [
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
  "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0",
];

function App() {
  return (
    <div className="h-screen w-screen bg-black">
      <div className="p-4 ">
        <h1 className="text-2xl font-bold mb-4 text-center text-[#FFD700]">
          Onyxx by Design
        </h1>
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}

export default App;
