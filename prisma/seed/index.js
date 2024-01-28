const { PrismaClient } = require("@prisma/client");
// import data from "../data/data.json" assert { type: "json" };

const prisma = new PrismaClient();

const createFakeEventData = () => {
  const EventType = ["SOLO", "SOLO_OR_GROUP", "GROUP"];
  const EventCategory = [
    "MUSIC",
    "DANCE",
    "DRAWING",
    "CIVIL",
    "MECHANICAL",
    "CSE",
  ];

  const fakeEventData = [];

  EventCategory.forEach((category) => {
    EventType.forEach((type) => {
      Array.from({ length: 3 }).forEach((_, i) => {
        if (type === "SOLO") {
          fakeEventData.push({
            name: `${category} ${type} ${i + 1}`,
            description: `Description of ${category} ${type} ${i + 1}`,
            category,
            type,
            venue: "Campus 6",
            imageUrl: "https://picsum.photos/200",
          });
        }

        if (type === "SOLO_OR_GROUP") {
          fakeEventData.push({
            name: `${category} ${type} ${i + 1}`,
            description: `Description of ${category} ${type} ${i + 1}`,
            category,
            type,
            venue: "Campus 7",
            imageUrl: "https://picsum.photos/200",
            groupSize: Math.floor(Math.random() * 4) + 1,
          });
        }

        if (type === "GROUP") {
          fakeEventData.push({
            name: `${category} ${type} ${i + 1}`,
            description: `Description of ${category} ${type} ${i + 1}`,
            category,
            type,
            venue: "Campus 8",
            imageUrl: "https://picsum.photos/200",
            groupSize: Math.floor(Math.random() * 3) + 2,
          });
        }
      });
    });
  });

  return fakeEventData;
};

async function seed() {
  const fakeEventData = createFakeEventData();
  await prisma.event.deleteMany({});
  await prisma.event.createMany({
    data: fakeEventData,
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
