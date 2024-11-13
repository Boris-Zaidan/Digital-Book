import React, { useEffect, useState } from "react";
import api from "../../Services/Api.js";

const token = localStorage.getItem("token");

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const {
          data: { users },
        } = await api.get("/listar-usuarios", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setAllUsers(users);
      } catch (error) {
        console.error("Erro ao Listar Usuários", error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div>
      <h2> Lista de Usuários </h2>
      <ul>
        {allUsers.map((user) => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Profissão: {user.profession}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
