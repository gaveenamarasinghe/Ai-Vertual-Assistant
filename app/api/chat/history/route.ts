import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { getUserFromToken } from '@/lib/auth';
import Chat from '@/lib/models/Chat';

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const user = await getUserFromToken(request as any);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Not authorized' },
        { status: 401 }
      );
    }

    const chat = await Chat.findOne({ user: user._id });

    return NextResponse.json({
      success: true,
      data: chat?.messages || []
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}