# 3 -- Типы данных

Типы данных в JavaScript делятся на две категории: 
- Примитивные; 
- Ссылочные. 

К примитивам относятся 7 из 8 типов данных, которые отличаются от ссылочных в большей степени тем, что работа с ними идёт по значению. Восьмым типом данных является объект. И это единственный тип данных, работа с которым идёт по ссылке. 

По сути всё, что не примитив в JavaScript, - это объект. К ним относятся как сами объекты, так и массивы, и даже функции. Все они в конечном итоге “наследуются”(1) от объектов. 

(1) В JavaScript под термином наследование понимается механизм прототипного наследования, который хоть и похож, но всё же отличается от обычной интерпретации наследования. Подробнее о прототипах будет рассказано в лекции про ООП.

# ==============================

# 4 -- "по значению"

Когда мы создаём переменную и задаём ей в качестве значения, к примеру, число 78, то в конечном итоге получаем переменную с конкретным значением 78. Просто. Как есть. Во всех последующих случаях обращения к этой переменной в коде мы работаем именно с её значением. Рассмотрим следующий пример:

Как видно на примере выше, изменения в переменной num никак не влияют на значение переменной newNum. Когда во второй строке мы как бы присваиваем переменную num переменной newNum, то, на самом деле, в качестве значения для переменной newNum мы просто задаём текущее значение переменной num, т.е. 78.

# ==============================

# 5 -- "по ссылке"

Итак, в первой строке мы создаём пустой объект. В переменную obj попадает ссылка на этот объект (никак не сам объект!). Далее при любом обращении к переменной obj в качестве значения мы получаем ссылку на наш объект где-то в памяти. Так во второй строке по сути мы делаем копию нашей ссылки и складываем её в переменную newObj. Далее в 4 строке мы изменяем наш объект, и в конце в обоих случаях закономерно получаем одинаковый вывод, т.к. обе переменные хранят в себе ссылки на один и тот же объект.

# ==============================

# 6-10 -- создание объектов

# ==============================

# 11 -- Встроенные методы Object

# ==============================

# 12 -- Object.keys(object)

# ==============================

# 13 -- Object.values(object)

# ==============================

# 14 -- Object.entries(object)

# ==============================

# 15 -- Object.is(object1, object2)

# ==============================

# 16/17 -- Копирование объектов

Как мы уже знаем, скопировать объект обычным присваиванием у нас не получится. В этом случае мы создадим лишь копию ссылки. 

Чтобы сделать полноценную копию объекта нам нужно создать новый объект и скопировать в него все свойства старого. Звучит довольно просто, не так ли? Рассмотрим следующий пример:

# ==============================

# 18 -- Правильное копирование объектов

На самом деле Object.assign() и object spread(1) вполне себе хорошие способы копирования объектов (если помнить об особенностях копирования таким способом). Однако если нам нужна глубокая копия объекта, то простым использованием Object.assign() или object spread(1) нам, к сожалению, не обойтись.

Вариантов решения проблемы несколько: 
- Первый и в большинстве случаев самый подходящий способ - использование сторонних библиотек (например, lodash); 
- Использование методов JSON.stringify() и JSON.parse() (неоднозначный вариант, т.к. тоже имеет свои подводные камни, о которых нужно обязательно помнить); 
- Создание своей собственной функции для глубокого копирования;

(1) Литеральная форма объектов также позволяет легко сделать копию при помощи spread-оператора (…): { …objectToCopy }. Эта возможность появилась лишь в спецификации ES7.

# ==============================

# 19 -- Сравнение объектов

Со сравнением объектов дела обстоят похожим образом. Как и в случае с копированием, сравнение объектов обычными способами с использованием ==, === и даже Object.is() не даст нам должных результатов. Рассмотрим следующий пример:

