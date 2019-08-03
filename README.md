# Natscode

Build [NATS LinkCodes](http://tmmwiki.com/index.php/NATS4_LinkCodes) using JavaScript only.


When you are building a tour, you often need to build the proper linkcode going to your join pages, so it will be able to carry out the natscode stored in either the browser cookie and or querystring. Most solution often requires that you to write a backend php code that reads the value from cookie or querstring, but that is not efficient since JavaScript can also get that info w/o having to contact the backend!


This is extremely useful, if you have a static html tour or building a single page application, and you want the tour to be completely independent of the backend codes.



## Installation


```
npm install natscode
```



## Usage


in order to use it, require it in your application

```
var natscode = require("natscode");
```

generate a nats linkcode

```
var linkcode = natscode.link({
	"default_natscode": "hello",
	"linkdomain": "join.example.com"
});

console.log(linkcode);

```

the above will generate a link like this: http://join.example.com/signup/signup.php?nats=hello

get only the natscode value
```
var nats = natscode.value({
	"default_natscode": "hello",
	"linkdomain": "join.example.com"
});

console.log(nats);
```

will output "hello" if either there is no nats present in cookie or querystring.
