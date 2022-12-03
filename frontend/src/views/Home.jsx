import Hero from "../components/Hero"
import Aboutus from "../components/Aboutus"
import Contact from "../components/Contact"
import Catalogue from "../components/Catalogue"
import { useContext } from "react"
import UserContext from "../context/UserContext"

const Home = () => {
    const state = useContext(UserContext)
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