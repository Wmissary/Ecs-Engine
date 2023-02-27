/* eslint-disable unicorn/no-null */
// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert";

import Component from "../../src/core/component.js";

test("Component creation", async (t) => {
  await t.test("should throw an error", () => {
    assert.throws(
      () => {
        new Component();
      },
      {
        name: "TypeError",
        message: "Cannot construct abstract instances directly",
      }
    );
  });

  await t.test("should not throw an error", () => {
    class TestComponent extends Component {}
    assert.doesNotThrow(() => {
      new TestComponent();
    });
  });
});

test("Component setData", async (t) => {
  await t.test("should set data", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    component.setData("test", "test");
    assert.strictEqual(component.data.test, "test");
  });

  await t.test("should return the component", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    const result = component.setData("test", "test");
    assert.strictEqual(result, component);
  });

  await t.test("should throw an error if data already added", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    component.setData("test", "test");
    assert.throws(() => {
      component.setData("test", "test");
    });
  });
});

test("Component getData", async (t) => {
  await t.test("should get data", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    component.setData("test", "test");
    assert.strictEqual(component.getData("test"), "test");
  });

  await t.test("should throw an error if key is not found", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    assert.throws(
      () => {
        component.getData("test");
      },
      {
        name: "Error",
        message: "Data with key test not found",
      }
    );
  });
});

test("Component deleteData", async (t) => {
  await t.test("should delete data", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    component.setData("test", "test");
    component.deleteData("test");
    assert.strictEqual(component.data.test, undefined);
  });

  await t.test("should return the component", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    component.setData("test", "test");
    const result = component.deleteData("test");
    assert.strictEqual(result, component);
  });

  await t.test("should throw an error if key is not found", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    assert.throws(
      () => {
        component.deleteData("test");
      },
      {
        name: "Error",
        message: "Data with key test not found",
      }
    );
  });
});

test("Component hasData", async (t) => {
  await t.test("should return true", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    component.setData("test", "test");
    assert.strictEqual(component.hasData("test"), true);
  });

  await t.test("should return false", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    assert.strictEqual(component.hasData("test"), false);
  });
});

test("Component getAllData", async (t) => {
  await t.test("should return all data", () => {
    class TestComponent extends Component {}
    const component = new TestComponent();
    component.setData("test", "test");
    assert.deepStrictEqual(component.getAllData(), { test: "test" });
  });
});
