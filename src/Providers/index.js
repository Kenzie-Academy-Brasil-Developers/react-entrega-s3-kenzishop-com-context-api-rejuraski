import { CartProvider } from "./Cart";
import { ProductsProvider } from "./products";

const Providers = ({ children }) => {
    return (
        <CartProvider>
            <ProductsProvider>
                {children}
            </ProductsProvider>
        </CartProvider>
    )
}

export default Providers;