import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const cover = (t: string) => `https://via.placeholder.com/300x420?text=${encodeURIComponent(t)}`;

async function main() {
  await prisma.livros.createMany({
    data: [
      { title: 'Angular na Prática', coverUrl: cover('Angular'), category: 'tecnologia' },
      { title: 'TypeScript Essencial', coverUrl: cover('TS'), category: 'tecnologia' },
      { title: 'Clean Code', coverUrl: cover('Clean Code'), category: 'tecnologia' },
      { title: 'Direito Civil', coverUrl: cover('Civil'), category: 'direito' },
      { title: 'Direito Penal', coverUrl: cover('Penal'), category: 'direito' },
      { title: 'Dg', coverUrl: cover('Civil'), category: 'romance' },
      { title: 'Diggg', coverUrl: cover('Penal'), category: 'romance' },
    ]
  });
}

main().finally(() => prisma.$disconnect());
