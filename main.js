const list = {};
function changeStatus(task,status){
    list[task] = status;
}
function addTask(newTask){
    list[newTask] = "To Do";
}
function deleteTask(task){
    delete list[task];
}
function showList(){
    let createTodo ="",
        createInProgress ="",
        createDone="";
    for (let key in list){
        switch (list[key]){
            case "To Do" : createTodo += (createTodo === "") ? `\"${key}\"` : `,\n\"${key}\"`;
            break;
            case "In Progress" : createInProgress += (createInProgress === "") ? `\"${key}\"` : `,\n\"${key}\"`;
            break;
            case "Done" : createDone += (createDone === "") ? `\"${key}\"` : `,\n\"${key}\"`;
            break;
        }
    }
    console.log(`Todo:\n${createTodo||`-`}\nIn Progress:\n${createInProgress||`-`}\nDone:\n${createDone||`-`}`)
}
addTask("Wake up");
addTask("Have breakfast");
addTask("Go to work");
addTask("Make money");
addTask("Learn Javascript");
changeStatus("Wake up","Done");
changeStatus("have breakfast","Done");
showList();