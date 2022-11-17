import Navmax from "./Navmax"
import Footer from "./Footer"

const Nav = (props) =>{
    return(
        <main>
            <Navmax />
            {props.children}
            <Footer/>
        </main>
    )
}

export default Nav