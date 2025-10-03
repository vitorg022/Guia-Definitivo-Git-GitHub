"use client";

import React, { useState } from "react";

export default function DashboardGerente() {
  const [relatorios, setRelatorios] = useState([
    { id: 1, titulo: "Produtividade semanal", status: "Aprovado" },
    { id: 2, titulo: "Relatório financeiro", status: "Pendente" },
    { id: 3, titulo: "Desempenho da equipe", status: "Em revisão" },
  ]);

  return (
    <section style={styles.container}>
      <h2 style={styles.titulo}>Painel do Gerente</h2>

      <ul style={styles.lista}>
        {relatorios.map((r) => (
          <li key={r.id} style={styles.item}>
            <span>{r.titulo}</span>
            <span style={styles.status(r.status)}>{r.status}</span>
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
    background: "#fff7e6",
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
  status: (s: string) => ({
    fontWeight: "bold",
    color:
      s === "Aprovado"
        ? "green"
        : s === "Pendente"
        ? "red"
        : "orange",
  }),
};
