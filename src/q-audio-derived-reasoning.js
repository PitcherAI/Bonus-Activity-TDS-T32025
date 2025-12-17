export default function ({ user, weight = 1 }) {
  return {
    id: "audio_derived_reasoning",
    title: "Audio-Derived Numerical Reasoning",

    question: `
An audio system produces a spoken message:
"The alert code is four eight two"

Task:
1. Convert the spoken number into digits.
2. Compute the sum of the digits.
3. Return the sum as an integer.
    `,

    input: "No input",

    answer: () => {
      const digits = [4, 8, 2];
      return digits.reduce((a, b) => a + b, 0);
    },
  };
}
