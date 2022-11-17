import Navmax from "./Navmax"
import Footer from "./Footer"

const Nav = () =>{
    return(
        <main>
            <Navmax />
            {props.children}
            <Footer/>
        </main>
    )
}

export default Nav