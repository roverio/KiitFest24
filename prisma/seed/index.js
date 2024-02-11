const { PrismaClient } = require("@prisma/client");
// import data from "../data/data.json" assert { type: "json" };
const fs = require("fs");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");


// randomly throws cultural or technical

  async function seed() {
  

const a = async () => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash("bhavya@3", salt);
  console.log(hash);
};

a().catch((e) => {
  console.error(e);
  process.exit(1);
});
  }


seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//
//
//
//
//
//
//
//
//
//
//
//
//
//
