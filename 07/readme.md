# 3 -- контекст выполнения 

Контекст выполнения в JavaScript используется для того, чтобы отслеживать ход выполнения кода. Именно с его помощью определяется доступное окружение на текущем этапе выполнения программы. А также контекст выполнения содержит в себе дополнительные параметры, которые формируются самостоятельно JavaScript-движком при обработке вашего кода.

Контекст выполнения также, как и, например, лексическое окружение, является абстрактным механизмом спецификации. Это означает, что к нему невозможно обратиться напрямую.

По сути контекст выполнения просто предоставляет некоторую обёртку или окружение для исполняемого кода, содержащую некоторые вспомогательные элементы для отслеживания состояния программы, часть из которых даже достижима напрямую из кода (например, значение специального объекта this).

# ==============================

# 4 -- типы контекстов выполнения

В JavaScript существует три два вида контекстов выполнения:
- Глобальный контекст выполнения.
- Функциональный контекст выполнения.
- Контекст выполнения функции eval.

- ** Встроенную в JavaScript функцию eval использовать крайне не рекомендуется. Поэтому контекст выполнения данной функции по ходу лекции рассматриваться не будет. Подробнее о проблемах использования eval можно почитать тут.

# ==============================

# 5 -- Глобальный контекст выполнения

Глобальный контекст выполнения - это контекст выполнения по умолчанию. В этом контексте запускается весь первоначальный JavaScript-код, когда файл загружается в браузер. Любой глобальный код, т.е. код, который не находится в рамках какой-то функции выполняется в глобальном контексте выполнения.

JavaScript допускает наличие всего одного глобального окружения. Из этого следует то, что в JavaScript не может быть больше одного контекста выполнения. Происходит так из-за однопоточной архитектуры языка.

# ==============================

# 6 -- Функциональный контекст выполнения

Функциональный контекст выполнения - это контекст выполнения, который создаётся языком в момент вызова какой-либо функции.

Каждая функция имеет свой собственный контекст выполнения, поэтому их может быть больше, чем один. Функциональный контекст выполнения имеет доступ ко всему коду в глобальном контексте выполнения.

Если во время исполнения кода глобального контекста выполнения JavaScript «видит» вызов какой-то функции, он создаёт для неё новый контекст выполнения.

# ==============================

# 7 -- стек контекстов выполнения(call stack) 

Чтобы хранить и отслеживать контексты выполнения они формируются в стек контекстов выполнения — список контекстов, организованных по принципу LIFO (“Last In — First Out”, т. е. “последним пришёл — первым вышел”).

Текущий (выполняемый) контекст всегда является верхним элементом стека. После того, как необходимый код выполнится, связанный с ним контекст выполнения удаляется. Управление возвращается в контекст, который находился элементом ниже, и теперь он будет верхним элементом, т.е. текущим контекстом выполнения.

# ==============================

# 8 -- жизненный цикл контекста выполнения 

Каждый контекст выполнения в JavaScript проходит следующие этапы:
- Этап создания;
- Этап запуска;
- Этап уничтожения.

Этап создания происходит во время вызова функции, но до начала её выполнения. На этом этапе движок JavaScript сканирует код функции, создаёт лексическое окружение и инициализирует его (т.е. записывает все аргументы, переменные, внутренние функции, после чего определяет ссылку на внешнее лексическое окружение и задаёт значение this).

На этапе запуска код исполняется. По мере исполнения кода JavaScript может создавать и другие контексты выполнения. При этом пока JavaScript занят созданием и выполнением вложенных контекстов выполнения, текущий находится в “режиме ожидания".

После завершения исполнения всего кода в рамках текущего контекста выполнения он “выбрасывается” из стека вызова и уничтожается.


# ==============================

# 9 -- Контекст вызова 

Контекст вызова – это по сути значение специального объекта this. Данное значение, как правило, зависит от того, как мы вызываем функцию.

Любая функция, вызванная “сама по себе", будет иметь ссылку на глобальный объект в качестве значения this(1).

В случае вызова функции как метода объекта – значение this будет являться ссылкой на этот объект.

(1) В строгом режиме при тех же условиях this будет равняться undefined.

# ==============================

# 10 -- Потеря контекста

Довольно часто начинающие (а иногда и не только начинающие) разработчики на JavaScript встречаются с проблемой потери контекста. Это нормально и на практике встречается нередко.

Если запустить код из примера в среде Node.js, то в качестве вывода через 1 секунду мы получим следующую строку: undefined has just closed the app!

** В данном случае для решения проблемы можно просто в качестве первого параметра для функции setTimeout() прокинуть новую функцию, которая делает прямой вызов user.closeApp().

# ==============================

# 11 -- call

# ==============================

# 12 -- apply

# ==============================

# 13 -- bind 

# ==============================

# 14 -- контекст выполнения в стрелочных функциях 

Стрелочные функции - особый случай. Как говорилось ранее, у них нет своего this. Даже в случае прямого вызова стрелочной функции в качестве метода у объекта, this внутри неё всё равно не будет ссылаться на этот объект.

Стрелочные функции всегда используют this окружающего контекста!
