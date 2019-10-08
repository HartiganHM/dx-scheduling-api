module.exports = {
        typeDefs: /* GraphQL */ `type AggregatePermission {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateRoleToPermission {
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
  createRoleToPermission(data: RoleToPermissionCreateInput!): RoleToPermission!
  updateRoleToPermission(data: RoleToPermissionUpdateInput!, where: RoleToPermissionWhereUniqueInput!): RoleToPermission
  updateManyRoleToPermissions(data: RoleToPermissionUpdateManyMutationInput!, where: RoleToPermissionWhereInput): BatchPayload!
  upsertRoleToPermission(where: RoleToPermissionWhereUniqueInput!, create: RoleToPermissionCreateInput!, update: RoleToPermissionUpdateInput!): RoleToPermission!
  deleteRoleToPermission(where: RoleToPermissionWhereUniqueInput!): RoleToPermission
  deleteManyRoleToPermissions(where: RoleToPermissionWhereInput): BatchPayload!
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
}

type PermissionConnection {
  pageInfo: PageInfo!
  edges: [PermissionEdge]!
  aggregate: AggregatePermission!
}

input PermissionCreateInput {
  name: String!
}

input PermissionCreateManyInput {
  create: [PermissionCreateInput!]
  connect: [PermissionWhereUniqueInput!]
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

input PermissionUpdateDataInput {
  name: String
}

input PermissionUpdateInput {
  name: String
}

input PermissionUpdateManyDataInput {
  name: String
}

input PermissionUpdateManyInput {
  create: [PermissionCreateInput!]
  update: [PermissionUpdateWithWhereUniqueNestedInput!]
  upsert: [PermissionUpsertWithWhereUniqueNestedInput!]
  delete: [PermissionWhereUniqueInput!]
  connect: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  deleteMany: [PermissionScalarWhereInput!]
  updateMany: [PermissionUpdateManyWithWhereNestedInput!]
}

input PermissionUpdateManyMutationInput {
  name: String
}

input PermissionUpdateManyWithWhereNestedInput {
  where: PermissionScalarWhereInput!
  data: PermissionUpdateManyDataInput!
}

input PermissionUpdateWithWhereUniqueNestedInput {
  where: PermissionWhereUniqueInput!
  data: PermissionUpdateDataInput!
}

input PermissionUpsertWithWhereUniqueNestedInput {
  where: PermissionWhereUniqueInput!
  update: PermissionUpdateDataInput!
  create: PermissionCreateInput!
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
  roleToPermission(where: RoleToPermissionWhereUniqueInput!): RoleToPermission
  roleToPermissions(where: RoleToPermissionWhereInput, orderBy: RoleToPermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RoleToPermission]!
  roleToPermissionsConnection(where: RoleToPermissionWhereInput, orderBy: RoleToPermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleToPermissionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Role {
  id: ID!
  name: String!
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
}

type RoleConnection {
  pageInfo: PageInfo!
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  permissions: PermissionCreateManyInput
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

type RoleToPermission {
  id: ID!
  roleId: Int!
  permissionId: Int!
}

type RoleToPermissionConnection {
  pageInfo: PageInfo!
  edges: [RoleToPermissionEdge]!
  aggregate: AggregateRoleToPermission!
}

input RoleToPermissionCreateInput {
  roleId: Int!
  permissionId: Int!
}

type RoleToPermissionEdge {
  node: RoleToPermission!
  cursor: String!
}

enum RoleToPermissionOrderByInput {
  id_ASC
  id_DESC
  roleId_ASC
  roleId_DESC
  permissionId_ASC
  permissionId_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RoleToPermissionPreviousValues {
  id: ID!
  roleId: Int!
  permissionId: Int!
}

type RoleToPermissionSubscriptionPayload {
  mutation: MutationType!
  node: RoleToPermission
  updatedFields: [String!]
  previousValues: RoleToPermissionPreviousValues
}

input RoleToPermissionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RoleToPermissionWhereInput
  AND: [RoleToPermissionSubscriptionWhereInput!]
  OR: [RoleToPermissionSubscriptionWhereInput!]
  NOT: [RoleToPermissionSubscriptionWhereInput!]
}

input RoleToPermissionUpdateInput {
  roleId: Int
  permissionId: Int
}

input RoleToPermissionUpdateManyMutationInput {
  roleId: Int
  permissionId: Int
}

input RoleToPermissionWhereInput {
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
  roleId: Int
  roleId_not: Int
  roleId_in: [Int!]
  roleId_not_in: [Int!]
  roleId_lt: Int
  roleId_lte: Int
  roleId_gt: Int
  roleId_gte: Int
  permissionId: Int
  permissionId_not: Int
  permissionId_in: [Int!]
  permissionId_not_in: [Int!]
  permissionId_lt: Int
  permissionId_lte: Int
  permissionId_gt: Int
  permissionId_gte: Int
  AND: [RoleToPermissionWhereInput!]
  OR: [RoleToPermissionWhereInput!]
  NOT: [RoleToPermissionWhereInput!]
}

input RoleToPermissionWhereUniqueInput {
  id: ID
}

input RoleUpdateInput {
  name: String
  permissions: PermissionUpdateManyInput
}

input RoleUpdateManyMutationInput {
  name: String
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
  roleToPermission(where: RoleToPermissionSubscriptionWhereInput): RoleToPermissionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
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
}

input UserUpdateManyMutationInput {
  name: String
  email: String
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
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    