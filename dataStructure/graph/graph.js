class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
    return this.adjacencyList[name];
  }

  removeVertex(name) {
    while (this.adjacencyList[name].length) {
      const vertex = this.adjacencyList[name].pop();
      this.removeEdge(name, vertex);
    }
    delete this.adjacencyList[name];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1].indexOf(vertex2) === -1) this.adjacencyList[vertex1].push(vertex2);
    if (this.adjacencyList[vertex2].indexOf(vertex1) === -1) this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(ver => !ver !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(ver => !ver !== vertex1);
  }

  depthFirstRecursive(vertex, result = [], visited = {}) {
    if (!vertex || visited[vertex]) return result;

    result.push(vertex);
    visited[vertex] = true;

    this.adjacencyList[vertex].forEach(item => {
      if (!visited[item]) this.depthFirstRecursive(item, result, visited);
    });

    return result;
  }

  depthFirstItedative(vertex) {
    const stack = [vertex];
    const result = [];
    const visited = {};

    while (stack.length) {
      const curr = stack.pop();
      if (!visited[curr]) {
        visited[curr] = true;
        result.push(curr);
        this.adjacencyList[curr].forEach(node => {
          stack.push(node);
        });
      }
    }
    return result;
  }

  breadthFirst(vertex) {
    const queue = [vertex];
    const result = [];
    const visited = {};

    while (queue.length) {
      const curr = queue.shift();
      if (!visited[curr]) {
        visited[curr] = true;
        result.push(curr);
        this.adjacencyList[curr].forEach(node => {
          queue.push(node);
        });
      }
    }

    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(graph.adjacencyList);

console.log(graph.depthFirstRecursive('A'));
console.log(graph.depthFirstItedative('A'));
console.log(graph.breadthFirst('A'));
