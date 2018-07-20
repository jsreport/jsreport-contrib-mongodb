# jsreport-contrib-mongodb

**DEPRECATED**    
Don't use this extension. There are just two manual steps required to install mongo client and start using it in your scripts.
https://jsreport.net/blog/pdf-reports-from-mongodb

<hr/>
<hr/>

> [jsreport](https://github.com/jsreport/jsreport) extension allowing to work with [mongodb npm module](https://github.com/mongodb/node-mongodb-native) inside jsreport [custom scripts](http://jsreport.net/learn/scripts).

This extension is pre-installed in jsreport [online](http://jsreport.net/online) version. You may install this extension to jsreport [on-prem](http://jsreport.net/on-prem) by:

```
npm install jsreport-contrib-mongodb
```

## Example
Once is `jsreport-contrib-mongodb` extension running you can use `require('mongodb')` inside your custom scripts.

Simple script loading data from mongodb

```javascript
function beforeRender(done) {
	var MongoClient = require('mongodb').MongoClient; 
	MongoClient.connect('mongodb://127.0.0.1:27017/maindb', function(err, db) {
		var collection = db.collection('people').find().toArray(function(err, results) {
		    if (err)
		      return done(err);
		      
			request.data = { people: results };
			done();
		});
	});
}
```

Then you can operate with data in the report template in the standard way. Next example is using [jsrender](http://jsreport.net/learn/jsrender) to print a table.
```html
<table>	
{{for people}}
	<tr>
		<td>{{:name}}</td>
		<td>{{:age}}</td>
	</tr>
{{/for}}
</table>
```


## License
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
