/**
 * Skeki Energy Color Palette
 * 
 * Primary: #E0BF18 (Gold/Yellow) - Used for buttons, accents, highlights
 * Secondary: #2371A2 (Blue) - Used for secondary actions, links
 * Background: #FFFFFC (Off-white) - Main background color
 * Foreground: #020202 (Near black) - Text color
 */

export const COLORS = {
  primary: "#E0BF18",
  secondary: "#2371A2",
  background: "#FFFFFC",
  foreground: "#020202",
} as const

export type ColorKey = keyof typeof COLORS

