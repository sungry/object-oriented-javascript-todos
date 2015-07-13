var TodoList = function() {
  this.tasks = []
};

var Task = function(description) {
  this.id = 0;
  this.description = description;
  this.completed = false;
};

TodoList.prototype.add = function(description) {
  var task = new Task(description);
  this.tasks.push(task);
  task.id = this.tasks.length;
};

TodoList.prototype.list = function() {
  return this.tasks;
};

Task.prototype.complete = function() {
  this.completed = true;
};

TodoList.prototype.remove = function(task_obj) {
  for (var i = 0; i < this.tasks.length; i++) {
    if (this.tasks[i].id === task_obj.id ) {
      this.tasks.splice(i, 1);
    }
  }
};

// Driver code


var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}

