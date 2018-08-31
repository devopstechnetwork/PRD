<a name="PRD"></a>

## PRD : <code>object</code>
Simple module to assist on workflow development.<br/>Created to be imported in Overview > Global Scripts and used on both forms and engine.<br/>v1.0.5 breaking change - Compare() and Unique() renamed to compare() and unique() as per #20 .<br/>

**Kind**: global namespace  
**Version**: 1.0.8  
**License**: MIT License  

* [PRD](#PRD) : <code>object</code>
    * [.util](#PRD.util) : <code>object</code>
        * [.JSONobj](#PRD.util.JSONobj) : <code>object</code>
            * [.parse(s, [reviver])](#PRD.util.JSONobj.parse) ⇒ <code>object</code> \| <code>object</code>
            * [.stringify(o, [replacer], [space])](#PRD.util.JSONobj.stringify) ⇒ <code>string</code> \| <code>string</code>
            * [.test(inputJSON, whattotest)](#PRD.util.JSONobj.test) ⇒ <code>boolean</code>
            * [.get(inputJSON, whattoget, [returntype])](#PRD.util.JSONobj.get) ⇒ <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code>
        * [.formOrEngine()](#PRD.util.formOrEngine) ⇒ <code>string</code>
        * [.logerror(msg)](#PRD.util.logerror) ⇒ <code>boolean</code>
        * [.debugmsg(str)](#PRD.util.debugmsg)
        * [.inspectType(input)](#PRD.util.inspectType) ⇒ <code>string</code>
        * [.isString(input)](#PRD.util.isString) ⇒ <code>boolean</code>
        * [.isNumber(input)](#PRD.util.isNumber) ⇒ <code>boolean</code>
        * [.isBoolean(input)](#PRD.util.isBoolean) ⇒ <code>boolean</code>
        * [.isJavaVector(input)](#PRD.util.isJavaVector) ⇒ <code>boolean</code>
        * [.coerceToString(input, [defVal])](#PRD.util.coerceToString) ⇒ <code>string</code>
        * [.basicHTTPauthHeader(username, password)](#PRD.util.basicHTTPauthHeader) ⇒ <code>string</code>
        * [.shouldRetry(curcounter, maxretries)](#PRD.util.shouldRetry) ⇒ <code>boolean</code>
        * [.compare(list1, list2, ignorecase)](#PRD.util.compare) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
        * [.intersectArrays(arr, ignorecase)](#PRD.util.intersectArrays) ⇒ <code>Array.&lt;string&gt;</code>
        * [.unique(obj, ignorecase)](#PRD.util.unique) ⇒ <code>Array.&lt;string&gt;</code> \| <code>java.util.Vector</code>
        * [.getObject2arr(list)](#PRD.util.getObject2arr) ⇒ <code>array.&lt;(object\|string)&gt;</code> \| <code>null</code>
        * [.JavaVectorToECMAArray(v)](#PRD.util.JavaVectorToECMAArray) ⇒ <code>Array.&lt;string&gt;</code>
        * [.ECMAArrayToJavaVector(arr)](#PRD.util.ECMAArrayToJavaVector) ⇒ <code>java.util.Vector</code>
        * [.GCVget(GCVname, [returnType], [DefaultValue])](#PRD.util.GCVget) ⇒ <code>string</code> \| <code>number</code> \| <code>boolean</code>
        * [.getNamedPassword(NamedPassword, [try5times])](#PRD.util.getNamedPassword) ⇒ <code>string</code> \| <code>null</code>
    * [.web](#PRD.web) : <code>object</code>
        * [.fieldVisibility(event, field)](#PRD.web.fieldVisibility)
    * [.version()](#PRD.version) ⇒ <code>string</code>
    * [.setlogprefix(str)](#PRD.setlogprefix)
    * [.debugmessages(bool)](#PRD.debugmessages)
    * [.init(obj1, [obj2], [obj3])](#PRD.init)
    * [.IDVget(ldapdn, entkey, attrkey, [fieldname])](#PRD.IDVget) ⇒ <code>Array.&lt;string&gt;</code>
    * [.IDVglobalQuery(dalquerykey, parameters, [fieldname])](#PRD.IDVglobalQuery) ⇒ <code>Array.&lt;string&gt;</code>

<a name="PRD.util"></a>

### PRD.util : <code>object</code>
Utility functions for use in  Identity Manager work flow development.

**Kind**: static namespace of [<code>PRD</code>](#PRD)  
**Since**: 1.0.0  

* [.util](#PRD.util) : <code>object</code>
    * [.JSONobj](#PRD.util.JSONobj) : <code>object</code>
        * [.parse(s, [reviver])](#PRD.util.JSONobj.parse) ⇒ <code>object</code> \| <code>object</code>
        * [.stringify(o, [replacer], [space])](#PRD.util.JSONobj.stringify) ⇒ <code>string</code> \| <code>string</code>
        * [.test(inputJSON, whattotest)](#PRD.util.JSONobj.test) ⇒ <code>boolean</code>
        * [.get(inputJSON, whattoget, [returntype])](#PRD.util.JSONobj.get) ⇒ <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code>
    * [.formOrEngine()](#PRD.util.formOrEngine) ⇒ <code>string</code>
    * [.logerror(msg)](#PRD.util.logerror) ⇒ <code>boolean</code>
    * [.debugmsg(str)](#PRD.util.debugmsg)
    * [.inspectType(input)](#PRD.util.inspectType) ⇒ <code>string</code>
    * [.isString(input)](#PRD.util.isString) ⇒ <code>boolean</code>
    * [.isNumber(input)](#PRD.util.isNumber) ⇒ <code>boolean</code>
    * [.isBoolean(input)](#PRD.util.isBoolean) ⇒ <code>boolean</code>
    * [.isJavaVector(input)](#PRD.util.isJavaVector) ⇒ <code>boolean</code>
    * [.coerceToString(input, [defVal])](#PRD.util.coerceToString) ⇒ <code>string</code>
    * [.basicHTTPauthHeader(username, password)](#PRD.util.basicHTTPauthHeader) ⇒ <code>string</code>
    * [.shouldRetry(curcounter, maxretries)](#PRD.util.shouldRetry) ⇒ <code>boolean</code>
    * [.compare(list1, list2, ignorecase)](#PRD.util.compare) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
    * [.intersectArrays(arr, ignorecase)](#PRD.util.intersectArrays) ⇒ <code>Array.&lt;string&gt;</code>
    * [.unique(obj, ignorecase)](#PRD.util.unique) ⇒ <code>Array.&lt;string&gt;</code> \| <code>java.util.Vector</code>
    * [.getObject2arr(list)](#PRD.util.getObject2arr) ⇒ <code>array.&lt;(object\|string)&gt;</code> \| <code>null</code>
    * [.JavaVectorToECMAArray(v)](#PRD.util.JavaVectorToECMAArray) ⇒ <code>Array.&lt;string&gt;</code>
    * [.ECMAArrayToJavaVector(arr)](#PRD.util.ECMAArrayToJavaVector) ⇒ <code>java.util.Vector</code>
    * [.GCVget(GCVname, [returnType], [DefaultValue])](#PRD.util.GCVget) ⇒ <code>string</code> \| <code>number</code> \| <code>boolean</code>
    * [.getNamedPassword(NamedPassword, [try5times])](#PRD.util.getNamedPassword) ⇒ <code>string</code> \| <code>null</code>

<a name="PRD.util.JSONobj"></a>

#### util.JSONobj : <code>object</code>
Proxy for the actual JSON object used in browsers (JSON) or workflow engine (ScriptVault.JSON).<br/>Wraps the parse() and stringify() calls in try/catch blocks to report errors via logerror() instead ofletting the workflow engine break its regular flow when an error occurs.

**Kind**: static namespace of [<code>util</code>](#PRD.util)  
**Since**: 1.0.2  

* [.JSONobj](#PRD.util.JSONobj) : <code>object</code>
    * [.parse(s, [reviver])](#PRD.util.JSONobj.parse) ⇒ <code>object</code> \| <code>object</code>
    * [.stringify(o, [replacer], [space])](#PRD.util.JSONobj.stringify) ⇒ <code>string</code> \| <code>string</code>
    * [.test(inputJSON, whattotest)](#PRD.util.JSONobj.test) ⇒ <code>boolean</code>
    * [.get(inputJSON, whattoget, [returntype])](#PRD.util.JSONobj.get) ⇒ <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code>

<a name="PRD.util.JSONobj.parse"></a>

##### JSONobj.parse(s, [reviver]) ⇒ <code>object</code> \| <code>object</code>
Wrapper for the parse() call on the host environment's JSON object.<br/>See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

**Kind**: static method of [<code>JSONobj</code>](#PRD.util.JSONobj)  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | String with valid JSON syntax |
| [reviver] | <code>function</code> | (Optional) If a function, this prescribes how the value originally produced by parsing is transformed, before being returned. |

<a name="PRD.util.JSONobj.stringify"></a>

##### JSONobj.stringify(o, [replacer], [space]) ⇒ <code>string</code> \| <code>string</code>
Wrapper for the stringify() call on the host environment's JSON object.<br/>See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

**Kind**: static method of [<code>JSONobj</code>](#PRD.util.JSONobj)  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>object</code> | ECMA object to convert to JSON |
| [replacer] | <code>function</code> \| <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | (Optional) A function that alters the behavior of the stringification process, or an array of String and Number objects that serve as a whitelist for selecting/filtering the properties of the value object to be included in the JSON string. If this value is null or not provided, all properties of the object are included in the resulting JSON string |
| [space] | <code>string</code> \| <code>number</code> | (Optional) A String or Number object that's used to insert white space into the output JSON string for readability purposes. If this is a Number, it indicates the number of space characters to use as white space; this number is capped at 10 (if it is greater, the value is just 10). Values less than 1 indicate that no space should be used. If this is a String, the string (or the first 10 characters of the string, if it's longer than that) is used as white space. If this parameter is not provided (or is null), no white space is used. |

<a name="PRD.util.JSONobj.test"></a>

##### JSONobj.test(inputJSON, whattotest) ⇒ <code>boolean</code>
Verify if an ECMA object has the selected location.<br/>Note: To reference properties with a dot in their name use the format ["property.name"] .<br/>Ported from IDM engine to RBPM. IDM Engine version at https://github.com/fchierad/IDM-ECMAlib/blob/v1.0.2/JSONlib-JS.js

**Kind**: static method of [<code>JSONobj</code>](#PRD.util.JSONobj)  
**Returns**: <code>boolean</code> - true if the path is found, false otherwise  
**Since**: 1.0.3  

| Param | Type | Description |
| --- | --- | --- |
| inputJSON | <code>object</code> \| <code>string</code> | Input JSON (ECMA object). If a string-serialized JSON is provided it will be converted to a JSON object internally |
| whattotest | <code>string</code> | Dot-separated list of properties as if you are accessing them via ECMAscript |

<a name="PRD.util.JSONobj.get"></a>

##### JSONobj.get(inputJSON, whattoget, [returntype]) ⇒ <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code>
Retrieves a property of an ECMA object (or its subordinate object) and returns it in the specified type.<br/>Note: To reference properties with a dot in their name use the format ["property.name"] .<br/>Ported from IDM engine to RBPM. IDM Engine version at https://github.com/fchierad/IDM-ECMAlib/blob/v1.0.2/JSONlib-JS.js

**Kind**: static method of [<code>JSONobj</code>](#PRD.util.JSONobj)  
**Returns**: <code>string</code> \| <code>number</code> \| <code>boolean</code> \| <code>object</code> - Selected property's value in the selected format. If parsing of the object fails returns an empty string  
**Since**: 1.0.3  

| Param | Type | Description |
| --- | --- | --- |
| inputJSON | <code>object</code> \| <code>string</code> | Input JSON (ECMA object). If a string-serialized JSON is provided it will be converted to a JSON object internally |
| whattoget | <code>string</code> | Dot-separated list of properties as if you are accessing them via ECMAscript |
| [returntype] | <code>string</code> | (Optional) Desired return type. Valid values are: string, number, raw. Defaults to raw in case whatever is provided is not one of the 3 valid options |

<a name="PRD.util.formOrEngine"></a>

#### util.formOrEngine() ⇒ <code>string</code>
Try to detect if we are in a web browser or in the User App/RBPM/IDMAPPs workflow engine.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>string</code> - 'form' if in a Browser, 'engine' if on the workflow engine. 'detection failed' otherwise.  
**Since**: 1.0.0  
<a name="PRD.util.logerror"></a>

#### util.logerror(msg) ⇒ <code>boolean</code>
Output error message based on where the code is running.<br/>Output to the console.log() if in a browser, to catalina.out if in the workflow engine.<br/>Prepends the value of the module's internal 'prefix' variable.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>boolean</code> - true if the message was returned successfully, false otherwise.  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| msg | <code>string</code> | Error message to be logged. |

<a name="PRD.util.debugmsg"></a>

#### util.debugmsg(str)
Output debug message via logerror() only if the internal variable debug is set to true

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Since**: 1.0.3  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String input. |

<a name="PRD.util.inspectType"></a>

#### util.inspectType(input) ⇒ <code>string</code>
Returns the type of an ECMA object or class of a Java object.<br/>For ECMA relies on typeof and instanceof, if neither works uses Object.prototype.toString .<br/>For Java objects just calls getClass().<br/>Prints result when module is ran in debug mode, returns result as string.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>string</code> - analysis result  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | ECMA or Java input |

<a name="PRD.util.isString"></a>

#### util.isString(input) ⇒ <code>boolean</code>
Checks if the provided input is an ECMA String (primitive or object).

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>boolean</code> - true if string, false otherwise  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Input value whose type will be evaluated |

<a name="PRD.util.isNumber"></a>

#### util.isNumber(input) ⇒ <code>boolean</code>
Checks if the provided input is an ECMA Number (primitive or object).

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>boolean</code> - true if number, false otherwise  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Input value whose type will be evaluated |

<a name="PRD.util.isBoolean"></a>

#### util.isBoolean(input) ⇒ <code>boolean</code>
Checks if the provided input is an ECMA Boolean (primitive or object).

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>boolean</code> - true if boolean, false otherwise  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Input value whose type will be evaluated |

<a name="PRD.util.isJavaVector"></a>

#### util.isJavaVector(input) ⇒ <code>boolean</code>
(Engine only) Checks if the provided input is a Java Vector.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>boolean</code> - true if Java Vector, false otherwise  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Input value whose type will be evaluated |

<a name="PRD.util.coerceToString"></a>

#### util.coerceToString(input, [defVal]) ⇒ <code>string</code>
Coerces the result to an ECMA string.<br/>Coercion rules for this function:<br/>If the first input parameter is null or undefined returns default value.<br/>If the first input parameter is an Array it returns the array joined by ' '.<br/>If the first input parameter is a String, Number or Boolean it returns a string.<br/>If the first input parameter is an object other than an Array it returns the default value.<br/>If the second input value is not null then the default value becomes the second input value.<br/>If the coercion to string from String, Number, Boolean or Array resulted in empty string, return default value.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>string</code> - resulting string.  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>any</code> | Input parameter to be coerced. |
| [defVal] | <code>string</code> | Default value to be used |

<a name="PRD.util.basicHTTPauthHeader"></a>

#### util.basicHTTPauthHeader(username, password) ⇒ <code>string</code>
(Engine only) Returns basic HTTP auth header. Format is: Basic B64encodedUSERNAME:PASSWORD

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>string</code> - HTTP Basic 'Authorization' header's value.  
**Since**: 1.0.3  

| Param | Type | Description |
| --- | --- | --- |
| username | <code>string</code> | HTTP auth user's name. |
| password | <code>string</code> | HTTP auth user's password. |

<a name="PRD.util.shouldRetry"></a>

#### util.shouldRetry(curcounter, maxretries) ⇒ <code>boolean</code>
(Engine only) Function to coerce provided flowdata and return if we are past max retries or not.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>boolean</code> - true if maxretries is greater than current counter, false otherwise.  
**Since**: 1.0.3  

| Param | Type | Description |
| --- | --- | --- |
| curcounter | <code>string</code> | Current Counter |
| maxretries | <code>string</code> | Maximum retries value |

<a name="PRD.util.compare"></a>

#### util.compare(list1, list2, ignorecase) ⇒ <code>Array.&lt;Array.&lt;string&gt;&gt;</code>
(Engine) Compares 2 unidimensional ECMA Arrays or Java Vectors and returns an Array of arrays with comparison results.<br/>(Form) Compares 2 unidimensional ECMA Arrays and returns an Array of arrays with comparison results.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>Array.&lt;Array.&lt;string&gt;&gt;</code> - ECMA Array with 3 parts. [ [ elements only present on list1 ], [ elements only present on list2 ], [ elements present on both] ]  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| list1 | <code>Array.&lt;string&gt;</code> \| <code>java.util.Vector</code> | ECMA Array or Java Vector. |
| list2 | <code>Array.&lt;string&gt;</code> \| <code>java.util.Vector</code> | ECMA Array or Java Vector. |
| ignorecase | <code>boolean</code> | Changes string comparison to case insensitive.                                                    This also causes the casing of the results will match the casing of their                                                    first time appearing in the list provided. |

<a name="PRD.util.intersectArrays"></a>

#### util.intersectArrays(arr, ignorecase) ⇒ <code>Array.&lt;string&gt;</code>
(Form) Compares 2 or more unidimensional ECMA Arrays within an Array and returns an Array with intersecting results.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>Array.&lt;string&gt;</code> - ECMA Array of intersecting results.  
**Since**: 1.0.7  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;Array.&lt;string&gt;&gt;</code> | ECMA Array of arrays. |
| ignorecase | <code>boolean</code> | Changes string comparison to case insensitive.                                        This also causes the casing of the results will match the casing of their                                        first time appearing in the list provided. |

<a name="PRD.util.unique"></a>

#### util.unique(obj, ignorecase) ⇒ <code>Array.&lt;string&gt;</code> \| <code>java.util.Vector</code>
(Engine) Parses an unidimensional ECMA Array or Java Vector and returns the same type of object with only unique entries.<br/>(Form) Parses an unidimensional ECMA Array and returns the same type of object with only unique entries.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>java.util.Vector</code> - ECMA Array or Java Vector. If obj is not a valid type returns empty ECMA Array.  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Array.&lt;string&gt;</code> \| <code>java.util.Vector</code> | ECMA Array or Java Vector. |
| ignorecase | <code>boolean</code> | Changes string comparison to case insensitive.                                                    This also causes the casing of the results will match the casing of their                                                    first time appearing in the list provided. |

<a name="PRD.util.getObject2arr"></a>

#### util.getObject2arr(list) ⇒ <code>array.&lt;(object\|string)&gt;</code> \| <code>null</code>
(Engine only) Parses the result from flowdata.getObject into an Array of strings and ECMA objects.<br/>Each DOM element node will be an object's property name, and each property will containan array of items. Those items cam be strings or other objects.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>array.&lt;(object\|string)&gt;</code> \| <code>null</code> - ECMA Array of objects and string. If error occur returns null.  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>java.util.ArrayList</code> | Java object resulting from flowdata.getObject() |

<a name="PRD.util.JavaVectorToECMAArray"></a>

#### util.JavaVectorToECMAArray(v) ⇒ <code>Array.&lt;string&gt;</code>
(Engine only) Converts a unidimensional Java Vector whose entries are strings to an ECMA Array.<br/>https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>Array.&lt;string&gt;</code> - ECMA array.  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| v | <code>java.util.Vector</code> | Java Vector. |

<a name="PRD.util.ECMAArrayToJavaVector"></a>

#### util.ECMAArrayToJavaVector(arr) ⇒ <code>java.util.Vector</code>
(Engine only) Converts a unidimensional ECMA array whose entries are strings to a Java Vector.<br/>https://docs.oracle.com/javase/8/docs/api/java/util/Vector.html

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>java.util.Vector</code> - Java Vector.  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;string&gt;</code> | ECMA array. |

<a name="PRD.util.GCVget"></a>

#### util.GCVget(GCVname, [returnType], [DefaultValue]) ⇒ <code>string</code> \| <code>number</code> \| <code>boolean</code>
(Engine only) Wraper for GCV.get . Attempts to retrieve the GCV value. returns the default value (or '' if no default provided)

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>string</code> \| <code>number</code> \| <code>boolean</code> - GCV.get result or default value.  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| GCVname | <code>string</code> | Name of the GCV to be retrieved. |
| [returnType] | <code>string</code> | 'string', 'number' or 'boolean'. Forces coercion to said type for the return.                                   Defaults to 'string' if not provided or any other value. |
| [DefaultValue] | <code>string</code> | Default value to be used if the GCV.get() fails. Defaults to '' if not provided. |

<a name="PRD.util.getNamedPassword"></a>

#### util.getNamedPassword(NamedPassword, [try5times]) ⇒ <code>string</code> \| <code>null</code>
(Engine only) Wraper for GCV.getValueForNamedPassword. Attempts to retrieve thenamed password value using a GCV-ref as the bridge for the same.<br/>If the second parameter is true and the named password read fails the function attempsup to 5 retries with 1 second pause in between them.

**Kind**: static method of [<code>util</code>](#PRD.util)  
**Returns**: <code>string</code> \| <code>null</code> - GCV.getValueForNamedPassword result or null.  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| NamedPassword | <code>string</code> | Name of the GCV-ref to the Named Password to be retrieved. |
| [try5times] | <code>any</code> | If not provided or null a single read is attempted.                                 If provides and read fails try 4 more times, with 1 second pause between them. |

<a name="PRD.web"></a>

### PRD.web : <code>object</code>
Functions and objects that can only be accessed in work flow forms.

**Kind**: static namespace of [<code>PRD</code>](#PRD)  
**Since**: 1.0.4  
<a name="PRD.web.fieldVisibility"></a>

#### web.fieldVisibility(event, field)
(Form only) When added in the event section of a form field, allow us to show and hide that field by using<br/>field.fireEvent( event-name, action );<br/>Where event-name is the event's name and action is either 'show' or 'hide'<br/><br/>Since the field visibility functions only exist inside the field context we need to pass both objects from wherethe function is being called to use them inside that scope/context. Inside the event we just need to add the line:<br/>IAtools.fieldVisibility( event, field );<br/>to properly use this function. No need to change anything on the line above, it is already passing the event and field objectsas seen in the scope of that particular form field.<br/><br/>no return value provided.

**Kind**: static method of [<code>web</code>](#PRD.web)  
**Since**: 1.0.4  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | event object as seen by the field's scope |
| field | <code>object</code> | field  object as seen by the field's scope |

<a name="PRD.version"></a>

### PRD.version() ⇒ <code>string</code>
Return module version.

**Kind**: static method of [<code>PRD</code>](#PRD)  
**Returns**: <code>string</code> - Module's version in the format M.m.p (Major, minor, patch)  
**Since**: 1.0.1  
<a name="PRD.setlogprefix"></a>

### PRD.setlogprefix(str)
Set prefix for the log activities generated by logerror() on both engine and form.<br/>Given that forms instantiate the module on load, setting the value inside a form would affect only said form.<br/>Given that the workflow engine can pause processing at points and remove the thread from memory, reading the sameagain later, calling this function anywhere outside the Overview > Global Scripts might cause the value set to be lostafter such pauses. One example of such pauses/behavior is when a workflow reaches an approval activity.

**Kind**: static method of [<code>PRD</code>](#PRD)  
**Since**: 1.0.2  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | String that will be appended to any logerror() call. |

<a name="PRD.debugmessages"></a>

### PRD.debugmessages(bool)
Sets library in debug mode. The other way to do so is to pass true as the second parameter on the library import.

**Kind**: static method of [<code>PRD</code>](#PRD)  
**Since**: 1.0.5  

| Param | Type | Description |
| --- | --- | --- |
| bool | <code>boolean</code> | true to set the library to debug mode, false to disable debug more. |

<a name="PRD.init"></a>

### PRD.init(obj1, [obj2], [obj3])
(Form only) Initializes references to the RBPM/IDMAPPS framework objects and save the same in the internal storage.<br/>Uses IDVault internally on IDVget(), IDVglobalQuery(), GCVget(), getNamedPassword().<br/>Exports field as PRD.web.field and form as PRD.web.form for usage inside global scripts.<br/>Refactored to accept 1 to 3 parameters with the framework objects in any order.<br/>Returns nothing.

**Kind**: static method of [<code>PRD</code>](#PRD)  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| obj1 | <code>object</code> | One of the three IDMAPPS framework object |
| [obj2] | <code>object</code> | One of the three IDMAPPS framework object |
| [obj3] | <code>object</code> | One of the three IDMAPPS framework object |

<a name="PRD.IDVget"></a>

### PRD.IDVget(ldapdn, entkey, attrkey, [fieldname]) ⇒ <code>Array.&lt;string&gt;</code>
Performs an IDVault.get and returns an ECMA array with the result.<br/>Refactored on v1.0.4 to replace the 4th optional parameter from IDVault injection to a form's field name.<br/>This change could break forms using prior versions, please double check your form code before moving to v1.0.4.

**Kind**: static method of [<code>PRD</code>](#PRD)  
**Returns**: <code>Array.&lt;string&gt;</code> - ECMA array with the results. Empty if IDVault.get returned null, array with one or more elements otherwise.  
**Since**: 1.0.0  

| Param | Type | Description |
| --- | --- | --- |
| ldapdn | <code>string</code> | LDAP Fully Distinguised name of the eDirectory object to be queried. |
| entkey | <code>string</code> | DAL entity key. |
| attrkey | <code>string</code> | DAL attribute key. Attrribute must be configured under the DAL entity. |
| [fieldname] | <code>string</code> | (form mode only) Name of the field to be auto-populated by the function.                               If the field name does not exist the form itself will present the error: "An error 'Field avocado not found or not instantiated yet.' was encountered while executing the script 'in IDVault.get()'". |

<a name="PRD.IDVglobalQuery"></a>

### PRD.IDVglobalQuery(dalquerykey, parameters, [fieldname]) ⇒ <code>Array.&lt;string&gt;</code>
Performs an IDVault.globalQuery and returns an object with the result.<br/>Refactored on v1.0.4 to replace the 4th optional parameter from IDVault injection to a form's field name.<br/>This change could break forms using prior versions, please double check your form code before moving to v1.0.4.

**Kind**: static method of [<code>PRD</code>](#PRD)  
**Returns**: <code>Array.&lt;string&gt;</code> - Array with LDAP DNs returned.  
**Since**: 1.0.1  

| Param | Type | Description |
| --- | --- | --- |
| dalquerykey | <code>string</code> | DAL Query key. |
| parameters | <code>object</code> | ECMA object with the paramters defined in the DAL Query. {parametername:parametervalue} |
| [fieldname] | <code>object</code> | (form mode only) Name of the field to be auto-populated by the function. |

