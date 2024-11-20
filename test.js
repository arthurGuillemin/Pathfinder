
const routes = [
    ["JFK", "LAX"],
    ["LAX", "ORD"],
    ["ORD", "DFW"],
    ["DFW", "JFK"]
  ];
  const airports = ["JFK", "LAX", "ORD", "DFW"];
  
  
  
  // Chercher si une connction directe existe
function isConncted(i, j) {
      const airports = ["JFK", "LAX", "ORD", "DFW"];

      const DepartureIndex = airports.findIndex((airport) => airport === i);
      const ArrivalIndex = airports.findIndex((airport) => airport === j);
    
      const matrice_A = [
        [0, 1, 0, 1],//JFK
        [1, 0, 1, 0], //LAX
        [0, 1, 0, 1],//ORD
        [0, 1, 0, 1],//DFW
      ];

      if (matrice_A[DepartureIndex][ArrivalIndex] === 1) {
          return true
      } else{
        return false
      }
    }
    
    
  
    
  
  
  
function findConnection(dep, arr) {
        const DepartureIndex = airports.findIndex((airport) => airport === dep);
        const ArrivalIndex = airports.findIndex((airport) => airport === arr);

        const matrice_A = [
          [0, 1, 0, 1], // JFK
          [1, 0, 1, 0], // LAX
          [0, 1, 0, 1], // ORD
          [0, 1, 0, 1], // DFW
        ];
      
        const isDirectlyConnected = isConncted(dep, arr);
        if (isDirectlyConnected === true) {
          return "Il y a une connexion directe entre ces 2 aéroports.";
        } else {
          // Recherche d'une connection indirecte
          for (let i = 0; i < airports.length; i++) {
            if (matrice_A[DepartureIndex][i] === 1) {
              // verification de la connection
              if (matrice_A[i][ArrivalIndex] === 1) {
                return `Il n'y a pas de connctions directe , chemin complet : ${dep} --> ${airports[i]} --> ${arr} `
              }
            }
          }
          return "Aucune connexion directe ou indirecte trouvée.";
        }
      }



const test =   findConnection("LAX" , "DFW")

console.log(test);

