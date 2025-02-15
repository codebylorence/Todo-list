const todoArray = []

function renderTodoList() {
  todoHtml = '';

  todoArray.forEach(function (todoObject, index) {
    const { name, date, color } = todoObject;
    const html = `
                <div class="container">
                  <div class="note-header">
                    <p style="font-family: Arial, Helvetica, sans-serif; font-size: 19px;">${date}</p>
                    <a onclick="
                      todoArray.splice(${index}, 1);
                      renderTodoList();
                    " class="delete-button"><img src="icons/delete.png" class="delete-icon"></a>
                  </div>
                  <div contenteditable="true" style="overflow: hidden; " class="notes dd-js ${color}">${name}
                  </div>
                </div>
                `
    console.log(name, date);

    todoHtml += html;
  })
  document.querySelector('.js-notes').innerHTML = todoHtml;
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodo();
})

function addTodo() {
  const inputName = document.querySelector('.js-input-name');
  const inputDate = document.querySelector('.js-input-date');
  const name = inputName.value;
  const date = inputDate.value;
  const colorPicker = document.querySelector('.select-js');
  const value = colorPicker.value;
  let color = '';

  if (value === 'Orange') {
    color =  'color-orange';
  }else if(value === 'Lime'){
    color =  'color-lime';
  }else if(value === 'Aqua'){
    color =  'color-aqua';
  }

  todoArray.push({ name, date, color });

  renderTodoList();
}
