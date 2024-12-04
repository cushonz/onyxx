

function ProductCard(){
    const img = "https://i.etsystatic.com/iap/b7581a/6243814028/iap_300x300.6243814028_tsj66tfy.jpg?version=0"
    const price = 50
        return(
        <div className="flex flex-col justify-start p-5 bg-gray-500 m-3 rounded-lg hover:scale-[1.01] transition-transform duration-300">

            <div className="flex justify-center">
                <img src={img} className="object-contain rounded-lg"/>
            </div>
            <div className="flex flex-col justify-around align-bottom mt-10">
                <h1 className="text-xl">Anime Nails</h1>
                <h1 className="text-xl">Price: ${ price}</h1>
            </div>
                
        </div>
    );
}

export default ProductCard;