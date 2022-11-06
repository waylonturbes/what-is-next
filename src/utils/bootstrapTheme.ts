import localforage from "localforage";

import setColorScheme from "./setColorScheme";

/** Initializes theme based on system preferrence or previously selected value */
async function bootstrapTheme(): Promise<void> {
  try {
    const colorScheme = await localforage.getItem<string>("color-scheme");
    setColorScheme(colorScheme);
  } catch (error) {
    setColorScheme(null);
  }
}

export default bootstrapTheme;
