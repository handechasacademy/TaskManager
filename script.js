const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const theList = document.getElementById('taskList');

addTaskButton.addEventListener('click', (e) => {
    e.preventDefault(); 

    const text = taskInput.value;
    if (!text) return; 

    const newLi = document.createElement('li');
    const newLabel = document.createElement('label');
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';

    const newSpan = document.createElement('span');
    newSpan.textContent = ' ' + text;

    const newTrashButton = document.createElement('span');
    newTrashButton.textContent = ' 🗑️';
    newTrashButton.style.cursor = 'pointer';
    newTrashButton.style.marginLeft = '10px';
    newTrashButton.style.color = 'red';

    newTrashButton.addEventListener('click', () => {
        newLi.remove(); 
    });

    newLabel.appendChild(newCheckbox); 
    newLabel.appendChild(newSpan);
    newLi.appendChild(newLabel);
    newLi.appendChild(newTrashButton); 

    taskInput.value = ''; 
    taskInput.focus();
});
