import React, { useEffect, useState } from "react";
import api from "../../Services/Api.js";

function ListarUsuarios() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const token = localStorage.getItem("token");

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
    <div className=" max-w-3xl w-11/12  mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-md shadow-md">
      <h2 className=" text-2xl font-bold mb-6 text-center text-gray-950 bg-gray-300  p-3">
        {" "}
        Lista de Usuários{" "}
      </h2>
      <ul className="space-y-2">
        {allUsers &&
          allUsers.length > 0 &&
          allUsers.map((user) => (
            <li
              key={user.id}
              className=" bg-gray-100 p-4 rounded-md overflow-hidden"
            >
              <p className=" font-semibold">ID: {user.id}</p>
              <p className=" font-semibold">Nome: {user.name}</p>
              <p className=" font-semibold">Email: {user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ListarUsuarios;
