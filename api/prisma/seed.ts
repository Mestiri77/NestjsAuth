
// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // // create two dummy articles
  const reclamations1 = await prisma.reclamation.create({
  data:{
    refRec      :"R0001",
    observation :"observation",
    documentURL :"documentURL",
    description:"description",
    status      :"status"
  }
  });
  const reclamations2 = await prisma.reclamation.create({
    data:{
      refRec      :"R0002",
      observation :"observation",
      documentURL :"documentURL",
      description:"description",
      status      :"status"
    }
    });

//   const post2 = await prisma.article.upsert({
//     where: { title: "What's new in Prisma? (Q1/22)" },
//     update: {},
//     create: {
//       title: "What's new in Prisma? (Q1/22)",
//       body: 'Our engineers have been working hard, issuing new releases with many improvements...',
//       description:
//         'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
//       published: true,
//     },
//   });

//   console.log({ });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
