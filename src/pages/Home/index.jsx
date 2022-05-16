import { useCart } from "../../Providers/Cart";
import { useProducts } from "../../Providers/products";
import formatValue from "../../utils/formatValue";
import { Container, Content, Button } from "./style";

const Home = () => {
  const { setCart, cart } = useCart();
  const { products } = useProducts();

  return (
    <div>
      <Container>
        <Content>
          {products.map((product) => (
            <li key={product.id}>
              <figure>
                <img src={product.image} alt={product.name} />
              </figure>
              <strong>{product.name}</strong>
              <span>{formatValue(product.price)}</span>
              <div>
                <Button
                  type="button"
                  onClick={() => setCart([...cart, product])}
                >
                  <span>Adicionar ao carrinho</span>
                </Button>
              </div>
            </li>
          ))}
        </Content>
      </Container>
    </div>
  );
};

export default Home;
