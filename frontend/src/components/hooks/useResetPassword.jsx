import { useState } from "react";

export const useResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [passwordCambiada, setPass] = useState([]);

  const generateRandomPassword = (length = 12) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  const peticionID = async (email) => {
    const api = await fetch(`http://localhost:5004/api/usuario/${email}`);
    const idApi = await api.json();
    console.log("MAIL: " + email);
    console.log("ID: " + idApi.id);
    return idApi.id;
  };

  const resetPassword = async (userEmail) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const id = await peticionID(userEmail);
      console.log("EL ID: " + id);

      const generatedPassword = generateRandomPassword();

      const response = await fetch(
        `http://localhost:5004/api/usuario/resetpass/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: generatedPassword,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error("No se pudo resetear la contraseña.");
      }

      console.log(data.message);
      setPass(data.message);
      setSuccess(true);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, resetPassword, passwordCambiada };
};
