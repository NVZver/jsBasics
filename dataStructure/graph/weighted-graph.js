class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.value.push({ value, priority });
    this._sort();
  }
  dequeue() {
    return this.values.shift();
  }

  _sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.list = {};
  }

  addVertex(name) {
    if (this.list[name]) return this.list[name];
    this.list[name] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1].indexOf(vertex2) === -1) this.adjacencyList[vertex1].push({ node: vertex2, weight });
    if (this.adjacencyList[vertex2].indexOf(vertex1) === -1) this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  shortestPath(from, to) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    for (let vertex in this.list) {
      if (vertex === from) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      const smalestVal = nodes.dequeue().value;
      if (smalestVal === to) {
        // this is it, we're done!
      }
      if (smalestVal || distances[smalestVal] !== Infinity) {
        for (let neighbob in this.adjacencyList[smalestVal]) {

        }
      }
    }
  }
}
