enum Status{
    ACTIVE,
    COMPLETE,
    DELETE
}


interface TodoLists {
    task: string,
    status: string
}

class TODOS {
    private obj: TodoLists[] = [];
    // public task: string[] = [];
    // public status: string;

    add(list: TodoLists) {
        this.obj.push(list);
        // this.task.push(list.task);
        // this.status = list.status;
    }

    delete(list:TodoLists){
        this.obj.push(list);

    }

    complete(list:TodoLists)
    {
        this.obj.push(list);
    }

    edit(list:TodoLists)
    {
        this.obj.push(list);
    }

    display() {
        console.log(this.obj);
        // console.log(`status ${this.status}`);
    }
}

var list = new TODOS();

function addTodo(task: string) {
    list.add({
        task: task,
        status: "ACTIVE"
    });
    console.log(list);
}
function deleteTodo(task:string)
{
    list.delete({
        task:task,
        status:"DELETE"
    });
    console.log();
}
function  completeTodo(task:string)
{
    list.complete({
        task:task,
        status:"COMPLETE"
    });
    console.log(list);
}

function  editTodo(task:string)
{
    list.edit({
        task:task,
        status:"EDITED"
    });
    console.log(list);
}

list.display();
