import "./App.css";
import { List } from "./Components/List";
import { useCart } from "./Providers/Cart";
import { useProducts } from "./Providers/Products";

function App() {
  const { products } = useProducts();
  const { cart } = useCart();

  return (
    <div className="App">
      <h1>Produtos</h1>
      <div>
        <List list={products} buyable={true} />
      </div>
      <h1>Carrinho</h1>
      <List list={cart} buyable={false} />
    </div>
  );
}

export default App;
