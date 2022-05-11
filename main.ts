interface PRIORITI {High:string, Low: string}

const TASK_PRIORITI:PRIORITI = { High: "High", Low: "Low" };
interface STATUS {
  Todo:string, Done:string, Progress:string;
}

const TASK_STATUS = { Todo: "Todo", Done: "Done", Progress: "Progress" };
let ID = 4;

interface obj {id:number, taskName:string, taskStatus:string, taskPrioriti:string}

const list:Array<obj> = [
  {
    id: 1,
    taskName: "Go Magazine",
    taskStatus: "Todo",
    taskPrioriti: "low",
  },
  {
    id: 2,
    taskName: "Call electric",
    taskStatus: "Progress",
    taskPrioriti: "high",
  },
  {
    id: 3,
    taskName: "Feed Cats",
    taskStatus: "Done",
    taskPrioriti: "high",
  },
];

function findTask(taskname:string):number {
  return list.findIndex((elem:obj):boolean => elem.taskName == taskname);
}

function changeStatus(taskname:string, statusTask:string = TASK_STATUS.Todo):void {
  list[findTask(taskname)].taskStatus = statusTask;
}

function addTask(
  taskname : string,
  status = TASK_STATUS.Todo,
  prioriti = TASK_PRIORITI.Low
):void {
  if (list.find((elem) => elem.taskName == taskname)) {
    return console.log("This task already exists, try another");
  } else {
    list.push({
      id: ID,
      taskName: taskname,
      taskStatus: status,
      taskPrioriti: prioriti,
    });
  }
  ID++;
}

function deleteTask(taskname:string):void {
  list.splice(findTask(taskname), 1);
}

interface sortStatus {Todo?:string, Done?:string,Progress?:string , taskStatus?:any}
function sortedStatus():void {
  let sortStatus:sortStatus = {};

  for (let task of list) {
    for (let status in TASK_STATUS) {
      if (task.taskStatus in sortStatus) {
        sortStatus[task.taskStatus] += `, ${task.taskName}\n`;
      } else {
        sortStatus[task.taskStatus] = `${TASK_STATUS[task.taskStatus]}:\n${
          task.taskName
        }`;
      }
      break;
    }
  }
  console.log(sortStatus.Todo);
  console.log(sortStatus.Done);
  console.log(sortStatus.Progress);
}

function showBy():void {}

addTask("Pet my cat", "Done", "High");
addTask("Visit grandma", "Todo", "high");
addTask("Refactor code", "Done", "high");
// deleteTask("Pet my cat");
// addTask("Learn English", "progress", "high");
sortedStatus();
// showList();
