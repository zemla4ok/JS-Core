const person = { name: 'Dmitry' };
const user = {
  id: 123,
  __proto__: person
};

for (const prop in user) {
  console.log(prop); // id name
}