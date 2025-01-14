import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import clientPromise from '@/lib/mongodb';

const emailSchema = z.object({
	email: z.string().email(),
});

export async function POST(request: NextRequest) {
	try {
		const body = await request.json();
		const { email } = emailSchema.parse(body);

		const client = await clientPromise;
		const db = client.db(
			process.env.NODE_ENV === 'development' ? 'cocomar-test' : 'cocomar'
		);
		const collection = db.collection('emails');

		// Check if the email already exists
		const existingEmail = await collection.findOne({ email });

		if (existingEmail) {
			// Email already exists, return success but with a different message
			return NextResponse.json(
				{ message: 'Email already registered' },
				{ status: 200 }
			);
		} else {
			// Email doesn't exist, insert it
			await collection.insertOne({ email, createdAt: new Date() });
			return NextResponse.json(
				{ message: 'Email saved successfully' },
				{ status: 200 }
			);
		}
	} catch (error) {
		if (error instanceof z.ZodError) {
			return NextResponse.json(
				{ message: 'Invalid email format' },
				{ status: 400 }
			);
		}
		console.error('Error processing email:', error);
		return NextResponse.json(
			{ message: 'Error processing email' },
			{ status: 500 }
		);
	}
}
