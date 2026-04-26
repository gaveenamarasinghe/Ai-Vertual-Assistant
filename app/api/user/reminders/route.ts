import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { getUserFromToken } from '@/lib/auth';
import Reminder from '@/lib/models/Reminder';

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

    const reminders = await Reminder.find({ user: user._id }).sort({ date: 1 });

    return NextResponse.json({
      success: true,
      data: reminders
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

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

    const { title, description, date } = await request.json();

    const reminder = await Reminder.create({
      user: user._id,
      title,
      description,
      date
    });

    return NextResponse.json({
      success: true,
      data: reminder
    }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}