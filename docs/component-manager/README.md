# ComponentManager class

> :warning: **Work in progress**: This class is still under development and may change in the future.

The ComponentManager class allows you to manage components in an application. It exposes the following methods:

## Méthods

### `addComponent(component: Object): ComponentManager`

Adds a component to the list of components managed by the class. The component must be an object.

```js
const componentManager = new ComponentManager();

class MyComponent {}

componentManager.addComponent(new MyComponent()); // Returns the ComponentManager instance
```

### `removeComponent(componentName: string): ComponentManager`

Removes a component from the list of components managed by the class. componentName should be the name of the component's class. This method also checks if the specified component name exists in the list of components managed by the class.

```js
const componentManager = new ComponentManager();

componentManager.removeComponent('MyComponent'); // Returns the ComponentManager instance
```

### `getComponent(componentName: string): Object`

Retrieves a component from the list of components managed by the class. componentName should be the name of the component's class. This method also checks if the specified component name exists in the list of components managed by the class.

```js
const componentManager = new ComponentManager();

const myComponent = componentManager.getComponent('MyComponent'); // Returns the component
```

### `hasComponent(componentName: string): boolean`

Checks if a component is present in the list of components managed by the class. componentName should be the name of the component's class.

```js
const componentManager = new ComponentManager();

componentManager.hasComponent('MyComponent'); // returns true
```

### `getComponents(): Map<string, Object>`

Retrieves the list of components managed by the class.

```js
const componentManager = new ComponentManager();
const components = componentManager.getComponents(); // Returns the map of components
```

## Usage Example

>Note that the removeComponent and getComponent methods also check if the specified component name exists in the list of components managed by the class before attempting to remove or retrieve the component.

```js
import ComponentManager from './component-manager.js';

class MyComponent {}

const componentManager = new ComponentManager();

componentManager.addComponent(new MyComponent());

const myComponent = componentManager.getComponent('MyComponent');

componentManager.removeComponent('MyComponent');

if (componentManager.hasComponent('MyComponent')) {
  console.log('The component is present in the list of components managed by the class');
} else {
  console.log('The component is not present in the list of components managed by the class');
}

console.log(componentManager.getComponents());
```
