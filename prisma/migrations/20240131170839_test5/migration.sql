-- CreateEnum
CREATE TYPE "EventMember" AS ENUM ('SOLO', 'SOLO_OR_GROUP', 'GROUP');

-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('MUSIC', 'DANCE', 'DRAWING', 'CIVIL', 'MECHANICAL', 'CSE');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('CULTURAL', 'TECHNICAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "kfid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "isKiitStudent" BOOLEAN NOT NULL DEFAULT false,
    "rollNumber" TEXT,
    "isEmailVerified" BOOLEAN NOT NULL DEFAULT false,
    "merchandise" BOOLEAN NOT NULL DEFAULT false,
    "isPaymentCompleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "venue" TEXT NOT NULL,
    "memberType" "EventMember" NOT NULL,
    "type" "EventType" NOT NULL,
    "category" "EventCategory" NOT NULL,
    "groupSize" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EventRegisteredUser" (
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "groupName" TEXT,

    CONSTRAINT "EventRegisteredUser_pkey" PRIMARY KEY ("userId","eventId")
);

-- CreateTable
CREATE TABLE "Issue" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolved" BOOLEAN NOT NULL,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_kfid_key" ON "User"("kfid");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_name_key" ON "Event"("name");

-- AddForeignKey
ALTER TABLE "EventRegisteredUser" ADD CONSTRAINT "EventRegisteredUser_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRegisteredUser" ADD CONSTRAINT "EventRegisteredUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issue" ADD CONSTRAINT "Issue_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
