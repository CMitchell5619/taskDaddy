import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class Task {
    constructor({title, id = generateId(), listId }) {
        this.title = title
        this.id = id
        this.listId = listId
    }

    get Template() {
        return /* html */`
    <li class="list-group-item bg-dark text-light">${this.title}<button type="button" class="text-light close"
    onclick="app.taskController.delete('${this.id}')"><span>&times;</span></button><button type="button" class="text-light close"
    onclick="app.taskController.delete('${this.id}')"><span>&check;</span></button></li>
   `
    }

    }
