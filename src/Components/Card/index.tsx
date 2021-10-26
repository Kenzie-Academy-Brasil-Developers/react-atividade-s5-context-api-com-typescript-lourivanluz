import { useCart } from "../../Providers/Cart";

interface CardProp {
  item: {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
  };
  buyable?: boolean;
}

export const Card = ({ item, buyable }: CardProp) => {
  const { addToCart, rmvToCart } = useCart();
  const { image, title, price, description, id } = item;
  return (
    <div className="cardContainer">
      <img src={image} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={() => (buyable ? addToCart(item) : rmvToCart(id))}>
        {buyable ? "Comprar" : "Retirar"}
      </button>
    </div>
  );
};
