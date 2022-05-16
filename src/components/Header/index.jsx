import { IoEnterOutline, IoCartOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, Content } from "./style";
import { useCart } from "../../Providers/Cart";

const Header = () => {
  const history = useHistory();
  const { cart } = useCart();

  return (
    <Container>
      <Content>
        <h1 onClick={() => history.push("/")}>
          Kenzie <strong>Shop</strong>
        </h1>
        <ul>
          <li onClick={() => history.push("/cart")}>
            <IoCartOutline size={28} />
            <span>Carrinho</span>
            {cart.length > 0 && <div>{cart.length}</div>}
          </li>
          <li>
            <IoEnterOutline size={28} />
            <span>Entrar</span>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default Header;
