import topics from "./topics.js";
import Group from "./group.js";
import groups from "./groups.js";


groups.push(new Group("start"));
groups[0].process();
console.log("final " + JSON.stringify(groups[1]));
console.log(groups.length);

document.getElementById("getItems").addEventListener("click", getItems);

function getItems(){
  let output = "";
  for(let item in groups){
    console.log(item.startId);
    // for (var i = 0; i < item.arr.length; i++) {
    //   output += item.arr[i]+"\r";
    // }
  }
  document.getElementById("output").innerHTML = output;
}
