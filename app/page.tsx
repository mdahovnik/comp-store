import prisma from "@shared/lib/prisma";
import { TypographyH1 } from "@shared/ui/typographyH1";

export default async function Home() {
  const games = await prisma.game.findMany();
  console.log(games);

  return (
    <div>
      <main>
        <TypographyH1>Hellow</TypographyH1>
      </main>
    </div>
  );
}
