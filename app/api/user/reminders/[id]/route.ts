import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { getUserFromToken } from '@/lib/auth';
import Reminder from '@/lib/models/Reminder';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const user = await getUserFromToken(request as any);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Not authorized' },
        { status: 401 }
      );
    }

    const { title, description, date, completed } = await request.json();

    const reminder = await Reminder.findOneAndUpdate(
      { _id: params.id, user: user._id },
      { title, description, date, completed },
      { new: true }
    );

    if (!reminder) {
      return NextResponse.json(
        { success: false, message: 'Reminder not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: reminder
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    const user = await getUserFromToken(request as any);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Not authorized' },
        { status: 401 }
      );
    }

    const reminder = await Reminder.findOneAndDelete({ _id: params.id, user: user._id });

    if (!reminder) {
      return NextResponse.json(
        { success: false, message: 'Reminder not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {}
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}