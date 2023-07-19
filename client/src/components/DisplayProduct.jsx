import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, Link} from "react-router-dom";

const DisplayProduct = (props) => {
    const [product, setProduct] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err));
    }, [id]);

    return (
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title"> Product Name: {product.title}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price : ${product.price}</li>
                    <li className="list-group-item"> Description: {product.description}</li>
                </ul>
            <Link to="/" className="btn btn-success">Home</Link>
            </div>
        </div>
    )
};

export default DisplayProduct;