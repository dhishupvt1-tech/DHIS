import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const AttendanceScalarFieldEnumSchema = z.enum(['id','time','date','createdAt','isActive','eventId','userId','scannedByUserId']);

export const EventScalarFieldEnumSchema = z.enum(['id','createdAt','name','date','startTime','endTime','description','location','eventorId','isActive']);

export const EventorScalarFieldEnumSchema = z.enum(['id','createdAt','name','description','isActive']);

export const EventorUserScalarFieldEnumSchema = z.enum(['id','eventorId','userId','createdAt','role']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','emailVerified','image','createdAt','updatedAt']);

export const AccountScalarFieldEnumSchema = z.enum(['userId','type','provider','providerAccountId','refresh_token','access_token','expires_at','token_type','scope','id_token','session_state','createdAt','updatedAt']);

export const SessionScalarFieldEnumSchema = z.enum(['sessionToken','userId','expires','createdAt','updatedAt']);

export const VerificationTokenScalarFieldEnumSchema = z.enum(['identifier','token','expires']);

export const AuthenticatorScalarFieldEnumSchema = z.enum(['credentialID','userId','providerAccountId','credentialPublicKey','counter','credentialDeviceType','credentialBackedUp','transports']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const UserRoleSchema = z.enum(['OWNER','ADMIN','MEMBER']);

export type UserRoleType = `${z.infer<typeof UserRoleSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ATTENDANCE SCHEMA
/////////////////////////////////////////

export const AttendanceSchema = z.object({
  id: z.bigint(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date(),
  isActive: z.boolean(),
  eventId: z.bigint(),
  userId: z.string(),
  scannedByUserId: z.string(),
})

export type Attendance = z.infer<typeof AttendanceSchema>

/////////////////////////////////////////
// EVENT SCHEMA
/////////////////////////////////////////

export const EventSchema = z.object({
  id: z.bigint(),
  createdAt: z.coerce.date(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().nullable(),
  location: z.string().nullable(),
  eventorId: z.bigint(),
  isActive: z.boolean(),
})

export type Event = z.infer<typeof EventSchema>

/////////////////////////////////////////
// EVENTOR SCHEMA
/////////////////////////////////////////

export const EventorSchema = z.object({
  id: z.bigint(),
  createdAt: z.coerce.date(),
  name: z.string(),
  description: z.string().nullable(),
  isActive: z.boolean(),
})

export type Eventor = z.infer<typeof EventorSchema>

/////////////////////////////////////////
// EVENTOR USER SCHEMA
/////////////////////////////////////////

export const EventorUserSchema = z.object({
  role: UserRoleSchema,
  id: z.bigint(),
  eventorId: z.bigint(),
  userId: z.string(),
  createdAt: z.coerce.date(),
})

export type EventorUser = z.infer<typeof EventorUserSchema>

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  name: z.string().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().nullable(),
  image: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// ACCOUNT SCHEMA
/////////////////////////////////////////

export const AccountSchema = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().nullable(),
  access_token: z.string().nullable(),
  expires_at: z.number().int().nullable(),
  token_type: z.string().nullable(),
  scope: z.string().nullable(),
  id_token: z.string().nullable(),
  session_state: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Account = z.infer<typeof AccountSchema>

/////////////////////////////////////////
// SESSION SCHEMA
/////////////////////////////////////////

export const SessionSchema = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Session = z.infer<typeof SessionSchema>

/////////////////////////////////////////
// VERIFICATION TOKEN SCHEMA
/////////////////////////////////////////

export const VerificationTokenSchema = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date(),
})

export type VerificationToken = z.infer<typeof VerificationTokenSchema>

/////////////////////////////////////////
// AUTHENTICATOR SCHEMA
/////////////////////////////////////////

export const AuthenticatorSchema = z.object({
  credentialID: z.string(),
  userId: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().nullable(),
})

export type Authenticator = z.infer<typeof AuthenticatorSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ATTENDANCE
//------------------------------------------------------

export const AttendanceIncludeSchema: z.ZodType<Prisma.AttendanceInclude> = z.object({
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  scannedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AttendanceArgsSchema: z.ZodType<Prisma.AttendanceDefaultArgs> = z.object({
  select: z.lazy(() => AttendanceSelectSchema).optional(),
  include: z.lazy(() => AttendanceIncludeSchema).optional(),
}).strict();

export const AttendanceSelectSchema: z.ZodType<Prisma.AttendanceSelect> = z.object({
  id: z.boolean().optional(),
  time: z.boolean().optional(),
  date: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  isActive: z.boolean().optional(),
  eventId: z.boolean().optional(),
  userId: z.boolean().optional(),
  scannedByUserId: z.boolean().optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  scannedBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// EVENT
//------------------------------------------------------

export const EventIncludeSchema: z.ZodType<Prisma.EventInclude> = z.object({
  eventor: z.union([z.boolean(),z.lazy(() => EventorArgsSchema)]).optional(),
  attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EventArgsSchema: z.ZodType<Prisma.EventDefaultArgs> = z.object({
  select: z.lazy(() => EventSelectSchema).optional(),
  include: z.lazy(() => EventIncludeSchema).optional(),
}).strict();

export const EventCountOutputTypeArgsSchema: z.ZodType<Prisma.EventCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EventCountOutputTypeSelectSchema).nullish(),
}).strict();

export const EventCountOutputTypeSelectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = z.object({
  attendance: z.boolean().optional(),
}).strict();

export const EventSelectSchema: z.ZodType<Prisma.EventSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  name: z.boolean().optional(),
  date: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  description: z.boolean().optional(),
  location: z.boolean().optional(),
  eventorId: z.boolean().optional(),
  isActive: z.boolean().optional(),
  eventor: z.union([z.boolean(),z.lazy(() => EventorArgsSchema)]).optional(),
  attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventCountOutputTypeArgsSchema)]).optional(),
}).strict()

// EVENTOR
//------------------------------------------------------

export const EventorIncludeSchema: z.ZodType<Prisma.EventorInclude> = z.object({
  events: z.union([z.boolean(),z.lazy(() => EventFindManyArgsSchema)]).optional(),
  eventorsUsers: z.union([z.boolean(),z.lazy(() => EventorUserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventorCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EventorArgsSchema: z.ZodType<Prisma.EventorDefaultArgs> = z.object({
  select: z.lazy(() => EventorSelectSchema).optional(),
  include: z.lazy(() => EventorIncludeSchema).optional(),
}).strict();

export const EventorCountOutputTypeArgsSchema: z.ZodType<Prisma.EventorCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EventorCountOutputTypeSelectSchema).nullish(),
}).strict();

export const EventorCountOutputTypeSelectSchema: z.ZodType<Prisma.EventorCountOutputTypeSelect> = z.object({
  events: z.boolean().optional(),
  eventorsUsers: z.boolean().optional(),
}).strict();

export const EventorSelectSchema: z.ZodType<Prisma.EventorSelect> = z.object({
  id: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  isActive: z.boolean().optional(),
  events: z.union([z.boolean(),z.lazy(() => EventFindManyArgsSchema)]).optional(),
  eventorsUsers: z.union([z.boolean(),z.lazy(() => EventorUserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventorCountOutputTypeArgsSchema)]).optional(),
}).strict()

// EVENTOR USER
//------------------------------------------------------

export const EventorUserIncludeSchema: z.ZodType<Prisma.EventorUserInclude> = z.object({
  eventor: z.union([z.boolean(),z.lazy(() => EventorArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const EventorUserArgsSchema: z.ZodType<Prisma.EventorUserDefaultArgs> = z.object({
  select: z.lazy(() => EventorUserSelectSchema).optional(),
  include: z.lazy(() => EventorUserIncludeSchema).optional(),
}).strict();

export const EventorUserSelectSchema: z.ZodType<Prisma.EventorUserSelect> = z.object({
  id: z.boolean().optional(),
  eventorId: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  role: z.boolean().optional(),
  eventor: z.union([z.boolean(),z.lazy(() => EventorArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Authenticator: z.union([z.boolean(),z.lazy(() => AuthenticatorFindManyArgsSchema)]).optional(),
  attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  scannerAttendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  eventorsUsers: z.union([z.boolean(),z.lazy(() => EventorUserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  accounts: z.boolean().optional(),
  sessions: z.boolean().optional(),
  Authenticator: z.boolean().optional(),
  attendance: z.boolean().optional(),
  scannerAttendance: z.boolean().optional(),
  eventorsUsers: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  emailVerified: z.boolean().optional(),
  image: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Authenticator: z.union([z.boolean(),z.lazy(() => AuthenticatorFindManyArgsSchema)]).optional(),
  attendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  scannerAttendance: z.union([z.boolean(),z.lazy(() => AttendanceFindManyArgsSchema)]).optional(),
  eventorsUsers: z.union([z.boolean(),z.lazy(() => EventorUserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ACCOUNT
//------------------------------------------------------

export const AccountIncludeSchema: z.ZodType<Prisma.AccountInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AccountArgsSchema: z.ZodType<Prisma.AccountDefaultArgs> = z.object({
  select: z.lazy(() => AccountSelectSchema).optional(),
  include: z.lazy(() => AccountIncludeSchema).optional(),
}).strict();

export const AccountSelectSchema: z.ZodType<Prisma.AccountSelect> = z.object({
  userId: z.boolean().optional(),
  type: z.boolean().optional(),
  provider: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  refresh_token: z.boolean().optional(),
  access_token: z.boolean().optional(),
  expires_at: z.boolean().optional(),
  token_type: z.boolean().optional(),
  scope: z.boolean().optional(),
  id_token: z.boolean().optional(),
  session_state: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// SESSION
//------------------------------------------------------

export const SessionIncludeSchema: z.ZodType<Prisma.SessionInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SessionArgsSchema: z.ZodType<Prisma.SessionDefaultArgs> = z.object({
  select: z.lazy(() => SessionSelectSchema).optional(),
  include: z.lazy(() => SessionIncludeSchema).optional(),
}).strict();

export const SessionSelectSchema: z.ZodType<Prisma.SessionSelect> = z.object({
  sessionToken: z.boolean().optional(),
  userId: z.boolean().optional(),
  expires: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// VERIFICATION TOKEN
//------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<Prisma.VerificationTokenSelect> = z.object({
  identifier: z.boolean().optional(),
  token: z.boolean().optional(),
  expires: z.boolean().optional(),
}).strict()

// AUTHENTICATOR
//------------------------------------------------------

export const AuthenticatorIncludeSchema: z.ZodType<Prisma.AuthenticatorInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AuthenticatorArgsSchema: z.ZodType<Prisma.AuthenticatorDefaultArgs> = z.object({
  select: z.lazy(() => AuthenticatorSelectSchema).optional(),
  include: z.lazy(() => AuthenticatorIncludeSchema).optional(),
}).strict();

export const AuthenticatorSelectSchema: z.ZodType<Prisma.AuthenticatorSelect> = z.object({
  credentialID: z.boolean().optional(),
  userId: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  credentialPublicKey: z.boolean().optional(),
  counter: z.boolean().optional(),
  credentialDeviceType: z.boolean().optional(),
  credentialBackedUp: z.boolean().optional(),
  transports: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AttendanceWhereInputSchema: z.ZodType<Prisma.AttendanceWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  time: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  eventId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scannedByUserId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  event: z.union([ z.lazy(() => EventScalarRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  scannedBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AttendanceOrderByWithRelationInputSchema: z.ZodType<Prisma.AttendanceOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  scannedByUserId: z.lazy(() => SortOrderSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  scannedBy: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AttendanceWhereUniqueInputSchema: z.ZodType<Prisma.AttendanceWhereUniqueInput> = z.object({
  id: z.bigint()
})
.and(z.object({
  id: z.bigint().optional(),
  AND: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceWhereInputSchema),z.lazy(() => AttendanceWhereInputSchema).array() ]).optional(),
  time: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  eventId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scannedByUserId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  event: z.union([ z.lazy(() => EventScalarRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  scannedBy: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AttendanceOrderByWithAggregationInputSchema: z.ZodType<Prisma.AttendanceOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  scannedByUserId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AttendanceCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AttendanceAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AttendanceMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AttendanceMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AttendanceSumOrderByAggregateInputSchema).optional()
}).strict();

export const AttendanceScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AttendanceScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema),z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema),z.lazy(() => AttendanceScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  time: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  eventId: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  scannedByUserId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EventWhereInputSchema: z.ZodType<Prisma.EventWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  eventorId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  eventor: z.union([ z.lazy(() => EventorScalarRelationFilterSchema),z.lazy(() => EventorWhereInputSchema) ]).optional(),
  attendance: z.lazy(() => AttendanceListRelationFilterSchema).optional()
}).strict();

export const EventOrderByWithRelationInputSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  eventor: z.lazy(() => EventorOrderByWithRelationInputSchema).optional(),
  attendance: z.lazy(() => AttendanceOrderByRelationAggregateInputSchema).optional()
}).strict();

export const EventWhereUniqueInputSchema: z.ZodType<Prisma.EventWhereUniqueInput> = z.object({
  id: z.bigint()
})
.and(z.object({
  id: z.bigint().optional(),
  AND: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  eventorId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  eventor: z.union([ z.lazy(() => EventorScalarRelationFilterSchema),z.lazy(() => EventorWhereInputSchema) ]).optional(),
  attendance: z.lazy(() => AttendanceListRelationFilterSchema).optional()
}).strict());

export const EventOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  location: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EventAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EventSumOrderByAggregateInputSchema).optional()
}).strict();

export const EventScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventScalarWhereWithAggregatesInputSchema),z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventScalarWhereWithAggregatesInputSchema),z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  eventorId: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const EventorWhereInputSchema: z.ZodType<Prisma.EventorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventorWhereInputSchema),z.lazy(() => EventorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventorWhereInputSchema),z.lazy(() => EventorWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  events: z.lazy(() => EventListRelationFilterSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserListRelationFilterSchema).optional()
}).strict();

export const EventorOrderByWithRelationInputSchema: z.ZodType<Prisma.EventorOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  events: z.lazy(() => EventOrderByRelationAggregateInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserOrderByRelationAggregateInputSchema).optional()
}).strict();

export const EventorWhereUniqueInputSchema: z.ZodType<Prisma.EventorWhereUniqueInput> = z.object({
  id: z.bigint()
})
.and(z.object({
  id: z.bigint().optional(),
  AND: z.union([ z.lazy(() => EventorWhereInputSchema),z.lazy(() => EventorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventorWhereInputSchema),z.lazy(() => EventorWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  events: z.lazy(() => EventListRelationFilterSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserListRelationFilterSchema).optional()
}).strict());

export const EventorOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventorOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EventorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EventorSumOrderByAggregateInputSchema).optional()
}).strict();

export const EventorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventorScalarWhereWithAggregatesInputSchema),z.lazy(() => EventorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventorScalarWhereWithAggregatesInputSchema),z.lazy(() => EventorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export const EventorUserWhereInputSchema: z.ZodType<Prisma.EventorUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventorUserWhereInputSchema),z.lazy(() => EventorUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventorUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventorUserWhereInputSchema),z.lazy(() => EventorUserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  eventorId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  eventor: z.union([ z.lazy(() => EventorScalarRelationFilterSchema),z.lazy(() => EventorWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const EventorUserOrderByWithRelationInputSchema: z.ZodType<Prisma.EventorUserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  eventor: z.lazy(() => EventorOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const EventorUserWhereUniqueInputSchema: z.ZodType<Prisma.EventorUserWhereUniqueInput> = z.object({
  id: z.bigint()
})
.and(z.object({
  id: z.bigint().optional(),
  AND: z.union([ z.lazy(() => EventorUserWhereInputSchema),z.lazy(() => EventorUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventorUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventorUserWhereInputSchema),z.lazy(() => EventorUserWhereInputSchema).array() ]).optional(),
  eventorId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
  eventor: z.union([ z.lazy(() => EventorScalarRelationFilterSchema),z.lazy(() => EventorWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const EventorUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventorUserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventorUserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EventorUserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventorUserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventorUserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EventorUserSumOrderByAggregateInputSchema).optional()
}).strict();

export const EventorUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventorUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventorUserScalarWhereWithAggregatesInputSchema),z.lazy(() => EventorUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventorUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventorUserScalarWhereWithAggregatesInputSchema),z.lazy(() => EventorUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  eventorId: z.union([ z.lazy(() => BigIntWithAggregatesFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleWithAggregatesFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorListRelationFilterSchema).optional(),
  attendance: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
  sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorOrderByRelationAggregateInputSchema).optional(),
  attendance: z.lazy(() => AttendanceOrderByRelationAggregateInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceOrderByRelationAggregateInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorListRelationFilterSchema).optional(),
  attendance: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceListRelationFilterSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AccountWhereInputSchema: z.ZodType<Prisma.AccountWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<Prisma.AccountOrderByWithRelationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AccountWhereUniqueInputSchema: z.ZodType<Prisma.AccountWhereUniqueInput> = z.object({
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema)
})
.and(z.object({
  provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountWhereInputSchema),z.lazy(() => AccountWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AccountOrderByWithAggregationInputSchema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  access_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  expires_at: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  token_type: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  scope: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  id_token: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  session_state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional()
}).strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AccountScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionWhereInputSchema: z.ZodType<Prisma.SessionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<Prisma.SessionOrderByWithRelationInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const SessionWhereUniqueInputSchema: z.ZodType<Prisma.SessionWhereUniqueInput> = z.object({
  sessionToken: z.string()
})
.and(z.object({
  sessionToken: z.string().optional(),
  AND: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionWhereInputSchema),z.lazy(() => SessionWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const SessionOrderByWithAggregationInputSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional()
}).strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SessionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenWhereInputSchema: z.ZodType<Prisma.VerificationTokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithRelationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<Prisma.VerificationTokenWhereUniqueInput> = z.object({
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema)
})
.and(z.object({
  identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenWhereInputSchema),z.lazy(() => VerificationTokenWhereInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict());

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.VerificationTokenOrderByWithAggregationInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VerificationTokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  identifier: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  token: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AuthenticatorWhereInputSchema: z.ZodType<Prisma.AuthenticatorWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  credentialID: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const AuthenticatorOrderByWithRelationInputSchema: z.ZodType<Prisma.AuthenticatorOrderByWithRelationInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const AuthenticatorWhereUniqueInputSchema: z.ZodType<Prisma.AuthenticatorWhereUniqueInput> = z.union([
  z.object({
    userId_credentialID: z.lazy(() => AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema),
    credentialID: z.string()
  }),
  z.object({
    userId_credentialID: z.lazy(() => AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema),
  }),
  z.object({
    credentialID: z.string(),
  }),
])
.and(z.object({
  credentialID: z.string().optional(),
  userId_credentialID: z.lazy(() => AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorWhereInputSchema),z.lazy(() => AuthenticatorWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const AuthenticatorOrderByWithAggregationInputSchema: z.ZodType<Prisma.AuthenticatorOrderByWithAggregationInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AuthenticatorCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AuthenticatorAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AuthenticatorMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AuthenticatorMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AuthenticatorSumOrderByAggregateInputSchema).optional()
}).strict();

export const AuthenticatorScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AuthenticatorScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema),z.lazy(() => AuthenticatorScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  credentialID: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AttendanceCreateInputSchema: z.ZodType<Prisma.AttendanceCreateInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutAttendanceInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutAttendanceInputSchema),
  scannedBy: z.lazy(() => UserCreateNestedOneWithoutScannerAttendanceInputSchema)
}).strict();

export const AttendanceUncheckedCreateInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  eventId: z.bigint(),
  userId: z.string(),
  scannedByUserId: z.string()
}).strict();

export const AttendanceUpdateInputSchema: z.ZodType<Prisma.AttendanceUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  scannedBy: z.lazy(() => UserUpdateOneRequiredWithoutScannerAttendanceNestedInputSchema).optional()
}).strict();

export const AttendanceUncheckedUpdateInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scannedByUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AttendanceCreateManyInputSchema: z.ZodType<Prisma.AttendanceCreateManyInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  eventId: z.bigint(),
  userId: z.string(),
  scannedByUserId: z.string()
}).strict();

export const AttendanceUpdateManyMutationInputSchema: z.ZodType<Prisma.AttendanceUpdateManyMutationInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AttendanceUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scannedByUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventCreateInputSchema: z.ZodType<Prisma.EventCreateInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  eventor: z.lazy(() => EventorCreateNestedOneWithoutEventsInputSchema),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateInputSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  eventorId: z.bigint(),
  isActive: z.boolean().optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUpdateInputSchema: z.ZodType<Prisma.EventUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventor: z.lazy(() => EventorUpdateOneRequiredWithoutEventsNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateInputSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  eventorId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventCreateManyInputSchema: z.ZodType<Prisma.EventCreateManyInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  eventorId: z.bigint(),
  isActive: z.boolean().optional()
}).strict();

export const EventUpdateManyMutationInputSchema: z.ZodType<Prisma.EventUpdateManyMutationInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  eventorId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorCreateInputSchema: z.ZodType<Prisma.EventorCreateInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutEventorInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutEventorInputSchema).optional()
}).strict();

export const EventorUncheckedCreateInputSchema: z.ZodType<Prisma.EventorUncheckedCreateInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutEventorInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutEventorInputSchema).optional()
}).strict();

export const EventorUpdateInputSchema: z.ZodType<Prisma.EventorUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => EventUpdateManyWithoutEventorNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutEventorNestedInputSchema).optional()
}).strict();

export const EventorUncheckedUpdateInputSchema: z.ZodType<Prisma.EventorUncheckedUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutEventorNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutEventorNestedInputSchema).optional()
}).strict();

export const EventorCreateManyInputSchema: z.ZodType<Prisma.EventorCreateManyInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional()
}).strict();

export const EventorUpdateManyMutationInputSchema: z.ZodType<Prisma.EventorUpdateManyMutationInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventorUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUserCreateInputSchema: z.ZodType<Prisma.EventorUserCreateInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema),
  eventor: z.lazy(() => EventorCreateNestedOneWithoutEventorsUsersInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutEventorsUsersInputSchema)
}).strict();

export const EventorUserUncheckedCreateInputSchema: z.ZodType<Prisma.EventorUserUncheckedCreateInput> = z.object({
  id: z.bigint().optional(),
  eventorId: z.bigint(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema)
}).strict();

export const EventorUserUpdateInputSchema: z.ZodType<Prisma.EventorUserUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  eventor: z.lazy(() => EventorUpdateOneRequiredWithoutEventorsUsersNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutEventorsUsersNestedInputSchema).optional()
}).strict();

export const EventorUserUncheckedUpdateInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  eventorId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUserCreateManyInputSchema: z.ZodType<Prisma.EventorUserCreateManyInput> = z.object({
  id: z.bigint().optional(),
  eventorId: z.bigint(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema)
}).strict();

export const EventorUserUpdateManyMutationInputSchema: z.ZodType<Prisma.EventorUserUpdateManyMutationInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  eventorId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateInputSchema: z.ZodType<Prisma.AccountCreateInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema)
}).strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<Prisma.AccountUncheckedCreateInput> = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateInputSchema: z.ZodType<Prisma.AccountUpdateInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional()
}).strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyInputSchema: z.ZodType<Prisma.AccountCreateManyInput> = z.object({
  userId: z.string(),
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<Prisma.AccountUpdateManyMutationInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyInput> = z.object({
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateInputSchema: z.ZodType<Prisma.SessionCreateInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema)
}).strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<Prisma.SessionUncheckedCreateInput> = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateInputSchema: z.ZodType<Prisma.SessionUpdateInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional()
}).strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionCreateManyInputSchema: z.ZodType<Prisma.SessionCreateManyInput> = z.object({
  sessionToken: z.string(),
  userId: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<Prisma.SessionUpdateManyMutationInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateInputSchema: z.ZodType<Prisma.VerificationTokenCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedCreateInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<Prisma.VerificationTokenCreateManyInput> = z.object({
  identifier: z.string(),
  token: z.string(),
  expires: z.coerce.date()
}).strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<Prisma.VerificationTokenUpdateManyMutationInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.VerificationTokenUncheckedUpdateManyInput> = z.object({
  identifier: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  token: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthenticatorCreateInputSchema: z.ZodType<Prisma.AuthenticatorCreateInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable(),
  user: z.lazy(() => UserCreateNestedOneWithoutAuthenticatorInputSchema)
}).strict();

export const AuthenticatorUncheckedCreateInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedCreateInput> = z.object({
  credentialID: z.string(),
  userId: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorUpdateInputSchema: z.ZodType<Prisma.AuthenticatorUpdateInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAuthenticatorNestedInputSchema).optional()
}).strict();

export const AuthenticatorUncheckedUpdateInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorCreateManyInputSchema: z.ZodType<Prisma.AuthenticatorCreateManyInput> = z.object({
  credentialID: z.string(),
  userId: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorUpdateManyMutationInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyMutationInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateManyInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BigIntFilterSchema: z.ZodType<Prisma.BigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const EventScalarRelationFilterSchema: z.ZodType<Prisma.EventScalarRelationFilter> = z.object({
  is: z.lazy(() => EventWhereInputSchema).optional(),
  isNot: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const UserScalarRelationFilterSchema: z.ZodType<Prisma.UserScalarRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const AttendanceCountOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  scannedByUserId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AttendanceAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AttendanceMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  scannedByUserId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AttendanceMinOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  time: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  scannedByUserId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AttendanceSumOrderByAggregateInputSchema: z.ZodType<Prisma.AttendanceSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BigIntWithAggregatesFilterSchema: z.ZodType<Prisma.BigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const EventorScalarRelationFilterSchema: z.ZodType<Prisma.EventorScalarRelationFilter> = z.object({
  is: z.lazy(() => EventorWhereInputSchema).optional(),
  isNot: z.lazy(() => EventorWhereInputSchema).optional()
}).strict();

export const AttendanceListRelationFilterSchema: z.ZodType<Prisma.AttendanceListRelationFilter> = z.object({
  every: z.lazy(() => AttendanceWhereInputSchema).optional(),
  some: z.lazy(() => AttendanceWhereInputSchema).optional(),
  none: z.lazy(() => AttendanceWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const AttendanceOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AttendanceOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EventAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventSumOrderByAggregateInputSchema: z.ZodType<Prisma.EventSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const EventListRelationFilterSchema: z.ZodType<Prisma.EventListRelationFilter> = z.object({
  every: z.lazy(() => EventWhereInputSchema).optional(),
  some: z.lazy(() => EventWhereInputSchema).optional(),
  none: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventorUserListRelationFilterSchema: z.ZodType<Prisma.EventorUserListRelationFilter> = z.object({
  every: z.lazy(() => EventorUserWhereInputSchema).optional(),
  some: z.lazy(() => EventorUserWhereInputSchema).optional(),
  none: z.lazy(() => EventorUserWhereInputSchema).optional()
}).strict();

export const EventOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EventOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorUserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EventorUserOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventorCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EventorAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventorMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventorMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorSumOrderByAggregateInputSchema: z.ZodType<Prisma.EventorSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumUserRoleFilterSchema: z.ZodType<Prisma.EnumUserRoleFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleFilterSchema) ]).optional(),
}).strict();

export const EventorUserCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventorUserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorUserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EventorUserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorUserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventorUserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorUserMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventorUserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventorUserSumOrderByAggregateInputSchema: z.ZodType<Prisma.EventorUserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  eventorId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountListRelationFilterSchema: z.ZodType<Prisma.AccountListRelationFilter> = z.object({
  every: z.lazy(() => AccountWhereInputSchema).optional(),
  some: z.lazy(() => AccountWhereInputSchema).optional(),
  none: z.lazy(() => AccountWhereInputSchema).optional()
}).strict();

export const SessionListRelationFilterSchema: z.ZodType<Prisma.SessionListRelationFilter> = z.object({
  every: z.lazy(() => SessionWhereInputSchema).optional(),
  some: z.lazy(() => SessionWhereInputSchema).optional(),
  none: z.lazy(() => SessionWhereInputSchema).optional()
}).strict();

export const AuthenticatorListRelationFilterSchema: z.ZodType<Prisma.AuthenticatorListRelationFilter> = z.object({
  every: z.lazy(() => AuthenticatorWhereInputSchema).optional(),
  some: z.lazy(() => AuthenticatorWhereInputSchema).optional(),
  none: z.lazy(() => AuthenticatorWhereInputSchema).optional()
}).strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AccountOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SessionOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AuthenticatorOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  emailVerified: z.lazy(() => SortOrderSchema).optional(),
  image: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> = z.object({
  provider: z.string(),
  providerAccountId: z.string()
}).strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<Prisma.AccountCountOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AccountAvgOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMaxOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<Prisma.AccountMinOrderByAggregateInput> = z.object({
  userId: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  provider: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  refresh_token: z.lazy(() => SortOrderSchema).optional(),
  access_token: z.lazy(() => SortOrderSchema).optional(),
  expires_at: z.lazy(() => SortOrderSchema).optional(),
  token_type: z.lazy(() => SortOrderSchema).optional(),
  scope: z.lazy(() => SortOrderSchema).optional(),
  id_token: z.lazy(() => SortOrderSchema).optional(),
  session_state: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<Prisma.AccountSumOrderByAggregateInput> = z.object({
  expires_at: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<Prisma.SessionCountOrderByAggregateInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMaxOrderByAggregateInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<Prisma.SessionMinOrderByAggregateInput> = z.object({
  sessionToken: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> = z.object({
  identifier: z.string(),
  token: z.string()
}).strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenCountOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMaxOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.VerificationTokenMinOrderByAggregateInput> = z.object({
  identifier: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  expires: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema: z.ZodType<Prisma.AuthenticatorUserIdCredentialIDCompoundUniqueInput> = z.object({
  userId: z.string(),
  credentialID: z.string()
}).strict();

export const AuthenticatorCountOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorCountOrderByAggregateInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorAvgOrderByAggregateInput> = z.object({
  counter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorMaxOrderByAggregateInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorMinOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorMinOrderByAggregateInput> = z.object({
  credentialID: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  providerAccountId: z.lazy(() => SortOrderSchema).optional(),
  credentialPublicKey: z.lazy(() => SortOrderSchema).optional(),
  counter: z.lazy(() => SortOrderSchema).optional(),
  credentialDeviceType: z.lazy(() => SortOrderSchema).optional(),
  credentialBackedUp: z.lazy(() => SortOrderSchema).optional(),
  transports: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AuthenticatorSumOrderByAggregateInputSchema: z.ZodType<Prisma.AuthenticatorSumOrderByAggregateInput> = z.object({
  counter: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const EventCreateNestedOneWithoutAttendanceInputSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutAttendanceInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutAttendanceInputSchema),z.lazy(() => EventUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutAttendanceInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAttendanceInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutScannerAttendanceInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutScannerAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutScannerAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutScannerAttendanceInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const BigIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BigIntFieldUpdateOperationsInput> = z.object({
  set: z.bigint().optional(),
  increment: z.bigint().optional(),
  decrement: z.bigint().optional(),
  multiply: z.bigint().optional(),
  divide: z.bigint().optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const EventUpdateOneRequiredWithoutAttendanceNestedInputSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutAttendanceNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutAttendanceInputSchema),z.lazy(() => EventUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutAttendanceInputSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventUpdateToOneWithWhereWithoutAttendanceInputSchema),z.lazy(() => EventUpdateWithoutAttendanceInputSchema),z.lazy(() => EventUncheckedUpdateWithoutAttendanceInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutAttendanceNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAttendanceNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAttendanceInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAttendanceInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAttendanceInputSchema),z.lazy(() => UserUpdateWithoutAttendanceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAttendanceInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutScannerAttendanceNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutScannerAttendanceNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutScannerAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutScannerAttendanceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutScannerAttendanceInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutScannerAttendanceInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutScannerAttendanceInputSchema),z.lazy(() => UserUpdateWithoutScannerAttendanceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutScannerAttendanceInputSchema) ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const EventorCreateNestedOneWithoutEventsInputSchema: z.ZodType<Prisma.EventorCreateNestedOneWithoutEventsInput> = z.object({
  create: z.union([ z.lazy(() => EventorCreateWithoutEventsInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventorCreateOrConnectWithoutEventsInputSchema).optional(),
  connect: z.lazy(() => EventorWhereUniqueInputSchema).optional()
}).strict();

export const AttendanceCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.AttendanceCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutEventInputSchema),z.lazy(() => AttendanceCreateWithoutEventInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUncheckedCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutEventInputSchema),z.lazy(() => AttendanceCreateWithoutEventInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const EventorUpdateOneRequiredWithoutEventsNestedInputSchema: z.ZodType<Prisma.EventorUpdateOneRequiredWithoutEventsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventorCreateWithoutEventsInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventorCreateOrConnectWithoutEventsInputSchema).optional(),
  upsert: z.lazy(() => EventorUpsertWithoutEventsInputSchema).optional(),
  connect: z.lazy(() => EventorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventorUpdateToOneWithWhereWithoutEventsInputSchema),z.lazy(() => EventorUpdateWithoutEventsInputSchema),z.lazy(() => EventorUncheckedUpdateWithoutEventsInputSchema) ]).optional(),
}).strict();

export const AttendanceUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutEventInputSchema),z.lazy(() => AttendanceCreateWithoutEventInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUncheckedUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutEventInputSchema),z.lazy(() => AttendanceCreateWithoutEventInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventCreateNestedManyWithoutEventorInputSchema: z.ZodType<Prisma.EventCreateNestedManyWithoutEventorInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutEventorInputSchema),z.lazy(() => EventCreateWithoutEventorInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyEventorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventorUserCreateNestedManyWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserCreateNestedManyWithoutEventorInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutEventorInputSchema),z.lazy(() => EventorUserCreateWithoutEventorInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyEventorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedCreateNestedManyWithoutEventorInputSchema: z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutEventorInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutEventorInputSchema),z.lazy(() => EventCreateWithoutEventorInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyEventorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventorUserUncheckedCreateNestedManyWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUncheckedCreateNestedManyWithoutEventorInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutEventorInputSchema),z.lazy(() => EventorUserCreateWithoutEventorInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyEventorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventUpdateManyWithoutEventorNestedInputSchema: z.ZodType<Prisma.EventUpdateManyWithoutEventorNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutEventorInputSchema),z.lazy(() => EventCreateWithoutEventorInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventUpsertWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventUpsertWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyEventorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventUpdateWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventUpdateWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventUpdateManyWithWhereWithoutEventorInputSchema),z.lazy(() => EventUpdateManyWithWhereWithoutEventorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventorUserUpdateManyWithoutEventorNestedInputSchema: z.ZodType<Prisma.EventorUserUpdateManyWithoutEventorNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutEventorInputSchema),z.lazy(() => EventorUserCreateWithoutEventorInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyEventorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventorUserUpdateManyWithWhereWithoutEventorInputSchema),z.lazy(() => EventorUserUpdateManyWithWhereWithoutEventorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventorUserScalarWhereInputSchema),z.lazy(() => EventorUserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateManyWithoutEventorNestedInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutEventorNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutEventorInputSchema),z.lazy(() => EventCreateWithoutEventorInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventUpsertWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventUpsertWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyEventorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventUpdateWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventUpdateWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventUpdateManyWithWhereWithoutEventorInputSchema),z.lazy(() => EventUpdateManyWithWhereWithoutEventorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventorUserUncheckedUpdateManyWithoutEventorNestedInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateManyWithoutEventorNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutEventorInputSchema),z.lazy(() => EventorUserCreateWithoutEventorInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutEventorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyEventorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutEventorInputSchema),z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutEventorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventorUserUpdateManyWithWhereWithoutEventorInputSchema),z.lazy(() => EventorUserUpdateManyWithWhereWithoutEventorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventorUserScalarWhereInputSchema),z.lazy(() => EventorUserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventorCreateNestedOneWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorCreateNestedOneWithoutEventorsUsersInput> = z.object({
  create: z.union([ z.lazy(() => EventorCreateWithoutEventorsUsersInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventorsUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventorCreateOrConnectWithoutEventorsUsersInputSchema).optional(),
  connect: z.lazy(() => EventorWhereUniqueInputSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEventorsUsersInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutEventorsUsersInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventorsUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventorsUsersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumUserRoleFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserRoleFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => UserRoleSchema).optional()
}).strict();

export const EventorUpdateOneRequiredWithoutEventorsUsersNestedInputSchema: z.ZodType<Prisma.EventorUpdateOneRequiredWithoutEventorsUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventorCreateWithoutEventorsUsersInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventorsUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventorCreateOrConnectWithoutEventorsUsersInputSchema).optional(),
  upsert: z.lazy(() => EventorUpsertWithoutEventorsUsersInputSchema).optional(),
  connect: z.lazy(() => EventorWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventorUpdateToOneWithWhereWithoutEventorsUsersInputSchema),z.lazy(() => EventorUpdateWithoutEventorsUsersInputSchema),z.lazy(() => EventorUncheckedUpdateWithoutEventorsUsersInputSchema) ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutEventorsUsersNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEventorsUsersNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutEventorsUsersInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventorsUsersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventorsUsersInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutEventorsUsersInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutEventorsUsersInputSchema),z.lazy(() => UserUpdateWithoutEventorsUsersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEventorsUsersInputSchema) ]).optional(),
}).strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AttendanceCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AttendanceCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutUserInputSchema),z.lazy(() => AttendanceCreateWithoutUserInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AttendanceCreateNestedManyWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceCreateNestedManyWithoutScannedByInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateWithoutScannedByInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyScannedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventorUserCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.EventorUserCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutUserInputSchema),z.lazy(() => EventorUserCreateWithoutUserInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutUserInputSchema),z.lazy(() => AttendanceCreateWithoutUserInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUncheckedCreateNestedManyWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateNestedManyWithoutScannedByInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateWithoutScannedByInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyScannedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventorUserUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutUserInputSchema),z.lazy(() => EventorUserCreateWithoutUserInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutUserInputSchema),z.lazy(() => AttendanceCreateWithoutUserInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUpdateManyWithoutScannedByNestedInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithoutScannedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateWithoutScannedByInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutScannedByInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutScannedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyScannedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutScannedByInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutScannedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutScannedByInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutScannedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventorUserUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.EventorUserUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutUserInputSchema),z.lazy(() => EventorUserCreateWithoutUserInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventorUserUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => EventorUserUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventorUserScalarWhereInputSchema),z.lazy(() => EventorUserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountCreateWithoutUserInputSchema).array(),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AccountWhereUniqueInputSchema),z.lazy(() => AccountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionCreateWithoutUserInputSchema).array(),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SessionWhereUniqueInputSchema),z.lazy(() => SessionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutUserInputSchema),z.lazy(() => AttendanceCreateWithoutUserInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AttendanceUncheckedUpdateManyWithoutScannedByNestedInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutScannedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => AttendanceCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateWithoutScannedByInputSchema).array(),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema),z.lazy(() => AttendanceCreateOrConnectWithoutScannedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutScannedByInputSchema),z.lazy(() => AttendanceUpsertWithWhereUniqueWithoutScannedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AttendanceCreateManyScannedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AttendanceWhereUniqueInputSchema),z.lazy(() => AttendanceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutScannedByInputSchema),z.lazy(() => AttendanceUpdateWithWhereUniqueWithoutScannedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AttendanceUpdateManyWithWhereWithoutScannedByInputSchema),z.lazy(() => AttendanceUpdateManyWithWhereWithoutScannedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventorUserUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventorUserCreateWithoutUserInputSchema),z.lazy(() => EventorUserCreateWithoutUserInputSchema).array(),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema),z.lazy(() => EventorUserCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EventorUserUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventorUserCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventorUserWhereUniqueInputSchema),z.lazy(() => EventorUserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => EventorUserUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventorUserUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => EventorUserUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventorUserScalarWhereInputSchema),z.lazy(() => EventorUserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAccountsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAccountsInputSchema),z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSessionsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSessionsInputSchema),z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuthenticatorInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthenticatorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutAuthenticatorNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuthenticatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthenticatorInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuthenticatorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAuthenticatorInputSchema),z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]).optional(),
}).strict();

export const NestedBigIntFilterSchema: z.ZodType<Prisma.NestedBigIntFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedBigIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBigIntWithAggregatesFilter> = z.object({
  equals: z.bigint().optional(),
  in: z.bigint().array().optional(),
  notIn: z.bigint().array().optional(),
  lt: z.bigint().optional(),
  lte: z.bigint().optional(),
  gt: z.bigint().optional(),
  gte: z.bigint().optional(),
  not: z.union([ z.bigint(),z.lazy(() => NestedBigIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBigIntFilterSchema).optional(),
  _max: z.lazy(() => NestedBigIntFilterSchema).optional()
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedEnumUserRoleFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleFilterSchema) ]).optional(),
}).strict();

export const NestedEnumUserRoleWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumUserRoleWithAggregatesFilter> = z.object({
  equals: z.lazy(() => UserRoleSchema).optional(),
  in: z.lazy(() => UserRoleSchema).array().optional(),
  notIn: z.lazy(() => UserRoleSchema).array().optional(),
  not: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => NestedEnumUserRoleWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserRoleFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserRoleFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const EventCreateWithoutAttendanceInputSchema: z.ZodType<Prisma.EventCreateWithoutAttendanceInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  eventor: z.lazy(() => EventorCreateNestedOneWithoutEventsInputSchema)
}).strict();

export const EventUncheckedCreateWithoutAttendanceInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutAttendanceInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  eventorId: z.bigint(),
  isActive: z.boolean().optional()
}).strict();

export const EventCreateOrConnectWithoutAttendanceInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutAttendanceInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutAttendanceInputSchema),z.lazy(() => EventUncheckedCreateWithoutAttendanceInputSchema) ]),
}).strict();

export const UserCreateWithoutAttendanceInputSchema: z.ZodType<Prisma.UserCreateWithoutAttendanceInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAttendanceInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAttendanceInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAttendanceInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAttendanceInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutAttendanceInputSchema) ]),
}).strict();

export const UserCreateWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserCreateWithoutScannerAttendanceInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutUserInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutScannerAttendanceInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutScannerAttendanceInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutScannerAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutScannerAttendanceInputSchema) ]),
}).strict();

export const EventUpsertWithoutAttendanceInputSchema: z.ZodType<Prisma.EventUpsertWithoutAttendanceInput> = z.object({
  update: z.union([ z.lazy(() => EventUpdateWithoutAttendanceInputSchema),z.lazy(() => EventUncheckedUpdateWithoutAttendanceInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutAttendanceInputSchema),z.lazy(() => EventUncheckedCreateWithoutAttendanceInputSchema) ]),
  where: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventUpdateToOneWithWhereWithoutAttendanceInputSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutAttendanceInput> = z.object({
  where: z.lazy(() => EventWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventUpdateWithoutAttendanceInputSchema),z.lazy(() => EventUncheckedUpdateWithoutAttendanceInputSchema) ]),
}).strict();

export const EventUpdateWithoutAttendanceInputSchema: z.ZodType<Prisma.EventUpdateWithoutAttendanceInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventor: z.lazy(() => EventorUpdateOneRequiredWithoutEventsNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateWithoutAttendanceInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutAttendanceInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  eventorId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUpsertWithoutAttendanceInputSchema: z.ZodType<Prisma.UserUpsertWithoutAttendanceInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAttendanceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAttendanceInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutAttendanceInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAttendanceInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAttendanceInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAttendanceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAttendanceInputSchema) ]),
}).strict();

export const UserUpdateWithoutAttendanceInputSchema: z.ZodType<Prisma.UserUpdateWithoutAttendanceInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAttendanceInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAttendanceInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserUpsertWithoutScannerAttendanceInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutScannerAttendanceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutScannerAttendanceInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutScannerAttendanceInputSchema),z.lazy(() => UserUncheckedCreateWithoutScannerAttendanceInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutScannerAttendanceInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutScannerAttendanceInputSchema),z.lazy(() => UserUncheckedUpdateWithoutScannerAttendanceInputSchema) ]),
}).strict();

export const UserUpdateWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserUpdateWithoutScannerAttendanceInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutUserNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutScannerAttendanceInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutScannerAttendanceInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const EventorCreateWithoutEventsInputSchema: z.ZodType<Prisma.EventorCreateWithoutEventsInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutEventorInputSchema).optional()
}).strict();

export const EventorUncheckedCreateWithoutEventsInputSchema: z.ZodType<Prisma.EventorUncheckedCreateWithoutEventsInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutEventorInputSchema).optional()
}).strict();

export const EventorCreateOrConnectWithoutEventsInputSchema: z.ZodType<Prisma.EventorCreateOrConnectWithoutEventsInput> = z.object({
  where: z.lazy(() => EventorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventorCreateWithoutEventsInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventsInputSchema) ]),
}).strict();

export const AttendanceCreateWithoutEventInputSchema: z.ZodType<Prisma.AttendanceCreateWithoutEventInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAttendanceInputSchema),
  scannedBy: z.lazy(() => UserCreateNestedOneWithoutScannerAttendanceInputSchema)
}).strict();

export const AttendanceUncheckedCreateWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateWithoutEventInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  userId: z.string(),
  scannedByUserId: z.string()
}).strict();

export const AttendanceCreateOrConnectWithoutEventInputSchema: z.ZodType<Prisma.AttendanceCreateOrConnectWithoutEventInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const AttendanceCreateManyEventInputEnvelopeSchema: z.ZodType<Prisma.AttendanceCreateManyEventInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AttendanceCreateManyEventInputSchema),z.lazy(() => AttendanceCreateManyEventInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const EventorUpsertWithoutEventsInputSchema: z.ZodType<Prisma.EventorUpsertWithoutEventsInput> = z.object({
  update: z.union([ z.lazy(() => EventorUpdateWithoutEventsInputSchema),z.lazy(() => EventorUncheckedUpdateWithoutEventsInputSchema) ]),
  create: z.union([ z.lazy(() => EventorCreateWithoutEventsInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventsInputSchema) ]),
  where: z.lazy(() => EventorWhereInputSchema).optional()
}).strict();

export const EventorUpdateToOneWithWhereWithoutEventsInputSchema: z.ZodType<Prisma.EventorUpdateToOneWithWhereWithoutEventsInput> = z.object({
  where: z.lazy(() => EventorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventorUpdateWithoutEventsInputSchema),z.lazy(() => EventorUncheckedUpdateWithoutEventsInputSchema) ]),
}).strict();

export const EventorUpdateWithoutEventsInputSchema: z.ZodType<Prisma.EventorUpdateWithoutEventsInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutEventorNestedInputSchema).optional()
}).strict();

export const EventorUncheckedUpdateWithoutEventsInputSchema: z.ZodType<Prisma.EventorUncheckedUpdateWithoutEventsInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutEventorNestedInputSchema).optional()
}).strict();

export const AttendanceUpsertWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceUpdateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutEventInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const AttendanceUpdateWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateWithoutEventInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutEventInputSchema) ]),
}).strict();

export const AttendanceUpdateManyWithWhereWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutEventInput> = z.object({
  where: z.lazy(() => AttendanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateManyMutationInputSchema),z.lazy(() => AttendanceUncheckedUpdateManyWithoutEventInputSchema) ]),
}).strict();

export const AttendanceScalarWhereInputSchema: z.ZodType<Prisma.AttendanceScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttendanceScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttendanceScalarWhereInputSchema),z.lazy(() => AttendanceScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  time: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  eventId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  scannedByUserId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const EventCreateWithoutEventorInputSchema: z.ZodType<Prisma.EventCreateWithoutEventorInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateWithoutEventorInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutEventorInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventCreateOrConnectWithoutEventorInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutEventorInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutEventorInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema) ]),
}).strict();

export const EventCreateManyEventorInputEnvelopeSchema: z.ZodType<Prisma.EventCreateManyEventorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EventCreateManyEventorInputSchema),z.lazy(() => EventCreateManyEventorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const EventorUserCreateWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserCreateWithoutEventorInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutEventorsUsersInputSchema)
}).strict();

export const EventorUserUncheckedCreateWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUncheckedCreateWithoutEventorInput> = z.object({
  id: z.bigint().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema)
}).strict();

export const EventorUserCreateOrConnectWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserCreateOrConnectWithoutEventorInput> = z.object({
  where: z.lazy(() => EventorUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventorUserCreateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema) ]),
}).strict();

export const EventorUserCreateManyEventorInputEnvelopeSchema: z.ZodType<Prisma.EventorUserCreateManyEventorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EventorUserCreateManyEventorInputSchema),z.lazy(() => EventorUserCreateManyEventorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const EventUpsertWithWhereUniqueWithoutEventorInputSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutEventorInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EventUpdateWithoutEventorInputSchema),z.lazy(() => EventUncheckedUpdateWithoutEventorInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutEventorInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventorInputSchema) ]),
}).strict();

export const EventUpdateWithWhereUniqueWithoutEventorInputSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutEventorInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EventUpdateWithoutEventorInputSchema),z.lazy(() => EventUncheckedUpdateWithoutEventorInputSchema) ]),
}).strict();

export const EventUpdateManyWithWhereWithoutEventorInputSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutEventorInput> = z.object({
  where: z.lazy(() => EventScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EventUpdateManyMutationInputSchema),z.lazy(() => EventUncheckedUpdateManyWithoutEventorInputSchema) ]),
}).strict();

export const EventScalarWhereInputSchema: z.ZodType<Prisma.EventScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  location: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  eventorId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export const EventorUserUpsertWithWhereUniqueWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUpsertWithWhereUniqueWithoutEventorInput> = z.object({
  where: z.lazy(() => EventorUserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EventorUserUpdateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedUpdateWithoutEventorInputSchema) ]),
  create: z.union([ z.lazy(() => EventorUserCreateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutEventorInputSchema) ]),
}).strict();

export const EventorUserUpdateWithWhereUniqueWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUpdateWithWhereUniqueWithoutEventorInput> = z.object({
  where: z.lazy(() => EventorUserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EventorUserUpdateWithoutEventorInputSchema),z.lazy(() => EventorUserUncheckedUpdateWithoutEventorInputSchema) ]),
}).strict();

export const EventorUserUpdateManyWithWhereWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUpdateManyWithWhereWithoutEventorInput> = z.object({
  where: z.lazy(() => EventorUserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EventorUserUpdateManyMutationInputSchema),z.lazy(() => EventorUserUncheckedUpdateManyWithoutEventorInputSchema) ]),
}).strict();

export const EventorUserScalarWhereInputSchema: z.ZodType<Prisma.EventorUserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventorUserScalarWhereInputSchema),z.lazy(() => EventorUserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventorUserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventorUserScalarWhereInputSchema),z.lazy(() => EventorUserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  eventorId: z.union([ z.lazy(() => BigIntFilterSchema),z.bigint() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  role: z.union([ z.lazy(() => EnumUserRoleFilterSchema),z.lazy(() => UserRoleSchema) ]).optional(),
}).strict();

export const EventorCreateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorCreateWithoutEventorsUsersInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutEventorInputSchema).optional()
}).strict();

export const EventorUncheckedCreateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorUncheckedCreateWithoutEventorsUsersInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  isActive: z.boolean().optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutEventorInputSchema).optional()
}).strict();

export const EventorCreateOrConnectWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorCreateOrConnectWithoutEventorsUsersInput> = z.object({
  where: z.lazy(() => EventorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventorCreateWithoutEventorsUsersInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventorsUsersInputSchema) ]),
}).strict();

export const UserCreateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserCreateWithoutEventorsUsersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceCreateNestedManyWithoutScannedByInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutEventorsUsersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutScannedByInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEventorsUsersInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutEventorsUsersInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventorsUsersInputSchema) ]),
}).strict();

export const EventorUpsertWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorUpsertWithoutEventorsUsersInput> = z.object({
  update: z.union([ z.lazy(() => EventorUpdateWithoutEventorsUsersInputSchema),z.lazy(() => EventorUncheckedUpdateWithoutEventorsUsersInputSchema) ]),
  create: z.union([ z.lazy(() => EventorCreateWithoutEventorsUsersInputSchema),z.lazy(() => EventorUncheckedCreateWithoutEventorsUsersInputSchema) ]),
  where: z.lazy(() => EventorWhereInputSchema).optional()
}).strict();

export const EventorUpdateToOneWithWhereWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorUpdateToOneWithWhereWithoutEventorsUsersInput> = z.object({
  where: z.lazy(() => EventorWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventorUpdateWithoutEventorsUsersInputSchema),z.lazy(() => EventorUncheckedUpdateWithoutEventorsUsersInputSchema) ]),
}).strict();

export const EventorUpdateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorUpdateWithoutEventorsUsersInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => EventUpdateManyWithoutEventorNestedInputSchema).optional()
}).strict();

export const EventorUncheckedUpdateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.EventorUncheckedUpdateWithoutEventorsUsersInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutEventorNestedInputSchema).optional()
}).strict();

export const UserUpsertWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserUpsertWithoutEventorsUsersInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutEventorsUsersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEventorsUsersInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutEventorsUsersInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventorsUsersInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEventorsUsersInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutEventorsUsersInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEventorsUsersInputSchema) ]),
}).strict();

export const UserUpdateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserUpdateWithoutEventorsUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUpdateManyWithoutScannedByNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutEventorsUsersInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutEventorsUsersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutScannedByNestedInputSchema).optional()
}).strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedCreateWithoutUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AccountCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AccountCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AccountCreateManyUserInputSchema),z.lazy(() => AccountCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedCreateWithoutUserInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SessionCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.SessionCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => SessionCreateManyUserInputSchema),z.lazy(() => SessionCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AuthenticatorCreateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateWithoutUserInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedCreateWithoutUserInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AuthenticatorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AuthenticatorCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuthenticatorCreateManyUserInputSchema),z.lazy(() => AuthenticatorCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AttendanceCreateWithoutUserInputSchema: z.ZodType<Prisma.AttendanceCreateWithoutUserInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutAttendanceInputSchema),
  scannedBy: z.lazy(() => UserCreateNestedOneWithoutScannerAttendanceInputSchema)
}).strict();

export const AttendanceUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateWithoutUserInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  eventId: z.bigint(),
  scannedByUserId: z.string()
}).strict();

export const AttendanceCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AttendanceCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AttendanceCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AttendanceCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AttendanceCreateManyUserInputSchema),z.lazy(() => AttendanceCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AttendanceCreateWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceCreateWithoutScannedByInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  event: z.lazy(() => EventCreateNestedOneWithoutAttendanceInputSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutAttendanceInputSchema)
}).strict();

export const AttendanceUncheckedCreateWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUncheckedCreateWithoutScannedByInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  eventId: z.bigint(),
  userId: z.string()
}).strict();

export const AttendanceCreateOrConnectWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceCreateOrConnectWithoutScannedByInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema) ]),
}).strict();

export const AttendanceCreateManyScannedByInputEnvelopeSchema: z.ZodType<Prisma.AttendanceCreateManyScannedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AttendanceCreateManyScannedByInputSchema),z.lazy(() => AttendanceCreateManyScannedByInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const EventorUserCreateWithoutUserInputSchema: z.ZodType<Prisma.EventorUserCreateWithoutUserInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema),
  eventor: z.lazy(() => EventorCreateNestedOneWithoutEventorsUsersInputSchema)
}).strict();

export const EventorUserUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUncheckedCreateWithoutUserInput> = z.object({
  id: z.bigint().optional(),
  eventorId: z.bigint(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema)
}).strict();

export const EventorUserCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.EventorUserCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => EventorUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventorUserCreateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const EventorUserCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.EventorUserCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EventorUserCreateManyUserInputSchema),z.lazy(() => EventorUserCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AccountCreateWithoutUserInputSchema),z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AccountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateManyMutationInputSchema),z.lazy(() => AccountUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AccountScalarWhereInputSchema: z.ZodType<Prisma.AccountScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AccountScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AccountScalarWhereInputSchema),z.lazy(() => AccountScalarWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  provider: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  refresh_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  access_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  expires_at: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  token_type: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  scope: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  id_token: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  session_state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SessionCreateWithoutUserInputSchema),z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => SessionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateWithoutUserInputSchema),z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SessionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SessionUpdateManyMutationInputSchema),z.lazy(() => SessionUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const SessionScalarWhereInputSchema: z.ZodType<Prisma.SessionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SessionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SessionScalarWhereInputSchema),z.lazy(() => SessionScalarWhereInputSchema).array() ]).optional(),
  sessionToken: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expires: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuthenticatorUpdateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuthenticatorUpdateManyMutationInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AuthenticatorScalarWhereInputSchema: z.ZodType<Prisma.AuthenticatorScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AuthenticatorScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
  credentialID: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  providerAccountId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialPublicKey: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  counter: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  credentialDeviceType: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  credentialBackedUp: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  transports: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AttendanceUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceUpdateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AttendanceUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateWithoutUserInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const AttendanceUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AttendanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateManyMutationInputSchema),z.lazy(() => AttendanceUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const AttendanceUpsertWithWhereUniqueWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUpsertWithWhereUniqueWithoutScannedByInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AttendanceUpdateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutScannedByInputSchema) ]),
  create: z.union([ z.lazy(() => AttendanceCreateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedCreateWithoutScannedByInputSchema) ]),
}).strict();

export const AttendanceUpdateWithWhereUniqueWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUpdateWithWhereUniqueWithoutScannedByInput> = z.object({
  where: z.lazy(() => AttendanceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateWithoutScannedByInputSchema),z.lazy(() => AttendanceUncheckedUpdateWithoutScannedByInputSchema) ]),
}).strict();

export const AttendanceUpdateManyWithWhereWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUpdateManyWithWhereWithoutScannedByInput> = z.object({
  where: z.lazy(() => AttendanceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AttendanceUpdateManyMutationInputSchema),z.lazy(() => AttendanceUncheckedUpdateManyWithoutScannedByInputSchema) ]),
}).strict();

export const EventorUserUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => EventorUserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EventorUserUpdateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => EventorUserCreateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const EventorUserUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => EventorUserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EventorUserUpdateWithoutUserInputSchema),z.lazy(() => EventorUserUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const EventorUserUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => EventorUserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EventorUserUpdateManyMutationInputSchema),z.lazy(() => EventorUserUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpsertWithoutAccountsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAccountsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAccountsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema) ]),
}).strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAccountsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpsertWithoutSessionsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSessionsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSessionsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema) ]),
}).strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserCreateWithoutAuthenticatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAuthenticatorInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedCreateNestedManyWithoutScannedByInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAuthenticatorInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]),
}).strict();

export const UserUpsertWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUpsertWithoutAuthenticatorInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAuthenticatorInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]),
}).strict();

export const UserUpdateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUpdateWithoutAuthenticatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutAuthenticatorInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  scannerAttendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutScannedByNestedInputSchema).optional(),
  eventorsUsers: z.lazy(() => EventorUserUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const AttendanceCreateManyEventInputSchema: z.ZodType<Prisma.AttendanceCreateManyEventInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  userId: z.string(),
  scannedByUserId: z.string()
}).strict();

export const AttendanceUpdateWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUpdateWithoutEventInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  scannedBy: z.lazy(() => UserUpdateOneRequiredWithoutScannerAttendanceNestedInputSchema).optional()
}).strict();

export const AttendanceUncheckedUpdateWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateWithoutEventInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scannedByUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AttendanceUncheckedUpdateManyWithoutEventInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutEventInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  scannedByUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventCreateManyEventorInputSchema: z.ZodType<Prisma.EventCreateManyEventorInput> = z.object({
  id: z.bigint().optional(),
  createdAt: z.coerce.date().optional(),
  name: z.string(),
  date: z.coerce.date(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  description: z.string().optional().nullable(),
  location: z.string().optional().nullable(),
  isActive: z.boolean().optional()
}).strict();

export const EventorUserCreateManyEventorInputSchema: z.ZodType<Prisma.EventorUserCreateManyEventorInput> = z.object({
  id: z.bigint().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema)
}).strict();

export const EventUpdateWithoutEventorInputSchema: z.ZodType<Prisma.EventUpdateWithoutEventorInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  attendance: z.lazy(() => AttendanceUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateWithoutEventorInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutEventorInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  attendance: z.lazy(() => AttendanceUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateManyWithoutEventorInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutEventorInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUserUpdateWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUpdateWithoutEventorInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutEventorsUsersNestedInputSchema).optional()
}).strict();

export const EventorUserUncheckedUpdateWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateWithoutEventorInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUserUncheckedUpdateManyWithoutEventorInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateManyWithoutEventorInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountCreateManyUserInputSchema: z.ZodType<Prisma.AccountCreateManyUserInput> = z.object({
  type: z.string(),
  provider: z.string(),
  providerAccountId: z.string(),
  refresh_token: z.string().optional().nullable(),
  access_token: z.string().optional().nullable(),
  expires_at: z.number().int().optional().nullable(),
  token_type: z.string().optional().nullable(),
  scope: z.string().optional().nullable(),
  id_token: z.string().optional().nullable(),
  session_state: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const SessionCreateManyUserInputSchema: z.ZodType<Prisma.SessionCreateManyUserInput> = z.object({
  sessionToken: z.string(),
  expires: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AuthenticatorCreateManyUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateManyUserInput> = z.object({
  credentialID: z.string(),
  providerAccountId: z.string(),
  credentialPublicKey: z.string(),
  counter: z.number().int(),
  credentialDeviceType: z.string(),
  credentialBackedUp: z.boolean(),
  transports: z.string().optional().nullable()
}).strict();

export const AttendanceCreateManyUserInputSchema: z.ZodType<Prisma.AttendanceCreateManyUserInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  eventId: z.bigint(),
  scannedByUserId: z.string()
}).strict();

export const AttendanceCreateManyScannedByInputSchema: z.ZodType<Prisma.AttendanceCreateManyScannedByInput> = z.object({
  id: z.bigint().optional(),
  time: z.coerce.date(),
  date: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  eventId: z.bigint(),
  userId: z.string()
}).strict();

export const EventorUserCreateManyUserInputSchema: z.ZodType<Prisma.EventorUserCreateManyUserInput> = z.object({
  id: z.bigint().optional(),
  eventorId: z.bigint(),
  createdAt: z.coerce.date().optional(),
  role: z.lazy(() => UserRoleSchema)
}).strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AccountUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AccountUncheckedUpdateManyWithoutUserInput> = z.object({
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  provider: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  refresh_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  access_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  expires_at: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  token_type: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  scope: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  id_token: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  session_state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUpdateWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SessionUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutUserInput> = z.object({
  sessionToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expires: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AuthenticatorUpdateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateWithoutUserInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateWithoutUserInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AuthenticatorUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUncheckedUpdateManyWithoutUserInput> = z.object({
  credentialID: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  providerAccountId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialPublicKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  counter: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  credentialDeviceType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  credentialBackedUp: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  transports: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AttendanceUpdateWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUpdateWithoutUserInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  scannedBy: z.lazy(() => UserUpdateOneRequiredWithoutScannerAttendanceNestedInputSchema).optional()
}).strict();

export const AttendanceUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  scannedByUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AttendanceUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  scannedByUserId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AttendanceUpdateWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUpdateWithoutScannedByInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutAttendanceNestedInputSchema).optional()
}).strict();

export const AttendanceUncheckedUpdateWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateWithoutScannedByInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AttendanceUncheckedUpdateManyWithoutScannedByInputSchema: z.ZodType<Prisma.AttendanceUncheckedUpdateManyWithoutScannedByInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  time: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUserUpdateWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUpdateWithoutUserInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
  eventor: z.lazy(() => EventorUpdateOneRequiredWithoutEventorsUsersNestedInputSchema).optional()
}).strict();

export const EventorUserUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  eventorId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventorUserUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.EventorUserUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  eventorId: z.union([ z.bigint(),z.lazy(() => BigIntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => UserRoleSchema),z.lazy(() => EnumUserRoleFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AttendanceFindFirstArgsSchema: z.ZodType<Prisma.AttendanceFindFirstArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceScalarFieldEnumSchema,AttendanceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AttendanceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AttendanceFindFirstOrThrowArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceScalarFieldEnumSchema,AttendanceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AttendanceFindManyArgsSchema: z.ZodType<Prisma.AttendanceFindManyArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AttendanceScalarFieldEnumSchema,AttendanceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AttendanceAggregateArgsSchema: z.ZodType<Prisma.AttendanceAggregateArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithRelationInputSchema.array(),AttendanceOrderByWithRelationInputSchema ]).optional(),
  cursor: AttendanceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AttendanceGroupByArgsSchema: z.ZodType<Prisma.AttendanceGroupByArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(),
  orderBy: z.union([ AttendanceOrderByWithAggregationInputSchema.array(),AttendanceOrderByWithAggregationInputSchema ]).optional(),
  by: AttendanceScalarFieldEnumSchema.array(),
  having: AttendanceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AttendanceFindUniqueArgsSchema: z.ZodType<Prisma.AttendanceFindUniqueArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
}).strict() ;

export const AttendanceFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AttendanceFindUniqueOrThrowArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
}).strict() ;

export const EventFindFirstArgsSchema: z.ZodType<Prisma.EventFindFirstArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventFindFirstOrThrowArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventFindManyArgsSchema: z.ZodType<Prisma.EventFindManyArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventAggregateArgsSchema: z.ZodType<Prisma.EventAggregateArgs> = z.object({
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventGroupByArgsSchema: z.ZodType<Prisma.EventGroupByArgs> = z.object({
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithAggregationInputSchema.array(),EventOrderByWithAggregationInputSchema ]).optional(),
  by: EventScalarFieldEnumSchema.array(),
  having: EventScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventFindUniqueArgsSchema: z.ZodType<Prisma.EventFindUniqueArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventFindUniqueOrThrowArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventorFindFirstArgsSchema: z.ZodType<Prisma.EventorFindFirstArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  where: EventorWhereInputSchema.optional(),
  orderBy: z.union([ EventorOrderByWithRelationInputSchema.array(),EventorOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventorScalarFieldEnumSchema,EventorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventorFindFirstOrThrowArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  where: EventorWhereInputSchema.optional(),
  orderBy: z.union([ EventorOrderByWithRelationInputSchema.array(),EventorOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventorScalarFieldEnumSchema,EventorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventorFindManyArgsSchema: z.ZodType<Prisma.EventorFindManyArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  where: EventorWhereInputSchema.optional(),
  orderBy: z.union([ EventorOrderByWithRelationInputSchema.array(),EventorOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventorScalarFieldEnumSchema,EventorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventorAggregateArgsSchema: z.ZodType<Prisma.EventorAggregateArgs> = z.object({
  where: EventorWhereInputSchema.optional(),
  orderBy: z.union([ EventorOrderByWithRelationInputSchema.array(),EventorOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventorGroupByArgsSchema: z.ZodType<Prisma.EventorGroupByArgs> = z.object({
  where: EventorWhereInputSchema.optional(),
  orderBy: z.union([ EventorOrderByWithAggregationInputSchema.array(),EventorOrderByWithAggregationInputSchema ]).optional(),
  by: EventorScalarFieldEnumSchema.array(),
  having: EventorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventorFindUniqueArgsSchema: z.ZodType<Prisma.EventorFindUniqueArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  where: EventorWhereUniqueInputSchema,
}).strict() ;

export const EventorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventorFindUniqueOrThrowArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  where: EventorWhereUniqueInputSchema,
}).strict() ;

export const EventorUserFindFirstArgsSchema: z.ZodType<Prisma.EventorUserFindFirstArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  where: EventorUserWhereInputSchema.optional(),
  orderBy: z.union([ EventorUserOrderByWithRelationInputSchema.array(),EventorUserOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventorUserScalarFieldEnumSchema,EventorUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventorUserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventorUserFindFirstOrThrowArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  where: EventorUserWhereInputSchema.optional(),
  orderBy: z.union([ EventorUserOrderByWithRelationInputSchema.array(),EventorUserOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventorUserScalarFieldEnumSchema,EventorUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventorUserFindManyArgsSchema: z.ZodType<Prisma.EventorUserFindManyArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  where: EventorUserWhereInputSchema.optional(),
  orderBy: z.union([ EventorUserOrderByWithRelationInputSchema.array(),EventorUserOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventorUserScalarFieldEnumSchema,EventorUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventorUserAggregateArgsSchema: z.ZodType<Prisma.EventorUserAggregateArgs> = z.object({
  where: EventorUserWhereInputSchema.optional(),
  orderBy: z.union([ EventorUserOrderByWithRelationInputSchema.array(),EventorUserOrderByWithRelationInputSchema ]).optional(),
  cursor: EventorUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventorUserGroupByArgsSchema: z.ZodType<Prisma.EventorUserGroupByArgs> = z.object({
  where: EventorUserWhereInputSchema.optional(),
  orderBy: z.union([ EventorUserOrderByWithAggregationInputSchema.array(),EventorUserOrderByWithAggregationInputSchema ]).optional(),
  by: EventorUserScalarFieldEnumSchema.array(),
  having: EventorUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventorUserFindUniqueArgsSchema: z.ZodType<Prisma.EventorUserFindUniqueArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  where: EventorUserWhereUniqueInputSchema,
}).strict() ;

export const EventorUserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventorUserFindUniqueOrThrowArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  where: EventorUserWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const AccountFindFirstArgsSchema: z.ZodType<Prisma.AccountFindFirstArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AccountFindFirstOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountFindManyArgsSchema: z.ZodType<Prisma.AccountFindManyArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AccountScalarFieldEnumSchema,AccountScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AccountAggregateArgsSchema: z.ZodType<Prisma.AccountAggregateArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithRelationInputSchema.array(),AccountOrderByWithRelationInputSchema ]).optional(),
  cursor: AccountWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountGroupByArgsSchema: z.ZodType<Prisma.AccountGroupByArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
  orderBy: z.union([ AccountOrderByWithAggregationInputSchema.array(),AccountOrderByWithAggregationInputSchema ]).optional(),
  by: AccountScalarFieldEnumSchema.array(),
  having: AccountScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AccountFindUniqueArgsSchema: z.ZodType<Prisma.AccountFindUniqueArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AccountFindUniqueOrThrowArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const SessionFindFirstArgsSchema: z.ZodType<Prisma.SessionFindFirstArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SessionFindFirstOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionFindManyArgsSchema: z.ZodType<Prisma.SessionFindManyArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SessionScalarFieldEnumSchema,SessionScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const SessionAggregateArgsSchema: z.ZodType<Prisma.SessionAggregateArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithRelationInputSchema.array(),SessionOrderByWithRelationInputSchema ]).optional(),
  cursor: SessionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionGroupByArgsSchema: z.ZodType<Prisma.SessionGroupByArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
  orderBy: z.union([ SessionOrderByWithAggregationInputSchema.array(),SessionOrderByWithAggregationInputSchema ]).optional(),
  by: SessionScalarFieldEnumSchema.array(),
  having: SessionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const SessionFindUniqueArgsSchema: z.ZodType<Prisma.SessionFindUniqueArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SessionFindUniqueOrThrowArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindFirstArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindFirstOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenFindManyArgsSchema: z.ZodType<Prisma.VerificationTokenFindManyArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VerificationTokenScalarFieldEnumSchema,VerificationTokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const VerificationTokenAggregateArgsSchema: z.ZodType<Prisma.VerificationTokenAggregateArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithRelationInputSchema.array(),VerificationTokenOrderByWithRelationInputSchema ]).optional(),
  cursor: VerificationTokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenGroupByArgsSchema: z.ZodType<Prisma.VerificationTokenGroupByArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
  orderBy: z.union([ VerificationTokenOrderByWithAggregationInputSchema.array(),VerificationTokenOrderByWithAggregationInputSchema ]).optional(),
  by: VerificationTokenScalarFieldEnumSchema.array(),
  having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.VerificationTokenFindUniqueOrThrowArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorFindFirstArgsSchema: z.ZodType<Prisma.AuthenticatorFindFirstArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthenticatorScalarFieldEnumSchema,AuthenticatorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuthenticatorFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AuthenticatorFindFirstOrThrowArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthenticatorScalarFieldEnumSchema,AuthenticatorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuthenticatorFindManyArgsSchema: z.ZodType<Prisma.AuthenticatorFindManyArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthenticatorScalarFieldEnumSchema,AuthenticatorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AuthenticatorAggregateArgsSchema: z.ZodType<Prisma.AuthenticatorAggregateArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AuthenticatorGroupByArgsSchema: z.ZodType<Prisma.AuthenticatorGroupByArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithAggregationInputSchema.array(),AuthenticatorOrderByWithAggregationInputSchema ]).optional(),
  by: AuthenticatorScalarFieldEnumSchema.array(),
  having: AuthenticatorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AuthenticatorFindUniqueArgsSchema: z.ZodType<Prisma.AuthenticatorFindUniqueArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AuthenticatorFindUniqueOrThrowArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const AttendanceCreateArgsSchema: z.ZodType<Prisma.AttendanceCreateArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  data: z.union([ AttendanceCreateInputSchema,AttendanceUncheckedCreateInputSchema ]),
}).strict() ;

export const AttendanceUpsertArgsSchema: z.ZodType<Prisma.AttendanceUpsertArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
  create: z.union([ AttendanceCreateInputSchema,AttendanceUncheckedCreateInputSchema ]),
  update: z.union([ AttendanceUpdateInputSchema,AttendanceUncheckedUpdateInputSchema ]),
}).strict() ;

export const AttendanceCreateManyArgsSchema: z.ZodType<Prisma.AttendanceCreateManyArgs> = z.object({
  data: z.union([ AttendanceCreateManyInputSchema,AttendanceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AttendanceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AttendanceCreateManyAndReturnArgs> = z.object({
  data: z.union([ AttendanceCreateManyInputSchema,AttendanceCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AttendanceDeleteArgsSchema: z.ZodType<Prisma.AttendanceDeleteArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  where: AttendanceWhereUniqueInputSchema,
}).strict() ;

export const AttendanceUpdateArgsSchema: z.ZodType<Prisma.AttendanceUpdateArgs> = z.object({
  select: AttendanceSelectSchema.optional(),
  include: AttendanceIncludeSchema.optional(),
  data: z.union([ AttendanceUpdateInputSchema,AttendanceUncheckedUpdateInputSchema ]),
  where: AttendanceWhereUniqueInputSchema,
}).strict() ;

export const AttendanceUpdateManyArgsSchema: z.ZodType<Prisma.AttendanceUpdateManyArgs> = z.object({
  data: z.union([ AttendanceUpdateManyMutationInputSchema,AttendanceUncheckedUpdateManyInputSchema ]),
  where: AttendanceWhereInputSchema.optional(),
}).strict() ;

export const updateManyAttendanceCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyAttendanceCreateManyAndReturnArgs> = z.object({
  data: z.union([ AttendanceUpdateManyMutationInputSchema,AttendanceUncheckedUpdateManyInputSchema ]),
  where: AttendanceWhereInputSchema.optional(),
}).strict() ;

export const AttendanceDeleteManyArgsSchema: z.ZodType<Prisma.AttendanceDeleteManyArgs> = z.object({
  where: AttendanceWhereInputSchema.optional(),
}).strict() ;

export const EventCreateArgsSchema: z.ZodType<Prisma.EventCreateArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  data: z.union([ EventCreateInputSchema,EventUncheckedCreateInputSchema ]),
}).strict() ;

export const EventUpsertArgsSchema: z.ZodType<Prisma.EventUpsertArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
  create: z.union([ EventCreateInputSchema,EventUncheckedCreateInputSchema ]),
  update: z.union([ EventUpdateInputSchema,EventUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventCreateManyArgsSchema: z.ZodType<Prisma.EventCreateManyArgs> = z.object({
  data: z.union([ EventCreateManyInputSchema,EventCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EventCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventCreateManyInputSchema,EventCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventDeleteArgsSchema: z.ZodType<Prisma.EventDeleteArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventUpdateArgsSchema: z.ZodType<Prisma.EventUpdateArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  data: z.union([ EventUpdateInputSchema,EventUncheckedUpdateInputSchema ]),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventUpdateManyArgsSchema: z.ZodType<Prisma.EventUpdateManyArgs> = z.object({
  data: z.union([ EventUpdateManyMutationInputSchema,EventUncheckedUpdateManyInputSchema ]),
  where: EventWhereInputSchema.optional(),
}).strict() ;

export const updateManyEventCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyEventCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventUpdateManyMutationInputSchema,EventUncheckedUpdateManyInputSchema ]),
  where: EventWhereInputSchema.optional(),
}).strict() ;

export const EventDeleteManyArgsSchema: z.ZodType<Prisma.EventDeleteManyArgs> = z.object({
  where: EventWhereInputSchema.optional(),
}).strict() ;

export const EventorCreateArgsSchema: z.ZodType<Prisma.EventorCreateArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  data: z.union([ EventorCreateInputSchema,EventorUncheckedCreateInputSchema ]),
}).strict() ;

export const EventorUpsertArgsSchema: z.ZodType<Prisma.EventorUpsertArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  where: EventorWhereUniqueInputSchema,
  create: z.union([ EventorCreateInputSchema,EventorUncheckedCreateInputSchema ]),
  update: z.union([ EventorUpdateInputSchema,EventorUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventorCreateManyArgsSchema: z.ZodType<Prisma.EventorCreateManyArgs> = z.object({
  data: z.union([ EventorCreateManyInputSchema,EventorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EventorCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventorCreateManyInputSchema,EventorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventorDeleteArgsSchema: z.ZodType<Prisma.EventorDeleteArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  where: EventorWhereUniqueInputSchema,
}).strict() ;

export const EventorUpdateArgsSchema: z.ZodType<Prisma.EventorUpdateArgs> = z.object({
  select: EventorSelectSchema.optional(),
  include: EventorIncludeSchema.optional(),
  data: z.union([ EventorUpdateInputSchema,EventorUncheckedUpdateInputSchema ]),
  where: EventorWhereUniqueInputSchema,
}).strict() ;

export const EventorUpdateManyArgsSchema: z.ZodType<Prisma.EventorUpdateManyArgs> = z.object({
  data: z.union([ EventorUpdateManyMutationInputSchema,EventorUncheckedUpdateManyInputSchema ]),
  where: EventorWhereInputSchema.optional(),
}).strict() ;

export const updateManyEventorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyEventorCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventorUpdateManyMutationInputSchema,EventorUncheckedUpdateManyInputSchema ]),
  where: EventorWhereInputSchema.optional(),
}).strict() ;

export const EventorDeleteManyArgsSchema: z.ZodType<Prisma.EventorDeleteManyArgs> = z.object({
  where: EventorWhereInputSchema.optional(),
}).strict() ;

export const EventorUserCreateArgsSchema: z.ZodType<Prisma.EventorUserCreateArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  data: z.union([ EventorUserCreateInputSchema,EventorUserUncheckedCreateInputSchema ]),
}).strict() ;

export const EventorUserUpsertArgsSchema: z.ZodType<Prisma.EventorUserUpsertArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  where: EventorUserWhereUniqueInputSchema,
  create: z.union([ EventorUserCreateInputSchema,EventorUserUncheckedCreateInputSchema ]),
  update: z.union([ EventorUserUpdateInputSchema,EventorUserUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventorUserCreateManyArgsSchema: z.ZodType<Prisma.EventorUserCreateManyArgs> = z.object({
  data: z.union([ EventorUserCreateManyInputSchema,EventorUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventorUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EventorUserCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventorUserCreateManyInputSchema,EventorUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventorUserDeleteArgsSchema: z.ZodType<Prisma.EventorUserDeleteArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  where: EventorUserWhereUniqueInputSchema,
}).strict() ;

export const EventorUserUpdateArgsSchema: z.ZodType<Prisma.EventorUserUpdateArgs> = z.object({
  select: EventorUserSelectSchema.optional(),
  include: EventorUserIncludeSchema.optional(),
  data: z.union([ EventorUserUpdateInputSchema,EventorUserUncheckedUpdateInputSchema ]),
  where: EventorUserWhereUniqueInputSchema,
}).strict() ;

export const EventorUserUpdateManyArgsSchema: z.ZodType<Prisma.EventorUserUpdateManyArgs> = z.object({
  data: z.union([ EventorUserUpdateManyMutationInputSchema,EventorUserUncheckedUpdateManyInputSchema ]),
  where: EventorUserWhereInputSchema.optional(),
}).strict() ;

export const updateManyEventorUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyEventorUserCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventorUserUpdateManyMutationInputSchema,EventorUserUncheckedUpdateManyInputSchema ]),
  where: EventorUserWhereInputSchema.optional(),
}).strict() ;

export const EventorUserDeleteManyArgsSchema: z.ZodType<Prisma.EventorUserDeleteManyArgs> = z.object({
  where: EventorUserWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const updateManyUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyUserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const AccountCreateArgsSchema: z.ZodType<Prisma.AccountCreateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
}).strict() ;

export const AccountUpsertArgsSchema: z.ZodType<Prisma.AccountUpsertArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
  create: z.union([ AccountCreateInputSchema,AccountUncheckedCreateInputSchema ]),
  update: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
}).strict() ;

export const AccountCreateManyArgsSchema: z.ZodType<Prisma.AccountCreateManyArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ AccountCreateManyInputSchema,AccountCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AccountDeleteArgsSchema: z.ZodType<Prisma.AccountDeleteArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateArgsSchema: z.ZodType<Prisma.AccountUpdateArgs> = z.object({
  select: AccountSelectSchema.optional(),
  include: AccountIncludeSchema.optional(),
  data: z.union([ AccountUpdateInputSchema,AccountUncheckedUpdateInputSchema ]),
  where: AccountWhereUniqueInputSchema,
}).strict() ;

export const AccountUpdateManyArgsSchema: z.ZodType<Prisma.AccountUpdateManyArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const updateManyAccountCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyAccountCreateManyAndReturnArgs> = z.object({
  data: z.union([ AccountUpdateManyMutationInputSchema,AccountUncheckedUpdateManyInputSchema ]),
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const AccountDeleteManyArgsSchema: z.ZodType<Prisma.AccountDeleteManyArgs> = z.object({
  where: AccountWhereInputSchema.optional(),
}).strict() ;

export const SessionCreateArgsSchema: z.ZodType<Prisma.SessionCreateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
}).strict() ;

export const SessionUpsertArgsSchema: z.ZodType<Prisma.SessionUpsertArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
  create: z.union([ SessionCreateInputSchema,SessionUncheckedCreateInputSchema ]),
  update: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
}).strict() ;

export const SessionCreateManyArgsSchema: z.ZodType<Prisma.SessionCreateManyArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SessionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SessionCreateManyInputSchema,SessionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const SessionDeleteArgsSchema: z.ZodType<Prisma.SessionDeleteArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateArgsSchema: z.ZodType<Prisma.SessionUpdateArgs> = z.object({
  select: SessionSelectSchema.optional(),
  include: SessionIncludeSchema.optional(),
  data: z.union([ SessionUpdateInputSchema,SessionUncheckedUpdateInputSchema ]),
  where: SessionWhereUniqueInputSchema,
}).strict() ;

export const SessionUpdateManyArgsSchema: z.ZodType<Prisma.SessionUpdateManyArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const updateManySessionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManySessionCreateManyAndReturnArgs> = z.object({
  data: z.union([ SessionUpdateManyMutationInputSchema,SessionUncheckedUpdateManyInputSchema ]),
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const SessionDeleteManyArgsSchema: z.ZodType<Prisma.SessionDeleteManyArgs> = z.object({
  where: SessionWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenCreateArgsSchema: z.ZodType<Prisma.VerificationTokenCreateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
}).strict() ;

export const VerificationTokenUpsertArgsSchema: z.ZodType<Prisma.VerificationTokenUpsertArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
  create: z.union([ VerificationTokenCreateInputSchema,VerificationTokenUncheckedCreateInputSchema ]),
  update: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const VerificationTokenCreateManyArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VerificationTokenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VerificationTokenCreateManyAndReturnArgs> = z.object({
  data: z.union([ VerificationTokenCreateManyInputSchema,VerificationTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const VerificationTokenDeleteArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateArgs> = z.object({
  select: VerificationTokenSelectSchema.optional(),
  data: z.union([ VerificationTokenUpdateInputSchema,VerificationTokenUncheckedUpdateInputSchema ]),
  where: VerificationTokenWhereUniqueInputSchema,
}).strict() ;

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<Prisma.VerificationTokenUpdateManyArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const updateManyVerificationTokenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyVerificationTokenCreateManyAndReturnArgs> = z.object({
  data: z.union([ VerificationTokenUpdateManyMutationInputSchema,VerificationTokenUncheckedUpdateManyInputSchema ]),
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<Prisma.VerificationTokenDeleteManyArgs> = z.object({
  where: VerificationTokenWhereInputSchema.optional(),
}).strict() ;

export const AuthenticatorCreateArgsSchema: z.ZodType<Prisma.AuthenticatorCreateArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  data: z.union([ AuthenticatorCreateInputSchema,AuthenticatorUncheckedCreateInputSchema ]),
}).strict() ;

export const AuthenticatorUpsertArgsSchema: z.ZodType<Prisma.AuthenticatorUpsertArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
  create: z.union([ AuthenticatorCreateInputSchema,AuthenticatorUncheckedCreateInputSchema ]),
  update: z.union([ AuthenticatorUpdateInputSchema,AuthenticatorUncheckedUpdateInputSchema ]),
}).strict() ;

export const AuthenticatorCreateManyArgsSchema: z.ZodType<Prisma.AuthenticatorCreateManyArgs> = z.object({
  data: z.union([ AuthenticatorCreateManyInputSchema,AuthenticatorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AuthenticatorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AuthenticatorCreateManyAndReturnArgs> = z.object({
  data: z.union([ AuthenticatorCreateManyInputSchema,AuthenticatorCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AuthenticatorDeleteArgsSchema: z.ZodType<Prisma.AuthenticatorDeleteArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorUpdateArgsSchema: z.ZodType<Prisma.AuthenticatorUpdateArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  data: z.union([ AuthenticatorUpdateInputSchema,AuthenticatorUncheckedUpdateInputSchema ]),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export const AuthenticatorUpdateManyArgsSchema: z.ZodType<Prisma.AuthenticatorUpdateManyArgs> = z.object({
  data: z.union([ AuthenticatorUpdateManyMutationInputSchema,AuthenticatorUncheckedUpdateManyInputSchema ]),
  where: AuthenticatorWhereInputSchema.optional(),
}).strict() ;

export const updateManyAuthenticatorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyAuthenticatorCreateManyAndReturnArgs> = z.object({
  data: z.union([ AuthenticatorUpdateManyMutationInputSchema,AuthenticatorUncheckedUpdateManyInputSchema ]),
  where: AuthenticatorWhereInputSchema.optional(),
}).strict() ;

export const AuthenticatorDeleteManyArgsSchema: z.ZodType<Prisma.AuthenticatorDeleteManyArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
}).strict() ;