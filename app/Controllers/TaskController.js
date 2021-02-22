import { taskService } from "../Services/taskService.js";
import { ProxyState } from "../AppState.js";



export default class TaskController{
  constructor() {
    console.log("hello from the taskController");
  }

  strike(event) {
    event.preventDefault();
    



  }

  create(event, listId) {
    event.preventDefault()
      let form = event.target
      let newTask = {
        title: form.title.value,
        listId: listId
      }
  taskService.create(newTask)
  }

  delete(taskId) {
    taskService.delete(taskId)
  }
}

