import "./List.css"

//arrow function
const List = ({tarefas, removerTarefas}) => {
    return(
        //lista nao ordenada com as tarefas como elemento da lista
        <ul>
            {tarefas.map((tarefa, index) => (
                <li key={index}>
                    {tarefa}
                    <button onClick={() => removerTarefas(index)}>
                        Excluir
                        </button>
                </li>
            ))}
        </ul>
    );
};

export default List;