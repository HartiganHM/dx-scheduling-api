"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Permission",
    embedded: false
  },
  {
    name: "ClientIntake",
    embedded: false
  },
  {
    name: "IntakeFormValues",
    embedded: false
  },
  {
    name: "Client",
    embedded: false
  },
  {
    name: "Parent",
    embedded: false
  },
  {
    name: "Address",
    embedded: false
  },
  {
    name: "Physician",
    embedded: false
  },
  {
    name: "Insurance",
    embedded: false
  },
  {
    name: "IntakeFormQuestions",
    embedded: false
  },
  {
    name: "Referral",
    embedded: false
  },
  {
    name: "Diagnosis",
    embedded: false
  },
  {
    name: "Concerns",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
