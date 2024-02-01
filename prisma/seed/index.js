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
  const fakeEventData = createFakeEventData();
  await prisma.event.deleteMany({});
  await prisma.event.createMany({
    data:[
      {
       name:"Frozen in Time",
       description: "Play with the hues of colors and bring your imagination on to the canvas ! Showcase your creativity to the world of watercolors and create unique artwork to flaunt your talent. \nTHEME: 'Life as a ROBOT' ",
       imageUrl:"https://i.ibb.co/jLmwPJ5/froz-web.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"ART",
       groupSize:1,
      },
      {
       name:"Ctrl + Kreate",
       description: "Ctrl+Kreate is a Logo Design Contest, where the participants are provided with a problem statement containing information about a brand, according to which they must create a Brand Logo and other creatives to showcase the Logo they have made. On the day of the competition, the participants will be asked to display a presentation of their logo, the components of the logo, the thought process behind the logo, the color palette used, and various demonstrations of how the logo can be used for the brand across various channels. Ctrl+Kreate is set out to bring out the Kreative side of KIITFEST 7.0 and introduce everyone to creative minds throughout the country.",
       imageUrl:"https://i.ibb.co/jgLJVKH/web2.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"DESIGN",
       groupSize:1,
      },
      {
       name:"Spotlight",
       description: "Embrace the rhythmic elegance of synchronized movement, where every step composes a mesmerising symphony! Step into roles unexplored, revealing your adaptability through seamless transitions between the myriad emotions of acting.Do your disguise, engage the lever, and unleash the emotions within. Assume personas unknown to you. The platform awaits its performer!",
       imageUrl:"https://i.ibb.co/Wxht2FR/SPOTLIGHT-WEBSITE.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"ACTING",
       groupSize:1,
      },
      {
       name:"Shabd",
       description: "'shabd(open mic)' is a cultural event that weaves together various artistic expressions, including poetry, storytelling, and 'shero-shayari' (couplets often focused on themes of love and empowerment). Participants engage in sharing their creative narratives, creating a vibrant platform for the celebration of language, emotions, and cultural richness. It serves as a unique gathering where individuals showcase their poetic talents and connect through the art of storytelling.",
       imageUrl:"https://i.ibb.co/MkDp0h9/SHABD-web.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"MUSIC",
       groupSize:1,
      },
      {
       name:"Mismatch",
       description: "Embark on a culinary journey at 'Mismatch' where unexplored flavors take center stage. Join the gastronomic playground solo or with a team of three. With rounds like the Gastronomic Quiz, Sensory Challenge, and Culinary Battle, your taste buds will dance over two days at KIIT FEST. Suit up, gather ingredients, and let the symphony of flavors unfold.\nMISMATCH is in the house, and the stage is set for you to stir up a storm. Ready for the ultimate culinary adventure?\nUnleash your culinary creativity in a team of up to three, or dare to go solo! The only rule? All team members must hail from the same School, College, or University. Let's see what magic you can cook up together!",
       imageUrl:"https://i.ibb.co/jLmwPJ5/froz-web.png",
       venue:"T.B.A",
       memberType:"SOLO_OR_GROUP",
       type:"CULTURAL",
       category:"COOKING",
       groupSize:1,
      },
      {
       name:"Melange",
       description: "Welcome to Melange, where style meets sophistication in a dazzling showcase of talent and glamor based on the theme ‘Gender Fluid Fashion’! In our thrilling two-round fashion extravaganza, teams will grace the runway in Round 1, strutting their stuff for 12 minutes with (12 to 14 + 6) members each. The energy will be palpable as fashion takes centre stage.\nAs the spotlight intensifies, round 2 unfolds with a captivating solo walk by a distinguished male and a female contestant from each participating team. With just 3 minutes to captivate the audience, they'll compete for the coveted titles of Mr. KIIT University and Miss KIIT University. Join us for an evening of elegance, creativity, and the crowning of the next generation of style icons!",
       imageUrl:"https://i.ibb.co/HxM3vXP/Prizes-Melange.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"FASHION",
       groupSize:20,
      },
      {
       name:"Kwest",
       description: "Presenting 'KWEST', an exciting event with the objective of promoting the development, diffusion, and enjoyment of art among students. This unique competition is crafted to ignite the imaginative sparks within students, offering them a dynamic platform to articulate their emotions through 'Best Out of Waste' \nThe competition shall be based on the theme 'Retro Recreation: A Resurgence of the Vintage Era.'",
      imageUrl:"https://i.ibb.co/WHxywvx/KWEST-WEB.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"ART",
       groupSize:1,
      },
      {
       name:"Instant-O-Fie",
       description: " 'Faces of the Fest' is an exploration of the human element within KIITFEST. From the excitement of the attendees to the dedication of the participants, this theme seeks to freeze moments that define the exhilarating fest experience.",
       imageUrl:"https://i.ibb.co/Pcgtb61/Instant-O-Fie-Website.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"PHOTOGRAPHY",
       groupSize:1,
      },
      {
       name:"Fuego",
       description: "A band performance is a live musical presentation by a group of musicians who play various instruments and collaborate to create a cohesive and enjoyable musical experience. It typically involves a combination of vocals, guitar, bass, drums, keyboards, and other instruments depending on the genre and style of the band. A band performance can be exhilarating, entertaining, and engaging for both the performers and the audience. Hence, we give you the opportunity to showcase your prowess and interact with the instruments and your audience.",
       imageUrl:"https://i.ibb.co/0Mxrfrx/FUEGO-WEBSITE.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"MUSIC",
       groupSize:5,
      },
      {
       name:"Dekh Tamasha Dekh",
       description: "Each participating team is expected to perform a Street Play (17 minutes) highlighting the emotional and societal aspects of abandonment. The NUKKAD NATAK performances must effectively convey the emotional turmoil emphasizing the need for empathy, understanding and responsible care-giving. The teams are encouraged to suggest practical steps that society, as a whole, can take to prevent wrongdoings and promote a stronger sense of support.",
       imageUrl:"https://i.ibb.co/x35wfr9/WEB-DEKH-TAMASHA-DEKH.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"ACTING",
       groupSize:25,
      },
      {
       name:"Clash of Conviction",
       description: "Town Hall Debates are dynamic events, often favored by politicians vying for high office or city council seats. This format involves moderators moving around with microphones, allowing the audience to pose questions. Each debater is subject to time constraints, adding an element of unpredictability and intensity to the debate.",
       imageUrl:"https://i.ibb.co/q7zSt2w/Clash-of-Conviction-Website.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"DEBATE",
       groupSize:1,
      },
      {
       name:"Chitra Vichitra",
       description: "Where do you fit in the tapestry of existence? Explore belonging in all its shades at Chitra Vichitra, KIIT Film Society's thought-provoking short film festival.",
       imageUrl:"https://i.ibb.co/J3LJpRb/Chitra-Vichitra-prizes.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"SHORTFILM",
       groupSize:10,
      },
      {
       name:"Biz Tech Quiz",
       description: "Think you know the nuts and bolts of technology as well as the ebb and flow of business? Let's put that to the test! Presenting the 'Biz-Tech Quiz', where the sharp-witted meet the tech-savvy. It's not just about what's in the books; it's about connecting the pixels to the big picture.\nSo, if you're up to date with your Musk and your market cap, join us at the Biz-Tech Quiz. It's where business acumen meets tech expertise, and where your sharp insights could earn you the title of the Biz-Tech Maestro!",
       imageUrl:"https://i.ibb.co/Qv9RGds/biz-tech-poster-without-link.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"QUIZ",
       groupSize:2,
      },
      {
       name:"Buzz Write Year",
       description: "In the cacophony of thoughts in our head, the most creative ideas sometimes get lost in the traffic therefore writing them down is arguably the best way to preserve them forever as the ink etches the idea, forever to retain. Join us for an invigorating writing event designed to spark your imagination and fuel your passion for the art of writing. Whether you're a seasoned author, a curious beginner, or somewhere in between, this event is your space to connect with fellow wordsmiths, explore diverse genres, and refine your craft.",
       imageUrl:"https://i.ibb.co/2k95BqG/Buzz-Write-Year-Website.png",
       venue:"T.B.A",
       memberType:"SOLO",
       type:"CULTURAL",
       category:"WRITING",
       groupSize:1,
      },
      {
       name:"Star Salesman",
       description: "Do you consider yourself to be a people's person? Do you think you have got it in you to convince people to become your customers? If you think you have a way with people that is meant for you, put these skills of yours to test, be a part of the live market and zoom your way to become the ultimate marketing stud!",
       imageUrl:"https://i.ibb.co/R7tpqys/Star-Salesman-web.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"MARKETING",
       groupSize:5,
      },
      {
       name:"Alankaar",
       description: "Play with the hues of colors and bring your imagination on to the canvas ! Showcase your creativity to the world of watercolors and create unique artwork to flaunt your talent. \nTHEME: 'Life as a ROBOT' ",
       imageUrl:"https://i.ibb.co/ZNqVTng/s17-Without-website.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"MUSIC",
       groupSize:5,
      },
      {
       name:"Antakshari",
       description: "Antakshari is a popular musical game that originated in India. The game involves participants taking turns singing songs based on a specific theme or the ending syllable or word of the previous participant's song or war of random melodies between teams with various rules imposed.",
       imageUrl:"https://i.ibb.co/qB9wTh0/ANTAkshari-WEB.png",
       venue:"T.B.A",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"MUSIC",
       groupSize:7,
      },
      {
       name:"Tug of War",
       description: "Gear up for KIITFEST 7.0's pulse-pounding event, the Battle of Strength. Teams will vie for supremacy in this exhilarating competition, testing not just raw power but also strategy and teamwork. Participants will showcase their strength and tactics in a fierce battle, with each team presenting their unique approach. This event goes beyond physical prowess, emphasizing coordination, strategy, and sportsmanship. Join us for a thrilling showcase of strength, strategy, and camaraderie. The 'Battle of Strength' promises an action-packed spectacle, uniting participants and spectators alike in the true spirit of competition at KIITFEST 7.0.",
       imageUrl:"https://i.ibb.co/J5h8ty2/TUG-web.png",
       venue:"T.B.A.",
       memberType:"GROUP",
       type:"CULTURAL",
       category:"GAMES",
       groupSize:6,
      },
      {
       id:"",
       name:"Zara Nachke Dikha",
       description: "Unleash your unique style, choreographic genius, and captivating stage charisma in an exhilarating exhibition of diverse dance forms at Zara Nachke Dikha! Immerse yourself in the grace of Classical Dance form to the pulsating energy of Contemporary beats; this event is a vibrant celebration of diverse cultures and styles, crafting a mesmerizing blend of colour and rhythm that captures your senses. Come along for an extraordinary adventure where each movement narrates a tale, and the stage transforms into a canvas for a burst of creativity and genuine passion!",
       imageUrl:"https://i.ibb.co/H2ybH4b/ZARA-NACHKE-DIKHA-Without-Registration.png",
       venue:"T.B.A.",
       memberType:"SOLO_OR_GROUP",
       type:"CULTURAL",
       category:"DANCE",
       groupSize:5, 
      }
     ]
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
