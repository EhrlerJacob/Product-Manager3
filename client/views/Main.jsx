import React, {useState} from "react";
import ProductForm from "../src/components/ProductManager.form";
import ProductList from "../src/components/ProductList";
import Header from "../src/components/Header";

const Main = (props) => {
    const [products, setProducts] = useState([]);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    };

    return (
        <div>
            <Header/>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <ProductList products={products} setProducts={setProducts}
            removeFromDom={removeFromDom}/>
        </div>
    )
};

export default Main;