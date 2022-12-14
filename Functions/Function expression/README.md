<h1>Function Expression</h1>
<hr>
<p>Данный синтаксис позволяет нам создавать новую функцию в середине любого выражения.</p>
<pre><code">sayHI = function() {
alert('Hello');
};</code></pre>
        <p>Здесь мы видим переменную <code class="lang- js">sayHI</code> получающую значение как новую функцию <code class="lang-js">function() { alert("Hello"); }</code>. Поскольку создание функции происходит в контексте выражения присваивания, это <em>Function Expression</em>.<p>
        <hr>
        <h2>Функция - это значение</h2>
        <p>Вне зависимости от того как создается функция, она всё равно будет считаться <b>значением</b>, но особым, так как вызвать ее мыможем только если будут указаны круглые скобки <code class="lang-js">sayHI()</code>. Но мы всё  равно можем работать с ней как так же как и с другими видами значений. Например, можем скопировать функцию в другую переменную. <pre><code class="lang-js">let hello = function() {
    console.log("hello");
};
        
let secondHello = hello;

hello();
secondHello();</code></pre>
        Пример Function Declaration
        <pre><code class="lang-js">function hello() {
    console.log('hello');
}</code></pre>
        Обратите внимание, что точка с запятой в конце <b>Function Expression</b> нужна, так как функция объявляется внутри выражения присваения.
        </p>
        <hr>
        <h2>Функции-Колбэки</h2>
        <p><pre><code class="lang-js">function ask(question, yes, no) { // question - текст вопроса
    if (confirm(question)) yes(); // yes - Функция, которая будет вызываться если ответ 'yes'
    else no(); // no - Функция, которая будет вызываться если ответ 'no'
}

function showOk() {
    console.log('your confirm.');
}

function showCancel() {
    console.log('your canceled.');
}

ask('question, showOk, showCancel');</code></pre>
    <b>Аргументы <code class="lang-js">showOk</code> и <code class="lang-js">showCancel</code> функции <code class="lang-js">ask</code> называются функциями-колбэками или просто колбэками</b>
    <br>
    <br>
    На практике подобные функции очень полезны. Основное отличие реальной функции <code class="lang-js">ask</code> от примера выше будет в том, что она использует более сложные способы    взаимодействия с пользователем, чем простой вызов <code class="lang-js">confirm</code>
    <br>
    <br>
    Пример кода с <b>Function Expression</b>
    <pre><code class="lang-js">function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask('your confirm?',
    function() {console.log('your confirm.'); },    
    function() {console.log('your canceled.'); }
);</code></pre>
    Здесь функции объявляются прямо внутри вызова <code class="lang-js">ask()</code>. У них нет имен, поэтому они называются анонимными. Такие функции недоступны снаружи <code class="lang-js">ask</code> (потому что они не присвоены переменным), но это как раз то, что нам нужно.</p>
    <hr>
    <h3>Функция - это значение, представляющее действие</h3>
    <p>Обычные значения, такие как строки или числа представляют собой данные. Функции, с другой, стороны, можно воспринимать как действия. Мы можем передавать их из переменной в переменную и запускать, когда захотим.</p>
    <hr>
    <h2>Function Expression в сравнении с Function Declaration</h2>
    <p>Помимо примеров выше, отличие состоит в том, когда создается функция движком <b>JS.</b> 
    <br>
    <br>
    <b>Function Expression создается, когда выполнение доходит до него, и затем уже может использоваться.</b> 
    <br>
    <br>
    <b>Function Declaration до формирования DOM, поэтому может быть вызвана раньше, чем она объявлена.</b>
    <pre><code class="lang-js">sayHI('Vasya'); // Это будет работать

function(name) {
    console.log(`hello ${name}!`);
}</code></pre>
    
    <pre><code class="lang-js">sayHI('Vasya'); // Это не будет работать

let Vasya = function() {
    console.log(`hello ${Vasya}!`);
};</code></pre>
    Еще одна особенность <b>Function Declaration</b> заключается в том, что я ее область видимости ограничена блоком кода, в котором она располагается. Ниже будут примеры одного и того же результата, полученного разными способами.
    <pre><code class="lang-js">let age = prompt('What are your old?', '');

if (age >= 18) {
    function welcome() {
        console.log('Greetings!');
    }
    welcome();
} else {
    function welcome() {
        console.log('hello!');
    }
    welcome();
}</code></pre>
    <pre><code class="lang-js">let age = prompt('What are your old?', '');

let welcome;

if (age >= 18) {
    welcome = function() {
        console.log('Greetings!');
    };
} else {
    welcome = function() {
        console.log('hello!');
    };
}</code></pre>
    <pre><code class="lang-js">let age = prompt('What are your old?', '');

let welcome = (age >= 18) ?
    function() {console.log(Greetings!); } :
    function() {console.log(hello!); };

welcome();</code></pre>
    </p>
    <hr>
    <h3>Важно</h3>
    <p>Если нам понадобилась функция, в первую очередь необходимо рассматривать <b>Function Declaration</b>. Он дает больше свободы в организации кода.
    </p>
    <hr>
    <h2>Итог</h2>
    <ul>
        <li>Функции – это значения. Они могут быть присвоены, скопированы или объявлены в любом месте кода.</li>
        <li>Если функция объявлена как отдельная инструкция в основном потоке кода, то это “Function Declaration”.</li>
        <li>Если функция была создана как часть выражения, то это “Function Expression”.</li>
        <li>Function Declaration обрабатываются перед выполнением блока кода. Они видны во всём блоке.</li>
        <li>Функции, объявленные при помощи Function Expression, создаются только когда поток выполнения достигает их.</li>
    </ul>
    <hr>
