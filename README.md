# angular-2-holderjs
An Angular 2 directive for holderjs

## Usage

### 1. Install

Install with npm:

```bash
npm install holderjs angular-2-holderjs --save
```

### 2. Import the Directive

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
### 3. Use the Directive

Use directive in your component template:

```html
<!-- somewhere in your.component.html -->
<img holderjs data-src="holder.js/200x200/auto">
```

## Change History

### v1.0.0 - 2016/07/17

* Initial Release
