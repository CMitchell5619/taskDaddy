  import { ProxyState } from "../AppState.js"
  import List from "../Models/List.js"
  import { saveState } from "../Utils/LocalStorage.js"


  class ListService{
    
    delete(listId) {
      let r = confirm("Press a button!");
        if (r == true)
           {
            ProxyState.lists = ProxyState.lists.filter(l => l.id != listId);
          }
      ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != listId);
    }
    create(newList) {
      ProxyState.lists = [new List(newList), ...ProxyState.lists];
    }
    constructor() {
      console.log("hello from the listService");
      ProxyState.on('lists', saveState)
    }
  }
export const listService = new ListService()