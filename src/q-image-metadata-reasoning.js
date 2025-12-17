export default function ({ user, weight = 1 }) {
  return {
    id: "image_metadata_reasoning",
    title: "Image Metadata Reasoning",

    question: `
You are given an image captured by a field sensor.
The image metadata includes GPS coordinates:

Latitude: 12.9716
Longitude: 77.5946

Task:
1. Identify the hemisphere for the latitude.
2. Return "N" for North or "S" for South.

Return a single character.
    `,

    input: "No input",

    answer: () => {
      const latitude = 12.9716;
      return latitude >= 0 ? "N" : "S";
    },
  };
}
