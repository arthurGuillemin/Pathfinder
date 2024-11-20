function createAdjacencyMatrix(airports, routes) {
    // creation une matrice carrée de taille n 
    const matrix = Array(airports.length).fill(0).map(() => Array(airports.length).fill(0));
    routes.forEach(([start, end]) => {
        const startIndex = airports.indexOf(start);
        const endIndex = airports.indexOf(end);
        if (startIndex !== -1 && endIndex !== -1) {
            matrix[startIndex][endIndex] = 1;  
            matrix[endIndex][startIndex] = 1; 
        }
    });
    //ajouter pour gerer si le graph est orienté ou onn

    return matrix;
}




const routes = [
    ["JFK", "LAX"],
    ["LAX", "ORD"],
    ["ORD", "DFW"],
    ["DFW", "JFK"]
  ];
  const airports = ["JFK", "LAX", "ORD", "DFW"];
  
const adjMatrice = createAdjacencyMatrix(airports, routes);
console.log(adjMatrice[0]);
console.log(adjMatrice[1]);
console.log(adjMatrice[2]);
console.log(adjMatrice[3]);

