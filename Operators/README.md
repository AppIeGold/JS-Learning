 <h1>Операторы JS</h1>
    
<h2>Немного терминов:</h2>
    <p>1 Операнд (аргумент операции) - То к чему применяется оператор. 5*2 тут два операнда, левый и правый.</p>
    <p>2 Унарный - оператор, который применяется к одному операнду. Например минус, х = -х</p>
    <p>3 Бинарный - оператор, который применяется к двум операндам. Тот же минус. х - х</p>
    
<h2>Теория</h2>
    <p>-Взятие остатка от деления %</p>
    <p>Оператор взятия остатка %, несмотря на обозначение, никакого отношения к процентам не имеет. Результат a % b – это остаток от целочисленного деления a на b.</p>
    <p>-Возведение в степень **.</p>
    <p>-Бинарный плюс умеет складывать строки, если один из операндов является строкой, то второй тоже преобразуется в строку.</p>
    <p>-Унарный плюс преобразует в число операнд, который таковым не является.</p>
     
<h3>Приоритет операторов
        
    15	унарный плюс +
    15	унарный минус -
    14	возведение в степень **
    13	умножение *
    13	деление	/
    12	сложение +
    12	вычитание -
    2	присваивание =

<H2>операторы сравнения</H2>

<p>В JavaScript они записываются так:</p>

<p>Больше/меньше: a > b, a < b.</p>
<p>Больше/меньше или равно: a >= b, a <= b.</p>
<p>Равно: a == b. Обратите внимание, для сравнения используется двойной знак равенства ==. Один знак равенства a = b означал бы присваивание.</p>
<p>Не равно, в математике обозначается символом ≠, но в JavaScript записывается как a != b.</p>

<H3>Сравнение строк</H3>

<p>Чтобы определить что одна строка больше другой, JS использует алфавитный или лексикографический порядок. Другими словами, строки сравниваются посимвольно</p>
<p>Сначала сравниваются первые символы строк, затем вторые и так до тех пор, пока не закончится одна из строк, либо один из символов не окажется больше или меньше, если обе строки закончились одновременно, то они, равны. <b>Важно знать</b> Используется кодировка Unicdoe, а не настоящий алфавит, заглавная буква А, меньше, чем строчная, тк она имеет меньший код в скрытой таблице кодирования, а все цифры идут после строчных и прописных букв. </p>

<H3>Сравнение разных типов</H3>
<p>При сравнении значений разных типов JS приводит каждое из них к числу.</p>

<H3>строгое сравнение</H3>
<p>Использование обычного сравнения == может выщваит проблемы. Например, оно не отчилает 0 от false, аналогичная проблема с пустой строкой, происходит это по причине того, что операнды разных типов преобразуются к числу, в итоге пустая строка преобразуется в 0</p>

<p>оператор строгого равенства === проверяет равенство без приведения типов</p>

<H3>Сравнение c null и undiefined</H3>
<p>при строгом равенстве эти значения различны, потому что различны типы.</p>
<p>при обычном равенстве - равны друг другу и не равны никаким другим значениям. Специальное правило языка</p>
<p>при использовании математических операторов и других операторов сравнения, значения null/undefined преобразуются к числам: null становится 0, а undefined - NaN(специальное числовое значение, которое возвращает false при любых сравнениях)</p>

<H2>оператор typeof</H2>

<p>оператор <b>typeof</b> возвращает тип аргумента. Это полезно, кода мы хотим обрабатывать значения различных типов по-разному или просто хотим сделать проверку.</p>
<p>Две синтаксические формы:</p>
<p>- typeof x</p>
<p>- typeof(x)</p>
<p>Нет разницы в использовании со скобакми и без.</p>

<H2>Logical operators</H2>
<p>JS have 4 logical operators ||(or), &&(and), !(not), ??(operator )</p>

<H3>||(OR)</H3>
<p>There are four possible logical combinations</p>
<p>(true||true)</p>
<p>(true||false)</p>
<p>(false||true)</p>
<p>(false||false)</p>
<p>For each operand, converts it to boolean. if the result is <b>true</b>, stops and returns the original value of that operand. If all operands have been <b>false</b>, returns the last operand</p>

<H3>&& (AND)</H3>
<p>in classical programming AND return <b>true</b> if both operands are truphy and <b>false</b> otherwise.</p>
<p>(true&&true) = true</p>
<p>(true&&false) = false</p>
<p>(false&&true) = false</p>
<p>(false&&false) = false</p>
<p>&&(AND) finds the first falsy value</p>
<p><p>For each operand, converts it to boolean. if the result is <b>false</b>, stops and returns the original value of that operand. If all operands have been <b>true</b>, returns the last operand</p></p>
<h3>important</h3>
<p>Precedence of <b>&&(AND)</b> is higher than <b>||(OR)</b></p>
<p>a && b || c && d == (a && b) || (c && d)</p>

<H3>!(NOT)</H3>
<p>This operator accepts a single argument and does the following:</p>
<p>1. Converts th operand to boolean type.</p>
<p>2. Returns the inverse value.</p>
<p>A Double NOT is sometimes used for converting a value to boolean type.</p>
<p>The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.</p>

<H3>Nullish coalescing operator ??</H3>
<p>As it treats <b>null</b> and <b>undefined</b> similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined. In other words, ?? returns the first argument if it’s not <b>null/undefined</b>. Otherwise, the second one.</p>
<p>Operator <b>AND</b> doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of <b>AND</b>, then we’ll get the second argument as the result.</p>
<p>The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table. That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.</p>