import store from "../redux/store";
import { setThemeColorScheme } from "../redux/slices/themeSlice";

const html = document.getElementById("html");
/** Sets the color scheme for the application
 *
 * @param colorScheme the color scheme to switch to
 * */
function setColorScheme(
  colorScheme: "light" | "dark" | "system" | string | null
) {
  if (colorScheme !== "dark" && colorScheme !== "light") {
    if (
      html !== null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      html.style.colorScheme = "dark";
      store.dispatch(setThemeColorScheme("dark"));
      html.className = "dark";
    }
    if (
      html !== null &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      html.style.colorScheme = "light";
      store.dispatch(setThemeColorScheme("light"));
      html.className = "light";
    }
  }
  if (html !== null && colorScheme === "dark") {
    html.style.colorScheme = "dark";
    html.className = "dark";
    store.dispatch(setThemeColorScheme("dark"));
  }
  if (html !== null && colorScheme === "light") {
    html.style.colorScheme = "light";
    html.className = "light";
    store.dispatch(setThemeColorScheme("light"));
  }
}

export default setColorScheme;
