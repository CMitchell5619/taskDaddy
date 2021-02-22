import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import List from "../Models/List.js";

export function saveState() {
    localStorage.setItem('taskDaddy', JSON.stringify({
        lists: ProxyState.lists,
        tasks: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskDaddy'))
    if (data) {
        ProxyState.lists = data.lists.map(oldList => new List(oldList))
        ProxyState.tasks = data.tasks.map(t=> new Task(t))
    }
}