export default function ({ user, weight = 1 }) {
  return {
    id: "dataset_trend_analysis",
    title: "Dataset Trend Identification",

    question: `
A dataset records daily water levels (in cm):

[120, 122, 125, 129, 134]

Task:
1. Determine whether the trend is increasing, decreasing, or stable.
2. Return one of the following strings exactly:
   "increasing", "decreasing", or "stable"
    `,

    input: "No input",

    answer: () => {
      const data = [120, 122, 125, 129, 134];
      const isIncreasing = data.every((v, i, a) => i === 0 || v > a[i - 1]);
      return isIncreasing ? "increasing" : "stable";
    },
  };
}
