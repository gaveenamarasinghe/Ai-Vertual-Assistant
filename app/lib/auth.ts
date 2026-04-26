import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import User from '@/lib/models/User';

export async function getUserFromToken(request: NextRequest) {
  let token: string | undefined;

  if (request.headers.get('authorization')?.startsWith('Bearer')) {
    token = request.headers.get('authorization')?.split(' ')[1];
  }

  if (!token) {
    return null;
  }

  try {
    const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById((decoded as any).id);
    return user;
  } catch (err) {
    return null;
  }
}