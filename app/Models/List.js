import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class List{
    constructor({title, id = generateId(), completed}) {
        this.title = title
        this.id = id
        this.completed = completed
    }

    get Template() {
        return /*html*/`
        <div class="col-4 bg-dark">
        <h5 class="text-light">${this.title}<button class="text-light close align-middle" onclick="app.listController.delete('${this.id}')"><span>&times;</span></button>
        </h5>
        <form onsubmit="app.taskController.create(event, '${this.id}')">
            <div class="form-group">
                <input type="text" name="title" maxlength="50" placeholder="Add task...">
                <button type="submit" class="btn btn-light btn-outline-dark">New Task</button>
                <div class="row p-3">
                <div class="col-12 bg-dark text-light align-items-center p-2">
                <ul class="list-group list-group-flush">
                ${this.Task}
                </ul>
                </div>
                </div>
            </div>
        </form>
        </div>
       </div>
    `
    }

    get Task () {
        let template = ''
        let task = ProxyState.tasks.filter(t => t.listId == this.id)
        task.forEach(t => template += t.Template)
        return template
    }

}

