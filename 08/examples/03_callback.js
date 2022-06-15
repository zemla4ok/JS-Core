let forEach = function (items, algo) {
  for (let i = 0; i < items.length; i++) {algo(items[i])}
};
let print =  (item) => console.log(item)
let send = (item) => item.sendEmail();

let clients = [
  { email: 'jonhdoe@gmail.com',
    sendEmail: () => {} },
  { email: 'mrsmith@gmail.com',
    sendEmail: () => {} }
];

forEach(clients, print);
forEach(clients, send);