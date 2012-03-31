String Search Exercise by Matthew Schallberger
==============================================

I chose to do this in JavaScript as it is my favorite language and I have
spent the most coding time there. Being a scripting language, it is by no
means the most efficient way this could have been done. I do not see heavy
optimization as the goal here though. Apart from the language-independent
choice of algorithm, JavaScript allows for certain elegancies that I
appreciate. And as a way to showcase how I try to code, it works well.


Task
----

Please write a method / function in your favorite language in less
than 50 lines of code that will return the index number (the position)
of a string within another string. Please do not use any pattern /
string matching library method, a sub string method, nor use regular
expressions, to solve this problem.

Examples:

    String 1: “abcdefg”
    String 2: “bcd”
    Returns: 1

    String 1: “abcdefg”
    String 2: “x”
    Signal an error


Files
-----

My algorithm implementation is in src/horspool.js.  Unit tests are in
test/test.js. They make use of Andrea Giammarchi's wru framework, which
is included. Said unit tests can be run by opening test.html in any modern
browser.


Notes
-----

See comments in src/horspool.js

