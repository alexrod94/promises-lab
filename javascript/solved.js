/* async function solveSprouts() {
  try {
    const step1 = await obtainInstruction("brusselsSprouts", 0);
    console.log(step1);
    const step2 = await obtainInstruction("brusselsSprouts", 1);
    console.log(step2);
    const step3 = await obtainInstruction("brusselsSprouts", 2);
    console.log(step3);
  } catch (x) {
    console.log(x);
  }
}

function solveSprouts() {
  obtainInstruction("brusselsSprouts", 0)
    .then((res) => {
      console.log(res);
      return obtainInstruction("brusselsSprouts", 1);
    })
    .then((res) => {
      console.log(res);
    });
} */

/* function solveSprouts() {
  Promise.all([
    obtainInstruction("brusselsSprouts", 0),
    obtainInstruction("brusselsSprouts", 1),
    obtainInstruction("brusselsSprouts", 2),
    obtainInstruction("brusselsSprouts", 3),
  ]).then((response) => {
    response.forEach((step) => {
      console.log(step);
    });
  });
} */

async function makeBroccoli() {
  try {
    const steps = [
      await obtainInstruction(`broccoli`, 0),
      await obtainInstruction(`broccoli`, 1),
      await obtainInstruction(`broccoli`, 2),
      await obtainInstruction(`broccoli`, 3),
      await obtainInstruction(`broccoli`, 4),
      await obtainInstruction(`broccoli`, 5),
    ];
    const broccoliSteps = document.querySelector(`#broccoli`);
    steps.forEach((step) => {
      broccoliSteps.innerHTML += `<li>${step}</li>`;
    });
    broccoliSteps.innerHTML += `<li>Broccoli is ready!</li>`;
  } catch (error) {
    console.log(error);
  }
}
async function forEachBrussels() {
  for (let index = 0; index < brusselsSprouts.length; index++) {
    const result = await obtainInstruction("brusselsSprouts", index);
    console.log(result);
  }
}

forEachBrussels();
