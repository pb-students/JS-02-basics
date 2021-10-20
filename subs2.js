// calculateCircuitAndArea()

function calculateCircuitAndArea() {
  let s = prompt("Podaj długość promienia koła");
  let r = parseFloat(s);
  if (isNaN(r)) {
    console.log("Invalid input, please try again")
    return calculateCircuitAndArea()
  }
  let circuit = 2 * 3.14 * r;
  console.log("Obwód koła to: " + circuit.toFixed(2));
  let area = 3.14 * (r * r);
  console.log("Pole koła to: " + area.toFixed(2));
}

