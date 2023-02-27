function validateComponent(component) {
  if (
    !component ||
    !component.constructor.name ||
    component.constructor.name === "Object" ||
    component.constructor.name === "Array"
  ) {
    throw new Error("Invalid component");
  }
}

function validateComponentName(componentName) {
  if (
    !componentName ||
    typeof componentName !== "string" ||
    componentName.trim().length === 0
  ) {
    throw new Error("Invalid component name");
  }
}

function validateDataKey(key) {
  if (!key || typeof key !== "string" || key.trim().length === 0) {
    throw new Error("Invalid key");
  }
}

export { validateComponent, validateComponentName, validateDataKey };
