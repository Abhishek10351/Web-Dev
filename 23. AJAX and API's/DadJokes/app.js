const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");
const errorText = "NO JOKES AVAILABLE! SORRY :(";
const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  if (jokeText !== errorText) {

    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);
  }
};

const getDadJoke = async () => {

  const config = { headers: { Accept: "text/plain" } };
  try {
    const res = await axios.get("https://icanhazdadjoke.com", config);
    return res.data;
  } catch (e) {
    console.log("ERROR", e);
    return errorText;
  }
};

button.addEventListener("click", addNewJoke);
