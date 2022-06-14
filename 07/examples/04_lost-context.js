let user = {
  name: "Dima",
  hi(x, y) { console.log(this.name, x, y); }
};

const hi = user.hi;

user.hi(1, 2);  // 'Dima' 1 2
hi(1, 2);       // undefined 1 2

// ====================== call ==========================

let user = {
  name: "Dima",
  hi(x, y) { console.log(this.name, x, y); }
};

const hi = user.hi;

user.hi(1, 2);  // 'Dima' 1 2
hi.call(user, 1, 2);  // 'Dima' 1 2

// ====================== apply ==========================

let user = {
  name: "Dima",
  hi(x, y) { console.log(this.name, x, y); }
};

const hi = user.hi;

user.hi(1, 2);     // 'Dima' 1 2
hi.apply(user, [1, 2]);  // 'Dima' 1 2

// ====================== bind ==========================

let user = {
  name: "Dima",
  hi(x, y) { console.log(this.name, x, y); }
};

const hi = user.hi.bind(user);

user.hi(1, 2);     // 'Dima' 1 2
hi(1, 2);  // 'Dima' 1 2

