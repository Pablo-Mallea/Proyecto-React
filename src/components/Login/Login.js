import Swal from "sweetalert2";
import {addDoc,collection,getDocs} from "firebase/firestore";
import React, { useContext, useState } from "react";
import { db } from "../../firebase/config";
import "./Login.scss";
import { LoginContext } from "../Context/LoginContext";
import { Navigate } from "react-router-dom";

export const Login = () => {

  const {usuario, userLoged} = useContext(LoginContext)
  const [login, setLogin] = useState({
    email: "",
    pass: "",
  });
  const [crearUsuario, setCrearUasuario] = useState({
    nombre: "",
    email: "",
    pass: "",
    direccion: "",
  });

  const handleInputChange = (e) => {
    setCrearUasuario({
      ...crearUsuario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const usersRef = collection(db, "users");
    const users = await getDocs(usersRef);


    if (users.docs.find((doc) => crearUsuario.email === doc.data().email)) {
      Swal.fire({
        icon: "info",
        text: "El email ya se encuentra registrado",
        showConfirmButton: true,
      });
    } else {
      addDoc(usersRef, crearUsuario)
      .then(
        Swal.fire(
          {
            icon: 'success',
            text: 'Usuario creado con exito',
            showConfirmButton: true,
        }),
        usuario(crearUsuario)
      );
    }
  };
  const handleInputLogin = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();


    const usersRef = collection(db, "users");
    const users = await getDocs(usersRef);

    if (
      users.docs.find((doc) => login.email === doc.data().email) &&
      users.docs.find((doc) => login.pass === doc.data().pass)
    ) {
      const usuarioIniciado = users.docs.find((doc) => login.email === doc.data().email).data();
      
      usuario(usuarioIniciado);
      
      Swal.fire(
            {
              icon: 'success',
              text: 'Sesión iniciada',
              showConfirmButton: true,
          })
    } else {
      
      Swal.fire(
            {
            icon: 'error',
            text: 'Usuario no encontrado',
            showConfirmButton: true,
            
          })
    }
  };

  if(userLoged.length === 1){
    return <Navigate to="/"/>
  }

  return (
    <div className="loginContainer">
      <h2>Login</h2>
      <div className="formsContainer">
        <div className="sesionContainer">
          <h3>Iniciar Sesión</h3>
          <form onSubmit={handleLogin} className="loginForm">
            <input
              name="email"
              value={login.email}
              type={"text"}
              placeholder="Email"
              onChange={handleInputLogin}
              required
            />
            <input
              name="pass"
              value={login.pass}
              type={"text"}
              placeholder="Contraseña"
              onChange={handleInputLogin}
              required
            />
            <button type="submit" className="btn-iniciar">
              Iniciar
            </button>
          </form>
        </div>

        <div className="registroContainer">
          <h3>Crear Usuario</h3>
          <form onSubmit={handleSubmit} className="registroForm">
            <input
              name="nombre"
              value={crearUsuario.nombre}
              onChange={handleInputChange}
              placeholder="Nombre y Apellido"
              type={"text"}
              required
            />
            <input
              name="email"
              value={crearUsuario.email}
              onChange={handleInputChange}
              placeholder="Email"
              type={"text"}
              required
            />
            <input
              name="pass"
              value={crearUsuario.pass}
              onChange={handleInputChange}
              placeholder="Contraseña"
              type={"text"}
              required
            />
            <input
              name="direccion"
              value={crearUsuario.direccion}
              onChange={handleInputChange}
              placeholder="Dirección"
              type={"text"}
            />

            <button type="submit" className="btn-crear">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
