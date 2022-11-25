import { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../context/UserContext"

const UserPage = () => {
    const context = useContext(UserContext)
    const { token } = context.userState
    console.log(context.userState)
    useEffect(()=>{
        context.getUserInfo(token)
    },[])
    return (
        <div>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-5 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                    </div>
                    <div class="col-md-7 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Datos de usuario</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels"></label><input type="text" class="form-control" placeholder="first name"></input></div>
                                <div class="col-md-6"><label class="labels">Apellido</label><input type="text" class="form-control" placeholder="surname"></input></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Edad</label><input type="text" class="form-control" placeholder="enter phone number"></input></div>
                                <div class="col-md-12"><label class="labels">Correo</label><input type="text" class="form-control" placeholder="enter email id"></input></div>                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage