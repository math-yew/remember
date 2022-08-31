import topics from "./topics.js";
import groups from "./groups.js";

class Group {
  constructor(startId){
    this.arr = [];
    this.selected = [];
    this.startId = startId;
  }

  process(){
    this.searchArray(this.startId);
    console.log("group0: " + this.arr.toString());
    this.selectItems();
    console.log(this.selected);
  }

  searchArray(id){
    let arr = topics[id].arr;
    console.log("arr: " + arr);
    for(var i=0; i<arr.length;i++){
      let childId = arr[i];
      let topic = topics[childId];
      if(topic.sample > 0 && childId != this.startId){
        groups.push(new Group(childId));
        groups[groups.length - 1].process();
        break;
      }
      let arrLength = topic.arr.length;
      if(arrLength > 0){
        this.searchArray(childId);
      } else{
        this.arr.push(topic);
      }
    }
  }

  selectItems(){
    let sorted = this.arr.sort((a,b)=>b-a.count);
    let sample = topics[this.startId].sample | 1;
    this.selected = [...sorted.slice(0,sample)];
  }

}

export default Group;
