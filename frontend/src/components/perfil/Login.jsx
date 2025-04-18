import React from 'react'
import { Link } from 'react-router-dom'
//Importo el hook para hacer la peticion a la api y comprobar que el usuario es válido
import { useLogin } from './../hooks/useLogin'
const Login = () => {
     const {handdleInputs,handleSubmit,form,setForm}=useLogin();
    return (
        <form action="" noValidate className='bg-[#d1d0d1] rounded-lg lg:w-[700px] mx-auto flex flex-col items-center justify-center mt-[50px]'>
            <h1 className='font-[Quicksand] text-xl font-medium'>Iniciar Sesion</h1>

            <div className="flex flex-col items-center justify-center">
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-[Quicksand]  font-medium'>E-mail</label>
                    <input type="email" required
                        placeholder="Email"
                        name="email"
                        onChange={handdleInputs}
                        value={form.email}
                        className='border rounded-md p-1 hover:cursor-pointer' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-[Quicksand]  font-medium'>Contraseña</label>
                    <input type="password" required
                        placeholder="Contraseña"
                        name="pass"
                        onChange={handdleInputs}
                        value={form.pass} className='border rounded-md p-1 hover:cursor-pointer' />
                </div>

                <Link to={"/info/recuperarcontrasena"} ><p className='font-[Quicksand]  font-medium'>¿Has olviado la Contraseña?</p></Link>
                <button type='submit'  onClick={handleSubmit} className=''>Iniciar Sesion</button>
                <Link to={'/info/registrarse'}><p className='text-white font-[Quicksand]'>Registrarme</p></Link>

            </div>
        </form>


    )
}

export default Login
