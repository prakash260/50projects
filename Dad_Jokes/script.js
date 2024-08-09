const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokebtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// USING ASYNC/AWAIT
async function generateJoke() {
  try {
    const res = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Error fetching joke: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    jokeEl.textContent = data.joke;
  } catch (error) {
    console.error("Failed to generate joke:", error);
    jokeEl.textContent = "Oops! No joke for you today. Try again later!";
  }
}

// USING .then()
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
