var todoStore = localStorage.getItem("Todo");
todoStore = JSON.parse(todoStore) || [];
var editMode = false;
var editId = null;

function toggleModal(para) {
  var modal = document.querySelector("#modal");
  modal.style.display = para;

  if (para === "none") {
    document.querySelector("#form").reset();
    document.querySelector("input[type='submit']").value = "Save";
    editId = null;
    editMode = false;
  }
}

function submitTodo(e) {
  e.preventDefault();

  var task = document.querySelector("#task").value;
  var task_status = document.querySelector("#task_status").value;

  if (!task || !task_status) {
    alert("PLease fill all fields");
    return;
  }

  if (editMode) {
    for (var i = 0; i < todoStore.length; i++) {
      if (todoStore[i].id === editId) {
        todoStore[i].task = task;
        todoStore[i].task_status = task_status;
        break;
      }
    }
  } else {
    var id = Date.now();
    var obj = {
      id,
      task,
      task_status,
    };

    todoStore.push(obj);
  }

  localStorage.setItem("Todo", JSON.stringify(todoStore));
  e.target.reset();
  toggleModal("none");
  showTodo();
  document.querySelector("input[type='submit']").value = "Save";
}

function showTodo() {
  var showTodos = document.querySelector(".show_todos");
  showTodos.innerHTML = "";

  for (var i = 0; i < todoStore.length; i++) {
    showTodos.innerHTML += `
        <div class="todo_list">
      <h1>${todoStore[i].task}</h1>
      <p>${todoStore[i].task_status}</p>

      <div class="btn_action">
        <button onclick=editTodo(${todoStore[i].id})>Edit</button>
        <button onclick=deleteTodo(${todoStore[i].id})>Delete</button>
      </div>
    </div>
        `;
  }
}

showTodo();

function editTodo(id) {
  for (var i = 0; i < todoStore.length; i++) {
    if (todoStore[i].id == id) {
      toggleModal("block");
      document.querySelector("#task").value = todoStore[i].task;
      document.querySelector("#task_status").value = todoStore[i].task_status;
    }
  }

  document.querySelector("input[type='submit']").value = "Update";
  editMode = true;
  editId = id;
}

function deleteTodo(id) {
  for (var i = 0; i < todoStore.length; i++) {
    if (todoStore[i].id == id) {
      todoStore.splice(i, 1);
      localStorage.setItem("Todo", JSON.stringify(todoStore));
      showTodo();
    }
  }
}
