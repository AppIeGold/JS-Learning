<h1>Сonversion type</h1>
<h2>Numeric rules conversion</h2>
<p>undefined conversion to NaN.\n
    null to 0 \n
    true and false to 1/0 \n
    string conversion to spaces symbols(space, tabulation <b>\t</b>, sign of new line <b>\n</b>. if stay empty string, we get 0. On error we get <b>NaN</b>. ) </p>

<h2>Logic rules conversion</h2>
<p>values, that are intuitive empty, like 0, empty string, null, undefined and NaN, conversion to  <b>false</b>. \n
all others values conversion to <b>true</b>.</p>

<h3>! string with '0' = true</h3>
