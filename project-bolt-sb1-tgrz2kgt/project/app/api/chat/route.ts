import { NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a knowledgeable nutritionist AI assistant. Provide accurate, evidence-based nutrition advice while being clear that you are an AI and encouraging users to consult healthcare professionals for medical advice."
        },
        {
          role: "user",
          content: message
        }
      ],
      model: "mixtral-8x7b-32768",
      temperature: 0.5,
      max_tokens: 1024,
    });

    return NextResponse.json({
      message: completion.choices[0]?.message?.content || "Sorry, I couldn't generate a response.",
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}