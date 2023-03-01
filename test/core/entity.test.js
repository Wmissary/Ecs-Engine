/* eslint-disable unicorn/no-null */
// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert";

import Entity from "../../src/core/entity.js";

test("Entity creation", async (t) => {
  await t.test("should create an entity", () => {
    const entity = new Entity(1);
    assert.strictEqual(entity.id, 1);
  });

  await t.test("should throw an error if id is not provided", () => {
    assert.throws(
      () => {
        new Entity();
      },
      {
        name: "Error",
        message: "Entity id is required",
      }
    );
  });
});

test("Entity addComponent", async (t) => {
  await t.test("should return the entity", () => {
    const entity = new Entity(1);
    class TestComponent {}
    const result = entity.addComponent(new TestComponent());
    assert.strictEqual(result, entity);
  });
});

test("Entity removeComponent", async (t) => {
  await t.test("should return the entity", () => {
    const entity = new Entity(1);
    class TestComponent {}
    entity.addComponent(new TestComponent());
    const result = entity.removeComponent(TestComponent.name);
    assert.strictEqual(result, entity);
  });
});
