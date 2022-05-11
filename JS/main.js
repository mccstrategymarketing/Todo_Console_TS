var TASK_PRIORITI = { High: "High", Low: "Low" };
var TASK_STATUS = { Todo: "Todo", Done: "Done", Progress: "Progress" };
var ID = 4;
var list = [
    {
        id: 1,
        taskName: "Go Magazine",
        taskStatus: "Todo",
        taskPrioriti: "low"
    },
    {
        id: 2,
        taskName: "Call electric",
        taskStatus: "Progress",
        taskPrioriti: "high"
    },
    {
        id: 3,
        taskName: "Feed Cats",
        taskStatus: "Done",
        taskPrioriti: "high"
    },
];
function findTask(taskname) {
    return list.findIndex(function (elem) { return elem.taskName == taskname; });
}
function changeStatus(taskname, statusTask) {
    if (statusTask === void 0) { statusTask = TASK_STATUS.Todo; }
    list[findTask(taskname)].taskStatus = statusTask;
}
function addTask(taskname, status, prioriti) {
    if (status === void 0) { status = TASK_STATUS.Todo; }
    if (prioriti === void 0) { prioriti = TASK_PRIORITI.Low; }
    if (list.find(function (elem) { return elem.taskName == taskname; })) {
        return console.log("This task already exists, try another");
    }
    else {
        list.push({
            id: ID,
            taskName: taskname,
            taskStatus: status,
            taskPrioriti: prioriti
        });
    }
    ID++;
}
function deleteTask(taskname) {
    list.splice(findTask(taskname), 1);
}
function sortedStatus() {
    var sortStatus = {};
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var task = list_1[_i];
        for (var status_1 in TASK_STATUS) {
            if (task.taskStatus in sortStatus) {
                sortStatus[task.taskStatus] += ", ".concat(task.taskName, "\n");
            }
            else {
                sortStatus[task.taskStatus] = "".concat(TASK_STATUS[task.taskStatus], ":\n").concat(task.taskName);
            }
            break;
        }
    }
    console.log(sortStatus.Todo);
    console.log(sortStatus.Done);
    console.log(sortStatus.Progress);
}
function showBy() { }
addTask("Pet my cat", "Done", "High");
addTask("Visit grandma", "Todo", "high");
addTask("Refactor code", "Done", "high");
// deleteTask("Pet my cat");
// addTask("Learn English", "progress", "high");
sortedStatus();
// showList();
