interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}
type UpdateProps = Pick<User, "name" | "age" | "email" | "password">;
function updateUser(updateProps: UpdateProps) {}
updateUser({
  name: "Aditya",
  age: 10,
  email: "JHAjhaj@",
  password: "alsk",
});

type UpdatePropsOptional = Partial<UpdateProps>; // which makes the properties specification optional

//readonly
type Example = {
  readonly name: string;
  readonly email: string;
};
const user: Example = {
  name: "",
  email: "",
};
//user.email= "" cannot assign because it is a read only

interface Config {
  endpoint: string;
  apiKey: string;
}

const config: Readonly<Config> = {
  endpoint: "https://api.example.com",
  apiKey: "abcdef123456",
};

//config.apiKey="" cannot assign because it is a read only

// without using record

type UsersAge = {
  [key: string]: number;
};

const users: UsersAge = {
  aditya: 23,
  TInku: 38,
};

// with records we can create objects

type UsersAgeRecord = Record<string, number>;

const usersss: UsersAgeRecord = {
  Aditya: 1232,
};

type UserMapType = {
  name: string;
  age: number;
};
// Using Map to create key-value pairs (this is a javascript concept)
const usersMap = new Map<string, UserMapType>();
usersMap.set("key1", {
  name: "Aditya",
  age: 20,
});
usersMap.get("key1");



//Exclude (lets u exclude some type in type)

type Event1 = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event1, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK
// error => handleEvent('scroll')