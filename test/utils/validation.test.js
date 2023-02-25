/* eslint-disable unicorn/no-null */
// eslint-disable-next-line import/no-unresolved
import test from "node:test";
import assert from "node:assert";

import * as validation from "../../src/utils/validation.js";

test("validateComponent", async (t) => {
  await t.test("should not throw an error if component is valid", () => {
    class TestComponent {}
    assert.doesNotThrow(() => {
      validation.validateComponent(new TestComponent());
    });
  });

  await t.test("should throw an error if component is invalid", async (t) => {
    const kError = {
      name: "Error",
      message: "Invalid component",
    };

    await t.test("should throw an error if component is undefined", () => {
      assert.throws(() => {
        validation.validateComponent();
      }, kError);
    });

    await t.test("should throw an error if component is null", () => {
      assert.throws(() => {
        validation.validateComponent(null);
      }, kError);
    });

    await t.test("should throw an error if component is an object", () => {
      assert.throws(() => {
        validation.validateComponent({});
      }, kError);
    });

    await t.test("should throw an error if component is an array", () => {
      assert.throws(() => {
        validation.validateComponent([]);
      }, kError);
    });
  });
});

test("validateComponentName", async (t) => {
  await t.test("should not throw an error if component name is valid", () => {
    class TestComponent {}
    assert.doesNotThrow(() => {
      validation.validateComponentName(TestComponent.name);
    });
  });

  await t.test(
    "should throw an error if component name is invalid",
    async (t) => {
      const kError = {
        name: "Error",
        message: "Invalid component name",
      };

      await t.test(
        "should throw an error if component name is undefined",
        () => {
          assert.throws(() => {
            validation.validateComponentName();
          }, kError);
        }
      );

      await t.test("should throw an error if component name is null", () => {
        assert.throws(() => {
          validation.validateComponentName(null);
        }, kError);
      });

      await t.test(
        "should throw an error if component name is not a string",
        () => {
          assert.throws(() => {
            validation.validateComponentName(1);
          }, kError);
        }
      );

      await t.test(
        "should throw an error if component name is an empty string",
        () => {
          assert.throws(() => {
            validation.validateComponentName("");
          }, kError);
        }
      );

      await t.test(
        "should throw an error if component name is a string with only spaces",
        () => {
          assert.throws(() => {
            validation.validateComponentName(" ");
          }, kError);
        }
      );

      await t.test(
        "should throw an error if component name is a string with only tabs",
        () => {
          assert.throws(() => {
            validation.validateComponentName(" ");
          }, kError);
        }
      );
    }
  );
});
