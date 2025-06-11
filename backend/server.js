require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// ------------------------------ Google AI Code HERE ------------------------------ //
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.post("/insurance-chat", async (req, res) => {
  const { userResponse, chatHistory } = req.body;

  try {
    const filteredHistory = chatHistory
      .filter((item) => item.message && item.message.trim() !== "")
      .map((item) => ({
        role: item.role.toLowerCase() === "user" ? "user" : "model",
        parts: [{ text: item.message }],
      }));

    const systemPrompt = {
      role: "user",
      parts: [
        {
          text: `You are Tina, a friendly and helpful insurance consultant.
Your job is to ask users questions to help determine the most suitable car insurance product.
Start by saying: \"I’m Tina. I help you to choose the right insurance policy. May I ask you a few personal questions to make sure I recommend the best policy for you?\"
Only proceed if they agree.
Ask adaptive questions based on user responses. Do NOT ask directly what insurance they want.
Ask things like: \"Do you need coverage for your own car or just 3rd party?\"
Use the following product details to make recommendations at the end:
- Mechanical Breakdown Insurance (MBI): not available for trucks or racing cars.
- Comprehensive Car Insurance: available only for vehicles less than 10 years old.
- Third Party Car Insurance: available for all vehicles.
Explain your recommendation clearly at the end, including why it is suitable.`
        }
      ]
    };

    const fullHistory = [systemPrompt, ...filteredHistory];

    const chat = model.startChat({ history: fullHistory });

    const messageToSend =
      userResponse && userResponse.trim() !== ""
        ? userResponse
        : `I’d like help with choosing car insurance.`;

    const result = await chat.sendMessage(messageToSend);
    const response = result.response.text();

    res.json({ response });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to get response from Gemini API." });
  }
});

// ------------------------------ Google AI Code HERE ------------------------------ //

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
