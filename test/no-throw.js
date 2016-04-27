var assert = require('assert');

var co = require('..');

describe('yield <invalid>', function () {
	it('should return an error instead of throw it', function () {
		return co(function* () {
			try {
				var res = yield null;
				assert(res[0] instanceof TypeError);
			} catch (err) {
				throw new Error("should not throw")
			}
		})
	})
});

describe('yield <yieldable>', function () {
	it('should return an null error with result in an array', function () {
		return co(function* () {
			var res = yield Promise.resolve("ok");
			console.log(res);
			assert(null === res[0], true);
			assert("ok", res[1]);
		})
	})
});


