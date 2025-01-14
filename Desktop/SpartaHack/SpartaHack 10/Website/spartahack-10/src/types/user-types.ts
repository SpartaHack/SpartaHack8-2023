import { z } from 'zod';
import { merchSizeEnum } from './application-types';

// Base User Schema
const BaseUserSchema = z.object({
	_id: z.string(),
	shId: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	email: z.string().email(),
});

// Role enum
const UserRole = z.enum(['ATTENDEE', 'ADMIN', 'ORGANIZER', 'JUDGE', 'PARTNER']);

// Attendee User Schema
const AttendeeUserSchema = BaseUserSchema.extend({
	role: z.literal('ATTENDEE'),
	spartaCoinBalance: z.number().int().nonnegative().optional(),
	checkedIn: z.boolean().optional(),
	vegetarian: z.boolean().optional(),
	merchSize: merchSizeEnum.optional(),
});

// Admin User Schema
const AdminUserSchema = BaseUserSchema.extend({
	role: z.literal('ADMIN'),
});

// Organizer User Schema
const OrganizerUserSchema = BaseUserSchema.extend({
	role: z.literal('ORGANIZER'),
});

// Combined User Schema (discriminated union)
const UserSchema = z.discriminatedUnion('role', [
	AttendeeUserSchema,
	AdminUserSchema,
	OrganizerUserSchema,
]);

// Types
type AttendeeUser = z.infer<typeof AttendeeUserSchema>;
type AdminUser = z.infer<typeof AdminUserSchema>;
type OrganizerUser = z.infer<typeof OrganizerUserSchema>;
type User = z.infer<typeof UserSchema>;

export { UserRole, UserSchema, type User };
