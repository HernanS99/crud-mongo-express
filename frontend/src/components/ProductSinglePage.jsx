import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CartContext from "../context/CartContext"

const ProductSinglePage = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const context = useContext(CartContext)
    const [qty, setQty] = useState(1)

    const getProductInfo = async () => {
        try{
            const res = await axios.get(`http://localhost:4000/api/product/${id}`)
            if(res.data.success){
                setProduct(res.data.products)
            }else{
                navigate("/");
            }
        }catch(e){
            console.log(e)
        }
    }
    const formatter = new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
      });

      const reducir = () => {
        if (qty >= 2) {
            setQty(qty - 1)
        }
    }

    const aumentar = () => {
        if (qty < product.stock) {
            setQty(qty + 1)
        }
    }

    useEffect(()=> {
        getProductInfo()
    },[])
    return (
        <div className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product.imgUrl} alt="..." /></div>
                    <div className="col-md-6">
                        <h1 className="display-5 fw-bolder">{product.name}</h1>
                        <div className="fs-5 mb-2">
                            <span>{formatter.format(product.price)}</span>
                        </div>
                        <p className="lead">{product.desc}</p>
                        <div className="d-flex">
                        <button classNameName="btn btn-light" onClick={reducir} disabled={qty === 1}><i className="fa-solid fa-minus"></i>
                    </button>
                    <span classNameName="my-2 text-center">{qty}</span>
                            <button classNameName="btn btn-light" onClick={aumentar} disabled={qty === product.stock}><i className="fa-solid fa-plus"></i>
                    </button>
                            <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={() => context.addToCart(product, qty)}>
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSinglePage