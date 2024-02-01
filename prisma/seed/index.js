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
