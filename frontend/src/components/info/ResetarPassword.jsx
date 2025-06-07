import React, { useState } from "react";
import { useResetPassword } from "../hooks/useResetPassword";
const ResetarPassword = () => {
  const [email, setEmail] = useState("");
  const { loading, error, success, resetPassword, passwordCambiada } = useResetPassword();

  const handleResetClick = () => {
    if (email) {
      resetPassword(email);
    }
  };

  return (
    <div className=" max-w-md mx-auto mt-20 bg-white shadow-md rounded-lg p-8">
      <input
        type="email"
        placeholder="Introduce tu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border px-3 py-2 rounded w-full mb-2 "
      />


      <button
        onClick={handleResetClick}
        disabled={loading || !email}
        className="bg-gray-600 text-white px-4 py-2 rounded w-full hover:bg-gray-700 hover:cursor-pointer transition"
      >
        {loading ? "Procesando..." : "He olvidado mi contraseña"}
      </button>

      {success && (
        <div className="mt-3 text-green-700">
          Se ha enviado un correo con tu nueva contraseña.
        </div>
      )}

      {error && <div className="text-red-600 mt-2">{error}</div>}
    </div>
  );
}

export default ResetarPassword
