// Code generated by Prisma (prisma@1.24.0-beta.7). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  permission: (where?: PermissionWhereInput) => Promise<boolean>;
  role: (where?: RoleWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  permission: (where: PermissionWhereUniqueInput) => PermissionPromise;
  permissions: (
    args?: {
      where?: PermissionWhereInput;
      orderBy?: PermissionOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Permission>;
  permissionsConnection: (
    args?: {
      where?: PermissionWhereInput;
      orderBy?: PermissionOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => PermissionConnectionPromise;
  role: (where: RoleWhereUniqueInput) => RolePromise;
  roles: (
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Role>;
  rolesConnection: (
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => RoleConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPermission: (data: PermissionCreateInput) => PermissionPromise;
  updatePermission: (
    args: { data: PermissionUpdateInput; where: PermissionWhereUniqueInput }
  ) => PermissionPromise;
  updateManyPermissions: (
    args: {
      data: PermissionUpdateManyMutationInput;
      where?: PermissionWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertPermission: (
    args: {
      where: PermissionWhereUniqueInput;
      create: PermissionCreateInput;
      update: PermissionUpdateInput;
    }
  ) => PermissionPromise;
  deletePermission: (where: PermissionWhereUniqueInput) => PermissionPromise;
  deleteManyPermissions: (where?: PermissionWhereInput) => BatchPayloadPromise;
  createRole: (data: RoleCreateInput) => RolePromise;
  updateRole: (
    args: { data: RoleUpdateInput; where: RoleWhereUniqueInput }
  ) => RolePromise;
  updateManyRoles: (
    args: { data: RoleUpdateManyMutationInput; where?: RoleWhereInput }
  ) => BatchPayloadPromise;
  upsertRole: (
    args: {
      where: RoleWhereUniqueInput;
      create: RoleCreateInput;
      update: RoleUpdateInput;
    }
  ) => RolePromise;
  deleteRole: (where: RoleWhereUniqueInput) => RolePromise;
  deleteManyRoles: (where?: RoleWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  permission: (
    where?: PermissionSubscriptionWhereInput
  ) => PermissionSubscriptionPayloadSubscription;
  role: (
    where?: RoleSubscriptionWhereInput
  ) => RoleSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RoleOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type PermissionOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "email_ASC"
  | "email_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type PermissionWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface RoleWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  permissions_every?: PermissionWhereInput;
  permissions_some?: PermissionWhereInput;
  permissions_none?: PermissionWhereInput;
  users_every?: UserWhereInput;
  users_some?: UserWhereInput;
  users_none?: UserWhereInput;
  AND?: RoleWhereInput[] | RoleWhereInput;
  OR?: RoleWhereInput[] | RoleWhereInput;
  NOT?: RoleWhereInput[] | RoleWhereInput;
}

export interface PermissionWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  roles_every?: RoleWhereInput;
  roles_some?: RoleWhereInput;
  roles_none?: RoleWhereInput;
  AND?: PermissionWhereInput[] | PermissionWhereInput;
  OR?: PermissionWhereInput[] | PermissionWhereInput;
  NOT?: PermissionWhereInput[] | PermissionWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  roles_every?: RoleWhereInput;
  roles_some?: RoleWhereInput;
  roles_none?: RoleWhereInput;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type RoleWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface PermissionCreateInput {
  name: String;
  roles?: RoleCreateManyWithoutPermissionsInput;
}

export interface RoleCreateManyWithoutPermissionsInput {
  create?:
    | RoleCreateWithoutPermissionsInput[]
    | RoleCreateWithoutPermissionsInput;
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
}

export interface RoleCreateWithoutPermissionsInput {
  name: String;
  users?: UserCreateManyWithoutRolesInput;
}

export interface UserCreateManyWithoutRolesInput {
  create?: UserCreateWithoutRolesInput[] | UserCreateWithoutRolesInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}

export interface UserCreateWithoutRolesInput {
  name: String;
  email?: String;
}

export interface PermissionUpdateInput {
  name?: String;
  roles?: RoleUpdateManyWithoutPermissionsInput;
}

export interface RoleUpdateManyWithoutPermissionsInput {
  create?:
    | RoleCreateWithoutPermissionsInput[]
    | RoleCreateWithoutPermissionsInput;
  delete?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  disconnect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  update?:
    | RoleUpdateWithWhereUniqueWithoutPermissionsInput[]
    | RoleUpdateWithWhereUniqueWithoutPermissionsInput;
  upsert?:
    | RoleUpsertWithWhereUniqueWithoutPermissionsInput[]
    | RoleUpsertWithWhereUniqueWithoutPermissionsInput;
  deleteMany?: RoleScalarWhereInput[] | RoleScalarWhereInput;
  updateMany?:
    | RoleUpdateManyWithWhereNestedInput[]
    | RoleUpdateManyWithWhereNestedInput;
}

export interface RoleUpdateWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput;
  data: RoleUpdateWithoutPermissionsDataInput;
}

export interface RoleUpdateWithoutPermissionsDataInput {
  name?: String;
  users?: UserUpdateManyWithoutRolesInput;
}

export interface UserUpdateManyWithoutRolesInput {
  create?: UserCreateWithoutRolesInput[] | UserCreateWithoutRolesInput;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  update?:
    | UserUpdateWithWhereUniqueWithoutRolesInput[]
    | UserUpdateWithWhereUniqueWithoutRolesInput;
  upsert?:
    | UserUpsertWithWhereUniqueWithoutRolesInput[]
    | UserUpsertWithWhereUniqueWithoutRolesInput;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
  updateMany?:
    | UserUpdateManyWithWhereNestedInput[]
    | UserUpdateManyWithWhereNestedInput;
}

export interface UserUpdateWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutRolesDataInput;
}

export interface UserUpdateWithoutRolesDataInput {
  name?: String;
  email?: String;
}

export interface UserUpsertWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutRolesDataInput;
  create: UserCreateWithoutRolesInput;
}

export interface UserScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  AND?: UserScalarWhereInput[] | UserScalarWhereInput;
  OR?: UserScalarWhereInput[] | UserScalarWhereInput;
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  name?: String;
  email?: String;
}

export interface RoleUpsertWithWhereUniqueWithoutPermissionsInput {
  where: RoleWhereUniqueInput;
  update: RoleUpdateWithoutPermissionsDataInput;
  create: RoleCreateWithoutPermissionsInput;
}

export interface RoleScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: RoleScalarWhereInput[] | RoleScalarWhereInput;
  OR?: RoleScalarWhereInput[] | RoleScalarWhereInput;
  NOT?: RoleScalarWhereInput[] | RoleScalarWhereInput;
}

export interface RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput;
  data: RoleUpdateManyDataInput;
}

export interface RoleUpdateManyDataInput {
  name?: String;
}

export interface PermissionUpdateManyMutationInput {
  name?: String;
}

export interface RoleCreateInput {
  name: String;
  permissions?: PermissionCreateManyWithoutRolesInput;
  users?: UserCreateManyWithoutRolesInput;
}

export interface PermissionCreateManyWithoutRolesInput {
  create?:
    | PermissionCreateWithoutRolesInput[]
    | PermissionCreateWithoutRolesInput;
  connect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput;
}

export interface PermissionCreateWithoutRolesInput {
  name: String;
}

export interface RoleUpdateInput {
  name?: String;
  permissions?: PermissionUpdateManyWithoutRolesInput;
  users?: UserUpdateManyWithoutRolesInput;
}

export interface PermissionUpdateManyWithoutRolesInput {
  create?:
    | PermissionCreateWithoutRolesInput[]
    | PermissionCreateWithoutRolesInput;
  delete?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput;
  connect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput;
  disconnect?: PermissionWhereUniqueInput[] | PermissionWhereUniqueInput;
  update?:
    | PermissionUpdateWithWhereUniqueWithoutRolesInput[]
    | PermissionUpdateWithWhereUniqueWithoutRolesInput;
  upsert?:
    | PermissionUpsertWithWhereUniqueWithoutRolesInput[]
    | PermissionUpsertWithWhereUniqueWithoutRolesInput;
  deleteMany?: PermissionScalarWhereInput[] | PermissionScalarWhereInput;
  updateMany?:
    | PermissionUpdateManyWithWhereNestedInput[]
    | PermissionUpdateManyWithWhereNestedInput;
}

export interface PermissionUpdateWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput;
  data: PermissionUpdateWithoutRolesDataInput;
}

export interface PermissionUpdateWithoutRolesDataInput {
  name?: String;
}

export interface PermissionUpsertWithWhereUniqueWithoutRolesInput {
  where: PermissionWhereUniqueInput;
  update: PermissionUpdateWithoutRolesDataInput;
  create: PermissionCreateWithoutRolesInput;
}

export interface PermissionScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: PermissionScalarWhereInput[] | PermissionScalarWhereInput;
  OR?: PermissionScalarWhereInput[] | PermissionScalarWhereInput;
  NOT?: PermissionScalarWhereInput[] | PermissionScalarWhereInput;
}

export interface PermissionUpdateManyWithWhereNestedInput {
  where: PermissionScalarWhereInput;
  data: PermissionUpdateManyDataInput;
}

export interface PermissionUpdateManyDataInput {
  name?: String;
}

export interface RoleUpdateManyMutationInput {
  name?: String;
}

export interface UserCreateInput {
  name: String;
  email?: String;
  roles?: RoleCreateManyWithoutUsersInput;
}

export interface RoleCreateManyWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput[] | RoleCreateWithoutUsersInput;
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
}

