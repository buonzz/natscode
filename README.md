# Natscode

Build [NATS LinkCodes](http://tmmwiki.com/index.php/NATS4_LinkCodes) using JavaScript only.


When you are building a tour, you often need to build the proper linkcode going to your join pages, so it will be able to carry out the natscode stored in either the browser cookie and or querystring. Most solution often requires that you to write a backend php code that reads the value from cookie or querstring, but that is not efficient since JavaScript can also get that info w/o having to contact the backend!


This is extremely useful, if you have a static html tour or building a single page application, and you want the tour to be completely independent of the backend codes.



## Installation


```
npm install natscode
```



## Usage


```

var natscode = require("natscode");

var linkcode = natscode.link({
	"default_natscode": "hello",
	"linkdomain": "join.example.com"
})


```

For purely static html app, please check the [demo app](https://github.com/openadult/natscode-demo) to see how to set this up using Browserify. 