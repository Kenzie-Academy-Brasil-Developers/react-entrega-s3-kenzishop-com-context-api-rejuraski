import { createContext, useContext, useState } from "react";
import Products from "../../database/db";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [products] = useState([...Products]);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => useContext(ProductsContext);