И снова поговорим о ссылках. В первой строке мы создаём объект и складываем ссылку на него в переменную obj. Во второй строке мы создаём ещё один, хоть и очень похожий, но всё-таки новый объект и складываем ссылку на него в переменную anotherObj. Таким образом, мы имеем две разные ссылки на разные объекты и в случае попытки сравнения закономерно получаем false.

# ==============================

# 20 -- Правильное сравнение объектов

Здесь также существует несколько способов. В зависимости от ситуации может пригодиться любой из них. 

- Ручное сравнение - создание функции, которая принимает на вход два объекта одинакового типа и сравнивает их по конкретным полям;
- Ручное сравнение на уровне класса - по сути это тоже самое, что описано в первом пункте, но в рамках класса (например, метод .equals(obj)); 
- Поверхностное сравнение - создание функции, которая принимает на вход два объекта и сравнивает их на основе свойств верхнего уровня; 
- Глубокое сравнение - создание функции, которая принимает на вход два объекта и сравнивает их на основе свойств на всех доступных уровнях вложенности.

# ==============================

# 21 -- Массивы

Массив, как и объект, представляет данные в виде некоторого набора пар вида “ключ: значение”. Однако если в обычных объектах главный акцент идёт на удобную работу со значениями по их именам (ключам), то в массивах данные располагаются в виде проиндексированного(1) списка. 

С помощью индексов можно очень просто обращаться к значениям массива. Для этого нужно просто указать нужный индекс в квадратных скобках сразу после имени соответствующего массива (например, fruits[2]). 

Как правило, массивы удобнее всего использовать в ситуациях, когда нам нужно хранить какой-то список данных одинакового типа. Хоть в JavaScript и допускается возможность хранения в массиве значений разных типов, делать так крайне не рекомендуется! Резюмируя, можно сказать, что массив - это упорядоченная коллекция данных. 

(1) Индексация элементов массива в JavaScript, как и во многих других языках программирования, начинается с 0. Т.е. первый элемент массива имеет индекс 0, второй - 1, третий 2 и т.д.

# -- создание массива

В 99.99% случаев используется первый вариант создания, т.к. он лаконичнее и ведёт себя более предсказуемо. Кроме этого, как видно на примере, массив можно создать сразу со значениями. 

Также массивы можно создавать на основе каких-либо итерируемый сущностей (о них позже) или с помощью встроенного метода Array.of(…elements), передавая в него значения через запятую.

# ==============================

# 22/23 -- Итерируемые сущности

Итерация по сути означает проход (или перебор). Т.е. итерируемые сущности - это такие сущности, по которым возможно осуществить проход (или перебрать). 

В JavaScript понятие итерируемых сущностей появилось в спецификации ES6. С этого момента любая сущность, корректно реализующая функцию итерации по ключу [Symbol.iterator], является итерируемой. В той же спецификации появилась новая реализация цикла for, специально предназначенная для таких сущностей: for .. of. Кроме этого, ранее упомянутые spread-операторы также пришли к нам в ES6. По умолчанию итерируемыми сущностями являются все строки, массивы и объекты Map, Set. 

Для реализации собственного итератора нужно в объекте по ключу [Symbol.iterator] описать  специальную функцию. Эта функция должна возвращать объект с методом next(), с помощью которого и осуществляется непосредственно итерация. Метод next() также должен возвращать специальный объект, содержащий поле value - текущее значение итерации, и done - состояние завершённости итерации (если done равно true, то итерация завершается). 

Для создания массива из итерируемой сущности нужно просто вызвать встроенный метод Array.from(iterable).

# ==============================

# 24 -- Встроенные методы массива

Массивы в JavaScript имеют огромное количество встроенных методов. Полный список мы здесь, естественно, рассматривать не будем, но основные всё же затронем. 

Большинство методов решают самые тривиальные задачи в рамках работы с массивами. Так для добавления нового элемента в конец массива мы можем воспользоваться методом .push(item). В пару к нему есть метод .pop(), который, напротив, удаляет последний элемент массива и возвращает его. Если нужно добавить элемент в начало, то для этого есть метод .unshift(elem). А для удаления первого элемента массива есть метод .shift() (который, как и .pop(), возвращает удаляемый элемент). Есть метод .indexOf(item), который возвращает индекс вхождения элемента или значение -1 в случае отсутствия такого элемента. И ещё много разных других методов…

