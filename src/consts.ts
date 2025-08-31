import { IconClose, IconCopyText, IconEraseText, IconScreenshot, IconTransparency } from "./icons"
import { type ButtonType } from "./types.d"

export const buttons: ButtonType[] = [
  { text: "Closes the window.", Icon: IconClose },
  { text: "Erases the text of the input at the top.", Icon: IconEraseText },
  { text: "Copies the text of the input at the top.", Icon: IconCopyText },
  { text: "Takes a screenshot of the equation to the clipboard.", Icon: IconScreenshot },
  { text: "Toggles the window's transparency.", Icon: IconTransparency }
]

export const colors: string[] = ["#B4FFB3", "#21303C", "#c4ac25", "#a0a7d2"];
