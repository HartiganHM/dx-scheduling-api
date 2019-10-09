module.exports = {
        typeDefs: /* GraphQL */ `type AggregatePermission {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createPermission(data: PermissionCreateInput!): Permission!
  updatePermission(data: PermissionUpdateInput!, where: PermissionWhereUniqueInput!): Permission
  updateManyPermissions(data: PermissionUpdateManyMutationInput!, where: PermissionWhereInput): BatchPayload!
  upsertPermission(where: PermissionWhereUniqueInput!, create: PermissionCreateInput!, update: PermissionUpdateInput!): Permission!
  deletePermission(where: PermissionWhereUniqueInput!): Permission
  deleteManyPermissions(where: PermissionWhereInput): BatchPayload!
  createRole(data: RoleCreateInput!): Role!
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateManyRoles(data: RoleUpdateManyMutationInput!, where: RoleWhereInput): BatchPayload!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Permission {
  id: ID!
  name: String!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

type PermissionConnection {
  pageInfo: PageInfo!
  edges: [PermissionEdge]!
  aggregate: AggregatePermission!
}

input PermissionCreateInput {
  name: String!
  roles: RoleCreateManyWithoutPermissionsInput
}

input PermissionCreateManyWithoutRolesInput {
  create: [PermissionCreateWithoutRolesInput!]
  connect: [PermissionWhereUniqueInput!]
}

input PermissionCreateWithoutRolesInput {
  name: String!
}

type PermissionEdge {
  node: Permission!
  cursor: String!
}

enum PermissionOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PermissionPreviousValues {
  id: ID!
  name: String!
}

input PermissionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [PermissionScalarWhereInput!]
  OR: [PermissionScalarWhereInput!]
  NOT: [PermissionScalarWhereInput!]
}

type PermissionSubscriptionPayload {
  mutation: MutationType!
  node: Permission
  updatedFields: [String!]
  previousValues: PermissionPreviousValues
}

input PermissionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PermissionWhereInput
  AND: [PermissionSubscriptionWhereInput!]
  OR: [PermissionSubscriptionWhereInput!]
  NOT: [PermissionSubscriptionWhereInput!]
}

input PermissionUpdateInput {
  name: String
  roles: RoleUpdateManyWithoutPermissionsInput
}

input PermissionUpdateManyDataInput {
  name: String
}

input PermissionUpdateManyMutationInput {
  name: String
}

input PermissionUpdateManyWithoutRolesInput {
  create: [PermissionCreateWithoutRolesInput!]
  delete: [PermissionWhereUniqueInput!]
  connect: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  update: [PermissionUpdateWithWhereUniqueWithoutRolesInput!]
  upsert: [PermissionUpsertWithWhereUniqueWithoutRolesInput!]
  deleteMany: [PermissionScalarWhereInput!]
  updateMany: [PermissionUpdateManyWithWhereNestedInput!]
}

input PermissionUpdateManyWithWhereNestedInput {
  where: PermissionScalarWhereInput!
  data: PermissionUpdateManyDataInput!
}

input PermissionUpdateWithoutRolesDataInput {
  name: String
}

input PermissionUpdateWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput!
  data: PermissionUpdateWithoutRolesDataInput!
}

input PermissionUpsertWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput!
  update: PermissionUpdateWithoutRolesDataInput!
  create: PermissionCreateWithoutRolesInput!
}

input PermissionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  AND: [PermissionWhereInput!]
  OR: [PermissionWhereInput!]
  NOT: [PermissionWhereInput!]
}

input PermissionWhereUniqueInput {
  id: ID
}

type Query {
  permission(where: PermissionWhereUniqueInput!): Permission
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission]!
  permissionsConnection(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PermissionConnection!
  role(where: RoleWhereUniqueInput!): Role
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  permissions: PermissionCreateManyWithoutRolesInput
  users: UserCreateManyWithoutRolesInput
}

input RoleCreateManyWithoutPermissionsInput {
  create: [RoleCreateWithoutPermissionsInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateManyWithoutUsersInput {
  create: [RoleCreateWithoutUsersInput!]
  connect: [RoleWhereUniqueInput!]
}

input RoleCreateWithoutPermissionsInput {
  name: String!
  users: UserCreateManyWithoutRolesInput
}

input RoleCreateWithoutUsersInput {
  name: String!
  permissions: PermissionCreateManyWithoutRolesInput
}

type RoleEdge {
  node: Role!
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
}

input RoleScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [RoleScalarWhereInput!]
  OR: [RoleScalarWhereInput!]
  NOT: [RoleScalarWhereInput!]
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleWhereInput
  AND: [RoleSubscriptionWhereInput!]
  OR: [RoleSubscriptionWhereInput!]
  NOT: [RoleSubscriptionWhereInput!]
}

input RoleUpdateInput {
  name: String
  permissions: PermissionUpdateManyWithoutRolesInput
  users: UserUpdateManyWithoutRolesInput
}

input RoleUpdateManyDataInput {
  name: String
}

input RoleUpdateManyMutationInput {
  name: String
}

input RoleUpdateManyWithoutPermissionsInput {
  create: [RoleCreateWithoutPermissionsInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueWithoutPermissionsInput!]
  upsert: [RoleUpsertWithWhereUniqueWithoutPermissionsInput!]
  deleteMany: [RoleScalarWhereInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
}

input RoleUpdateManyWithoutUsersInput {
  create: [RoleCreateWithoutUsersInput!]
  delete: [RoleWhereUniqueInput!]
  connect: [RoleWhereUniqueInput!]
  disconnect: [RoleWhereUniqueInput!]
  update: [RoleUpdateWithWhereUniqueWithoutUsersInput!]
  upsert: [RoleUpsertWithWhereUniqueWithoutUsersInput!]
  deleteMany: [RoleScalarWhereInput!]
  updateMany: [RoleUpdateManyWithWhereNestedInput!]
}

input RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput!
  data: RoleUpdateManyDataInput!
}

input RoleUpdateWithoutPermissionsDataInput {
  name: String
  users: UserUpdateManyWithoutRolesInput
}

input RoleUpdateWithoutUsersDataInput {
  name: String
  permissions: PermissionUpdateManyWithoutRolesInput
}

input RoleUpdateWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateWithoutPermissionsDataInput!
}

input RoleUpdateWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput!
  data: RoleUpdateWithoutUsersDataInput!
}

input RoleUpsertWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateWithoutPermissionsDataInput!
  create: RoleCreateWithoutPermissionsInput!
}

input RoleUpsertWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput!
  update: RoleUpdateWithoutUsersDataInput!
  create: RoleCreateWithoutUsersInput!
}

input RoleWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  AND: [RoleWhereInput!]
  OR: [RoleWhereInput!]
  NOT: [RoleWhereInput!]
}

input RoleWhereUniqueInput {
  id: ID
}

type Subscription {
  permission(where: PermissionSubscriptionWhereInput): PermissionSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String
  roles: RoleCreateManyWithoutUsersInput
}

input UserCreateManyWithoutRolesInput {
  create: [UserCreateWithoutRolesInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateWithoutRolesInput {
  name: String!
  email: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  roles: RoleUpdateManyWithoutUsersInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateManyWithoutRolesInput {
  create: [UserCreateWithoutRolesInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutRolesInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutRolesInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithoutRolesDataInput {
  name: String
  email: String
}

input UserUpdateWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutRolesDataInput!
}

input UserUpsertWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutRolesDataInput!
  create: UserCreateWithoutRolesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  roles_every: RoleWhereInput
  roles_some: RoleWhereInput
  roles_none: RoleWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    