Отдельного внимания заслуживают лишь перебирающие методы.

# ==============================

# 24-30 -- Перебирающий методы массива

Перебирающие методы массивов несколько отличаются от тех, что были рассмотрены ранее. Главной их особенностью является то, что все они в качестве первого параметра принимают callback-функцию, которую поочерёдно выполняют для каждого элемента массива. 

Примеры: 
- .forEach() - просто выполняет переданную функцию для каждого элемента массива; 
- .filter() - в качестве результата возвращает новый массив, состоящий только из тех элементов, для которых переданная функция вернула значение true; 
- .map() - в качестве результата возвращает новый массив, состоящий из возвращённых значений вызова переданной функции; 
- .find() - возвращает первый элемент массива, для которого переданная функция вернула значение true (или undefined, если для всех элементов функция вернула значение false); 
- .reduce() - во время выполнения сохраняет промежуточный результат, а в конечном итоге его возвращает; 
- .every()/.some() - возвращает true, если функция для каждого/любого элемента вернула значение true, иначе false.

# ==============================

# 31 -- Преобразование объекта к примитиву

Первое и самое простое правило преобразования объектов к примитивам - любой объект при приведении к логическому типу будет равняться значению true. Всегда. 

В ситуациях, когда мы пытаемся сложить, отнять или произвести какую-то другую(1) математическую операцию над двумя объектами, происходит преобразование к числу. 

Ситуаций, когда идёт явное приведение объекта к строке не так уж много, но тем не менее они есть. Так, к примеру, во время вызова браузерной функции alert(object) объект, переданный в качестве параметра, автоматически приводится к строке или же в случаях, когда мы пытаемся использовать объект в качестве ключа для значения другого объекта. 

(1) Исключением является сложение. С ним ситуация обстоит чуть сложнее (подробности далее).

# ==============================

# 32 -- Подсказки преобразования объекта к примитиву

Когда объект “понимает”, что ему нужно привестись к числу или строке, он, опираясь на необходимый тип приведения, пытается вызвать внутренний метод по ключу [Symbol.toPrimitive] и в качестве параметра передаёт этот тип приведения.

Возможные типы: 
- ‘string’ - явное или неявное преобразование к строке; 
- ‘number’ - явное или неявное преобразование к числу; 
- ‘default’ - в случаях, когда оператор “не уверен”, какой тип данных ожидать (например, во время сложения, т.к. оно может использоваться и для чисел, и для строк; при сравнении с приведением типа (==) и др. 

- Как правило, приведение в случаях ‘number’ и ‘default’ выдаёт одинаковый результат. Однако если вы сами описываете логику приведения типов, то, естественно, вольны решать самостоятельно, как объект будет вести себя в этих случаях.

# ==============================

# 33 -- Устаревшие методы объекта

В ситуациях, когда JavaScript должен произвести приведение объекта к примитиву, он пытается сделать это следующим образом: 

- Вызвать метод по ключу `[Symbol.toPrimitive](hint)`, если он существует. 
- Если такого нет и hint равен ‘string’, вызвать метод .toString(), если он существует, иначе .valueOf(), если он существует. 
- Если такого нет и hint равен ‘number’ или ‘default’, вызвать метод .valueOf(), если он существует, иначе .toString(), если он существует. 
- Если ничего из вышеперечисленного не принесло результата, сгенерировать ошибку TypeError. 

Главной проблемой старых методов .toString() и .valueOf() было то, что они могли легко потеряться. Если где-то на уровне самого объекта также появится функция с одним из этих названий, то просто так получить доступ к оригиналам уже не получится. Кроме этого они могли возвращать только примитивы. Возвращение объектов в таких методах игнорируется.








