import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      email: username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}
interface UpdateParams {
  firstName: string;
  lastName: string;
}
// insertUser("aditya@gmail.com", "123456", "koyalkar", "aditya");
async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });
  console.log(res);
}
async function getUser(username: string) {
  const res = await prisma.user.findFirst({
    where: {
      email: username,
    },
  });
  console.log(res);
}

// updateUser("aditya@gmail.com", {
//   firstName: "new name",
//   lastName: "Koyalkar",
// });
getUser("aditya@gmail.com");
