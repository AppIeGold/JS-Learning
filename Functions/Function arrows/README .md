<h1>Arrow Function</h1>
<hr>
<h2>Generals</h2>
<p>Помимо <b>Function Expression</b> и <b>Function Declaration</b> есть еще один синтаксис, который часто лучше чем <b>FE</b></p>
<pre><code class="lang-js">let func = (a, b, ...N) => expression;</code></pre>

<p>Выше наблюдается создание функции <code class="lang-js">func</code>, она принимает аргументы, а затем вычисляет <code class="lang-js">expression</code> в правой части с использованием аргументов и возвращает результат. <br><br>
    Ниже тот же самый результат через <b>Function Declaration :</b></p>
    <pre><code class="lang-js">let func = function(a, b, ...N) {
return expression;
}; </code></pre>
    
<p>Если Аргумент один, то можно убрать скобки:</p>
<pre><code class="lang-js">let func = n => n ** 2;

console.log(func(3)); // = 9</code></pre>

<p>Если аргументов нет, круглые скобки должны присутствовать, просто они будут пустыми:</p>
<pre><code class="lang-js">let func = () => 3 ** 2;

console.log(func());</code></pre>

   <p><b>AF</b> можно использовать как <b>FE:</b></p>
   <pre><code class="lang-js">let age = prompt('what are your old?', '');

let welcome = (age >= 18) ?
    () => console.log('Greetings!') :
    () => console.log('hello!');

welcome();</code></pre>

   <p>Тот же результат:</p>
   <pre><code class="lang-js">let age = prompt('What are your old?', '');

let welcome = (age >= 18) ?
    function() {console.log(Greetings!); } :
    function() {console.log(hello!); };

welcome();</code></pre>
        
   <hr>

   <h2>Многострочная AF</h2>
   <p>Стрелочные функции, которые мы видели до этого, были очень простыми. Они брали аргументы слева от <code class="lang-js">=></code> и вычисляли и возвращали выражение справа. Иногда нам нужна более сложная функция, с несколькими выражениями и инструкциями. Это также возможно, нужно лишь заключить их в фигурные скобки. При этом важное отличие – в том, что в таких скобках для возврата значения нужно использовать <code class="lang-js">return</code> (как в обычных функциях).</p>
    <pre><code class="lang-js">let func = (a, b) => {
    let result = a ** b;
    return result;
};

console.log( sum(3,3));</code></pre>
    <hr>
    <h2>Итог</h2>
    <ul>
        <li><b>AF</b> удобны для простых действий, особенно однострочных.</li>
        <br>
        <li>Они бывают двух видов</li>
        <ol>
            <li>Без фигурных скобок: <code class="lang-js">(...args) => expression</code> - правая сторона выражения: функция вычисляет его и возвращает результат. Скобки можно не ставить, если аргумент только один: <code class="lang-js">n => n * 2</code>.</li>
            <li>С фигурными скобками: <code class="lang-js">(... args) => { body }</code> - скобки позволяют нам писать несколько инструкций внутри функции, но при этом необходимо явно вызывать <code class="lang-js">return</code>, чтобы вернуть значение.</li>
        </ol>
    </ul>
    <hr>
