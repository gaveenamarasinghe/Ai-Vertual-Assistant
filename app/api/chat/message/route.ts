import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { getUserFromToken } from '@/lib/auth';
import Chat from '@/lib/models/Chat';

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const user = await getUserFromToken(request as any);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Not authorized' },
        { status: 401 }
      );
    }

    const { message, role = 'user' } = await request.json();

    // Find or create chat
    let chat = await Chat.findOne({ user: user._id });

    if (!chat) {
      chat = new Chat({ user: user._id, messages: [] });
    }

    // Add user message
    chat.messages.push({
      role,
      content: message,
      timestamp: new Date()
    });

    // Simulate AI response (replace with actual AI integration)
    const aiResponse = "I'm your AI assistant. How can I help you today?";
    
    // Add AI response
    chat.messages.push({
      role: 'assistant',
      content: aiResponse,
      timestamp: new Date()
    });

    chat.updatedAt = new Date();
    await chat.save();

    return NextResponse.json({
      success: true,
      data: {
        userMessage: chat.messages[chat.messages.length - 2],
        aiMessage: chat.messages[chat.messages.length - 1]
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}