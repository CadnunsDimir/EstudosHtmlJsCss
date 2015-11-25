//definição de classes
function LocalStorageAcess(){
  var _storageKey = "uauhskjhkjas";
  
  var allTasks = new Array();
  
  var _loadStorage = function(){
    return localStorage.getItem(_storageKey);
  };
  allTasks = _loadStorage();
  this.ListAllTasks = function(){
    allTasks = _loadStorage();
    return allTasks;
  };
  
  this.ListTodoTasks = function(){
    allTasks = JSON.parse(localStorage.getItem(_storageKey));
    return allTasks;
  };
  
  this.CreateTask = function(taskObj){
    allTasks.push(taskObj);
    localStorage.setItem(_storageKey,JSON.stringify(allTasks));
  };
  this.ReadTask = function(id){
    var taskObj = localStorage.getItem(_storageKey);
    return JSON.parse(taskObj);
  };
}

var localStorageAcess = new LocalStorageAcess();
