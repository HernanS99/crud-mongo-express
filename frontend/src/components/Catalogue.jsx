import { useState } from "react"
import axios from 'axios'
import { useEffect } from "react"

const Catalogue = () => {
    
    const [products , setProducts] = useState([])
    
    const getProductos = async() =>{
        try{
            const res = await axios.get('http://localhost:4000/api/products/')
            setProducts(res.data)
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
             {products.map(producto=><Card datos={producto} key={producto.id}/>) }
            </div>
        </div>
    )
}

export default Catalogue