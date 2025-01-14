import { z } from 'zod';
import { countryEnum, majorEnum, universityEnum } from './large-enums';

// Zod enums
const applicationStatusEnum = z.enum([
	'NOT_APPLIED',
	'SUBMITTED',
	'APPROVED',
	'REJECTED',
]);

const studyLevelEnum = z.enum([
	'High School',
	'Associate Degree Program (2-Year Community College or similar)',
	"Bachelor's Degree Program (3+ Year Undergraduate University)",
	"Graduate Degree Program (Master's, Doctoral, Professional, etc.)",
	'Code School or Bootcamp',
	'Other Vocational or Trade Program or Apprenticeship',
	'Post Doctorate',
	'Certification Programs',
	'Online Courses or MOOCs',
]);

const yearOfEducationEnum = z.enum([
	'1st Year (Freshman)',
	'2nd Year (Sophomore)',
	'3rd Year (Junior)',
	'4th Year (Senior)',
	'5th Year or Higher',
]);

const genderEnum = z.enum([
	'Male',
	'Female',
	'Non-binary',
	'Prefer not to say',
	'Other',
]);

const merchSizeEnum = z.enum(['S', 'M', 'L', 'XL']);

const raceEnum = z.enum([
	'White',
	'Black or African American',
	'Native American (American Indian)',
	'Asian',
	'Latinx or Hispanic',
	'Native Hawaiian and Other Pacific Islander',
	'Middle Eastern or North African',
	'Other',
]);

const stateEnum = z.enum([
	'Michigan',
	'Alabama',
	'Alaska',
	'Arizona',
	'Arkansas',
	'California',
	'Colorado',
	'Connecticut',
	'Delaware',
	'Florida',
	'Georgia',
	'Hawaii',
	'Idaho',
	'Illinois',
	'Indiana',
	'Iowa',
	'Kansas',
	'Kentucky',
	'Louisiana',
	'Maine',
	'Maryland',
	'Massachusetts',
	'Michigan',
	'Minnesota',
	'Mississippi',
	'Missouri',
	'Montana',
	'Nebraska',
	'Nevada',
	'New Hampshire',
	'New Jersey',
	'New Mexico',
	'New York',
	'North Carolina',
	'North Dakota',
	'Ohio',
	'Oklahoma',
	'Oregon',
	'Pennsylvania',
	'Rhode Island',
	'South Carolina',
	'South Dakota',
	'Tennessee',
	'Texas',
	'Utah',
	'Vermont',
	'Virginia',
	'Washington',
	'West Virginia',
	'Wisconsin',
	'Wyoming',
]);

// Inferred TypeScript types
type StudyLevelOptions = z.infer<typeof studyLevelEnum>;
type YearOfEducationOptions = z.infer<typeof yearOfEducationEnum>;
type GenderOptions = z.infer<typeof genderEnum>;
type MerchSizeOptions = z.infer<typeof merchSizeEnum>;
type RaceOptions = z.infer<typeof raceEnum>;
type StateOptions = z.infer<typeof stateEnum>;
type MajorOptions = z.infer<typeof majorEnum>;
type CountryOptions = z.infer<typeof countryEnum>;

const ApplicationDataSchema = z.object({
	// basic info
	phoneNumber: z
		.string()
		.regex(/^(\+[1-9])?\d{1,10}$/, 'Please enter a valid phone number'),

	// education info
	currentStudyLevel: studyLevelEnum,
	educationInstitution: universityEnum,
	customEducationInstitution: z
		.string()
		.min(2)
		.max(100)
		.regex(/^[a-zA-Z\s\d&'-]+$/, {
			message: 'Please enter a valid institution name',
		})
		.optional(),
	majorPreference: majorEnum.optional(),
	customMajorPreference: z
		.string()
		.min(2)
		.max(50)
		.regex(/^[a-zA-Z\s&-]+$/, {
			message: 'Please enter a valid major',
		})
		.optional(),
	yearOfEducation: yearOfEducationEnum,
	yearOfGraduation: z
		.number()
		.positive()
		.min(2024, 'You must be graduating in 2025 or later to participate')
		.max(2039, 'Please enter a valid graduation year earlier than 2039'),

	// personal info
	countryOfOrigin: countryEnum,
	stateFrom: stateEnum,
	age: z
		.number()
		.int()
		.min(14, 'You must be at least 14 years old to attend SpartaHack')
		.max(120, "There's a high chance you've mistyped"),
	gender: genderEnum,
	customGender: z
		.string()
		.min(2)
		.max(30)
		.regex(/^[a-zA-Z\s-]+$/, {
			message: 'Gender should only contain letters, spaces, and hyphens',
		})
		.optional(),
	race: raceEnum,
	customRace: z
		.string()
		.min(2)
		.max(50)
		.regex(/^[a-zA-Z\s-]+$/, {
			message: 'Race should only contain letters, spaces, and hyphens',
		})
		.optional(),
	merchSize: merchSizeEnum,
	vegetarian: z.boolean(),

	// additional details
	githubUrl: z
		.string()
		.url('Please enter a valid GitHub URL')
		.or(z.literal('')),
	linkedinUrl: z
		.string()
		.url('Please enter a valid LinkedIn URL')
		.or(z.literal('')),
	hackathonsAttended: z.number().int().nonnegative().max(100).default(0),
	reasonAttending: z
		.string()
		.min(150, 'Please provide at least 150 characters')
		.max(2000, 'Please keep your response under 2000 characters'),
	resumeUrl: z
		.string()
		.url('Please enter a valid resume URL')
		.or(z.literal('')),

	// agreements
	codeOfConduct: z.boolean(),
	infoEmails: z.boolean(),
	mediaRelease: z.boolean(),
	termsAndConditions: z.boolean(),

	// optional agreements
	form1Url: z.string().url('Please enter a valid URL for Form 1').optional(),
	form2Url: z.string().url('Please enter a valid URL for Form 2').optional(),
	form3Url: z.string().url('Please enter a valid URL for Form 3').optional(),
});

