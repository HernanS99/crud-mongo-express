const ProductsMenu = () => {
    return (
        <div>
            <div>
                <p className="text-center fs-1 ">Menu de productos</p>
            </div>
            <div>
                {/* <AddProduct update={getProducts}/> */}
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Url imagen</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                       {/*  {productos.map(product => <ProductsRow datos={product} update={getProducts} key={product.id} />)} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductsMenu