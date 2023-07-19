import React, {useState} from "react";
import axios from "axios";

const ProductForm = (props) => {
    const {products, setProducts} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res=> {
                console.log(res);
                console.log(res.data);
                setProducts([...products, res.data]);
                setTitle("");
                setPrice("");
                setDescription("");
        })
            .catch(err=>console.log(err));
    }

    return (
        <form className="form-control row g-3 bg-dark"
        onSubmit={onSubmitHandler}>
            <h3 className="text-center">Create New Product</h3>
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
                <button className="btn btn-success">Submit</button>
            </div>
        </form>
    );


}
export default ProductForm;