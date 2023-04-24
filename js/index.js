let todoTasks = []
// const posts_element = document.querySelector('.posts')
const fetchPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
  const data = await response.json()
  todoTasks.push(...data)
  create()

}


const list_arr = document.getElementById("myList")

function create() {
  const new_arr = todoTasks.map((list, i) => `<li style="background: ${list.completed ? '#72A16F' : '#ec8f8f4b'}" class="todo__task" id="task_id${i}">
    <span class="todo__task-date">${list.id}</span>
    <span class="todo__task-text">${list.title}</span>
    <div>
      <button id="${i}" onclick="getButtonId_complete(this)" class="material-symbols-sharp icon">
        done
        </button>
        <button id="${i}" onclick="getButtonId_cancel(this)" class="material-symbols-sharp icon">
        close
        </button>
    </div>
  </li>`)

  list_arr.innerHTML = `${new_arr.join('')}`

}

function addNewTask() {
  const input_taskText = document.getElementById("input-task")
  const input_taskValue = input_taskText.value
  const newId = todoTasks.length + 1

  const newData = {
    userId: 1,
    id: newId,
    title: `${input_taskValue}`,
    completed: false,
  }

  todoTasks.push(newData)

  create()

}

const modal_window = document.getElementById("popup_window_id")

function getButtonId_complete(obj) {
  let buttonId = obj.id
  todoTasks[buttonId].completed = true
  create()
}
function getButtonId_cancel(obj) {
  let buttonId = obj.id
  todoTasks[buttonId].completed = false
  create()
}

function open_popup() {
  modal_window.style.display = "block"
}
function close_popup() {
  modal_window.style.display = "none"
}


fetchPosts()

// create()

