import { Card } from "../Card";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface ListProps {
  list: Product[];
  buyable?: boolean;
}

export const List = ({ list, buyable }: ListProps) => {
  return (
    <ul className="list">
      {list.map((item, index) => (
        <li className="listItem" key={index}>
          <Card item={item} buyable={buyable} />
        </li>
      ))}
    </ul>
  );
};
