const todoList=[];

function renderTodoList(){
	let todoListHTML = '';

	for (let i = 0; i < todoList.length; i++){
		const todoObject = todoList[i];
		const{ name, dueDate, startTime } = todoObject
		const html = `
			
				<div>${dueDate}</div>
				<div>[${startTime}]</div>
				<div class="js-complete-task${i}">${i+1}. ${name}</div>
				
				<button onclick="
					let buttonElement = document.querySelector('.js-complete-button${i}');
					let textElement = document.querySelector('.js-complete-task${i}');	
					
					if (buttonElement.innerHTML === 'Complete'){
						buttonElement.innerHTML = 'Completed';
						textElement.classList.add('is-done');
					} else {
						buttonElement.innerHTML = 'Complete';
						textElement.classList.remove('is-done');
					}
				" class="js-complete-button${i} complete-button">Complete</button>	

				<button onclick="
					todoList.splice(${i},1);
					renderTodoList();
				" class="delete-button">Delete</button>
			`;
		todoListHTML += html;
	}
	document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}




function addTodo() {
	const inputElement = document.querySelector('.js-name-input');
	const name = inputElement.value;
	
	const dateInputElement = document.querySelector('.js-due-date-input');
	const dueDate = dateInputElement.value;

	const timeInputElement = document.querySelector('.js-start-time-input');
	const startTime = timeInputElement.value;
	
	todoList.push({
		name,
		dueDate,
		startTime
	})
	

	inputElement.value = '';
	

	renderTodoList();
}

