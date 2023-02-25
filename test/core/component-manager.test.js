/* eslint-disable unicorn/no-null */
// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert";

import ComponentManager from "../../src/core/component-manager.js";

test("ComponentManager creation", () => {
  const componentManager = new ComponentManager();
  assert.strictEqual(componentManager.components.size, 0);
});

test("ComponentManager addComponent", async (t) => {
  await t.test("should add a component", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    componentManager.addComponent(new TestComponent());
    assert.strictEqual(componentManager.components.size, 1);
  });

  await t.test("should return the component manager", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    const result = componentManager.addComponent(new TestComponent());
    assert.strictEqual(result, componentManager);
  });

  await t.test("should throw an error if component is already added", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    componentManager.addComponent(new TestComponent());
    assert.throws(
      () => {
        componentManager.addComponent(new TestComponent());
      },
      {
        name: "Error",
        message: "Component TestComponent already added",
      }
    );
  });
});

test("ComponentManager removeComponent", async (t) => {
  await t.test("should remove a component", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    componentManager.addComponent(new TestComponent());
    componentManager.removeComponent(TestComponent.name);
    assert.strictEqual(componentManager.components.size, 0);
  });

  await t.test("should return the component manager", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    componentManager.addComponent(new TestComponent());
    const result = componentManager.removeComponent(TestComponent.name);
    assert.strictEqual(result, componentManager);
  });

  await t.test("should throw an error if component is not found", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    assert.throws(
      () => {
        componentManager.removeComponent(TestComponent.name);
      },
      {
        name: "Error",
        message: "Component TestComponent not found",
      }
    );
  });
});

test("ComponentManager getComponent", async (t) => {
  await t.test("should return the component", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    componentManager.addComponent(new TestComponent());
    const result = componentManager.getComponent(TestComponent.name);
    assert.strictEqual(result.constructor.name, "TestComponent");
  });

  await t.test("should throw an error if component is not found", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    assert.throws(
      () => {
        componentManager.getComponent(TestComponent.name);
      },
      {
        name: "Error",
        message: "Component TestComponent not found",
      }
    );
  });
});

test("ComponentManager hasComponent", async (t) => {
  await t.test("should return true if component is found", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    componentManager.addComponent(new TestComponent());
    const result = componentManager.hasComponent(TestComponent.name);
    assert.strictEqual(result, true);
  });

  await t.test("should return false if component is not found", () => {
    const componentManager = new ComponentManager();
    class TestComponent {}
    const result = componentManager.hasComponent(TestComponent.name);
    assert.strictEqual(result, false);
  });
});

test("ComponentManager getComponents", () => {
  const componentManager = new ComponentManager();
  class TestComponent {}
  componentManager.addComponent(new TestComponent());
  const result = componentManager.getComponents();
  assert.strictEqual(result.size, 1);
});
