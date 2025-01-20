import React from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del usuario:", data);
    alert("Registro exitoso");
  };

  return (
    <div className="form-container">
      <h1>Formulario de Registro</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo: Nombre de usuario */}
        <div className="form-group">
          <label>Nombre de Usuario</label>
          <input
            type="text"
            {...register("username", { required: "El nombre es obligatorio" })}
          />
          {errors.username && (
            <p className="error-message">{errors.username.message}</p>
          )}
        </div>

        {/* Campo: Correo electrónico */}
        <div className="form-group">
          <label>Correo Electrónico</label>
          <input
            type="email"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "El correo no es válido",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>

        {/* Campo: Contraseña */}
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            {...register("password", {
              required: "La contraseña es obligatoria",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "La contraseña debe tener al menos 8 caracteres, incluir letras y números",
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <button type="submit" className="submit-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default UserForm;
