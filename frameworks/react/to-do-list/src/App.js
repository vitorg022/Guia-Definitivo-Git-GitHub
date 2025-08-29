import { useState } from "react";
import "./App.css"

import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  //lógica do componente
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenar a lista de tarefas

  const addTarefa = (tarefa) =>{
    setTarefas([...tarefas, tarefa])
    //adiciona nova tarefa ao array de tarefas 
    //...tarefa => copia todas as anteriores + a nova
  }

  const removerTarefas = (index) => {
    setTarefas(tarefas.filter((_,i)=> i !== index));
    //cria um novo vetor se a tarefa que eu quero remover
    //filtra o array, removendo a posição index
  };

  //view do component

  return (
    <div>
      <h1>To-Do-List APP</h1>
      <Form addTarefa={addTarefa}/>
      <List tarefas={tarefas} removerTarefas={removerTarefas}/>
    </div>
  );

};

export default App;