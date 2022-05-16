import { useCart } from "../../Providers/Cart";
import { ContainerTotal } from "./style";

const CartTotal = () => {
  const { cart } = useCart();
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <ContainerTotal>
      <h3>Total da compra:</h3>
      {total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
    </ContainerTotal>
  );
};

export default CartTotal;
