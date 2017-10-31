var Status;
(function (Status) {
    Status[Status["ACTIVE"] = 0] = "ACTIVE";
    Status[Status["COMPLETE"] = 1] = "COMPLETE";
    Status[Status["DELETE"] = 2] = "DELETE";
})(Status || (Status = {}));
var TODOS = /** @class */ (function () {
    function TODOS() {
        this.obj = [];
    }
    // public task: string[] = [];
    // public status: string;
    TODOS.prototype.add = function (list) {
        this.obj.push(list);
        // this.task.push(list.task);
        // this.status = list.status;
    };
    TODOS.prototype["delete"] = function (list) {
        this.obj.push(list);
    };
    TODOS.prototype.complete = function (list) {
        this.obj.push(list);
    };
    TODOS.prototype.edit = function (list) {
        this.obj.push(list);
    };
    TODOS.prototype.display = function () {
        console.log(this.obj);
        // console.log(`status ${this.status}`);
    };
    return TODOS;
}());
var list = new TODOS();
function addTodo(task) {
    list.add({
        task: task,
        status: "ACTIVE"
    });
    console.log(list);
}
function deleteTodo(task) {
    list["delete"]({
        task: task,
        status: "DELETE"
    });
    console.log();
}
function completeTodo(task) {
    list.complete({
        task: task,
        status: "COMPLETE"
    });
    console.log(list);
}
function editTodo(task) {
    list.edit({
        task: task,
        status: "EDITED"
    });
    console.log(list);
}
list.display();
