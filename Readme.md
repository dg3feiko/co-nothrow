# co-nothrow

  A no-throw style of [co.js](https://github.com/ty/co), better for explicit error handling like that in Go and Lua.

## Usage and Comparison

Originally with `co.js`

```js
const co = require("co");
co(function *() {
	try {
		let res = yield doSomethingAsync();
	}catch(e){
		return reportError(e);
	}
	//continue with result in res
});
```

Now with `co-nothrow`

```js
const co = require("co-nothrow");
co(function *() {
	let ret = yield doSomethingAsync();
	if(ret[0]){
		return reportError(ret[0])
	}
	//continue with result in ret[1]
});
```

For Node.js v6+, with `ES6 destructing`.

```js
const co = require("co-nothrow");
co(function *() {
	let [err, res] = yield doSomethingAsync();
	if(err){
		return reportError(res)
	}
	//continue with res
});
```



## License

  MIT

