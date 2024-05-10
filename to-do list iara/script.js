document.addEventListener("DOMContentLoaded", function() {
    // seleçao de elementos do DOM 
    const form = document.querySelector('form')
    const input = document.querySelector('.addtarefa')
    const taskList = document.querySelector('.task-list')

    // adicionando um evento de envio ao formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault()     //evita o comportamento padrao do formulario
        
        //verifica se o campo de entrada nao esta vazio
        if (input.value.trim() !== '') {
            //cria uma nova tarefa atraves do JS
            const newTask = document.createElement('div')
            newTask.classList.add('noProcastination')

            //cria uma caixa de seleçao para a tarefa
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.addEventListener('change', function() {
                //altera o estilo do nome da tarefa quando a caixa de selaçao é marcada ou desmarcada
                taskName.style.textDecoration = checkbox.checked ? 'line-through' : 'none'
            })


            //cria um elemento de texto para o nome da tarefa
            const taskName = document.createElement('h2')
            taskName.textContent = input.value

            //cria um botao de exclusao para a tarefa
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
            deleteButton.addEventListener('click', function() {
                //remove a tarefa quando o botao de exclusao é selecionado
                newTask.remove()
            })

            //adiciona a caixa de seleçao, nome da tarefa e botao de exclusao ao elemento da tarefa
            newTask.appendChild(checkbox)
            newTask.appendChild(taskName)
            newTask.appendChild(deleteButton)

            //adiciona a nova tarefa à lista de tarefas
            taskList.appendChild(newTask)

           //limpa o campo de entrada
            input.value = ''
        }
    })

})
