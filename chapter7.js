const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];
function buildGraph(edges){
    let graph = Object.create(null)
    function addedge(from ,to){
        if(graph[from] == null){
            graph[from] = [to]
        }
        else{
            graph[from].push(to)
        }
    }
    for(let [from,to] of edges.map(r => r.split("-"))){
        addedge(from,to)
        addedge(to,from)
    }
    return graph;
}
const roadgraph = buildGraph(roads)
console.log('here',roadgraph)


//  creating the new village state 
 class villagestate{

    constructor(place,parcels){
        this.place = place
        this.parcels = parcels

    }
    move(destination){
        if(!roadgraph[this.place].includes(destination)){
            return this
        }
        else{
            let parcels = this.parcels.map(p =>{
                if(p.place != this.place) return p
                return { place:destination, address:p.address}
            }).filter(p => p.place != p.address)
            return new villagestate(destination,parcels)
        }
    }
}
// console.log(typeof(villagestate))
let first = new villagestate(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"},{place: "Post Office", address: "Marketplace"}]
  );
  let next = first.move("Alice's House");
  
  console.log(next.place);
  // → Alice's House
  console.log(next.parcels);
  // → []
//   console.log('next onject',next)
  console.log(first.place);


//   let laternest = next.move('Cabin')
//   console.log('later next object',laternest)
  // → Post Office

  function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }  

  function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
  }
  
  function randomRobot(state) {
    return {direction: randomPick(roadgraph[state.place])};
  }
  villagestate.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
      let address = randomPick(Object.keys(roadgraph));
      let place;
      do {
        place = randomPick(Object.keys(roadgraph));
      } while (place == address);
      parcels.push({place, address});
    }
    return new villagestate("Post Office", parcels);
  };

  runRobot(villagestate.random(), randomRobot);