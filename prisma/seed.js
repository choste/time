// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
const userData = ['dandy lion', 'fox glove', 'blue berry'];

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);

	for (const name of userData) {
		const tag = await prisma.tag.create({
			data: {
				name
			}
		});
		console.log(`Created tag with id: ${tag.id}`);
	}
	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
