import { z } from 'zod';

// SpartaCoin Transaction Schema
const TransactionType = z.enum(['CREDIT', 'DEBIT']);

const TransactionReason = z.enum([
	'INITIAL_GRANT',
	'EVENT_CHECK_IN',
	'EVENT_WIN',
	'MERCH_PURCHASE',
	// Add other reasons as needed
]);

const TransactionSchema = z.object({
	_id: z.string(),
	userId: z.string(),
	type: TransactionType,
	amount: z.number().int().positive(),
	reason: TransactionReason,
	eventId: z.string().optional(),
	timestamp: z.date(),
	balanceAfter: z.number().int().nonnegative(),
});

type Transaction = z.infer<typeof TransactionSchema>;

export { type Transaction };
