import { z } from 'zod';

// User Schema
const UserSchema = z.object({
	_id: z.string(),
	shId: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
});

const AttendeeUserSchema = z.object({
	role: z.string(),
});

// Event Schema (for specific events within the hackathon)
const EventSchema = z.object({
	_id: z.string(),
	name: z.string(),
	date: z.date(),
	// Other event fields
});

// Application Schema
const ApplicationSchema = z.object({
	_id: z.string(),
	userId: z.string(),
	status: z.enum(['PENDING', 'APPROVED', 'REJECTED']),
	submittedAt: z.date(),
	processedBy: z.string().optional(),
	processedAt: z.date().optional(),
});

// Main Check-in Schema (for the whole hackathon)
const MainCheckInSchema = z.object({
	_id: z.string(),
	userId: z.string(),
	checkedInAt: z.date(),
	checkedInBy: z.string(),
});

// Event Check-in Schema (for specific events)
const EventCheckInSchema = z.object({
	_id: z.string(),
	userId: z.string(),
	eventId: z.string(),
	checkedInAt: z.date(),
	checkedInBy: z.string(),
});

type Event = z.infer<typeof EventSchema>;
type Application = z.infer<typeof ApplicationSchema>;
type MainCheckIn = z.infer<typeof MainCheckInSchema>;
type EventCheckIn = z.infer<typeof EventCheckInSchema>;

export {
	EventSchema,
	ApplicationSchema,
	MainCheckInSchema,
	EventCheckInSchema,
	type Event,
	type Application,
	type MainCheckIn,
	type EventCheckIn,
};
