const person = { // создаем объект
  firstName: 'Dmitry',
  lastName: 'Kotovich'
};
const personCopy = Object.assign({}, person);

personCopy.firstName = 'Roman';

console.log(personCopy); // { firstName: 'Roman', lastName: 'Kotovich' }
console.log(person);     // { firstName: 'Dmitry', lastName: 'Kotovich' }

// ============================================================

const personWithPassport = { // создаем объект
  firstName: 'Dmitry',
  lastName: 'Kotovich',
  passport: {
    series: 'KH',
    number: '1231234'
  }
};
const personWithPassportCopy = Object.assign({}, personWithPassport);

personWithPassportCopy.passport.series = 'MC';

console.log(personWithPassportCopy); // { ..., passport: { series: 'MC', number: '1231234' } }
console.log(personWithPassport);     // { ..., passport: { series: 'MC', number: '1231234' } }
