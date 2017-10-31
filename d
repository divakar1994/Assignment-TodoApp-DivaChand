var Shopping = /** @class */ (function () {
    function Shopping() {
        this.task = [];
    }
    Shopping.prototype.add = function (list) {
        this.task.push(list.task);
        this.status = list.status;

    };
    Shopping.prototype.display = function () {
        console.log("tasks " + this.task);
        console.log("status " + this.status);

    };
    return Shopping;
}());
var list = new Shopping();
function addTodo(task) {

    list.add({
        task: task,
        status: "ACTIVE"
    });
    console.log(list);
}
list.display();
