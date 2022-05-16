import { useCart } from "../../Providers/Cart";
import CartTotal from "../../components/CartTotal";
import { Button, Container, Content } from "./style";

const Cart = () => {
  const { cart, handleDelete } = useCart();

  return (
    <Container>
      <Content>
        {cart.map((product, index) => (
          <li key={index}>
            <figure>
              <img src={product.image} alt={product.name} />
            </figure>
            <strong>{product.name}</strong>
            <span>
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <div>
              <Button type="button" onClick={() => handleDelete(product)}>
                <span>Remover</span>
              </Button>
            </div>
          </li>
        ))}
      </Content>
      <CartTotal />
    </Container>
  );
};

export default Cart;
