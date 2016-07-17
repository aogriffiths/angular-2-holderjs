# angular-2-holderjs
An Angular 2 directive for holderjs

## Usage

### 1. Install

Install with npm:

```bash
npm install holderjs angular-2-holderjs --save
```

### 2. Serve holder.component.js

There are several ways you can do this but if you have followed the Angular 2
tutorial and chosen system.js to manager your javascript dependancies in the
browser the following should work:

```javascript
var map = {
  'app':                        'app', // 'dist',
  '@angular':                   'system.js/@angular',
  'angular-2-holderjs':         'system.js/angular-2-holderjs',  // [path A]
  'angular2-in-memory-web-api': 'system.js/angular2-in-memory-web-api',
  'rxjs':                       'system.js/rxjs'
};
```

Setup your web server to serve the holderjs files, which can be found in
`node_modules/angular-2-holderjs`. You could do this by copying the files to a
static content directory or use your webserver routing so
`http://domain/system.js/angular-2-holderjs` [path B] servers the contents of 
`node_modules/angular-2-holderjs`.

Note: [path A] must match [path B]!


### 3. Import the Directive

Add the holderjs directive as a dependancy for any component that requires it

```typescript
import { HolderjsDirective } from 'holderjs/holderjs.directive';

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

### v1.0.0 - 2016/07/17

* Initial Release
