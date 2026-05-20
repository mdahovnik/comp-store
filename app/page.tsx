import prisma from "@shared/lib/prisma";
import { Card, CardTitle } from "@shared/ui/card";
import { TypographyH1 } from "@shared/ui/typographyH1";

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: {
      name: "Maksim",
    },
  });
  console.log(user);

  return (
    <div>
      <main>
        <TypographyH1>Hellow</TypographyH1>
        <Card className="flex text-center w-120">
          <CardTitle>{user?.name}</CardTitle>
        </Card>
      </main>
    </div>
  );
}
