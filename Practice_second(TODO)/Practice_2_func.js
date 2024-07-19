/*
todo-list/
├── Practice_2_container.html
├── styles_second.css
└── Practice_2_func.js
 */
document.addEventListener('DOMContentLoaded', () => {
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const clearTasksButton = document.getElementById('clear-tasks');
    const filterTasksSelect = document.getElementById('filter-tasks');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    clearTasksButton.addEventListener('click', clearTasks);
    filterTasksSelect.addEventListener('change', filterTasks);

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;
        li.addEventListener('click', toggleTaskStatus);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
        newTaskInput.value = '';
    }

    function clearTasks() {
        taskList.innerHTML = '';
    }

    function toggleTaskStatus(event) {
        const li = event.target;
        li.classList.toggle('completed');
    }

    function filterTasks() {
        const filter = filterTasksSelect.value;
        const tasks = taskList.querySelectorAll('li');
        tasks.forEach(task => {
            switch (filter) {
                case 'all':
                    task.style.display = '';
                    break;
                case 'completed':
                    task.style.display = task.classList.contains('completed') ? '' : 'none';
                    break;
                case 'in-progress':
                    task.style.display = task.classList.contains('completed') ? 'none' : '';
                    break;
            }
        });
    }
});