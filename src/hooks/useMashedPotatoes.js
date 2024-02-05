import { useState } from "react";
import { getInstruction } from "../javascript/getInstruction.js";
import { reset, setter } from "../javascript/stateChanger.js";

function useMashedPotatoes() {
  const [mashedPotatoes, setMashedPotatoes] = useState([]);

  const addItem = setter(setMashedPotatoes);

  function getMashedInstructions() {
    reset(setMashedPotatoes);
    // Don't change the code above this line

    // getInstruction(food, step, callback, errorCallback)

    getInstruction(
      "mashedPotatoes",
      0,
      (step0) => {
        addItem(step0);
        getInstruction(
          "mashedPotatoes",
          1,
          (step1) => {
            addItem(step1);
            getInstruction(
              "mashedPotatoes",
              2,
              (step2) => {
                addItem(step2);
                getInstruction(
                  "mashedPotatoes",
                  3,
                  (step3) => {
                    addItem(step3);
                    getInstruction(
                      "mashedPotatoes",
                      4,
                      (step4) => {
                        addItem(step4);
                        // * no idea how to add another step with jsx return?
                        // * only one was to manipulate the data directly..
                        addItem("Mashed potatoes are ready!");
                      },
                      (error) => console.log(error)
                    );
                  },
                  (error) => console.log(error)
                );
              },
              (error) => console.log(error)
            );
          },
          (error) => console.log(error)
        );
      },
      (error) => console.log(error)
    );

    // Don't change the code below this line
  }

  return [mashedPotatoes, getMashedInstructions];
}

export default useMashedPotatoes;
