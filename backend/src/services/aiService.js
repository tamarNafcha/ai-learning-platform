const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateLesson = async (categoryName, subCategoryName, userPrompt) => {
  const response = await client.responses.create({
    model: "gpt-5.4-mini",
    input: `
You are an educational AI tutor.

Create a clear, short lesson for a student.

Category: ${categoryName}
Sub-category: ${subCategoryName}
Student request: ${userPrompt}

Requirements:
- Act as a professional academic learning assistant.
- Create a focused mini-lesson based on the user's topic.
- Keep the lesson clear, structured, and pleasant to read.
- Use simple language, but keep it professional.
- Avoid long, overwhelming explanations.
- Include:
  1. Short title
  2. Clear explanation
  3. Key points
  4. Short example if relevant
  5. Brief summary
- Keep the total answer concise and useful.
- Do not answer unrelated topics.
`,
  });

  return response.output_text;
};

module.exports = {
  generateLesson,
};