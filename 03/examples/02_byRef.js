// создаем переменную obj, складываем в нее ссылку на пустой объект
const obj = {};
// создаем переменную newObj, задаем ей значение переменной obj, т.е. ссылку на объект obj
const newObj = obj;

newObj.message = 'Hello!!';

console.log(obj);     // { message: 'Hello!!' }
console.log(newObj);  // { message: 'Hello!!' }