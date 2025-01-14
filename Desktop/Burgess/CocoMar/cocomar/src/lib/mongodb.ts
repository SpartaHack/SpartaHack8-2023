// src/lib/mongodb.ts

import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
	throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const loggingEnabled = true;

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	let globalWithMongo = global as typeof globalThis & {
		_mongoClientPromise?: Promise<MongoClient>;
	};

	if (!globalWithMongo._mongoClientPromise) {
		client = new MongoClient(uri, options);
		globalWithMongo._mongoClientPromise = client
			.connect()
			.then((client) => {
				loggingEnabled &&
					console.log('Connected to MongoDB in development mode');
				return client;
			})
			.catch((error) => {
				console.error('Failed to connect to MongoDB in development mode:');
				console.error('Error name:', error.name);
				console.error('Error message:', error.message);
				console.error('Full error:', JSON.stringify(error, null, 2));
				throw error;
			});
	}
	clientPromise = globalWithMongo._mongoClientPromise;
} else {
	// In production mode, it's best to not use a global variable.
	client = new MongoClient(uri, options);
	clientPromise = client
		.connect()
		.then((client) => {
			loggingEnabled && console.log('Connected to MongoDB in production mode');
			return client;
		})
		.catch((error) => {
			console.error('Failed to connect to MongoDB in production mode:');
			console.error('Error name:', error.name);
			console.error('Error message:', error.message);
			console.error('Full error:', JSON.stringify(error, null, 2));
			throw error;
		});
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
