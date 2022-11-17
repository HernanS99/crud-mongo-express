import Navmax from "./Navmax"
import Footer from "./Footer"

const Nav = () =>{
    return(
        <main>
            <NavMax />
            {props.children}
            <Footer/>
        </main>
    )
}

export default Nav