export interface RoleCreateWithoutUsersInput {
  name: String;
  permissions?: PermissionCreateManyWithoutRolesInput;
}

export interface UserUpdateInput {
  name?: String;
  email?: String;
  roles?: RoleUpdateManyWithoutUsersInput;
}

export interface RoleUpdateManyWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput[] | RoleCreateWithoutUsersInput;
  delete?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  connect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  disconnect?: RoleWhereUniqueInput[] | RoleWhereUniqueInput;
  update?:
    | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    | RoleUpdateWithWhereUniqueWithoutUsersInput;
  upsert?:
    | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    | RoleUpsertWithWhereUniqueWithoutUsersInput;
  deleteMany?: RoleScalarWhereInput[] | RoleScalarWhereInput;
  updateMany?:
    | RoleUpdateManyWithWhereNestedInput[]
    | RoleUpdateManyWithWhereNestedInput;
}

export interface RoleUpdateWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput;
  data: RoleUpdateWithoutUsersDataInput;
}

export interface RoleUpdateWithoutUsersDataInput {
  name?: String;
  permissions?: PermissionUpdateManyWithoutRolesInput;
}

export interface RoleUpsertWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput;
  update: RoleUpdateWithoutUsersDataInput;
  create: RoleCreateWithoutUsersInput;
}

