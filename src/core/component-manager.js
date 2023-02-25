import {
  validateComponent,
  validateComponentName,
} from "../utils/validation.js";

export default class ComponentManager {
  constructor() {
    this.components = new Map();
  }

  addComponent(component) {
    validateComponent(component);
    const componentName = component.constructor.name;
    this.#componentAlreadyAdded(componentName);
    this.components.set(component.constructor.name, component);
    return this;
  }

  removeComponent(componentName) {
    validateComponentName(componentName);
    this.#componentNotFound(componentName);
    this.components.delete(componentName);
    return this;
  }

  getComponent(componentName) {
    validateComponentName(componentName);
    this.#componentNotFound(componentName);
    return this.components.get(componentName);
  }

  hasComponent(componentName) {
    validateComponentName(componentName);
    return this.components.has(componentName);
  }

  getComponents() {
    return this.components;
  }
  #componentNotFound(componentName) {
    if (!this.hasComponent(componentName)) {
      throw new Error(`Component ${componentName} not found`);
    }
  }
  #componentAlreadyAdded(componentName) {
    if (this.hasComponent(componentName)) {
      throw new Error(`Component ${componentName} already added`);
    }
  }
}
