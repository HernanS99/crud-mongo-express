import { useEffect, useState } from "react"
import { useContext } from "react"
import UserContext from "../context/UserContext"
import Swal from 'sweetalert2'
const UserPage = () => {
    
    const context = useContext(UserContext)
    const { token , user  } = context.userState
    const [userr, setUserr] = useState({...context.userState.user})
    console.log(context)
    const handleInput = (e) => {
        const  { value , name } = e.target
        setUserr({
            ...userr,
            [name]: value
        }
        )
    }
    console.log(userr)
    const editUser = () =>{
        if(userr.edad <= 99){
            const validateEmail = (email) => {
                return String(email)
                  .toLowerCase()
                  .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  );
              };
             
              if(validateEmail(userr.correo)){
                context.editUser(userr,token)
              }else{
                Swal.fire({
                    position: 'bottom-end',
                    icon: 'error',
                    title: 'Debe ingresar un correo valido',
                    showConfirmButton: false,
                    timer: 1500
                  })
              }
            
        }
        else{
            Swal.fire({
                position: 'bottom-end',
                icon: 'error',
                title: 'Debe ingresar una edad valida',
                showConfirmButton: false,
                timer: 1500
              })
        }
        
    }
    useEffect(()=>{        
    },[])
    return (
        <div>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-5 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"></img><span class="font-weight-bold">{userr.nombre}</span><span class="text-black-50">{userr.correo}</span><span> </span></div>
                    </div>
                    <div class="col-md-7 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Datos de usuario</h4>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Nombre</label><input name="nombre" type="text" class="form-control" placeholder="Nombre" defaultValue={userr.nombre} onChange={(evento) => handleInput(evento)}></input></div>
                                <div class="col-md-6"><label class="labels">Apellido</label><input name="apellido" type="text" class="form-control" placeholder="Apellido" defaultValue={userr.apellido} onChange={(evento) => handleInput(evento)}></input></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Edad</label><input name="edad" type="number" class="form-control" placeholder="Edad" defaultValue={userr.edad} maxlength="2" onChange={(evento) => handleInput(evento)}></input></div>
                                <div class="col-md-12"><label class="labels">Correo</label><input name="correo" type="text" class="form-control" placeholder="correo" defaultValue={userr.correo} onChange={(evento) => handleInput(evento)}></input></div>                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={editUser}>Editar informacion</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage