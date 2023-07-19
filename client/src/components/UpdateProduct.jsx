import React, { useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = (props) => {
    const {id} = useParams();

    const [title, setTitle] = useState("");
    const [price, setPrice]= useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data)
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch( err => console.log(err));
    }, [id]);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/${id}`, {
            title,
            price,
            description
        })
        .then( res => {
            console.log(res)
            console.log(res.data);
            navigate("/");
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form className="form-control row g-3 bg-dark"
            onSubmit={updateProduct}>
                <h3 className="text-center">Edit Product</h3>
                <div className="col-auto">
                    <label className="form-label">Title</label>
                    <input type="text" name="" id="" className="form-control"
                    onChange={(e)=> setTitle(e.target.value)} value={title}/>
                </div>
                <div className="col-auto">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control"
                    onChange={(e)=> setPrice(e.target.value)} value={price}/>               
                </div>
                <div className="col-auto">
                    <label className="form-label">Description</label>
                    <input type="text" className="form-control"
                    onChange={(e)=> setDescription(e.target.value)} value={description}/>               
                </div>
                <div className="col-auto">
                    <button className="btn btn-success" value="update">Edit</button>
                </div>
            </form>
        </div>
    )
}
export default UpdateProduct;