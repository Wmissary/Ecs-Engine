# Entity Class

> :warning: **Work in progress**: This class is still under development and may change in the future.

The Entity class represents an entity in the game world. It is responsible for managing the components attached to the entity. The Entity class has the following methods:

## Constructor

### `constructor(id: any)`

Creates a new Entity instance with the specified `id`.

```js
const entity = new Entity(1); // Creates a new Entity instance with the id 1
```

## Methods

### `addComponent(component: Object): Entity`

Adds a component to the entity. component is an instance of the Component class.

```js
class TestComponent extends Component {}
const component = new TestComponent();

entity.addComponent(component); // Returns the Entity instance
```

### `removeComponent(componentName: string): Entity`

Removes a component from the entity. componentName is a string that represents the name of the component to be removed.

```js
entity.removeComponent('TestComponent'); // Returns the Entity instance
```


### `getComponent(componentName: string): Object`

Retrieves a component from the entity. componentName is a string that represents the name of the component to be retrieved. Returns null if the component is not found.

```js
const positionComponent = entity.getComponent('TestComponent'); // Returns the component
```

### `hasComponent(componentName: string): boolean`

Checks if a component is attached to the entity. componentName is a string that represents the name of the component to be checked.

```js
const hasPositionComponent = entity.hasComponent('TestComponent'); // Returns true
```

### `getComponents(): Map<string, Object>`

Retrieves all components attached to the entity as a Map where the key is the name of the component and the value is an instance of the Component class.

```js
const components = entity.getComponents(); // Returns the map of components
```

## Usage Example

>Note that the removeComponent and getComponent methods also check if the specified component name exists in the list of components before attempting to remove or retrieve the component.

```js
class MyComponent extends Component {}
const entity = new Entity(1);

entity.addComponent(new MyComponent());

const myComponent = entity.getComponent('MyComponent');

entity.removeComponent('MyComponent');

if (entity.hasComponent('MyComponent')) {
  console.log('The component is present in the list of components managed by the class');
} else {
  console.log('The component is not present in the list of components managed by the class');
}

console.log(entity.getComponents());
```
