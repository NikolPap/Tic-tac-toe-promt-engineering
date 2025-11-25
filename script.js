let fields = [null, null, null,null, null, null, null, null, null];

let currentPlayer = "circle"; 

const winningLines = [
  [0, 1, 2], // oben
  [3, 4, 5], // mitte
  [6, 7, 8], // unten
  [0, 3, 6], // links
  [1, 4, 7], // mitte
  [2, 5, 8], // rechts
  [0, 4, 8], // diagonal links->rechts
  [2, 4, 6]  // diagonal rechts->links
];


function init() {
  render();
}

function render() {
  let contentDiv = document.getElementById("content");

  let tableHtml = "<table>";

  for (let i = 0; i < 3; i++) {
    tableHtml += "<tr>";

    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      let symbol = "";

      if (fields[index] === "circle") symbol = generateCircleSVG();
      if (fields[index] === "cross") symbol = generateCrossSVG();

      tableHtml += `
                <td id="cell-${index}" onclick="handleClick(${index})">
                    ${symbol}
                </td>
            `;
    }

    tableHtml += "</tr>";
  }

  tableHtml += "</table>";

  contentDiv.innerHTML = tableHtml;
}

function restartGame() {
    fields = [null, null, null,null, null, null, null, null, null];
    render();
}

function handleClick(index) {
  if (fields[index] !== null) return;

  fields[index] = currentPlayer;

  let svgCode =
    currentPlayer === "circle" ? generateCircleSVG() : generateCrossSVG();
  let cell = document.getElementById("cell-" + index);
  cell.innerHTML = svgCode;
  cell.removeAttribute("onclick");

  // 🆕 WINNER-CHECK HINZUFÜGEN
  let winCombo = checkWinner();
  if (winCombo) {
      drawWinningLine(winCombo);
      disableAllCells();
      return;
  }

  currentPlayer = currentPlayer === "circle" ? "cross" : "circle";
}

function checkWinner() {
    for (let combo of winningLines) {
        let [a, b, c] = combo;

        if (
            fields[a] &&
            fields[a] === fields[b] &&
            fields[a] === fields[c]
        ) {
            return combo; // Gewinner-Kombination zurückgeben
        }
    }

    return null; // kein Gewinner
}

function getCellCenter(index) {
    const cell = document.getElementById("cell-" + index);
    const rect = cell.getBoundingClientRect();

    return {
        x: rect.left + rect.width / 2 - document.getElementById("content").getBoundingClientRect().left,
        y: rect.top + rect.height / 2 - document.getElementById("content").getBoundingClientRect().top
    };
}

function disableAllCells() {
    for (let i = 0; i < 9; i++) {
        let cell = document.getElementById("cell-" + i);
        if (cell) cell.removeAttribute("onclick");
    }
}

function generateCircleSVG() {
  return `
        <svg width="70" height="70" viewBox="0 0 70 70">
            <circle 
                cx="35" 
                cy="35" 
                r="30" 
                stroke="#00B0EF" 
                stroke-width="6" 
                fill="none"
                stroke-dasharray="188.4"
                stroke-dashoffset="188.4">
                
                <animate 
                    attributeName="stroke-dashoffset" 
                    from="188.4" 
                    to="0" 
                    dur="200ms" 
                    fill="freeze"
                    begin="0s"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1" />
            </circle>
        </svg>
    `;
}

function generateCrossSVG() {
  return `
        <svg width="70" height="70" viewBox="0 0 70 70">
            <!-- Linie 1 -->
            <line 
                x1="15" y1="15" 
                x2="55" y2="55" 
                stroke="#FFC000" 
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="56.57"
                stroke-dashoffset="56.57">
                <animate
                    attributeName="stroke-dashoffset"
                    from="56.57"
                    to="0"
                    dur="200ms"
                    begin="0s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1" />
            </line>

            <!-- Linie 2 -->
            <line 
                x1="55" y1="15" 
                x2="15" y2="55" 
                stroke="#FFC000" 
                stroke-width="6"
                stroke-linecap="round"
                stroke-dasharray="56.57"
                stroke-dashoffset="56.57">
                <animate
                    attributeName="stroke-dashoffset"
                    from="56.57"
                    to="0"
                    dur="200ms"
                    begin="0.15s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1" />
            </line>
        </svg>
    `;
}

function drawWinningLine(combo) {
    const lineSvg = `
        <svg class="win-line" width="100%" height="100%" style="position:absolute; top:0; left:0;">
            <line 
                x1="${getCellCenter(combo[0]).x}" 
                y1="${getCellCenter(combo[0]).y}" 
                x2="${getCellCenter(combo[2]).x}" 
                y2="${getCellCenter(combo[2]).y}" 
                stroke="white" 
                stroke-width="8"
                stroke-linecap="round" />
        </svg>
    `;

    document.getElementById("content").insertAdjacentHTML("beforeend", lineSvg);
}
