# Natscode

Build [NATS LinkCodes](http://tmmwiki.com/index.php/NATS4_LinkCodes) using JavaScript only.


When you are building a tour, you often need to build the proper linkcode going to your join pages, so it will be able to carry out the natscode stored in either the browser cookie and or querystring. Most solution often requires that you to write a backend php code that reads the value from cookie or querstring, but that is not efficient since JavaScript can also get that info w/o having to contact the backend!



## Installation


```
npm install natscode
```

## Usage


```

var natscode = require("natscode");

var linkcode = natscode({
	"default_natscode": "hello",
	"linkdomain": "join.example.com"
})


```

the linkcode variable will then contain the correct linkcode to your 