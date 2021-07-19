import { pipe, toLower, join, map } from "ramda";

const applyModifier = (baseClass: string) => (modifier: string) => {
  return `${baseClass}--${modifier}`;
};

const parseModifiers = (baseClass: string, modifiers: string[]) => {
  return [baseClass, ...map(applyModifier(baseClass))(modifiers)];
};

const parseModifiersPipe = pipe(parseModifiers, map(toLower), join(" "));

const cssHandler = (baseClass: string, modifiers?: string[] | string) => {
  const sanitizedModifiers =
    typeof modifiers === "string"
      ? [modifiers]
      : modifiers
      ? [...modifiers]
      : [];

  return parseModifiersPipe(baseClass, sanitizedModifiers);
};

export default cssHandler;
