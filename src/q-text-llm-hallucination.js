export default function ({ user, weight = 1 }) {
  return {
    id: "llm_consistency_analysis",
    title: "LLM Output Consistency Analysis",

    question: `
An LLM generated the following report:

"In 2024, the system processed 2.4 million requests per day.
This was a 20% increase compared to 2023.
In 2023, the system processed 1.8 million requests per day."

Task:
1. Verify whether the stated percentage increase is correct.
2. Compute the actual percentage increase implied by the numbers.
3. Round to the nearest integer.

Return only the integer value.
    `,

    input: "No input",

    answer: () => {
      const prev = 1.8;
      const curr = 2.4;
      const percent = ((curr - prev) / prev) * 100;
      return Math.round(percent);
    },
  };
}
