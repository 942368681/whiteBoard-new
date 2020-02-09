
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('@babel/runtime/helpers/typeof')) :
	typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/typeof'], factory) :
	(global = global || self, factory(global._typeof));
}(this, (function (_typeof) { 'use strict';

	_typeof = _typeof && _typeof.hasOwnProperty('default') ? _typeof['default'] : _typeof;

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var check = function (it) {
	  return it && it.Math == Math && it;
	};

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global_1 =
	  // eslint-disable-next-line no-undef
	  check(typeof globalThis == 'object' && globalThis) ||
	  check(typeof window == 'object' && window) ||
	  check(typeof self == 'object' && self) ||
	  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
	  // eslint-disable-next-line no-new-func
	  Function('return this')();

	var fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (error) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var descriptors = !fails(function () {
	  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
	});

	var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// Nashorn ~ JDK8 bug
	var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

	// `Object.prototype.propertyIsEnumerable` method implementation
	// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
	var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
	  var descriptor = getOwnPropertyDescriptor(this, V);
	  return !!descriptor && descriptor.enumerable;
	} : nativePropertyIsEnumerable;

	var objectPropertyIsEnumerable = {
		f: f
	};

	var createPropertyDescriptor = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var toString = {}.toString;

	var classofRaw = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	var split = ''.split;

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var indexedObject = fails(function () {
	  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
	  // eslint-disable-next-line no-prototype-builtins
	  return !Object('z').propertyIsEnumerable(0);
	}) ? function (it) {
	  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
	} : Object;

	// `RequireObjectCoercible` abstract operation
	// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
	var requireObjectCoercible = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on " + it);
	  return it;
	};

	// toObject with fallback for non-array-like ES3 strings



	var toIndexedObject = function (it) {
	  return indexedObject(requireObjectCoercible(it));
	};

	var isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	// `ToPrimitive` abstract operation
	// https://tc39.github.io/ecma262/#sec-toprimitive
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var toPrimitive = function (input, PREFERRED_STRING) {
	  if (!isObject(input)) return input;
	  var fn, val;
	  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
	  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var hasOwnProperty = {}.hasOwnProperty;

	var has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var document$1 = global_1.document;
	// typeof document.createElement is 'object' in old IE
	var EXISTS = isObject(document$1) && isObject(document$1.createElement);

	var documentCreateElement = function (it) {
	  return EXISTS ? document$1.createElement(it) : {};
	};

	// Thank's IE8 for his funny defineProperty
	var ie8DomDefine = !descriptors && !fails(function () {
	  return Object.defineProperty(documentCreateElement('div'), 'a', {
	    get: function () { return 7; }
	  }).a != 7;
	});

	var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

	// `Object.getOwnPropertyDescriptor` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
	var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
	  O = toIndexedObject(O);
	  P = toPrimitive(P, true);
	  if (ie8DomDefine) try {
	    return nativeGetOwnPropertyDescriptor(O, P);
	  } catch (error) { /* empty */ }
	  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
	};

	var objectGetOwnPropertyDescriptor = {
		f: f$1
	};

	var anObject = function (it) {
	  if (!isObject(it)) {
	    throw TypeError(String(it) + ' is not an object');
	  } return it;
	};

	var nativeDefineProperty = Object.defineProperty;

	// `Object.defineProperty` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperty
	var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (ie8DomDefine) try {
	    return nativeDefineProperty(O, P, Attributes);
	  } catch (error) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var objectDefineProperty = {
		f: f$2
	};

	var createNonEnumerableProperty = descriptors ? function (object, key, value) {
	  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var setGlobal = function (key, value) {
	  try {
	    createNonEnumerableProperty(global_1, key, value);
	  } catch (error) {
	    global_1[key] = value;
	  } return value;
	};

	var SHARED = '__core-js_shared__';
	var store = global_1[SHARED] || setGlobal(SHARED, {});

	var sharedStore = store;

	var functionToString = Function.toString;

	// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
	if (typeof sharedStore.inspectSource != 'function') {
	  sharedStore.inspectSource = function (it) {
	    return functionToString.call(it);
	  };
	}

	var inspectSource = sharedStore.inspectSource;

	var WeakMap = global_1.WeakMap;

	var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

	var shared = createCommonjsModule(function (module) {
	(module.exports = function (key, value) {
	  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: '3.6.4',
	  mode:  'global',
	  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var postfix = Math.random();

	var uid = function (key) {
	  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
	};

	var keys = shared('keys');

	var sharedKey = function (key) {
	  return keys[key] || (keys[key] = uid(key));
	};

	var hiddenKeys = {};

	var WeakMap$1 = global_1.WeakMap;
	var set, get, has$1;

	var enforce = function (it) {
	  return has$1(it) ? get(it) : set(it, {});
	};

	var getterFor = function (TYPE) {
	  return function (it) {
	    var state;
	    if (!isObject(it) || (state = get(it)).type !== TYPE) {
	      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
	    } return state;
	  };
	};

	if (nativeWeakMap) {
	  var store$1 = new WeakMap$1();
	  var wmget = store$1.get;
	  var wmhas = store$1.has;
	  var wmset = store$1.set;
	  set = function (it, metadata) {
	    wmset.call(store$1, it, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return wmget.call(store$1, it) || {};
	  };
	  has$1 = function (it) {
	    return wmhas.call(store$1, it);
	  };
	} else {
	  var STATE = sharedKey('state');
	  hiddenKeys[STATE] = true;
	  set = function (it, metadata) {
	    createNonEnumerableProperty(it, STATE, metadata);
	    return metadata;
	  };
	  get = function (it) {
	    return has(it, STATE) ? it[STATE] : {};
	  };
	  has$1 = function (it) {
	    return has(it, STATE);
	  };
	}

	var internalState = {
	  set: set,
	  get: get,
	  has: has$1,
	  enforce: enforce,
	  getterFor: getterFor
	};

	var redefine = createCommonjsModule(function (module) {
	var getInternalState = internalState.get;
	var enforceInternalState = internalState.enforce;
	var TEMPLATE = String(String).split('String');

	(module.exports = function (O, key, value, options) {
	  var unsafe = options ? !!options.unsafe : false;
	  var simple = options ? !!options.enumerable : false;
	  var noTargetGet = options ? !!options.noTargetGet : false;
	  if (typeof value == 'function') {
	    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
	    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
	  }
	  if (O === global_1) {
	    if (simple) O[key] = value;
	    else setGlobal(key, value);
	    return;
	  } else if (!unsafe) {
	    delete O[key];
	  } else if (!noTargetGet && O[key]) {
	    simple = true;
	  }
	  if (simple) O[key] = value;
	  else createNonEnumerableProperty(O, key, value);
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, 'toString', function toString() {
	  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
	});
	});

	var path = global_1;

	var aFunction = function (variable) {
	  return typeof variable == 'function' ? variable : undefined;
	};

	var getBuiltIn = function (namespace, method) {
	  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
	    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
	};

	var ceil = Math.ceil;
	var floor = Math.floor;

	// `ToInteger` abstract operation
	// https://tc39.github.io/ecma262/#sec-tointeger
	var toInteger = function (argument) {
	  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
	};

	var min = Math.min;

	// `ToLength` abstract operation
	// https://tc39.github.io/ecma262/#sec-tolength
	var toLength = function (argument) {
	  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;

	// Helper for a popular repeating case of the spec:
	// Let integer be ? ToInteger(index).
	// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
	var toAbsoluteIndex = function (index, length) {
	  var integer = toInteger(index);
	  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
	};

	// `Array.prototype.{ indexOf, includes }` methods implementation
	var createMethod = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIndexedObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) {
	      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var arrayIncludes = {
	  // `Array.prototype.includes` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
	  includes: createMethod(true),
	  // `Array.prototype.indexOf` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
	  indexOf: createMethod(false)
	};

	var indexOf = arrayIncludes.indexOf;


	var objectKeysInternal = function (object, names) {
	  var O = toIndexedObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~indexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE8- don't enum bug keys
	var enumBugKeys = [
	  'constructor',
	  'hasOwnProperty',
	  'isPrototypeOf',
	  'propertyIsEnumerable',
	  'toLocaleString',
	  'toString',
	  'valueOf'
	];

	var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

	// `Object.getOwnPropertyNames` method
	// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
	var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return objectKeysInternal(O, hiddenKeys$1);
	};

	var objectGetOwnPropertyNames = {
		f: f$3
	};

	var f$4 = Object.getOwnPropertySymbols;

	var objectGetOwnPropertySymbols = {
		f: f$4
	};

	// all object keys, includes non-enumerable and symbols
	var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
	  var keys = objectGetOwnPropertyNames.f(anObject(it));
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
	};

	var copyConstructorProperties = function (target, source) {
	  var keys = ownKeys(source);
	  var defineProperty = objectDefineProperty.f;
	  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
	  for (var i = 0; i < keys.length; i++) {
	    var key = keys[i];
	    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
	  }
	};

	var replacement = /#|\.prototype\./;

	var isForced = function (feature, detection) {
	  var value = data[normalize(feature)];
	  return value == POLYFILL ? true
	    : value == NATIVE ? false
	    : typeof detection == 'function' ? fails(detection)
	    : !!detection;
	};

	var normalize = isForced.normalize = function (string) {
	  return String(string).replace(replacement, '.').toLowerCase();
	};

	var data = isForced.data = {};
	var NATIVE = isForced.NATIVE = 'N';
	var POLYFILL = isForced.POLYFILL = 'P';

	var isForced_1 = isForced;

	var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






	/*
	  options.target      - name of the target object
	  options.global      - target is the global object
	  options.stat        - export as static methods of target
	  options.proto       - export as prototype methods of target
	  options.real        - real prototype method for the `pure` version
	  options.forced      - export even if the native feature is available
	  options.bind        - bind methods to the target, required for the `pure` version
	  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
	  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
	  options.sham        - add a flag to not completely full polyfills
	  options.enumerable  - export as enumerable property
	  options.noTargetGet - prevent calling a getter on target
	*/
	var _export = function (options, source) {
	  var TARGET = options.target;
	  var GLOBAL = options.global;
	  var STATIC = options.stat;
	  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
	  if (GLOBAL) {
	    target = global_1;
	  } else if (STATIC) {
	    target = global_1[TARGET] || setGlobal(TARGET, {});
	  } else {
	    target = (global_1[TARGET] || {}).prototype;
	  }
	  if (target) for (key in source) {
	    sourceProperty = source[key];
	    if (options.noTargetGet) {
	      descriptor = getOwnPropertyDescriptor$1(target, key);
	      targetProperty = descriptor && descriptor.value;
	    } else targetProperty = target[key];
	    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
	    // contained in target
	    if (!FORCED && targetProperty !== undefined) {
	      if (typeof sourceProperty === typeof targetProperty) continue;
	      copyConstructorProperties(sourceProperty, targetProperty);
	    }
	    // add a flag to not completely full polyfills
	    if (options.sham || (targetProperty && targetProperty.sham)) {
	      createNonEnumerableProperty(sourceProperty, 'sham', true);
	    }
	    // extend global
	    redefine(target, key, sourceProperty, options);
	  }
	};

	var aFunction$1 = function (it) {
	  if (typeof it != 'function') {
	    throw TypeError(String(it) + ' is not a function');
	  } return it;
	};

	// optional / simple context binding
	var functionBindContext = function (fn, that, length) {
	  aFunction$1(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 0: return function () {
	      return fn.call(that);
	    };
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	// `ToObject` abstract operation
	// https://tc39.github.io/ecma262/#sec-toobject
	var toObject = function (argument) {
	  return Object(requireObjectCoercible(argument));
	};

	// `IsArray` abstract operation
	// https://tc39.github.io/ecma262/#sec-isarray
	var isArray = Array.isArray || function isArray(arg) {
	  return classofRaw(arg) == 'Array';
	};

	var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
	  // Chrome 38 Symbol has incorrect toString conversion
	  // eslint-disable-next-line no-undef
	  return !String(Symbol());
	});

	var useSymbolAsUid = nativeSymbol
	  // eslint-disable-next-line no-undef
	  && !Symbol.sham
	  // eslint-disable-next-line no-undef
	  && typeof Symbol.iterator == 'symbol';

	var WellKnownSymbolsStore = shared('wks');
	var Symbol$1 = global_1.Symbol;
	var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

	var wellKnownSymbol = function (name) {
	  if (!has(WellKnownSymbolsStore, name)) {
	    if (nativeSymbol && has(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
	    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
	  } return WellKnownSymbolsStore[name];
	};

	var SPECIES = wellKnownSymbol('species');

	// `ArraySpeciesCreate` abstract operation
	// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
	var arraySpeciesCreate = function (originalArray, length) {
	  var C;
	  if (isArray(originalArray)) {
	    C = originalArray.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
	    else if (isObject(C)) {
	      C = C[SPECIES];
	      if (C === null) C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
	};

	var push = [].push;

	// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
	var createMethod$1 = function (TYPE) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  return function ($this, callbackfn, that, specificCreate) {
	    var O = toObject($this);
	    var self = indexedObject(O);
	    var boundFunction = functionBindContext(callbackfn, that, 3);
	    var length = toLength(self.length);
	    var index = 0;
	    var create = specificCreate || arraySpeciesCreate;
	    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var value, result;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      value = self[index];
	      result = boundFunction(value, index, O);
	      if (TYPE) {
	        if (IS_MAP) target[index] = result; // map
	        else if (result) switch (TYPE) {
	          case 3: return true;              // some
	          case 5: return value;             // find
	          case 6: return index;             // findIndex
	          case 2: push.call(target, value); // filter
	        } else if (IS_EVERY) return false;  // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
	  };
	};

	var arrayIteration = {
	  // `Array.prototype.forEach` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
	  forEach: createMethod$1(0),
	  // `Array.prototype.map` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.map
	  map: createMethod$1(1),
	  // `Array.prototype.filter` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
	  filter: createMethod$1(2),
	  // `Array.prototype.some` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.some
	  some: createMethod$1(3),
	  // `Array.prototype.every` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.every
	  every: createMethod$1(4),
	  // `Array.prototype.find` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.find
	  find: createMethod$1(5),
	  // `Array.prototype.findIndex` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
	  findIndex: createMethod$1(6)
	};

	var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

	var process = global_1.process;
	var versions = process && process.versions;
	var v8 = versions && versions.v8;
	var match, version;

	if (v8) {
	  match = v8.split('.');
	  version = match[0] + match[1];
	} else if (engineUserAgent) {
	  match = engineUserAgent.match(/Edge\/(\d+)/);
	  if (!match || match[1] >= 74) {
	    match = engineUserAgent.match(/Chrome\/(\d+)/);
	    if (match) version = match[1];
	  }
	}

	var engineV8Version = version && +version;

	var SPECIES$1 = wellKnownSymbol('species');

	var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
	  // We can't use this feature detection in V8 since it causes
	  // deoptimization and serious performance degradation
	  // https://github.com/zloirock/core-js/issues/677
	  return engineV8Version >= 51 || !fails(function () {
	    var array = [];
	    var constructor = array.constructor = {};
	    constructor[SPECIES$1] = function () {
	      return { foo: 1 };
	    };
	    return array[METHOD_NAME](Boolean).foo !== 1;
	  });
	};

	var defineProperty = Object.defineProperty;
	var cache = {};

	var thrower = function (it) { throw it; };

	var arrayMethodUsesToLength = function (METHOD_NAME, options) {
	  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
	  if (!options) options = {};
	  var method = [][METHOD_NAME];
	  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
	  var argument0 = has(options, 0) ? options[0] : thrower;
	  var argument1 = has(options, 1) ? options[1] : undefined;

	  return cache[METHOD_NAME] = !!method && !fails(function () {
	    if (ACCESSORS && !descriptors) return true;
	    var O = { length: -1 };

	    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
	    else O[1] = 1;

	    method.call(O, argument0, argument1);
	  });
	};

	var $map = arrayIteration.map;



	var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
	// FF49- issue
	var USES_TO_LENGTH = arrayMethodUsesToLength('map');

	// `Array.prototype.map` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.map
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
	  map: function map(callbackfn /* , thisArg */) {
	    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	// `Array.prototype.{ reduce, reduceRight }` methods implementation
	var createMethod$2 = function (IS_RIGHT) {
	  return function (that, callbackfn, argumentsLength, memo) {
	    aFunction$1(callbackfn);
	    var O = toObject(that);
	    var self = indexedObject(O);
	    var length = toLength(O.length);
	    var index = IS_RIGHT ? length - 1 : 0;
	    var i = IS_RIGHT ? -1 : 1;
	    if (argumentsLength < 2) while (true) {
	      if (index in self) {
	        memo = self[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if (IS_RIGHT ? index < 0 : length <= index) {
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
	      memo = callbackfn(memo, self[index], index, O);
	    }
	    return memo;
	  };
	};

	var arrayReduce = {
	  // `Array.prototype.reduce` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	  left: createMethod$2(false),
	  // `Array.prototype.reduceRight` method
	  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
	  right: createMethod$2(true)
	};

	var arrayMethodIsStrict = function (METHOD_NAME, argument) {
	  var method = [][METHOD_NAME];
	  return !!method && fails(function () {
	    // eslint-disable-next-line no-useless-call,no-throw-literal
	    method.call(null, argument || function () { throw 1; }, 1);
	  });
	};

	var $reduce = arrayReduce.left;



	var STRICT_METHOD = arrayMethodIsStrict('reduce');
	var USES_TO_LENGTH$1 = arrayMethodUsesToLength('reduce', { 1: 0 });

	// `Array.prototype.reduce` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH$1 }, {
	  reduce: function reduce(callbackfn /* , initialValue */) {
	    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var createProperty = function (object, key, value) {
	  var propertyKey = toPrimitive(key);
	  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
	  else object[propertyKey] = value;
	};

	var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
	var USES_TO_LENGTH$2 = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

	var SPECIES$2 = wellKnownSymbol('species');
	var nativeSlice = [].slice;
	var max$1 = Math.max;

	// `Array.prototype.slice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.slice
	// fallback for not array-like ES3 strings and DOM objects
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$2 }, {
	  slice: function slice(start, end) {
	    var O = toIndexedObject(this);
	    var length = toLength(O.length);
	    var k = toAbsoluteIndex(start, length);
	    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
	    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
	    var Constructor, result, n;
	    if (isArray(O)) {
	      Constructor = O.constructor;
	      // cross-realm fallback
	      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
	        Constructor = undefined;
	      } else if (isObject(Constructor)) {
	        Constructor = Constructor[SPECIES$2];
	        if (Constructor === null) Constructor = undefined;
	      }
	      if (Constructor === Array || Constructor === undefined) {
	        return nativeSlice.call(O, k, fin);
	      }
	    }
	    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
	    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
	    result.length = n;
	    return result;
	  }
	});

	var $some = arrayIteration.some;



	var STRICT_METHOD$1 = arrayMethodIsStrict('some');
	var USES_TO_LENGTH$3 = arrayMethodUsesToLength('some');

	// `Array.prototype.some` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.some
	_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$3 }, {
	  some: function some(callbackfn /* , thisArg */) {
	    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('splice');
	var USES_TO_LENGTH$4 = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

	var max$2 = Math.max;
	var min$2 = Math.min;
	var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
	var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

	// `Array.prototype.splice` method
	// https://tc39.github.io/ecma262/#sec-array.prototype.splice
	// with adding support of @@species
	_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$4 }, {
	  splice: function splice(start, deleteCount /* , ...items */) {
	    var O = toObject(this);
	    var len = toLength(O.length);
	    var actualStart = toAbsoluteIndex(start, len);
	    var argumentsLength = arguments.length;
	    var insertCount, actualDeleteCount, A, k, from, to;
	    if (argumentsLength === 0) {
	      insertCount = actualDeleteCount = 0;
	    } else if (argumentsLength === 1) {
	      insertCount = 0;
	      actualDeleteCount = len - actualStart;
	    } else {
	      insertCount = argumentsLength - 2;
	      actualDeleteCount = min$2(max$2(toInteger(deleteCount), 0), len - actualStart);
	    }
	    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
	      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
	    }
	    A = arraySpeciesCreate(O, actualDeleteCount);
	    for (k = 0; k < actualDeleteCount; k++) {
	      from = actualStart + k;
	      if (from in O) createProperty(A, k, O[from]);
	    }
	    A.length = actualDeleteCount;
	    if (insertCount < actualDeleteCount) {
	      for (k = actualStart; k < len - actualDeleteCount; k++) {
	        from = k + actualDeleteCount;
	        to = k + insertCount;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
	    } else if (insertCount > actualDeleteCount) {
	      for (k = len - actualDeleteCount; k > actualStart; k--) {
	        from = k + actualDeleteCount - 1;
	        to = k + insertCount - 1;
	        if (from in O) O[to] = O[from];
	        else delete O[to];
	      }
	    }
	    for (k = 0; k < insertCount; k++) {
	      O[k + actualStart] = arguments[k + 2];
	    }
	    O.length = len - actualDeleteCount + insertCount;
	    return A;
	  }
	});

	var aPossiblePrototype = function (it) {
	  if (!isObject(it) && it !== null) {
	    throw TypeError("Can't set " + String(it) + ' as a prototype');
	  } return it;
	};

	// `Object.setPrototypeOf` method
	// https://tc39.github.io/ecma262/#sec-object.setprototypeof
	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
	  var CORRECT_SETTER = false;
	  var test = {};
	  var setter;
	  try {
	    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
	    setter.call(test, []);
	    CORRECT_SETTER = test instanceof Array;
	  } catch (error) { /* empty */ }
	  return function setPrototypeOf(O, proto) {
	    anObject(O);
	    aPossiblePrototype(proto);
	    if (CORRECT_SETTER) setter.call(O, proto);
	    else O.__proto__ = proto;
	    return O;
	  };
	}() : undefined);

	// makes subclassing work correct for wrapped built-ins
	var inheritIfRequired = function ($this, dummy, Wrapper) {
	  var NewTarget, NewTargetPrototype;
	  if (
	    // it can work only with native `setPrototypeOf`
	    objectSetPrototypeOf &&
	    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
	    typeof (NewTarget = dummy.constructor) == 'function' &&
	    NewTarget !== Wrapper &&
	    isObject(NewTargetPrototype = NewTarget.prototype) &&
	    NewTargetPrototype !== Wrapper.prototype
	  ) objectSetPrototypeOf($this, NewTargetPrototype);
	  return $this;
	};

	// `Object.keys` method
	// https://tc39.github.io/ecma262/#sec-object.keys
	var objectKeys = Object.keys || function keys(O) {
	  return objectKeysInternal(O, enumBugKeys);
	};

	// `Object.defineProperties` method
	// https://tc39.github.io/ecma262/#sec-object.defineproperties
	var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = objectKeys(Properties);
	  var length = keys.length;
	  var index = 0;
	  var key;
	  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
	  return O;
	};

	var html = getBuiltIn('document', 'documentElement');

	var GT = '>';
	var LT = '<';
	var PROTOTYPE = 'prototype';
	var SCRIPT = 'script';
	var IE_PROTO = sharedKey('IE_PROTO');

	var EmptyConstructor = function () { /* empty */ };

	var scriptTag = function (content) {
	  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
	};

	// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
	var NullProtoObjectViaActiveX = function (activeXDocument) {
	  activeXDocument.write(scriptTag(''));
	  activeXDocument.close();
	  var temp = activeXDocument.parentWindow.Object;
	  activeXDocument = null; // avoid memory leak
	  return temp;
	};

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var NullProtoObjectViaIFrame = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = documentCreateElement('iframe');
	  var JS = 'java' + SCRIPT + ':';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  // https://github.com/zloirock/core-js/issues/475
	  iframe.src = String(JS);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(scriptTag('document.F=Object'));
	  iframeDocument.close();
	  return iframeDocument.F;
	};

	// Check for document.domain and active x support
	// No need to use active x approach when document.domain is not set
	// see https://github.com/es-shims/es5-shim/issues/150
	// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
	// avoid IE GC bug
	var activeXDocument;
	var NullProtoObject = function () {
	  try {
	    /* global ActiveXObject */
	    activeXDocument = document.domain && new ActiveXObject('htmlfile');
	  } catch (error) { /* ignore */ }
	  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
	  var length = enumBugKeys.length;
	  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
	  return NullProtoObject();
	};

	hiddenKeys[IE_PROTO] = true;

	// `Object.create` method
	// https://tc39.github.io/ecma262/#sec-object.create
	var objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    EmptyConstructor[PROTOTYPE] = anObject(O);
	    result = new EmptyConstructor();
	    EmptyConstructor[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = NullProtoObject();
	  return Properties === undefined ? result : objectDefineProperties(result, Properties);
	};

	// a string of all valid unicode whitespaces
	// eslint-disable-next-line max-len
	var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var whitespace = '[' + whitespaces + ']';
	var ltrim = RegExp('^' + whitespace + whitespace + '*');
	var rtrim = RegExp(whitespace + whitespace + '*$');

	// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
	var createMethod$3 = function (TYPE) {
	  return function ($this) {
	    var string = String(requireObjectCoercible($this));
	    if (TYPE & 1) string = string.replace(ltrim, '');
	    if (TYPE & 2) string = string.replace(rtrim, '');
	    return string;
	  };
	};

	var stringTrim = {
	  // `String.prototype.{ trimLeft, trimStart }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
	  start: createMethod$3(1),
	  // `String.prototype.{ trimRight, trimEnd }` methods
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
	  end: createMethod$3(2),
	  // `String.prototype.trim` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
	  trim: createMethod$3(3)
	};

	var getOwnPropertyNames = objectGetOwnPropertyNames.f;
	var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
	var defineProperty$1 = objectDefineProperty.f;
	var trim = stringTrim.trim;

	var NUMBER = 'Number';
	var NativeNumber = global_1[NUMBER];
	var NumberPrototype = NativeNumber.prototype;

	// Opera ~12 has broken Object#toString
	var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

	// `ToNumber` abstract operation
	// https://tc39.github.io/ecma262/#sec-tonumber
	var toNumber = function (argument) {
	  var it = toPrimitive(argument, false);
	  var first, third, radix, maxCode, digits, length, index, code;
	  if (typeof it == 'string' && it.length > 2) {
	    it = trim(it);
	    first = it.charCodeAt(0);
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
	        default: return +it;
	      }
	      digits = it.slice(2);
	      length = digits.length;
	      for (index = 0; index < length; index++) {
	        code = digits.charCodeAt(index);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	// `Number` constructor
	// https://tc39.github.io/ecma262/#sec-number-constructor
	if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
	  var NumberWrapper = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var dummy = this;
	    return dummy instanceof NumberWrapper
	      // check on 1..constructor(foo) case
	      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
	        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
	  };
	  for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES2015 (in case, if modules with ES2015 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys$1.length > j; j++) {
	    if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
	      defineProperty$1(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
	    }
	  }
	  NumberWrapper.prototype = NumberPrototype;
	  NumberPrototype.constructor = NumberWrapper;
	  redefine(global_1, NUMBER, NumberWrapper);
	}

	// `thisNumberValue` abstract operation
	// https://tc39.github.io/ecma262/#sec-thisnumbervalue
	var thisNumberValue = function (value) {
	  if (typeof value != 'number' && classofRaw(value) != 'Number') {
	    throw TypeError('Incorrect invocation');
	  }
	  return +value;
	};

	// `String.prototype.repeat` method implementation
	// https://tc39.github.io/ecma262/#sec-string.prototype.repeat
	var stringRepeat = ''.repeat || function repeat(count) {
	  var str = String(requireObjectCoercible(this));
	  var result = '';
	  var n = toInteger(count);
	  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
	  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
	  return result;
	};

	var nativeToFixed = 1.0.toFixed;
	var floor$1 = Math.floor;

	var pow = function (x, n, acc) {
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};

	var log = function (x) {
	  var n = 0;
	  var x2 = x;
	  while (x2 >= 4096) {
	    n += 12;
	    x2 /= 4096;
	  }
	  while (x2 >= 2) {
	    n += 1;
	    x2 /= 2;
	  } return n;
	};

	var FORCED = nativeToFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
	) || !fails(function () {
	  // V8 ~ Android 4.3-
	  nativeToFixed.call({});
	});

	// `Number.prototype.toFixed` method
	// https://tc39.github.io/ecma262/#sec-number.prototype.tofixed
	_export({ target: 'Number', proto: true, forced: FORCED }, {
	  // eslint-disable-next-line max-statements
	  toFixed: function toFixed(fractionDigits) {
	    var number = thisNumberValue(this);
	    var fractDigits = toInteger(fractionDigits);
	    var data = [0, 0, 0, 0, 0, 0];
	    var sign = '';
	    var result = '0';
	    var e, z, j, k;

	    var multiply = function (n, c) {
	      var index = -1;
	      var c2 = c;
	      while (++index < 6) {
	        c2 += n * data[index];
	        data[index] = c2 % 1e7;
	        c2 = floor$1(c2 / 1e7);
	      }
	    };

	    var divide = function (n) {
	      var index = 6;
	      var c = 0;
	      while (--index >= 0) {
	        c += data[index];
	        data[index] = floor$1(c / n);
	        c = (c % n) * 1e7;
	      }
	    };

	    var dataToString = function () {
	      var index = 6;
	      var s = '';
	      while (--index >= 0) {
	        if (s !== '' || index === 0 || data[index] !== 0) {
	          var t = String(data[index]);
	          s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
	        }
	      } return s;
	    };

	    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
	    // eslint-disable-next-line no-self-compare
	    if (number != number) return 'NaN';
	    if (number <= -1e21 || number >= 1e21) return String(number);
	    if (number < 0) {
	      sign = '-';
	      number = -number;
	    }
	    if (number > 1e-21) {
	      e = log(number * pow(2, 69, 1)) - 69;
	      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if (e > 0) {
	        multiply(0, z);
	        j = fractDigits;
	        while (j >= 7) {
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while (j >= 23) {
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        result = dataToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        result = dataToString() + stringRepeat.call('0', fractDigits);
	      }
	    }
	    if (fractDigits > 0) {
	      k = result.length;
	      result = sign + (k <= fractDigits
	        ? '0.' + stringRepeat.call('0', fractDigits - k) + result
	        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
	    } else {
	      result = sign + result;
	    } return result;
	  }
	});

	var nativeAssign = Object.assign;
	var defineProperty$2 = Object.defineProperty;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	var objectAssign = !nativeAssign || fails(function () {
	  // should have correct order of operations (Edge bug)
	  if (descriptors && nativeAssign({ b: 1 }, nativeAssign(defineProperty$2({}, 'a', {
	    enumerable: true,
	    get: function () {
	      defineProperty$2(this, 'b', {
	        value: 3,
	        enumerable: false
	      });
	    }
	  }), { b: 2 })).b !== 1) return true;
	  // should work with symbols and should have deterministic property order (V8 bug)
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var symbol = Symbol();
	  var alphabet = 'abcdefghijklmnopqrst';
	  A[symbol] = 7;
	  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
	  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var argumentsLength = arguments.length;
	  var index = 1;
	  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
	  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
	  while (argumentsLength > index) {
	    var S = indexedObject(arguments[index++]);
	    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) {
	      key = keys[j++];
	      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
	    }
	  } return T;
	} : nativeAssign;

	// `Object.assign` method
	// https://tc39.github.io/ecma262/#sec-object.assign
	_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
	  assign: objectAssign
	});

	// `RegExp.prototype.flags` getter implementation
	// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
	var regexpFlags = function () {
	  var that = anObject(this);
	  var result = '';
	  if (that.global) result += 'g';
	  if (that.ignoreCase) result += 'i';
	  if (that.multiline) result += 'm';
	  if (that.dotAll) result += 's';
	  if (that.unicode) result += 'u';
	  if (that.sticky) result += 'y';
	  return result;
	};

	// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
	// so we use an intermediate function.
	function RE(s, f) {
	  return RegExp(s, f);
	}

	var UNSUPPORTED_Y = fails(function () {
	  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
	  var re = RE('a', 'y');
	  re.lastIndex = 2;
	  return re.exec('abcd') != null;
	});

	var BROKEN_CARET = fails(function () {
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
	  var re = RE('^r', 'gy');
	  re.lastIndex = 2;
	  return re.exec('str') != null;
	});

	var regexpStickyHelpers = {
		UNSUPPORTED_Y: UNSUPPORTED_Y,
		BROKEN_CARET: BROKEN_CARET
	};

	var nativeExec = RegExp.prototype.exec;
	// This always refers to the native implementation, because the
	// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
	// which loads this file before patching the method.
	var nativeReplace = String.prototype.replace;

	var patchedExec = nativeExec;

	var UPDATES_LAST_INDEX_WRONG = (function () {
	  var re1 = /a/;
	  var re2 = /b*/g;
	  nativeExec.call(re1, 'a');
	  nativeExec.call(re2, 'a');
	  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
	})();

	var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

	// nonparticipating capturing group, copied from es5-shim's String#split patch.
	var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

	var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

	if (PATCH) {
	  patchedExec = function exec(str) {
	    var re = this;
	    var lastIndex, reCopy, match, i;
	    var sticky = UNSUPPORTED_Y$1 && re.sticky;
	    var flags = regexpFlags.call(re);
	    var source = re.source;
	    var charsAdded = 0;
	    var strCopy = str;

	    if (sticky) {
	      flags = flags.replace('y', '');
	      if (flags.indexOf('g') === -1) {
	        flags += 'g';
	      }

	      strCopy = String(str).slice(re.lastIndex);
	      // Support anchored sticky behavior.
	      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
	        source = '(?: ' + source + ')';
	        strCopy = ' ' + strCopy;
	        charsAdded++;
	      }
	      // ^(? + rx + ) is needed, in combination with some str slicing, to
	      // simulate the 'y' flag.
	      reCopy = new RegExp('^(?:' + source + ')', flags);
	    }

	    if (NPCG_INCLUDED) {
	      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
	    }
	    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

	    match = nativeExec.call(sticky ? reCopy : re, strCopy);

	    if (sticky) {
	      if (match) {
	        match.input = match.input.slice(charsAdded);
	        match[0] = match[0].slice(charsAdded);
	        match.index = re.lastIndex;
	        re.lastIndex += match[0].length;
	      } else re.lastIndex = 0;
	    } else if (UPDATES_LAST_INDEX_WRONG && match) {
	      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
	    }
	    if (NPCG_INCLUDED && match && match.length > 1) {
	      // Fix browsers whose `exec` methods don't consistently return `undefined`
	      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
	      nativeReplace.call(match[0], reCopy, function () {
	        for (i = 1; i < arguments.length - 2; i++) {
	          if (arguments[i] === undefined) match[i] = undefined;
	        }
	      });
	    }

	    return match;
	  };
	}

	var regexpExec = patchedExec;

	_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
	  exec: regexpExec
	});

	// TODO: Remove from `core-js@4` since it's moved to entry points







	var SPECIES$3 = wellKnownSymbol('species');

	var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
	  // #replace needs built-in support for named groups.
	  // #match works fine because it just return the exec results, even if it has
	  // a "grops" property.
	  var re = /./;
	  re.exec = function () {
	    var result = [];
	    result.groups = { a: '7' };
	    return result;
	  };
	  return ''.replace(re, '$<a>') !== '7';
	});

	// IE <= 11 replaces $0 with the whole match, as if it was $&
	// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
	var REPLACE_KEEPS_$0 = (function () {
	  return 'a'.replace(/./, '$0') === '$0';
	})();

	var REPLACE = wellKnownSymbol('replace');
	// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
	var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
	  if (/./[REPLACE]) {
	    return /./[REPLACE]('a', '$0') === '';
	  }
	  return false;
	})();

	// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
	// Weex JS has frozen built-in prototypes, so use try / catch wrapper
	var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
	  var re = /(?:)/;
	  var originalExec = re.exec;
	  re.exec = function () { return originalExec.apply(this, arguments); };
	  var result = 'ab'.split(re);
	  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
	});

	var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
	  var SYMBOL = wellKnownSymbol(KEY);

	  var DELEGATES_TO_SYMBOL = !fails(function () {
	    // String methods call symbol-named RegEp methods
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  });

	  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
	    // Symbol-named RegExp methods call .exec
	    var execCalled = false;
	    var re = /a/;

	    if (KEY === 'split') {
	      // We can't use real regex here since it causes deoptimization
	      // and serious performance degradation in V8
	      // https://github.com/zloirock/core-js/issues/306
	      re = {};
	      // RegExp[@@split] doesn't call the regex's exec method, but first creates
	      // a new one. We need to return the patched regex when creating the new one.
	      re.constructor = {};
	      re.constructor[SPECIES$3] = function () { return re; };
	      re.flags = '';
	      re[SYMBOL] = /./[SYMBOL];
	    }

	    re.exec = function () { execCalled = true; return null; };

	    re[SYMBOL]('');
	    return !execCalled;
	  });

	  if (
	    !DELEGATES_TO_SYMBOL ||
	    !DELEGATES_TO_EXEC ||
	    (KEY === 'replace' && !(
	      REPLACE_SUPPORTS_NAMED_GROUPS &&
	      REPLACE_KEEPS_$0 &&
	      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    )) ||
	    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
	  ) {
	    var nativeRegExpMethod = /./[SYMBOL];
	    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
	      if (regexp.exec === regexpExec) {
	        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
	          // The native String method already delegates to @@method (this
	          // polyfilled function), leasing to infinite recursion.
	          // We avoid it by directly calling the native @@method method.
	          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
	        }
	        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
	      }
	      return { done: false };
	    }, {
	      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
	      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
	    });
	    var stringMethod = methods[0];
	    var regexMethod = methods[1];

	    redefine(String.prototype, KEY, stringMethod);
	    redefine(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return regexMethod.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return regexMethod.call(string, this); }
	    );
	  }

	  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
	};

	var MATCH = wellKnownSymbol('match');

	// `IsRegExp` abstract operation
	// https://tc39.github.io/ecma262/#sec-isregexp
	var isRegexp = function (it) {
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
	};

	var SPECIES$4 = wellKnownSymbol('species');

	// `SpeciesConstructor` abstract operation
	// https://tc39.github.io/ecma262/#sec-speciesconstructor
	var speciesConstructor = function (O, defaultConstructor) {
	  var C = anObject(O).constructor;
	  var S;
	  return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction$1(S);
	};

	// `String.prototype.{ codePointAt, at }` methods implementation
	var createMethod$4 = function (CONVERT_TO_STRING) {
	  return function ($this, pos) {
	    var S = String(requireObjectCoercible($this));
	    var position = toInteger(pos);
	    var size = S.length;
	    var first, second;
	    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
	    first = S.charCodeAt(position);
	    return first < 0xD800 || first > 0xDBFF || position + 1 === size
	      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
	        ? CONVERT_TO_STRING ? S.charAt(position) : first
	        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
	  };
	};

	var stringMultibyte = {
	  // `String.prototype.codePointAt` method
	  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
	  codeAt: createMethod$4(false),
	  // `String.prototype.at` method
	  // https://github.com/mathiasbynens/String.prototype.at
	  charAt: createMethod$4(true)
	};

	var charAt = stringMultibyte.charAt;

	// `AdvanceStringIndex` abstract operation
	// https://tc39.github.io/ecma262/#sec-advancestringindex
	var advanceStringIndex = function (S, index, unicode) {
	  return index + (unicode ? charAt(S, index).length : 1);
	};

	// `RegExpExec` abstract operation
	// https://tc39.github.io/ecma262/#sec-regexpexec
	var regexpExecAbstract = function (R, S) {
	  var exec = R.exec;
	  if (typeof exec === 'function') {
	    var result = exec.call(R, S);
	    if (typeof result !== 'object') {
	      throw TypeError('RegExp exec method returned something other than an Object or null');
	    }
	    return result;
	  }

	  if (classofRaw(R) !== 'RegExp') {
	    throw TypeError('RegExp#exec called on incompatible receiver');
	  }

	  return regexpExec.call(R, S);
	};

	var arrayPush = [].push;
	var min$3 = Math.min;
	var MAX_UINT32 = 0xFFFFFFFF;

	// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
	var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

	// @@split logic
	fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
	  var internalSplit;
	  if (
	    'abbc'.split(/(b)*/)[1] == 'c' ||
	    'test'.split(/(?:)/, -1).length != 4 ||
	    'ab'.split(/(?:ab)*/).length != 2 ||
	    '.'.split(/(.?)(.?)/).length != 4 ||
	    '.'.split(/()()/).length > 1 ||
	    ''.split(/.?/).length
	  ) {
	    // based on es5-shim implementation, need to rework it
	    internalSplit = function (separator, limit) {
	      var string = String(requireObjectCoercible(this));
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (separator === undefined) return [string];
	      // If `separator` is not a regex, use native split
	      if (!isRegexp(separator)) {
	        return nativeSplit.call(string, separator, lim);
	      }
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var match, lastIndex, lastLength;
	      while (match = regexpExec.call(separatorCopy, string)) {
	        lastIndex = separatorCopy.lastIndex;
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
	          lastLength = match[0].length;
	          lastLastIndex = lastIndex;
	          if (output.length >= lim) break;
	        }
	        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string.length) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output.length > lim ? output.slice(0, lim) : output;
	    };
	  // Chakra, V8
	  } else if ('0'.split(undefined, 0).length) {
	    internalSplit = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
	    };
	  } else internalSplit = nativeSplit;

	  return [
	    // `String.prototype.split` method
	    // https://tc39.github.io/ecma262/#sec-string.prototype.split
	    function split(separator, limit) {
	      var O = requireObjectCoercible(this);
	      var splitter = separator == undefined ? undefined : separator[SPLIT];
	      return splitter !== undefined
	        ? splitter.call(separator, O, limit)
	        : internalSplit.call(String(O), separator, limit);
	    },
	    // `RegExp.prototype[@@split]` method
	    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
	    //
	    // NOTE: This cannot be properly polyfilled in engines that don't support
	    // the 'y' flag.
	    function (regexp, limit) {
	      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
	      if (res.done) return res.value;

	      var rx = anObject(regexp);
	      var S = String(this);
	      var C = speciesConstructor(rx, RegExp);

	      var unicodeMatching = rx.unicode;
	      var flags = (rx.ignoreCase ? 'i' : '') +
	                  (rx.multiline ? 'm' : '') +
	                  (rx.unicode ? 'u' : '') +
	                  (SUPPORTS_Y ? 'y' : 'g');

	      // ^(? + rx + ) is needed, in combination with some S slicing, to
	      // simulate the 'y' flag.
	      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
	      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
	      if (lim === 0) return [];
	      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
	      var p = 0;
	      var q = 0;
	      var A = [];
	      while (q < S.length) {
	        splitter.lastIndex = SUPPORTS_Y ? q : 0;
	        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
	        var e;
	        if (
	          z === null ||
	          (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
	        ) {
	          q = advanceStringIndex(S, q, unicodeMatching);
	        } else {
	          A.push(S.slice(p, q));
	          if (A.length === lim) return A;
	          for (var i = 1; i <= z.length - 1; i++) {
	            A.push(z[i]);
	            if (A.length === lim) return A;
	          }
	          q = p = e;
	        }
	      }
	      A.push(S.slice(p));
	      return A;
	    }
	  ];
	}, !SUPPORTS_Y);

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css = ".board-box {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    overflow: hidden;\n}\n\n.board-box canvas {\n    position: absolute;\n    z-index: 0;\n    left: 0;\n    top: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    touch-action: none;\n}\n\n.board-add-page {\n    position: absolute;\n    right: 10px;\n    bottom: 10px;\n    display: flex;\n    width: 38px;\n    height: 38px;\n    border-radius: 50%;\n    font-size: 16px;\n    z-index: 999;\n    align-items: center;\n    justify-content: center;\n    background: rgba(33, 194, 33, 1);\n    color: #fff;\n    box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.44);\n    border: 0;\n    outline: none;\n}\n\n.board-add-page.disable {\n    background: #999;\n}\n\n#board-rubber-area {\n    -webkit-transform: translate3d(0, 0, 0);\n    -moz-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    border: 1px dashed #eee;\n    background-color: #aaa;\n    z-index: 9999;\n    opacity: 0.6;\n    display: none;\n}";
	styleInject(css);

	(function (doc, win) {
	  var docEl = doc.documentElement;
	  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

	  var recalc = function recalc() {
	    var clientWidth = docEl.clientWidth;

	    if (clientWidth >= 750) {
	      clientWidth = 750;
	    }
	    if (!clientWidth) return;
	    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
	  };

	  if (!doc.addEventListener) return;
	  win.addEventListener(resizeEvt, recalc, false);
	  doc.addEventListener('DOMContentLoaded', recalc, false);
	})(document, window);

	var css$1 = "@font-face {font-family: \"boardIcon\";\n  src: url('iconfont.eot?t=1560761596947'); /* IE9 */\n  src: url('iconfont.eot?t=1560761596947#iefix') format('embedded-opentype'), /* IE6-IE8 */\n  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAgoAAsAAAAADtwAAAfbAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCENAqOXItPATYCJAMwCxoABCAFhHkHgS8bbAxRlFBSENkPSRJEoIACCRQQIUE0YxwolIJSKBgARDz8t9//9pmZe+9T5HlCrZLEVv+JJGZRE8kTiZS9smg0kklob3jc1j8YyIi8ncJ3HhPr0uhrvEy0LwZsMAP2cRi5XWcSF90M2llSKO0GaO60SQ/OP77Xy1oJ25P//73KWbYtum62BSQBi+Ef+75kd+1JASzWF485sVzqqVaoyrUwr8yeFBTkr3czgY5lmuPt79LLBGAFVwK9LlI2HMC+tJJiCa1YHXNimfCmAKFWesS/AIDH5u/HL5AYMEmV8VstnO5sBcav4NlUiA2wCvIIwNVXgOtmZGwBlGv0VWzRS5AtbzGxEzdQ4DJgQHW6fPrKeyZ+pnsW9kz/LPoZ+WxqIMBX8AwOh6GT8Y5hABEsdFqGCpN6VJtq6+gqGpn982on7EH3ornLV6BA8DVA4iscoOarOEDFV50ijaBQgIQhqQOiB1s3iUZSASGR1IBMRbbcp4EzwEog7UfmE+D6gzCtIMbKYtrN7ZJqlU5+uuwKWNIaI6rEpjLZJFgnECxTCeT9EWR/ykBbui67ptW6abfrALthNWOxxy02HUjmutsl4oyfr9vgBIltsYhKo8Kfdc3n4/zYJGb2eoTj4ASenalfhAiBxIaRJ0IAzeJiN+byZ4aDkkVvqZIdL6g6+AMFCCDBws8U+e5vvVDKEw9c9GWWji/zZLOrp3PWaGWrFuIhSsf89QblyrqoWq1dAqR1f6knPKZTPtMOT3NoftPdORxcPxjPTWs33vSMa/acqUYHpIKFa6t692GFcNHG68v2P8703jR5HmT5smZxzSrP67U+zvbf2uiBaUtmdnRlPc41oXDGOH7Se8u86qEjD8rn7jp5PKal3my/PwKav0T7s8eL+NxTREO2cNFbfq8uf1PTKlY1bpv7gjk1oiEWzm/i+rl0fDIxdczgDy9XISRmjo/e8nFuVQkgp6HjDY+QjIvFJ/Q7ROH5qh1ck2TFSsifu9ZJM9dKsWD1ekjnGicSSJqbRc4mnE1uQxhNWY1xqxtTpqnGrrElOzO8c9rMJviVilN/BuHy/67Kk7/hgiU/VUqhglp1SAzN3+I1SOxqx0PPPY2BIv6clX1c9KpNFXfoLse6/2f2e8249Ipqga3961gapw4sMXmHmWYsSNdR1eIfbg4NXutFF3oar1lqenzAcX+W3xe4X+W4XBYnbaM4YpF6fpeXyF/0miEW3dswFPGj7gd+SmgX2lbkCTFr4fFTnJ3OZ6V1btKtXYs+7Xp0NjpHfpSh/4JB9llZQJaoMEQfsb33Xpoofa/1sAZqgwfNZpkZC4euGbpwBvPgXSOUt0vXKN99OOQW6DVpt5+qeLcTXaOcVAPXTKr0iN7Rh+hYEbQ0lksLek+TQwNBoHMiTAlODdr/xJOPvqne0FmaM7mjSdC4/4BfnyPzUofQa2osPk5zLVR7zMiLi8eA8XXf2jaqO/xHvLuqNthF3iP+BbDvIeg27tJmT+uNOxO3t15hTN6Hl+xKtGO9eo3VhdNjMjrkowuaqmYmL26+dCIyL4l9uXa8jJ49x9Bq0ZiyMiRptHYMx47VqukxIGVYuWPkhJRO8CW+PqWvjLLwjHoqo6+4j8yMKw81paBhFeFRTWk+27GvlMJ5xkZUp75wX8l52xEhWeD+ZmP8usbr4vUKywcjdEEIfwLEb0SvFH6/IkpyVxKlqK1VvGrWrKzBuwa2dx4fRWKOC4CVD6uDu9x982bVkiQJK0lassq5kOE/+YqQwQiLDKZcRmCcr7xb30te4lpUbm5EUlayIS8vNy8xiUyKMOkQZeUn5ubxC+yH4Ttc/QWQ+oW9c7V//7A7YVr8ql2esGTKHfr4wLOPcxW7lGPazcF26ddmgCtr9buwOe3GKHcp5oJddzWwLgFxIAmJuHjqrp/6aMUvYz2FQkmxBSdadHGDTZ0N4YwGKalIlRe8ZP38ebjFMGnJLLk+wjDCgCwO6anVqo0nI5oElW5LxNTG5TyjoPQqUP8f8E3LLv5eAOZH83KovWm7XsKgHNvakgNVX25Y3gaNAIC8wL8CwPxM3gOlM0d9gfJDC8j3Gtk8HeL8yRyI444bO9nxQXZziLLNV1j6V7Lkcwv3H5Muhzn1NrckcnNHiTHFDsD8b8m5CVzufenepgEwVWejh93pKLa0o+cYUUNCR2RxhCgbuNdGdJyb0eW2j7tC0lgGWdtaVdFtg0rXdqi17YWOzXqe3jVUBhKljU3GMggD2yFZ5B1kA9dVRfcUKhPfoTYIOXQcCP0Fu9aFW9LRReAMYcXMlRhlcTpIOYCRmJ24y9qd+g4gbO5i3HUTrfoswlVKoQ5LiI0Pt3YlHISrnkNKy2yJDENipMtZgnWp8HZEcbETo13OQsLCxNoZhm4VF0fGHRprcZYAiX1cCDhG97bCmFUGUyycHMgChgQjnXAuVt3jhw5AsHErxhRpU4QKshDXolIUrQyTIFZ8HlVXdOSbtE8DS5WxScSIAhKmZBe1lMB06WUBofjU5ISh47crRLBgxLKXaKC1EkeLkXkxtt1oyXZHG3FK/gG9SJGjRBV1NNGKdnSiG73oq2/YKZpyiIxDcIfF7g5i3DSFOxSVC9nRUeHGHVV2rSKoknJkOAwqpHANXkIXUyRlwZkVVYZsggpJFVVJy4qtNCV15idcQhMLkwAA') format('woff2'),\n  url('iconfont.woff?t=1560761596947') format('woff'),\n  url('iconfont.ttf?t=1560761596947') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */\n  url('iconfont.svg?t=1560761596947#boardIcon') format('svg'); /* iOS 4.1- */\n}\n\n.boardIcon {\n  font-family: \"boardIcon\" !important;\n  font-size: 16px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.board-icon-shipin:before {\n  content: \"\\e600\";\n}\n\n.board-icon-shanchu:before {\n  content: \"\\e601\";\n}\n\n.board-icon-tupian:before {\n  content: \"\\e691\";\n}\n\n.board-icon-yulanxuanzhuan:before {\n  content: \"\\e626\";\n}\n\n.board-icon-yinpin:before {\n  content: \"\\e609\";\n}\n\n.board-icon-jia:before {\n  content: \"\\e608\";\n}\n\n.board-icon-amplification_icon:before {\n  content: \"\\e666\";\n}\n\n.board-icon-ziyuanldpi:before {\n  content: \"\\e619\";\n}\n\n.board-icon-ziyuanldpi1:before {\n  content: \"\\e61c\";\n}\n\n.board-icon-ziyuanldpi2:before {\n  content: \"\\e61d\";\n}\n\n.board-icon-ziyuanldpi3:before {\n  content: \"\\e61f\";\n}\n\n";
	styleInject(css$1);

	var board = null;

	(function () {

	  var vendors = ['webkit', 'moz', 'ms', 'o'];

	  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	    var vp = vendors[i];
	    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	  }

	  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) // iOS6 is buggy
	  || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	    var lastTime = 0;

	    window.requestAnimationFrame = function (callback) {
	      var now = new Date().getTime();
	      var nextTime = Math.max(lastTime + 16, now);
	      return setTimeout(function () {
	        callback(lastTime = nextTime);
	      }, nextTime - now);
	    };

	    window.cancelAnimationFrame = clearTimeout;
	  }
	})();

	(function (w, d) {
	  var WhiteBoard = function WhiteBoard(o) {
	    return new WhiteBoard.prototype.fn(o);
	  };

	  WhiteBoard.prototype.fn = function (o) {
	    // 初始化层级排序
	    o.zIndexInfo.sort(function (prev, next) {
	      return next.zIndex - prev.zIndex;
	    }); // 当前环境是否支持Pointer事件

	    this.pointerSupport = window.PointerEvent ? true : false; // 初始参数赋值

	    this.options = o; // 父级容器dom

	    this.wrapDom = this.getWrapDom(o.el); // 初始高度

	    this.initHeight = this.wrapDom.getBoundingClientRect().height; // 一张纸的默认高度

	    this.pageHeight = o.pageHeight || this.wrapDom.getBoundingClientRect().height; // 总层级(画板层级数和多媒体控件数的总和)

	    this.zIndexTotal = this.getAllZindex(o.zIndexInfo); // 画板各层级cavas对象实例

	    this.canvasObj = []; // 初始化布局

	    this.initLayout();
	  };

	  WhiteBoard.prototype.fn.prototype = {
	    constructor: WhiteBoard.prototype.fn,
	    // 获取父级盒子
	    getWrapDom: function getWrapDom(el) {
	      var dom = null;

	      if (typeof el === 'string') {
	        switch (el[0]) {
	          case "#":
	            dom = d.getElementById(el.substr(1));
	            break;

	          case ".":
	            dom = d.getElementsByClassName(el.substr(1))[0];
	            break;

	          default:
	            dom = d.getElementsByTagName(el)[0];
	            break;
	        }
	      } else if (_typeof(el) === 'object') {
	        dom = el;
	      }

	      return dom;
	    },
	    // 初始化获取白板控件中的层级总数
	    getAllZindex: function getAllZindex(zIndexInfo) {
	      var num = zIndexInfo.length;

	      for (var i = 0, len = zIndexInfo.length; i < len; i++) {
	        num = num + (zIndexInfo[i].other.img ? zIndexInfo[i].other.img.length : 0);
	        num = num + (zIndexInfo[i].other.audio ? zIndexInfo[i].other.audio.length : 0);
	        num = num + (zIndexInfo[i].other.video ? zIndexInfo[i].other.video.length : 0);
	        num = num + (zIndexInfo[i].other.N2 ? zIndexInfo[i].other.N2.length : 0);
	      } // console.log('层级总数: ' + num);


	      return num;
	    },
	    // 加纸时重置轨迹点Y轴比例
	    resetScale: function resetScale(item, curHeight, rubberRange) {
	      if (!item.content.length) return;
	      var wrapH = this.wrapDom.getBoundingClientRect().height;

	      for (var i = 0, len = item.content.length; i < len; i++) {
	        for (var j = 0, l = item.content[i].path.length; j < l; j++) {
	          // 更新Y轴轨迹点比例
	          item.content[i].path[j].y = item.content[i].path[j].y * curHeight / wrapH;
	        } // 更新轨迹矩形区域比例


	        item.content[i].rectArea = this.getRectArea(item.content[i].path, rubberRange, this.wrapDom);
	      }
	    },
	    // 计算轨迹矩形区域
	    getRectArea: function getRectArea(pathArr, rubberRange, el) {
	      var disX = rubberRange / el.clientWidth;
	      var disY = rubberRange / el.clientHeight;
	      var o = {
	        xMin: Infinity,
	        xMax: -Infinity,
	        yMin: Infinity,
	        yMax: -Infinity
	      };
	      var obj = pathArr.reduce(function (prev, cur) {
	        prev.xMin = Math.min.apply(null, [prev.xMin, cur.x]);
	        prev.xMax = Math.max.apply(null, [prev.xMax, cur.x]);
	        prev.yMin = Math.min.apply(null, [prev.yMin, cur.y]);
	        prev.yMax = Math.max.apply(null, [prev.yMax, cur.y]);
	        return prev;
	      }, o);
	      return [obj.xMin - disX <= 0 ? 0 : obj.xMin - disX, obj.xMax + disX >= el.clientWidth ? el.clientWidth : obj.xMax + disX, obj.yMin - disY <= 0 ? 0 : obj.yMin - disY, obj.yMax + disY >= el.clientHeight ? el.clientHeight : obj.yMax + disY];
	    },
	    // 初始化画布布局
	    initLayout: function initLayout(type) {
	      var curHeight = this.wrapDom.getBoundingClientRect().height;
	      var maxPage = Math.max.apply(Math, this.options.zIndexInfo.map(function (e) {
	        return e.page || 1;
	      }));
	      this.wrapDom.style.height = this.initHeight + (maxPage - 1) * this.pageHeight + 'px';
	      this.wrapDom.style.position = 'relative'; // 清理dom和已挂载到canvasObj的canvas实例和其他元素

	      this.clearWrapDom(this.wrapDom);

	      for (var i = 0, len = this.options.zIndexInfo.length; i < len; i++) {
	        var item = this.options.zIndexInfo[i];
	        if (type === 'isAddPage') this.resetScale(item, curHeight, this.options.rubberRange);
	        this.createCanvas(item);
	      } // 加纸按钮


	      if (this.options.addBtn !== false) this.initAddBtn();
	      /**
	       * 测试
	       */
	      // 测试橡皮擦 && 画笔

	      /* var testBtn = document.createElement('button');
	      testBtn.innerText = "橡皮";
	      testBtn.style.position = 'absolute';
	      testBtn.style.zIndex = 999;
	      this.wrapDom.appendChild(testBtn);
	      var _self = this;
	      testBtn.onclick = function () {
	          // _self.canvasObj[0].setUp({ inputType: 'fluorescent-pen', strokeStyle: '#FFF4DA' });
	          _self.canvasObj[0].setUp({ inputType: 'rubber'});
	      };
	      var testBtn = document.createElement('button');
	      testBtn.innerText = "画笔";
	      testBtn.style.position = 'absolute';
	      testBtn.style.left=100+'px';
	      testBtn.style.zIndex = 999;
	      this.wrapDom.appendChild(testBtn);
	      var _self = this;
	      testBtn.onclick = function () {
	          // _self.canvasObj[0].setUp({ inputType: 'fluorescent-pen', strokeStyle: '#FFF4DA' });
	          _self.canvasObj[0].setUp({ inputType: 'fountain-pen', strokeStyle: '#FF9500' });
	      }; */
	    },
	    initAddBtn: function initAddBtn() {
	      var addPageBtn = d.createElement('button');
	      var addBtnCLass = '';

	      if (this.options.zIndexInfo[0].page === this.options.maxPage) {
	        addBtnCLass = 'boardIcon board-icon-jia board-add-page disable';
	      } else {
	        addBtnCLass = 'boardIcon board-icon-jia board-add-page';
	      }
	      addPageBtn.setAttribute('class', addBtnCLass);
	      this.wrapDom.appendChild(addPageBtn);

	      var _self = this;

	      addPageBtn.onclick = function (ev) {
	        ev.preventDefault();
	        ev.cancelBubble = true;
	        ev.stopPropagation();

	        _self.addPage();
	      };
	    },
	    clearWrapDom: function clearWrapDom(wrapDom) {
	      for (var i = 0, len = wrapDom.children.length; i < len; i++) {
	        var oDom = wrapDom.children[i];

	        if (oDom.classList.contains('board-box') || oDom.classList.contains('board-add-page')) {
	          wrapDom.removeChild(oDom);
	          oDom = null;
	          i--;
	          len = wrapDom.children.length;
	        }
	      }

	      this.canvasObj = [];
	    },
	    // 单个画布的创建
	    createCanvas: function createCanvas(obj) {
	      var parentEl = d.createElement('div');
	      parentEl.setAttribute('class', 'board-box board-box-' + obj.zIndex);
	      parentEl.style.height = this.wrapDom.getBoundingClientRect().height + 'px';
	      parentEl.style.zIndex = obj.zIndex;
	      this.wrapDom.appendChild(parentEl);
	      var canvas = d.createElement('canvas');
	      canvas.setAttribute('id', 'board-' + obj.zIndex);
	      canvas.width = parentEl.getBoundingClientRect().width;
	      canvas.height = parentEl.getBoundingClientRect().height;
	      parentEl.appendChild(canvas); // 初始化画板对象

	      var c = new Canvas(canvas, obj, this);
	      this.canvasObj.push(c);
	    },
	    // 当前顶层画布加页
	    addPage: function addPage() {
	      if (this.options.zIndexInfo[0].page === this.options.maxPage) return;
	      this.options.zIndexInfo[0].page += 1;
	      this.initLayout('isAddPage');
	      if (this.options.addCallBack && typeof this.options.addCallBack === 'function') this.options.addCallBack();
	    },
	    // 禁用画板
	    disableBoard: function disableBoard(bool) {
	      this.options.zIndexInfo[0].disabled = bool;
	      this.initLayout();
	    }
	  }; // if (!w.WhiteBoard) w.WhiteBoard = WhiteBoard;

	  board = WhiteBoard;
	  /******************************* 单个canvas画布对象 **********************************/

	  /**
	   * 
	   * @param {*} el 当前创建的canvas实例
	   * @param {*} obj 当前canvas的数据，zIndexInfo的一项
	   * @param {*} superClass WhiteBoard对象
	   */

	  var Canvas = function Canvas(el, obj, superClass) {
	    // this.pressure = 1;
	    this.prevPressure = null;
	    this.timeout = null;
	    this.superClass = superClass;
	    this.el = el;
	    this.elWidth = el.width;
	    this.elHeight = el.height;
	    this.info = obj;
	    this.canvasSettings = {
	      strokeStyle: '',
	      lineWidth: '',
	      lineCap: '',
	      inputType: ''
	    };
	    this.rubberStartX = 0;
	    this.rubberStartY = 0;
	    this.rubberOn = false;
	    this.rubberRange = Number(superClass.options.rubberRange) || 10;
	    this.squareOfRubberRange = this.rubberRange * this.rubberRange;
	    this.watcher = superClass.options.watcher;
	    this.writeCallBack = superClass.options.writeCallBack;
	    this.isDrawing = false;
	    this.beginPoint = null;
	    this.coords = {};
	    this.curve = null;
	    this.setUp(this.initSettings(obj));
	    this.drawingContent(Object.assign({}, this.canvasSettings));

	    if (!obj.disabled) {
	      this.initDrawEvent();
	    }
	  };

	  Canvas.prototype = {
	    // 初始设置参数获取
	    initSettings: function initSettings(obj) {
	      return {
	        strokeStyle: obj.color || '#000000',
	        lineWidth: obj.size || 2,
	        lineCap: "round",
	        inputType: obj.inputType || 'fountain-pen'
	      };
	    },
	    // 当前画布设置更改（基础属性）
	    setUp: function setUp(settings) {
	      for (var key in settings) {
	        this.canvasSettings[key] = settings[key];
	      }

	      this.initCtx();
	    },
	    // 根据压感参数设置当前点的粗细
	    setPointSize: function setPointSize(baseLineWidth, pressure) {
	      this.ctx.lineWidth = baseLineWidth * pressure;
	    },
	    // 初始化画板功能
	    initCtx: function initCtx() {
	      this.ctx = this.el.getContext("2d");
	      this.ctx.strokeStyle = this.canvasSettings.strokeStyle;
	      this.ctx.lineWidth = this.canvasSettings.lineWidth;
	      this.ctx.lineCap = this.canvasSettings.lineCap;
	      this.ctx.globalCompositeOperation = this.canvasSettings.inputType === 'fluorescent-pen' ? 'darken' : 'source-over';
	    },
	    // 画板事件绑定
	    initDrawEvent: function initDrawEvent() {
	      var _self = this;
	      /* console.log(w.WhiteBoardPressure);
	      w.WhiteBoardPressure.set('#' + this.el.id, {
	          change: function(force){
	              _self.pressure = force;
	          }
	      }, {
	          polyfillSpeedUp: 500,
	          polyfillSpeedDown: 500
	      }); */


	      if (this.superClass.pointerSupport) {
	        this.el.addEventListener('pointerdown', function (e) {
	          _self.touchStart.call(_self, e, _self.getInputCoords(e));
	        }, false);
	        w.addEventListener('pointermove', function (e) {
	          _self.touchMove.call(_self, e, _self.getInputCoords(e));
	        }, false);
	        w.addEventListener('pointerup', function (e) {
	          _self.touchEnd.call(_self, e);
	        }, false);
	      } else {
	        console.log('Pointer events are not supported!'); // touch事件

	        this.el.addEventListener('touchstart', function (e) {
	          _self.touchStart.call(_self, e, _self.getInputCoords(e));
	        }, {
	          passive: false
	        });
	        w.addEventListener('touchmove', function (e) {
	          _self.touchMove.call(_self, e, _self.getInputCoords(e));
	        }, {
	          passive: false
	        });
	        w.addEventListener('touchend', function (e) {
	          _self.touchEnd.call(_self, e);
	        }, {
	          passive: false
	        }); // mouse事件

	        this.el.addEventListener('mousedown', function (e) {
	          _self.touchStart.call(_self, e, _self.getInputCoords(e));
	        });
	        w.addEventListener('mousemove', function (e) {
	          _self.touchMove.call(_self, e, _self.getInputCoords(e));
	        });
	        w.addEventListener('mouseup', function (e) {
	          _self.touchEnd.call(_self, e);
	        });
	      } // 绑定回调机制


	      this.bindCbFunc(this.el, this);
	      if (w.requestAnimationFrame) requestAnimationFrame(this.drawing.bind(this));
	    },
	    // 回调监听绑定方法
	    bindCbFunc: function bindCbFunc(el, _self) {
	      if (this.superClass.pointerSupport) {
	        // 监听输入完毕，触发异步回调
	        if (_self.watcher && _self.watcher.cb && typeof _self.watcher.cb === "function") {
	          el.addEventListener('pointerup', _self.debounce(_self.watcher.cb, _self.watcher.wait));
	        } // 监听输入开始，触发同步回调(兼容事件只执行一次)


	        if (_self.writeCallBack && _self.writeCallBack.cb && typeof _self.writeCallBack.cb === "function") {
	          el.addEventListener('pointerdown', function fn(e) {
	            if (_self.writeCallBack.type && _self.writeCallBack.type === 'once') e.target.removeEventListener('pointerdown', fn);
	            return _self.writeCallBack.cb();
	          });
	        }
	      } else {
	        // 监听输入完毕，触发异步回调
	        if (_self.watcher && _self.watcher.cb && typeof _self.watcher.cb === "function") {
	          el.addEventListener('touchend', _self.debounce(_self.watcher.cb, _self.watcher.wait));
	          el.addEventListener('mouseup', _self.debounce(_self.watcher.cb, _self.watcher.wait));
	        } // 监听输入开始，触发同步回调(兼容事件只执行一次)


	        if (_self.writeCallBack && _self.writeCallBack.cb && typeof _self.writeCallBack.cb === "function") {
	          el.addEventListener('touchstart', function fn(e) {
	            if (_self.writeCallBack.type && _self.writeCallBack.type === 'once') e.target.removeEventListener('touchstart', fn);
	            return _self.writeCallBack.cb();
	          });
	          el.addEventListener('mousedown', function fn(e) {
	            if (_self.writeCallBack.type && _self.writeCallBack.type === 'once') e.target.removeEventListener('mousedown', fn);
	            return _self.writeCallBack.cb();
	          });
	        }
	      }
	    },
	    // 回调方法执行
	    cbFunc: function cbFunc(type) {
	      switch (type) {
	        case 'async':
	          if (this.watcher && this.watcher.cb && typeof this.watcher.cb === "function") {
	            this.debounce(this.watcher.cb, this.watcher.wait)();
	          }

	          break;

	        case 'sync':
	          if (this.writeCallBack && this.writeCallBack.cb && typeof this.writeCallBack.cb === "function") {
	            this.writeCallBack.cb();
	          }

	          break;

	        case 'all':
	          if (this.watcher && this.watcher.cb && typeof this.watcher.cb === "function") {
	            this.debounce(this.watcher.cb, this.watcher.wait)();
	          }

	          if (this.writeCallBack && this.writeCallBack.cb && typeof this.writeCallBack.cb === "function") {
	            this.writeCallBack.cb();
	          }

	          break;
	      }
	    },
	    // 防抖
	    debounce: function debounce(func, wait) {
	      var _self = this;

	      return function () {
	        clearTimeout(_self.timeout);
	        _self.timeout = setTimeout(func, wait);
	      };
	    },
	    // 阻止默认事件，事件冒泡
	    clearEventBubble: function clearEventBubble(e) {
	      if (e.stopPropagation) {
	        e.stopPropagation();
	      } else {
	        e.cancelBubble = true;
	      }

	      if (e.preventDefault) {
	        e.preventDefault();
	      } else {
	        e.returnValue = false;
	      }
	    },
	    // 触摸事件开始
	    touchStart: function touchStart(e, coords) {
	      if (e.touches && e.touches.length > 1) {
	        this.isDrawing = false;
	        return;
	      }

	      if (this.canvasSettings.inputType === 'rubber') {
	        this.rubberStart(e, coords);
	      } else {
	        this.coords = coords;
	        this.curve = {
	          path: [],
	          canvasSettings: Object.assign({}, this.canvasSettings),
	          rectArea: []
	        };
	        if (!w.requestAnimationFrame) this.drawing();
	        this.clearEventBubble(e);
	      }

	      this.isDrawing = true;
	    },
	    // 触摸移动
	    touchMove: function touchMove(e, coords) {
	      if (e.touches && e.touches.length > 1) {
	        this.isDrawing = false;
	        return;
	      }
	      if (!this.isDrawing) return;
	      this.coords = coords;

	      if (this.canvasSettings.inputType === 'rubber') {
	        this.rubberMove(e, coords);
	      } else {
	        if (!w.requestAnimationFrame) this.drawing();
	        this.clearEventBubble(e);
	      }
	    },
	    // 触摸结束
	    touchEnd: function touchEnd(e) {
	      if (this.isDrawing && (!e.touches || e.touches.length === 0)) {
	        this.isDrawing = false;
	        this.clearEventBubble(e);
	      }

	      if (this.canvasSettings.inputType === 'rubber') {
	        this.rubberUp(e);
	      } else {
	        if (!this.curve) return;
	        this.curve.rectArea = this.superClass.getRectArea(this.curve.path, this.rubberRange, this.el);
	        this.info.content.push(this.curve);
	        this.curve = null;
	      } // console.log(this.info)
	      // console.log(this.info.content);


	      console.log(JSON.stringify(this.info.content));
	    },
	    drawing: function drawing() {
	      if (this.isDrawing && this.canvasSettings.inputType !== 'rubber' && this.curve) {
	        // 绘制
	        // 存入当前轨迹点
	        this.curve.path.push({
	          x: this.coords.x / this.elWidth,
	          y: this.coords.y / this.elHeight,
	          pressure: this.coords.pressure // pressure: this.pressure

	        });

	        if (this.curve.path.length > 3) {
	          var lastTwoPoints = this.curve.path.slice(-2);
	          var controlPoint = {
	            x: lastTwoPoints[0].x * this.elWidth,
	            y: lastTwoPoints[0].y * this.elHeight
	          };
	          var endPoint = {
	            x: (lastTwoPoints[0].x * this.elWidth + lastTwoPoints[1].x * this.elWidth) / 2,
	            y: (lastTwoPoints[0].y * this.elHeight + lastTwoPoints[1].y * this.elHeight) / 2
	          };

	          if (!this.prevPressure || this.prevPressure !== this.coords.pressure) {
	            this.prevPressure = this.coords.pressure;
	            this.setPointSize(this.canvasSettings.lineWidth, this.coords.pressure);
	          }

	          this.ctx.beginPath();
	          this.ctx.moveTo(this.beginPoint.x, this.beginPoint.y);
	          this.ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
	          this.ctx.stroke();
	          this.ctx.closePath();
	          this.beginPoint = endPoint;
	        } else {
	          this.beginPoint = {
	            x: this.curve.path[0].x * this.elWidth,
	            y: this.curve.path[0].y * this.elHeight
	          };
	        }
	      }

	      if (w.requestAnimationFrame) requestAnimationFrame(this.drawing.bind(this));
	    },
	    // 橡皮区域拖拽开始
	    rubberStart: function rubberStart(e, coords) {
	      this.cbFunc('sync');
	      this.clearEventBubble(e);
	      this.rubberOn = true;
	      this.rubberStartX = coords.x;
	      this.rubberStartY = coords.y;
	      var selDiv = document.createElement('div');
	      selDiv.id = 'board-rubber-area';
	      this.el.parentNode.appendChild(selDiv);
	      selDiv.style.left = this.rubberStartX + 'px';
	      selDiv.style.top = this.rubberStartY + 'px';
	    },
	    // 橡皮区域拖拽中
	    rubberMove: function rubberMove(e, coords) {
	      if (!this.rubberOn) return;
	      this.clearEventBubble(e);
	      var _x = coords.x;
	      var _y = coords.y;
	      var selDiv = document.getElementById('board-rubber-area');
	      selDiv.style.display = 'block';
	      selDiv.style.left = Math.min(_x, this.rubberStartX) + 'px';
	      selDiv.style.top = Math.min(_y, this.rubberStartY) + 'px';
	      selDiv.style.width = Math.abs(_x - this.rubberStartX) + 'px';
	      selDiv.style.height = Math.abs(_y - this.rubberStartY) + 'px';
	    },
	    // 橡皮区域抬起
	    rubberUp: function rubberUp(e) {
	      if (!this.rubberOn) return;
	      this.cbFunc('async');
	      this.clearEventBubble(e);
	      var selDiv = document.getElementById('board-rubber-area'); // 获取参数

	      var l = selDiv.offsetLeft;
	      var t = selDiv.offsetTop;
	      var w = selDiv.offsetWidth;
	      var h = selDiv.offsetHeight;
	      this.checkInnerWriting({
	        x: l,
	        y: t,
	        width: w,
	        height: h
	      });
	      this.el.parentNode.removeChild(selDiv);
	      selDiv = null;
	      this.rubberOn = false;
	    },
	    // 判断区域内部的轨迹
	    checkInnerWriting: function checkInnerWriting(rect1) {
	      if (!this.info.content.length) return;

	      for (var i = 0, len = this.info.content.length; i < len; i++) {
	        var oContent = this.info.content[i];
	        if (!oContent) continue;
	        var xMin = Number((oContent.rectArea[0] * this.elWidth).toFixed(0));
	        var xMax = Number((oContent.rectArea[1] * this.elWidth).toFixed(0));
	        var yMin = Number((oContent.rectArea[2] * this.elHeight).toFixed(0));
	        var yMax = Number((oContent.rectArea[3] * this.elHeight).toFixed(0));
	        var rect2 = {
	          x: xMin,
	          y: yMin,
	          width: xMax - xMin,
	          height: yMax - yMin
	        };
	        var bool = this.isOverlap(rect1, rect2);

	        if (bool) {
	          if (this.shouldDelete(oContent, rect1)) {
	            this.info.content.splice(i, 1);
	            i = i - 1;
	          }
	        }
	      }

	      this.drawingContent(Object.assign({}, this.canvasSettings));
	    },

	    /**
	     * 判断两个矩形是否有重叠
	     * @param {x, y, width, height} rect1 
	     * @param {x, y, width, height} rect2 
	     */
	    isOverlap: function isOverlap(rect1, rect2) {
	      var l1 = {
	        x: rect1.x,
	        y: rect1.y
	      };
	      var r1 = {
	        x: rect1.x + rect1.width,
	        y: rect1.y + rect1.height
	      };
	      var l2 = {
	        x: rect2.x,
	        y: rect2.y
	      };
	      var r2 = {
	        x: rect2.x + rect2.width,
	        y: rect2.y + rect2.height
	      };
	      if (l1.x > r2.x || l2.x > r1.x || l1.y > r2.y || l2.y > r1.y) return false;
	      return true;
	    },

	    /**
	     * 判断是否这个轨迹得某个点在矩形范围内
	     * @param {canvasSettings, path, rectArea} oContent 
	     * @param {x, y, width, height} rect 
	     */
	    shouldDelete: function shouldDelete(oContent, rect) {
	      var rectArea = [rect.x, rect.x + rect.width, rect.y, rect.y + rect.height];
	      var pathArr = oContent.path;

	      for (var i = 0, len = pathArr.length; i < len; i++) {
	        var oPoint = pathArr[i];
	        var coords1 = {
	          x: Number((oPoint.currentMidX * this.elWidth).toFixed(0)),
	          y: Number((oPoint.currentMidY * this.elHeight).toFixed(0))
	        };
	        var coords2 = {
	          x: Number((oPoint.oldX * this.elWidth).toFixed(0)),
	          y: Number((oPoint.oldY * this.elHeight).toFixed(0))
	        };
	        var coords3 = {
	          x: Number((oPoint.oldMidX * this.elWidth).toFixed(0)),
	          y: Number((oPoint.oldMidY * this.elHeight).toFixed(0))
	        };

	        if (this.isFitPath(coords1, rectArea) || this.isFitPath(coords2, rectArea) || this.isFitPath(coords3, rectArea)) {
	          return true;
	        }
	      }

	      return false;
	    },

	    /**
	     * 检测点在矩形区域内
	     * @param {x, y} coords 
	     * @param {xMin, xMax, yMin, yMax} rectArea 
	     */
	    isFitPath: function isFitPath(coords, rectArea) {
	      if (coords.x <= rectArea[0]) {
	        return false;
	      }

	      if (coords.y >= rectArea[3]) {
	        return false;
	      }

	      if (coords.x >= rectArea[1]) {
	        return false;
	      }

	      if (coords.y <= rectArea[2]) {
	        return false;
	      }

	      return true;
	    },
	    // 根据坐标点匹配选中的一条轨迹
	    matchPath: function matchPath(coords, pathArr) {
	      var _self = this;

	      var bool = pathArr.some(function (e) {
	        return _self.distanceOfPoint2Line(coords.x, coords.y, e.currentMidX, e.currentMidY, e.oldMidX, e.oldMidY) <= _self.squareOfRubberRange;
	      });
	      return bool;
	    },
	    // 计算某点到两点间线段的垂直距离
	    distanceOfPoint2Line: function distanceOfPoint2Line(x0, y0, x1, y1, x2, y2) {
	      var x = x1;
	      var y = y1;
	      var dx = x2 - x;
	      var dy = y2 - y;

	      if (dx !== 0 || dy !== 0) {
	        var t = ((x0 - x) * dx + (y0 - y) * dy) / (dx * dx + dy * dy);

	        if (t > 1) {
	          x = x2;
	          y = y2;
	        } else if (t > 0) {
	          x += dx * t;
	          y += dy * t;
	        }
	      }

	      dx = x0 - x;
	      dy = y0 - y;
	      return dx * dx + dy * dy;
	    },
	    getInputCoords: function getInputCoords(e) {
	      e = e.originalEvent ? e.originalEvent : e;
	      var rect = this.el.getBoundingClientRect(),
	          width = this.el.width,
	          height = this.el.height,
	          left = rect.left,
	          top = rect.top;
	      var x, y;

	      if (e.touches && e.touches.length == 1) {
	        x = e.touches[0].pageX;
	        y = e.touches[0].pageY;
	      } else {
	        x = e.pageX;
	        y = e.pageY;
	      }

	      x = x - left;
	      y = y - top;
	      x *= width / rect.width;
	      y *= height / rect.height;
	      return {
	        x: x,
	        y: y,
	        pressure: e.pointerType === 'pen' ? e.pressure : 1
	      };
	    },
	    // 初始化白板内容
	    drawingContent: function drawingContent(canvasSettings) {
	      this.clearAll();

	      if (!this.info.content.length) {
	        this.setUp(canvasSettings);
	        return;
	      }

	      var content = this.info.content;
	      var prevPressure = null;

	      for (var i = 0, len = content.length; i < len; i++) {
	        var oPathInfo = content[i];
	        if (!oPathInfo || !oPathInfo.path.length) continue;
	        var arr = oPathInfo.path;
	        this.setUp(oPathInfo.canvasSettings);
	        this.beginPoint = {
	          x: arr[0].x * this.elWidth,
	          y: arr[0].y * this.elHeight
	        };

	        for (var j = 0, length = arr.length; j < length; j++) {
	          if (j + 2 > arr.length) break;

	          if (j > 1) {
	            var lastTwoPoints = arr.slice(j, j + 2);
	            var controlPoint = {
	              x: lastTwoPoints[0].x * this.elWidth,
	              y: lastTwoPoints[0].y * this.elHeight
	            };
	            var endPoint = {
	              x: (lastTwoPoints[0].x * this.elWidth + lastTwoPoints[1].x * this.elWidth) / 2,
	              y: (lastTwoPoints[0].y * this.elHeight + lastTwoPoints[1].y * this.elHeight) / 2
	            };

	            if (!prevPressure || prevPressure !== arr[j].pressure) {
	              prevPressure = arr[j].pressure;
	              this.setPointSize(oPathInfo.canvasSettings.lineWidth, arr[j].pressure);
	            }

	            this.ctx.beginPath();
	            this.ctx.moveTo(this.beginPoint.x, this.beginPoint.y);
	            this.ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
	            this.ctx.stroke();
	            this.ctx.closePath();
	            this.beginPoint = endPoint;
	          }
	        }
	      } // 恢复上一次的设置


	      this.setUp(canvasSettings);
	    },
	    // 清除画布的所有内容
	    clearAll: function clearAll() {
	      var canvas = this.el;
	      canvas.width = canvas.width;
	    }
	  };
	  /***********************************************************************************/

	})(typeof window !== 'undefined' ? window : global, document);

	var t1 = new Date().getTime();
	window.oCanvas = board({
	  "el": ".box",
	  "maxPage": 5,
	  // "pageHeight": 100,
	  "rubberRange": 10,
	  "addBtn": true,
	  "zIndexInfo": [{
	    "update": true,
	    "inputType": "fountain-pen",
	    "color": "#9100FF",
	    "page": 2,
	    "size": 2,
	    "zIndex": 1,
	    "content": [{
	      "path": [{
	        "x": 0.2249912359775641,
	        "y": 0.16991159539473685,
	        "pressure": 1
	      }, {
	        "x": 0.23796198918269232,
	        "y": 0.16298828125,
	        "pressure": 1
	      }, {
	        "x": 0.27434520232371795,
	        "y": 0.15562294407894736,
	        "pressure": 1
	      }, {
	        "x": 0.351161858974359,
	        "y": 0.15085320723684212,
	        "pressure": 1
	      }, {
	        "x": 0.459804437099359,
	        "y": 0.1525596217105263,
	        "pressure": 1
	      }, {
	        "x": 0.5612229567307693,
	        "y": 0.16745476973684212,
	        "pressure": 1
	      }, {
	        "x": 0.6260955028044872,
	        "y": 0.1900853207236842,
	        "pressure": 1
	      }, {
	        "x": 0.6664225260416666,
	        "y": 0.21967002467105262,
	        "pressure": 1
	      }, {
	        "x": 0.6723257211538461,
	        "y": 0.24469572368421053,
	        "pressure": 1
	      }, {
	        "x": 0.6531262520032052,
	        "y": 0.2801552220394737,
	        "pressure": 1
	      }, {
	        "x": 0.5928735977564102,
	        "y": 0.32444490131578946,
	        "pressure": 1
	      }, {
	        "x": 0.5098219651442307,
	        "y": 0.35761204769736843,
	        "pressure": 1
	      }, {
	        "x": 0.4218186598557692,
	        "y": 0.3739309210526316,
	        "pressure": 1
	      }, {
	        "x": 0.35827323717948717,
	        "y": 0.3673314144736842,
	        "pressure": 1
	      }, {
	        "x": 0.31994315905448717,
	        "y": 0.34772306743421055,
	        "pressure": 1
	      }, {
	        "x": 0.29740084134615385,
	        "y": 0.32144839638157896,
	        "pressure": 1
	      }, {
	        "x": 0.291904547275641,
	        "y": 0.29438219572368424,
	        "pressure": 1
	      }, {
	        "x": 0.3640324519230769,
	        "y": 0.2548571134868421,
	        "pressure": 1
	      }, {
	        "x": 0.45674954927884615,
	        "y": 0.2600226151315789,
	        "pressure": 1
	      }, {
	        "x": 0.5446902544070513,
	        "y": 0.2850380345394737,
	        "pressure": 1
	      }, {
	        "x": 0.5914150140224359,
	        "y": 0.3171155427631579,
	        "pressure": 1
	      }, {
	        "x": 0.6095189803685898,
	        "y": 0.3603515625,
	        "pressure": 1
	      }, {
	        "x": 0.6029334435096154,
	        "y": 0.40936472039473687,
	        "pressure": 1
	      }, {
	        "x": 0.5628004807692307,
	        "y": 0.4632092927631579,
	        "pressure": 1
	      }, {
	        "x": 0.4938151041666667,
	        "y": 0.49710629111842103,
	        "pressure": 1
	      }, {
	        "x": 0.40959910857371795,
	        "y": 0.5127415707236842,
	        "pressure": 1
	      }, {
	        "x": 0.3326009114583333,
	        "y": 0.5089432565789473,
	        "pressure": 1
	      }, {
	        "x": 0.3106219951923077,
	        "y": 0.5017321134868421,
	        "pressure": 1
	      }, {
	        "x": 0.3087752904647436,
	        "y": 0.4986996299342105,
	        "pressure": 1
	      }, {
	        "x": 0.31479116586538464,
	        "y": 0.4950349506578947,
	        "pressure": 1
	      }, {
	        "x": 0.36597305689102566,
	        "y": 0.4961040296052632,
	        "pressure": 1
	      }, {
	        "x": 0.47717598157051283,
	        "y": 0.5147203947368421,
	        "pressure": 1
	      }, {
	        "x": 0.5713141025641025,
	        "y": 0.54072265625,
	        "pressure": 1
	      }, {
	        "x": 0.6413762019230769,
	        "y": 0.5807874177631579,
	        "pressure": 1
	      }, {
	        "x": 0.6688889723557693,
	        "y": 0.6219572368421052,
	        "pressure": 1
	      }, {
	        "x": 0.6573893229166666,
	        "y": 0.6663291529605263,
	        "pressure": 1
	      }, {
	        "x": 0.6173815604967948,
	        "y": 0.6991056743421052,
	        "pressure": 1
	      }, {
	        "x": 0.5450220352564102,
	        "y": 0.7240645559210527,
	        "pressure": 1
	      }, {
	        "x": 0.4803936298076923,
	        "y": 0.7303453947368421,
	        "pressure": 1
	      }, {
	        "x": 0.4340632512019231,
	        "y": 0.7317948190789474,
	        "pressure": 1
	      }, {
	        "x": 0.4136493389423077,
	        "y": 0.7333316200657894,
	        "pressure": 1
	      }],
	      "canvasSettings": {
	        "strokeStyle": "#9100FF",
	        "lineWidth": 2,
	        "lineCap": "round",
	        "inputType": "fountain-pen"
	      },
	      "rectArea": [0.20896559495192307, 0.6883513621794872, 0.1376953125, 0.7464895148026316]
	    }],
	    "other": {
	      "img": [],
	      "audio": [],
	      "video": [],
	      "N2": []
	    }
	  }],
	  "watcher": {
	    wait: 2000,
	    cb: function cb() {
	      return console.log('异步执行回调');
	    }
	  },
	  "writeCallBack": {
	    type: "once",
	    cb: function cb() {
	      return console.log('同步执行回调');
	    }
	  },
	  "addCallBack": function addCallBack() {
	    return console.log('加纸');
	  }
	});
	var t2 = new Date().getTime();
	console.log('白板初始化时间：' + (t2 - t1) / 1000 + 's');

})));
//# sourceMappingURL=index.js.map
