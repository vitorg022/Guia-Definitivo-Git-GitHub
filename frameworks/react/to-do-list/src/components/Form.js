//componente para criar formulario para inserir nova tarefa 
//funcao para adicionar tarefa (arrow function)
import "./Form.css"; //importa a estilização

import { useState } from "react"

const Form = ({addTarefa}) => {

    //vetor para armazenar o valor do input
    const [tarefa, setTarefa] = useState("");
    //useState => usa a memoria local do navegador
    //para armazenar as mudanças de estados
    //primeiro elemento do [] armazenar as tarefas,
    //segundo elemento armazena as mudanças de estado

    //função para atualizar o estado com o valor do input
    //função vai criar uma nova tarefa ao ser clicado o botao do submit
    const handleSubmit = (e) =>{ //arrowFunction
        //impedir o funcionameno padrao do botão submit
        e.preventDefault(); //nao permite o recarregamento da página
        //verifica se o campo nao esta vazio
        if(tarefa.trim() !==""){ 
            //adiciona a nova tarefa ao vetor de tarefas
            addTarefa(tarefa);
            //limpa o campo do input
            setTarefa("");
        }    
    };
    //lógica por tras do designer
    //view
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" plaxceholder="Adicione uma tarefa"
            value={tarefa} //valor do input
            onChange={(e) => setTarefa(e.target.value)} 
            />
            <button className="btnEnviar" type="submit">
                adicionar
            </button>
        </form>
    );

};

export default Form;
//componente cria o formulario das tarefas
//pode ser reutilizado em outros components da aplicação (export)
