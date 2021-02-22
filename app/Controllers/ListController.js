import { listService } from "../Services/ListService.js";
import { ProxyState } from "../AppState.js";


function _draw() {
    let listElem = document.getElementById("lists")
    let template = ""
    ProxyState.lists.forEach(list => template += list.Template)
    listElem.innerHTML = template
}
export default class ListController{
  constructor() {
    console.log("hello from the listController");
    ProxyState.on("lists", _draw)
    ProxyState.on("tasks", _draw)
  }

  create(event) {
    event.preventDefault()
      let form = event.target
      let newList = {
        title: form.title.value,
        color: form.color.value

      }
  listService.create(newList)
  }

  delete(listId) {
    listService.delete(listId)
  }
}

