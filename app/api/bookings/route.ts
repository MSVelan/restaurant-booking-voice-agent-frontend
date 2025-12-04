import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/dbConnect';
import Booking from '@/models/Booking';

// POST /api/bookings - Create a new booking
export async function POST(request: NextRequest) {
  try {
    await connectToDB();
    const body = await request.json();

    const booking = await Booking.create(body);

    return NextResponse.json({ success: true, data: booking }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 400 });
  }
}

// GET /api/bookings - Get all bookings
export async function GET(request: NextRequest) {
  try {
    await connectToDB();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const filter = status ? { status } : {};
    const bookings = await Booking.find(filter).sort({ createdAt: -1 });

    return NextResponse.json(
      { success: true, data: bookings, count: bookings.length },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
