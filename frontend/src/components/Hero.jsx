const Hero = () => {
    return(
        <div className="container">
            <div className="row ">
                <div className="col-xl-5 col-md-12 p-5">
                    <h1 className='text-center fs-1 fw-bold'>Bienvenido</h1>
                    <h4 className='mt-5'>Te invitamos a disfrutar de nuestra gastronomia! Los mejores platillos directamente de la cultura Ásiatica, que junto a los ingredientes más frescos deleitarán tu paladar.</h4>
                </div>
                <div className="col-xl-7 col-md-12 p-5">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <Carousel variant="dark">
                            <Carousel.Item>
                                <img
                                    className="w-100 img-fluid"
                                    height=""
                                    src={Sushi}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="w-100 img-fluid"
                                    src={Front}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero