import './App.css'
import CardProduto from "./components/CardProduto";

function adicionarCarrinho() {
  setCarrinho([...carrinho, { name, price }]);
}

export default function App() {

  const stewedCabbage = {
    name: "Stewed Cabbage with sauce",
    price: "$5.90",
    image: "https://st2.depositphotos.com/1924223/5984/i/950/depositphotos_59849831-stock-photo-stewed-cabbage.jpg",
    description: "Stewed Cabbage with sauce"
    
  };

  const pureeSoup = {
    name: "Puree soup with turkey pieces",
    price: "$7.55",
    image: "https://static.onecms.io/wp-content/uploads/sites/44/2021/08/05/creamy-turkey-soup.jpg",
    description: "Puree soup with turkey pieces"
  };

  const chickenWithVegetables = {
    name: "Chicken with vegetables",
    price: "$3.39",
    image: "https://img.buzzfeed.com/video-api-prod/assets/a376298fd6154cda98242a7c49b153ce/THUMBNAIL_A.jpg",
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


