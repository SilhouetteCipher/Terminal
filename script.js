
// Variables
const output = document.getElementById("text-output");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const textReadoutSpeed = 200;
let isConnected = false;
let i = 0;

// Initial connection message
output.textContent = "Establish a connection to start the interface.\\n";
output.textContent += "Type 'connect' to establish a connection.\\n";

input.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) { 
        event.preventDefault();
        submit.click(); // Trigger the submit button's click event
    }
});

submit.addEventListener("click", () => {

    const command = input.value.trim();

    // If the user is not connected, check for the connect command
    if (!isConnected) {
        if (command === "connect") {
            isConnected = true;
            output.textContent = "Establishing connection...\n";
            setTimeout(startBootSequence, 2000); // Connection delay of 2 seconds
        } else {
            output.textContent = "Invalid command. Type 'connect' to establish a connection.\n";
        }
    } else {
        if (/^veil0[1-8]$/.test(command)) {
            output.textContent += `Command "${command}" received. Processing...\n`;
        } else {
            output.textContent += `Invalid command "${command}". Please enter a valid command.\n`;
        }
    }
    input.value = "";

    // scroll to the bottom
    output.scrollTop = output.scrollHeight;
});

// Boot sequence function
function startBootSequence() {
    output.textContent += "Connection established.\n\n";
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

    const interval = setInterval(() => {
        output.textContent += bootSequence[i] + "\n";

        // scroll to the bottom
        output.scrollTop = output.scrollHeight;

        if (++i >= bootSequence.length) {
            clearInterval(interval);
        }
    }, textReadoutSpeed);
}

