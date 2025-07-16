// Your code goes here

//set up event listeners
const darkModeButton = document.getElementById("darkMode");
const lightModeButton = document.getElementById("lightMode");
const bodyElement = document.body;

// Function to apply the theme to the body
function applyTheme(theme) {
  bodyElement.className = theme;
}

//function to load the theme from the cookie
function themeFromCookie() {
  const cookies = document.cookie;
  console.log("Current cookies:", cookies); //log any cookies so we know if we need to add chocolate chips or raisins...

  const themeCookie = cookies
    .split("; ")
    .find((row) => row.startsWith("theme="));

  if (themeCookie) {
    const theme = themeCookie.split("=")[1];
    if (theme === "darkMode" || theme === "lightMode") {
      applyTheme(theme);
      console.log(`applying theme from cookie :${theme}`);
    }
  }
}

document.addEventListener("DOMContentLoaded", themeFromCookie);

//set up event listener for light mode
lightModeButton.addEventListener("click", () => {
  bodyElement.className = "lightMode";

  //send the get request to switch to light mode
  fetch("/lightMode")
    .then((response) => {
      if (!response.ok) {
        console.error("Failure to load Light Mode");
      }
      return response.text();
    })
    .then((data) => {
      console.log("Server response for Light Mode", data);
    })
    .catch((error) => {
      console.error("Error fetching Light Mode", error);
    });
});

//set up event listener for dark mode
darkModeButton.addEventListener("click", () => {
  bodyElement.className = "darkMode";

  //send the get request to switch to dark mode
  fetch("/darkMode")
    .then((response) => {
      if (!response.ok) {
        console.error("Failure to load Dark Mode");
      }
      return response.text();
    })
    .then((data) => {
      console.log("Server response for Dark Mode", data);
    })
    .catch((error) => {
      console.error("Error fetching Dark mode", error);
    });
});
