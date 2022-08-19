let adjust = "T00:00:00";
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let timePeriod = [];
let start = null;
let end = null;

let topics = {
  start: {name: "start", count:0, arr:[1,2]},
  1: {name: "first", count:0, arr:[3,4,5]},
  2: {name: "second", count:0, arr:[6,7]},
  3: {name: "red", count:0, arr:[]},
  4: {name: "purple", count:0, arr:[]},
  5: {name: "yellow", count:0, arr:[]},
  6: {name: "dog", count:0, arr:[]},
  7: {name: "cat", count:0, arr:[]},
}


function chooseItems(){
  for(let tNum in topics.start.arr){
    let topic = topics[tNum];
    console.log("choose")
    console.log(tNum);
    console.log(JSON.stringify(topic));
  }
  document.getElementById("output").innerHTML = "potato";
}
