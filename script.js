const output = document.getElementById("output");
const input = document.getElementById("input");
const submit = document.getElementById("submit");

const bootSequence = [
  "DATA INTERFACE ACTIVE...",
  "COMMENCE DATABASE QUERY...",
  "REQUESTING TAG: [VEIL]...",
  "QUERYING...",
  "\n\n",
  "---------------------------------------------------------------------------------------",
  "| Entry ID  |    TAG     |                       Description                          |",
  "---------------------------------------------------------------------------------------",
  "| 01        |    VEIL    |  Entry-1B3F9: Quantum Dissipation Observation Log          |",
  "---------------------------------------------------------------------------------------",
  "| 02        |    VEIL    |  Entry-39G48: Dimensional Tether Analysis                  |",
  "---------------------------------------------------------------------------------------",
  "| 03        |    VEIL    |  Entry-95L70: Sol System                                   |",
  "---------------------------------------------------------------------------------------",
  "| 04        |    VEIL    |  Entry-26J86: Entropic Decay Report                        |",
  "---------------------------------------------------------------------------------------",
  "| 05        |    VEIL    |  Entry-53Q41: Gravitational Disruption Study               |",
  "---------------------------------------------------------------------------------------",
  "| 06        |    VEIL    |  Entry-12W19: N-Field Oscillation Overview                 |",
  "---------------------------------------------------------------------------------------",
  "| 07        |    VEIL    |  Entry-89Z31: Hyper-Luminal Wavefront Diagnostics          |",
  "---------------------------------------------------------------------------------------",
  "| 08        |    VEIL    |  Entry-47D67: Subatomic Inversion Patterns                 |",
  "---------------------------------------------------------------------------------------",
  "\n\n",
  "DATABASE QUERY SUCCESSFUL...",
  "AWAITING COMMAND..."
];

let i = 0;

const interval = setInterval(() => {
  output.textContent += bootSequence[i] + "\n";

  if (++i >= bootSequence.length) {
    clearInterval(interval);
  }
}, 1000);

submit.addEventListener("click", () => {
  const command = input.value.trim();
  if (/^veil0[1-8]$/.test(command)) {
    output.textContent += `Command "${command}" received. Processing...\n`;
  } else {
    output.textContent += `Invalid command "${command}". Please enter a valid command.\n`;
  }
  input.value = "";
});

