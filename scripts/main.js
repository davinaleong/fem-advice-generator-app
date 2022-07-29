const dialogueHeading = document.querySelector("#dialogueHeading");
const dialogueContent = document.querySelector("#dialogueContent");
const dialogueButton = document.querySelector("#dialogueButton");
const adviceApiUrl = `https://api.adviceslip.com/advice`;

const getAdvice = async () => {
  const response = await fetch(adviceApiUrl);
  const data = await response.json();
  const { slip } = data;
  if (slip) {
    const { id, advice } = slip;
    dialogueHeading.innerHTML = `Advice #${id}`;
    dialogueContent.innerHTML = `"${advice}"`;
  }
};

getAdvice();

dialogueButton.addEventListener("click", (e) => {
  dialogueContent.innerHTML = `Loading...`;
  getAdvice();
});