const ApplicationDataDraftSchema = ApplicationDataSchema.partial();

const ApplicationDataSubmissionSchema = ApplicationDataSchema.extend({
	codeOfConduct: z.literal(true, {
		errorMap: () => ({ message: 'You must agree to the Code of Conduct' }),
	}),
	termsAndConditions: z.literal(true, {
		errorMap: () => ({ message: 'You must agree to the Terms and Conditions' }),
	}),
})
	.refine(
		(data) => {
			if (data.age < 18) {
				return data.form1Url && data.form2Url && data.form3Url;
			}
			return true;
		},
		{
			message: 'Forms 1, 2, and 3 are required for applicants under 18',
			path: ['form1Url', 'form2Url', 'form3Url'],
		}
	)
	.refine(
		(data) => {
			if (data.race === 'Other') {
				return !!data.customRace;
			}
			return true;
		},
		{
			message: 'Please specify your race',
			path: ['customRace'],
		}
	)
	.refine(
		(data) => {
			if (data.gender === 'Other') {
				return !!data.customGender;
			}
			return true;
		},
		{
			message: 'Please specify your gender',
			path: ['customGender'],
		}
	)
	.refine(
		(data) => {
			if (data.educationInstitution === 'Other') {
				return !!data.customEducationInstitution;
			}
			return true;
		},
		{
			message: 'Please specify your education institution',
			path: ['customEducationInstitution'],
		}
	)
	.refine(
		(data) => {
			if (data.majorPreference === 'Other') {
				return !!data.customMajorPreference;
			}
			return true;
		},
		{
			message: 'Please specify your major preference',
			path: ['customMajorPreference'],
		}
	)
	.refine(
		(data) => {
			if (data.currentStudyLevel === 'High School') {
				return (
					data.educationInstitution === 'Other' &&
					!!data.customEducationInstitution
				);
			}
			return true;
		},
		{
			message: 'High school students must provide their high school name',
			path: ['educationInstitution', 'customEducationInstitution'],
		}
	);

// Base fields that are common to both draft and submitted applications
const BaseApplicationSchema = z.object({
	_id: z.string(),
	userId: z.string(),
	updatedAt: z.date(),
	processedBy: z.string().optional(),
	marked: z.boolean().default(false),
	markedBy: z.string().default(''),
});

// Schema for applications that are not yet submitted
const NotAppliedSchema = BaseApplicationSchema.extend({
	status: z.literal('NOT_APPLIED'),
	applicationData: ApplicationDataDraftSchema,
});

// Schema for applications that have been submitted
const SubmittedSchema = BaseApplicationSchema.extend({
	status: applicationStatusEnum.exclude(['NOT_APPLIED']),
	applicationData: ApplicationDataSubmissionSchema,
	submittedAt: z.date(),
});

// The final ApplicationSchema that uses discriminated unions
const ApplicationSchema = z.discriminatedUnion('status', [
	NotAppliedSchema,
	SubmittedSchema,
]);

type Application = z.infer<typeof ApplicationSchema>;
type ApplicationDataDraft = z.infer<typeof ApplicationDataDraftSchema>;
type ApplicationDataSubmission = z.infer<
	typeof ApplicationDataSubmissionSchema
>;

export {
	ApplicationDataSchema,
	ApplicationDataDraftSchema,
	ApplicationDataSubmissionSchema,
	merchSizeEnum,
	type StudyLevelOptions,
	type YearOfEducationOptions,
	type GenderOptions,
	type MerchSizeOptions,
	type RaceOptions,
	type StateOptions,
	type MajorOptions,
	type CountryOptions,
	type Application,
	type ApplicationDataDraft,
	type ApplicationDataSubmission,
};
