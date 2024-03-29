import React from "../src/React";
import { it, expect, describe } from "vitest";
describe("React", () => {
	it("should create react element", () => {
		const element = React.createElement("h1", { className: "foo" }, "hello");
		expect(element).toMatchSnapshot(`
        {
          "props": {
            "children": [
              {
                "props": {
                  "children": [],
                  "nodeValue": "hello",
                },
                "type": "TEXT_ELEMENT",
              },
            ],
            "className": "foo",
          },
          "type": "h1",
        }`);
	});
});
