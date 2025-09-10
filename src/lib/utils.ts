import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTailwindColor = (input: string) => {
  if (!fullConfig?.theme?.colors) {
    console.warn("Invalid Tailwind config passed.");
    return null;
  }

  const colors = fullConfig.theme.colors;

  const [colorName, shade] = input.split("-");

  const colorEntry = colors[colorName];

  if (!colorEntry) {
    console.warn(`Color '${colorName}' not found in Tailwind config.`);
    return null;
  }

  // If the color entry is a string, return it directly
  if (typeof colorEntry === "string") {
    return colorEntry;
  }

  // If a shade is provided and exists, return it
  if (shade && colorEntry[shade]) {
    return colorEntry[shade];
  }

  // If no shade and DEFAULT exists, return it
  if (colorEntry.DEFAULT) {
    return colorEntry.DEFAULT;
  }

  // If no shade and no DEFAULT, but shade-less color was passed and is a shade (like neutral-3)
  if (!shade && typeof colorEntry === "object") {
    console.warn(
      `No 'DEFAULT' value for '${colorName}', please specify a shade.`
    );
    return null;
  }

  return null;
};