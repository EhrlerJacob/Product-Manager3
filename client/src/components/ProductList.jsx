import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductList = (props) => {

    const {products, setProducts, removeFromDom} = props;

    useEffect(()=> {
        axios.get('http://localhost:8000/api/products')
        .then((res)=> {
            console.log(res.data);
            setProducts(res.data);
        })
        .catch(err=> {
            console.log(err);
        })
    }, [])

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then (res => {
            removeFromDom(id)
        })
        .catch(err => console.log(err));
    }



    return (
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Link</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                {
                    products.map((product, index) => {
                        return <tbody key={index}>
                            <tr>
                                <td> {product.title}</td>
                                <td> ${product.price}</td>
                                <td>
                                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                                </td>
                                <td>
                                    <Link to={`/products/edit/${product._id}`}>Edit</Link>
                                </td>
                                <td>
                                    <button 
                                    className="btn btn-danger"
                                    onClick={(e)=> {deleteProduct(product._id)}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    })
                }
            </table>
        </div>
    )
}

export default ProductList;