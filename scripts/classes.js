//definição de classes
function LocalStorageAcess(){
  var _storageKey = "uauhskjhkjas";
  
  var allTasks = [];
  
  var _loadStorage = function(){
    return localStorage.getItem(_storageKey);
  };
  allTasks = _loadStorage();
  this.ListAllTasks = function(){
    allTasks = _loadStorage();
    return allTasks;
  };
  
  this.ListTodoTasks = function(){
    
  };
  
  this.CreateTask = function(taskObj){
    localStorage.setItem(_storageKey,JSON.stringify(taskObj));
  };
  this.ReadTask = function(id){
    var taskObj = localStorage.getItem(_storageKey);
    return = JSON.parse(taskObj);
  };
}

var localStorageAcess = new LocalStorageAcess();
