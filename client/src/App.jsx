import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from '../views/Main';
import DisplayProduct from './components/DisplayProduct';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main/>} path="/" default/>
                    <Route element={<DisplayProduct/>} path="/products/:id"/>
                    <Route element={<UpdateProduct/>} path="/products/edit/:id"/> 
                </Routes>
            </BrowserRouter>
        </div>
        
    );
}


export default App;
