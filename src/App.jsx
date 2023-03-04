import './App.css'
import CardProduto from "./components/CardProduto";

export default function App() {

  const stewedCabbage = {
    name: "Stewed Cabbage with sauce",
    price: "$5.90",
    image: "https://www.inspirationforall.de/wp-content/uploads/2017/09/weisskohl-geschmort-rezept-1-775x775-1.jpg",
    description: "Stewed Cabbage with sauce"
  };

  const pureeSoup = {
    name: "Puree soup with turkey pieces",
    price: "$7.55",
    image: "https://www.garlicandzest.com/wp-content/uploads/2017/01/turkey-soup-600x600.jpg",
    description: "Puree soup with turkey pieces"
  };

  const chickenWithVegetables = {
    name: "Chicken with vegetables",
    price: "$3.39",
    image: "https://www.wholesomeyum.com/wp-content/uploads/2020/10/wholesomeyum-roasted-chicken-and-vegetables-in-the-oven-8.jpg",
    description: "Chicken with vegetables"
  };

  return (
    <div className="App">
      <h1>Produtos</h1>
      <section className='productCard'>
        <CardProduto produto={stewedCabbage} />
        <CardProduto produto={pureeSoup} />
        <CardProduto produto={chickenWithVegetables} />
      </section>

    </div>
  );
}


