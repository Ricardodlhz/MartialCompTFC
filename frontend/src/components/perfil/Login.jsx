import React from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from './../hooks/useLogin';

const Login = () => {
    const { handdleInputs, handleSubmit, form, setForm, errors } = useLogin();

    return (
        <div className="flex items-center justify-center  ">
            <form 
                noValidate 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
            >
                <h1 className="text-2xl font-semibold text-center mb-6 font-[Quicksand]">Iniciar Sesión</h1>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 font-[Quicksand]" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Ingresa tu correo"
                        value={form.email}
                        onChange={handdleInputs}
                        required
                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-300'
                        }`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Contraseña */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 font-[Quicksand]" htmlFor="pass">
                        Contraseña
                    </label>
                    <input
                        id="pass"
                        type="password"
                        name="pass"
                        placeholder="Ingresa tu contraseña"
                        value={form.pass}
                        onChange={handdleInputs}
                        required
                        className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.pass ? 'border-red-500 ring-red-200' : 'border-gray-300 focus:ring-blue-300'
                        }`}
                    />
                    {errors.pass && <p className="text-red-500 text-sm mt-1">{errors.pass}</p>}
                    {errors.general && <p className="text-red-500 text-sm mt-1">{errors.general}</p>}
                </div>

                {/* Enlaces y botones */}
                <div className="flex justify-between items-center text-sm mb-4">
                    <Link to="/info/reset" className="text-black hover:underline">
                        ¿Has olvidado tu contraseña?
                    </Link>
                    <Link to="/info/registrarse" className="text-black hover:underline">
                        Registrarme
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 hover:cursor-pointer transition-colors"
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default Login;

