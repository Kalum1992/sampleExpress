import { v4 as uuidv4 } from "uuid";

let users = [
  {
    firstName: "Kalum",
    lastName: "Galmangoda",
    age: "29",
  },

  {
    firstName: "Yureshi",
    lastName: "Karawita",
    age: "29",
  },
];

export const getUsers = (req, res) => {
  console.log(users);
  res.send(users);
  //   res.send("Hellooes");
};

export const createUser = (req, res) => {
  const userT = req.body;

  //   const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  //   const userWithId = { ...user, id: uuidv4() };

  users.push({ ...userT, id: uuidv4() });

  res.send(`user with the name ${userT.firstName} added to the database!`);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((userT) => userT.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with id: ${id} deleted from the database`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userToBeUpdates = users.find((user) => user.id === id);

  if (firstName) userToBeUpdates.firstName = firstName;
  if (lastName) userToBeUpdates.lastName = lastName;
  if (age) userToBeUpdates.age = age;

  res.send(`User with the id: ${id} has been updated`);
};
