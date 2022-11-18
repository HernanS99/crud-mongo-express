import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import Card from "./Card"

const Catalogue = () => {
    
    const [products , setProducts] = useState([])
    let res = null
    const getProductos = async() =>{
        try{
            res = await axios.get('http://localhost:4000/api/products/')
            setProducts(res.data.products)
        }catch(e){
            console.log(e)
        }
    }

    useEffect(()=>{
        getProductos()
    })
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p className="fs-1 fw-bold text-center">Catalogo</p>
                </div>
            </div>
            <div className="row ">
             {products.map((product)=><Card datos={product} key={product._id}/>) }
            </div>
        </div>
    )
}

export default Catalogue