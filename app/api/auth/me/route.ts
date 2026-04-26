import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { getUserFromToken } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    await connectDB();
    
    const user = await getUserFromToken(request as any);

    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Not authorized to access this route' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      data: user
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}