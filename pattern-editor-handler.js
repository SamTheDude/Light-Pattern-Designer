//Make sure the code is executed in strict mode.
"use strict";

//Program written by Samuel Kent to handle the light pattern editor.
//Started on Sunday, 22nd December 2019
//Not finished.

//===== Constants =====
const $STAGE_INPUT = document.getElementById("stage-input");

//===== Change the number of stages =====
function changeStages() {
    let output = "";
    for (let i = 0; i < parseInt($STAGE_INPUT.value); i++) {
        output = output + "<div class='stage'></div>";
    }
    console.log("Hello!")
}

//===== Assign updates to events =====
$STAGE_INPUT.addEventListener("onkeypress", changeStages());

//===== Run change stages to update at the start =====
changeStages();