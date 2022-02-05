const list = [];
const STATUS_NAME = {
    TODO: "To Do",
    INPROGRESS: "In Progress",
    DONE: "Done",
}
const PRIORITY_LIST={
    HIGH: "High",
    MEDIUM: "Medium",
    LOW: "Low",
}
function changeStatus(task,stat){
    for (let i=0; i<list.length;i++){
        if (list[i].name===task){
        list[i].status=stat;
        break;
    } 
 }
}
function addTask(Task){
    list.push({name: Task,
    status: STATUS_NAME.TODO,
    priority: PRIORITY_LIST.MEDIUM,});
}
function deleteTask(task){
       for (let i=0; i<list.length;i++){
           if (list[i].name===task){
           list.splice(i,1);
           break;
       }
    }
}
function showList(){
    let createTodo ="",
    createInProgress ="",
    createDone="";
    for (let i=0;i<list.length;i++){
        if (list[i].status===STATUS_NAME.TODO) {createTodo+=`${list[i].name}\n`;}
        if (list[i].status===STATUS_NAME.INPROGRESS) createInProgress+=`${list[i].name}\n`;
        if (list[i].status===STATUS_NAME.DONE) createDone+=`${list[i].name}\n`;
    }
    console.log(`Todo:\n${createTodo||`-`}\nIn Progress:\n${createInProgress||`-`}\nDone:\n${createDone||`-`}`)
}
addTask("Wake up");
addTask("Have breakfast");
addTask("Go to work");
addTask("Make money");
addTask("Learn Javascript");
changeStatus("Wake up",STATUS_NAME.INPROGRESS);
changeStatus("Have breakfast","Done");
showList();
