# angular-2-holderjs
An Angular 2 directive for holderjs

## Usage

### 1. Install

Install with npm:

```bash
npm install holderjs angular-2-holderjs --save
```

### 2. Serve holder.directive.js

There are several ways you can do this.

#### Option 1

Setup a web server to serve the filers in the
`node_modules/angular-2-holderjs` folder with a suitable url of
`/system.js/angular-2-holderjs [\*\*A]`.

Effectively this is just a mapping so a url like:

`http://localhost:8080/system.js/angular-2-holderjs/holderjs.component.js`

returns the file:

`node_modules/angular-2-holderjs/holderjs.component.js`

Then add this to the system.js map and packages:

```javascript
//relevant lines from systemjs.config.js
var map = {
  'angular-2-holderjs':         'system.js/angular-2-holderjs',  //[**B]
};
var packages = {
  'angular-2-holderjs':         { main: 'holderjs.directive.js',  defaultExtension: 'js' },
};
```

Now when your Angular 2 Component imports `holderjs.directive` it system.js will
be able to find it.

Note how `[\*\*A]` matches `[\*\*B]` above.

#### Option 2

Just copy the necessary javascript file to a static
directory. In express if you have
`app.use(express.static('public'));` copy `holderjs.component.js` to the
`public` directory and include it in your html with `<script src="/holderjs.component.js"></script>`.

This is quick and easy, but if you can see why option 1 has advantages, and is
more akin to how things are done in the Angular 2 tutorial, then use option 1
like I do!

### 3. Import the Directive

Add the holderjs directive as a dependancy for your component which requires it

```typescript
import { HolderjsDirective } from 'angular-2-holderjs/holderjs.directive';

@Component({
    selector: 'your-component',
    templateUrl: 'your.component.html',
    directives: [HolderjsDirective, ...],
})

export class YourComponent {

}

```
### 4. Use the Directive

Use directive in your component template:

```html
<!-- somewhere in your.component.html -->
<img holderjs data-src="holder.js/200x200/auto">
```

## Change History

### v1.0.1 - 2016/07/17

* Improved the docs and compiles the library

### v1.0.0 - 2016/07/17

* Initial Release
