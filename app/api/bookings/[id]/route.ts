import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/lib/dbConnect';
import Booking from '@/models/Booking';

// GET /api/bookings/:id - Get specific booking
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const { id } = params;

    const booking = await Booking.findById(id);

    if (!booking) {
      return NextResponse.json({ success: false, error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: booking }, { status: 200 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : error;
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}

// DELETE /api/bookings/:id - Cancel booking
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDB();
    const { id } = params;

    const booking = await Booking.findByIdAndUpdate(
      id,
      { status: 'cancelled' },
      { new: true, runValidators: true }
    );

    if (!booking) {
      return NextResponse.json({ success: false, error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, data: booking, message: 'Booking cancelled successfully' },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
