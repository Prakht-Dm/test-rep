const list = {
}
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
    let createTodo ="";
    let createInProgress ="";
    let createDone="";
    for (let key in list){
        switch (list[key]){
            case "To Do" : (createTodo === "") ? (createTodo+=(`\"${key}\"`)) : (createTodo+=(`,\n\"${key}\"`));
            break;
            case "In Progress" : (createInProgress === "") ? (createInProgress+=(`\"${key}\"`)) : (createInProgress+=(`,\n\"${key}\"`));
            break;
            case "Done" : (createDone === "") ? (createDone+=(`\"${key}\"`)) : (createDone+=(`,\n\"${key}\"`));
            break;
        }
    }
    if (createTodo === "") createTodo = "-\n";
    if (createInProgress === "") createInProgress = "-\n";
    if (createDone ==="") createDone = "-\n"
    console.log(`Todo:\n${createTodo}\nIn Progress:\n${createInProgress}\nDone:\n${createDone}`)
}
addTask("Wake up");
addTask("Have breakfast");
addTask("Go to work");
addTask("Make money");
addTask("Learn Javascript");
changeStatus("Wake up","Done");
changeStatus("have breakfast","Done");
changeStatus("Go to work","In Progress");
showList();