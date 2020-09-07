function showMessage(from, text) {

  test = '*' + '***' + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let test = "Ann";
alert(test)
showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert (test)
alert( from ); // Ann