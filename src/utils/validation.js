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

export { validateComponent, validateComponentName };