export interface UserUpdateManyMutationInput {
  name?: String;
  email?: String;
}

export interface PermissionSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: PermissionWhereInput;
  AND?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput;
  OR?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput;
  NOT?: PermissionSubscriptionWhereInput[] | PermissionSubscriptionWhereInput;
}

export interface RoleSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: RoleWhereInput;
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Permission {
  id: ID_Output;
  name: String;
}

export interface PermissionPromise extends Promise<Permission>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  roles: <T = FragmentableArray<Role>>(
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PermissionSubscription
  extends Promise<AsyncIterator<Permission>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  roles: <T = Promise<AsyncIterator<RoleSubscription>>>(
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface Role {
  id: ID_Output;
  name: String;
}

export interface RolePromise extends Promise<Role>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  permissions: <T = FragmentableArray<Permission>>(
    args?: {
      where?: PermissionWhereInput;
      orderBy?: PermissionOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  users: <T = FragmentableArray<User>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface RoleSubscription
  extends Promise<AsyncIterator<Role>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  permissions: <T = Promise<AsyncIterator<PermissionSubscription>>>(
    args?: {
      where?: PermissionWhereInput;
      orderBy?: PermissionOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
  users: <T = Promise<AsyncIterator<UserSubscription>>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface User {
  id: ID_Output;
  name: String;
  email?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
  roles: <T = FragmentableArray<Role>>(
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  roles: <T = Promise<AsyncIterator<RoleSubscription>>>(
    args?: {
      where?: RoleWhereInput;
      orderBy?: RoleOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface PermissionConnection {
  pageInfo: PageInfo;
  edges: PermissionEdge[];
}

export interface PermissionConnectionPromise
  extends Promise<PermissionConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PermissionEdge>>() => T;
  aggregate: <T = AggregatePermissionPromise>() => T;
}

export interface PermissionConnectionSubscription
  extends Promise<AsyncIterator<PermissionConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PermissionEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePermissionSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface PermissionEdge {
  node: Permission;
  cursor: String;
}

export interface PermissionEdgePromise
  extends Promise<PermissionEdge>,
    Fragmentable {
  node: <T = PermissionPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PermissionEdgeSubscription
  extends Promise<AsyncIterator<PermissionEdge>>,
    Fragmentable {
  node: <T = PermissionSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePermission {
  count: Int;
}

export interface AggregatePermissionPromise
  extends Promise<AggregatePermission>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePermissionSubscription
  extends Promise<AsyncIterator<AggregatePermission>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface RoleConnection {
  pageInfo: PageInfo;
  edges: RoleEdge[];
}

export interface RoleConnectionPromise
  extends Promise<RoleConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RoleEdge>>() => T;
  aggregate: <T = AggregateRolePromise>() => T;
}

export interface RoleConnectionSubscription
  extends Promise<AsyncIterator<RoleConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RoleEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRoleSubscription>() => T;
}

export interface RoleEdge {
  node: Role;
  cursor: String;
}

export interface RoleEdgePromise extends Promise<RoleEdge>, Fragmentable {
  node: <T = RolePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RoleEdgeSubscription
  extends Promise<AsyncIterator<RoleEdge>>,
    Fragmentable {
  node: <T = RoleSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRole {
  count: Int;
}

export interface AggregateRolePromise
  extends Promise<AggregateRole>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRoleSubscription
  extends Promise<AsyncIterator<AggregateRole>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface PermissionSubscriptionPayload {
  mutation: MutationType;
  node: Permission;
  updatedFields: String[];
  previousValues: PermissionPreviousValues;
}

export interface PermissionSubscriptionPayloadPromise
  extends Promise<PermissionSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PermissionPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PermissionPreviousValuesPromise>() => T;
}

export interface PermissionSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PermissionSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PermissionSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PermissionPreviousValuesSubscription>() => T;
}

export interface PermissionPreviousValues {
  id: ID_Output;
  name: String;
}

export interface PermissionPreviousValuesPromise
  extends Promise<PermissionPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface PermissionPreviousValuesSubscription
  extends Promise<AsyncIterator<PermissionPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface RoleSubscriptionPayload {
  mutation: MutationType;
  node: Role;
  updatedFields: String[];
  previousValues: RolePreviousValues;
}

export interface RoleSubscriptionPayloadPromise
  extends Promise<RoleSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RolePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RolePreviousValuesPromise>() => T;
}

export interface RoleSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RoleSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RoleSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RolePreviousValuesSubscription>() => T;
}

export interface RolePreviousValues {
  id: ID_Output;
  name: String;
}

export interface RolePreviousValuesPromise
  extends Promise<RolePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface RolePreviousValuesSubscription
  extends Promise<AsyncIterator<RolePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
  email?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  email: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
