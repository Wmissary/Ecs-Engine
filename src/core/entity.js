import ComponentManager from "./component-manager.js";

export default class Entity {
  constructor(id) {
    if (!id) throw new Error("Entity id is required");
    this.id = id;
    this.componentManager = new ComponentManager();
  }

  addComponent(component) {
    this.componentManager.addComponent(component);
    return this;
  }

  removeComponent(componentName) {
    this.componentManager.removeComponent(componentName);
    return this;
  }

  getComponent(componentName) {
    return this.componentManager.getComponent(componentName);
  }

  hasComponent(componentName) {
    return this.componentManager.hasComponent(componentName);
  }

  getComponents() {
    return this.componentManager.getComponents();
  }
}
