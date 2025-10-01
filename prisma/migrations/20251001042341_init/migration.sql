-- CreateTable
CREATE TABLE "Livros" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "coverUrl" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Livros_pkey" PRIMARY KEY ("id")
);
