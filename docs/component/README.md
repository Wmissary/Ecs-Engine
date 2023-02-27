# Component Class

The `Component` class is an abstract class that provides a common interface for all components in an application. It contains methods to manage data associated with a component. The `Component` class has the following methods:

## Methods

### `setData(key: string, value: any): Component`

Adds data to the component. `key` is a string that represents the key for the data, and `value` is the data to be added.

```js
component.setData('name', 'John Doe');
```

### `getData(key: string): any`

Retrieves data from the component. `key` is a string that represents the key for the data.

```js
const name = component.getData('name'); // Returns 'John Doe'
```

### `deleteData(key: string): Component`

Delete data from the component. `key` is a string that represents the key for the data.

```js
component.deleteData('name'); // Returns the Component instance
```

### `hasData(key: string): boolean`

Checks if data is present in the component. `key` is a string that represents the key for the data.

```js
component.hasData('name'); // Returns true
```

### `getAllData():`

Retrieves all data from the component.

```js
const data = component.getAllData(); // Returns the data
```

## Usage Example

```js
const component = new PositionComponent() extends Component {
  constructor(x, y) {
    super();
    this.setData('x', x);
    this.setData('y', y);
  }
}

const positionComponent = new PositionComponent(10, 20);
const x = positionComponent.getData('x'); // Returns 10
positionComponent.deleteData('x');
const y = positionComponent.getData('y'); // Returns 20

if (positionComponent.hasData('x')) {
  // Do something
}
```
