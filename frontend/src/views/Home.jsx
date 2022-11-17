import Hero from "../components/Hero"
import Aboutus from "../components/Aboutus"
import Contact from "../components/Contact"
import Catalogue from "../components/Catalogue"

const Home = () => {
    return(
        <div>
            <Hero />
            <Catalogue />
            <Aboutus />
            <Contact />
        </div>
    )
}

export default Home