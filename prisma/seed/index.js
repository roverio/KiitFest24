const { PrismaClient } = require("@prisma/client");
// import data from "../data/data.json" assert { type: "json" };
const fs = require("fs");
const prisma = new PrismaClient();


// randomly throws cultural or technical

  async function seed() {
    const user = await prisma.user.findMany({
      where: {
        isPaymentCompleted: false,
      },
      select: {
        email: true,
        name: true,
        phoneNumber: true,
        isKiitStudent: true,
        institution: true,
      },
    });
    console.log(user);
    const jsonData = JSON.stringify(user);
    console.log(jsonData);
    fs.writeFileSync('output.json', jsonData);
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
