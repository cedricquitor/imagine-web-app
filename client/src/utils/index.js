import { surpriseMePrompts } from "../constants";

export const getRandomPrompt = (prompt) => {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  // Random prompt won't be the same twice in a row
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
};
