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
- Explain the topic clearly
- Use simple language
- Keep the answer structured
- Include a short summary at the end
`,
  });

  return response.output_text;
};

module.exports = {
  generateLesson,
};