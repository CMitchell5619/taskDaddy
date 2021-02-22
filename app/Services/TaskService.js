  import { ProxyState } from "../AppState.js"
  import Task from "../Models/Task.js"
  import { saveState } from "../Utils/LocalStorage.js"


  class TaskService{

    constructor() {
      console.log("hello from the taskService");
      ProxyState.on('tasks', saveState)
    }
    delete(taskId) {
        ProxyState.tasks = ProxyState.tasks.filter(t => t.id != taskId)
    }
    create(newTask) {
      ProxyState.tasks = [new Task(newTask), ...ProxyState.tasks];
    }
   
  }
export const taskService = new TaskService()