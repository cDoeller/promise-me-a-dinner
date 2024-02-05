import { useState } from "react";
import { obtainInstruction } from "../javascript/obtainInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useBroccoli() {
  const [broccoli, setBroccoli] = useState([]);
  const addItem = setter(setBroccoli);

  async function getBroccoliInstructions() {
    reset(setBroccoli);
    const food = "broccoli";
    // Don't change the code above this line

    try {
      const step0 = await obtainInstruction(food, 0);
      addItem(step0);
      const step1 = await obtainInstruction(food, 1);
      addItem(step1);
      const step2 = await obtainInstruction(food, 2);
      addItem(step2);
      const step3 = await obtainInstruction(food, 3);
      addItem(step3);
      const step4 = await obtainInstruction(food, 4);
      addItem(step4);
      const step5 = await obtainInstruction(food, 5);
      addItem(step5);
      const step6 = await obtainInstruction(food, 6);
      addItem(step6);
      addItem("Broccoli is ready.");
    } catch (err) {
      console.log(err);
    }

    // this is a test
    // Don't change the code below this line
  }
  return [broccoli, getBroccoliInstructions];
}

export default useBroccoli;
