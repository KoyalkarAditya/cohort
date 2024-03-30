function MaxValue(arr: number[]): number {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
interface UserType {
  firstName: string;
  lastName: string;
  age: number;
}
type Users = UserType[];
const allUsers: Users = [
  {
    firstName: "aditya",
    lastName: "tinku",
    age: 8,
  },
  {
    firstName: "sai",
    lastName: "tinku",
    age: 19,
  },
];
function filterUSers(users: UserType[]) {
  return users.filter((x) => x.age >= 18);
}

const filterUsers = allUsers.filter((user) => user.age > 18);
