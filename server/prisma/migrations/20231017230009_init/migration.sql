-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "content" TEXT,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Message_uuid_key" ON "Message"("uuid");
