"use client";

import React, { useState } from "react";

export default function DashboardAdm() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: "Vitor Gabriel", cargo: "Técnico" },
    { id: 2, nome: "Ana Souza", cargo: "Gerente" },
    { id: 3, nome: "Carlos Pereira", cargo: "Técnico" },
  ]);

  return (
    <section style={styles.container}>
      <h2 style={styles.titulo}>Painel do Administrador</h2>

      <ul style={styles.lista}>
        {usuarios.map((u) => (
          <li key={u.id} style={styles.item}>
            <span>{u.nome}</span>
            <span style={styles.cargo}>{u.cargo}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles: { [key: string]: any } = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#eef6ff",
    maxWidth: "600px",
    margin: "20px auto",
  },
  titulo: {
    fontSize: "20px",
    marginBottom: "15px",
    textAlign: "center",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "#fff",
  },
  cargo: {
    fontWeight: "bold",
    color: "#333",
  },
};
