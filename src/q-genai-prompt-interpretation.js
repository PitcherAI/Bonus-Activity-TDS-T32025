export default function ({ user, weight = 1 }) {
  return {
    id: "genai_prompt_interpretation",
    title: "GenAI Prompt Interpretation",

    question: `
A generative model was instructed:

"Generate a secure identifier using the words:
alpha, seven, water, safe"

The model returned:
"alpha-seven-water-safe"

Task:
1. Convert the identifier to snake_case.
2. Return the transformed string.
    `,

    input: "No input",

    answer: () => {
      return "alpha_seven_water_safe";
    },
  };
}
