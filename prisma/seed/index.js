const { PrismaClient } = require("@prisma/client");
// import data from "../data/data.json" assert { type: "json" };

const prisma = new PrismaClient();

const createFakeEventData = () => {
  const MemberType = ["SOLO", "SOLO_OR_GROUP", "GROUP"];
  const EventCategory = [
    "MUSIC",
    "DANCE",
    "DRAWING",
    "CIVIL",
    "MECHANICAL",
    "CSE",
  ];

  // randomly throws cultural or technical
  function getRandomYesOrNo() {
    let randomNum = Math.floor(Math.random() * 2);
    return randomNum === 1 ? "CULTURAL" : "TECHNICAL";
  }

  // Example usage
  const fakeEventData = [];

  EventCategory.forEach((category) => {
    MemberType.forEach((memberType) => {
      Array.from({ length: 3 }).forEach((_, i) => {
        if (memberType === "SOLO") {
          fakeEventData.push({
            name: `${category} ${memberType} ${i + 1}`,
            description: `Description of ${category} ${memberType} ${i + 1}`,
            category,
            memberType,
            venue: "Campus 6",
            imageUrl: "https://picsum.photos/200",
            type: getRandomYesOrNo(),
          });
        }

        if (memberType === "SOLO_OR_GROUP") {
          fakeEventData.push({
            name: `${category} ${memberType} ${i + 1}`,
            description: `Description of ${category} ${memberType} ${i + 1}`,
            category,
            memberType,
            venue: "Campus 7",
            imageUrl: "https://picsum.photos/200",
            groupSize: Math.floor(Math.random() * 4) + 1,
            type: getRandomYesOrNo(),
          });
        }

        if (memberType === "GROUP") {
          fakeEventData.push({
            name: `${category} ${memberType} ${i + 1}`,
            description: `Description of ${category} ${memberType} ${i + 1}`,
            category,
            memberType,
            venue: "Campus 8",
            imageUrl: "https://picsum.photos/200",
            groupSize: Math.floor(Math.random() * 3) + 2,
            type: getRandomYesOrNo(),
          });
        }
      });
    });
  });

  return fakeEventData;
};

async function seed() {
  await prisma.event.createMany({
    data: [
      {
        name: "Teenie Weenie tales",
        description: "https://drive.google.com/file/d/1DfDRyu5bpibOZlgNlklyG5Y1H0GuK2LG/view?usp=drive_link",
        imageUrl: "https://i.ibb.co/wwvW34G/Poster1x1-Website.webp",
        venue: "T.B.A",
        memberType: "NONE",
        type: "TECHNICAL",
        category: "TSLANG",
        groupSize: 1,
    },
    ],
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
