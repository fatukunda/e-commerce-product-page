import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Button from "./";

const renderButton = () =>
  render(
    <Button>
      <span>Click me!</span>
    </Button>
  );
describe('Tests for <Button/>', () => {
    afterEach(cleanup)

    it('renders without crashing', () => {
        renderButton()
    })
})

test("Button: Snapshot", () => {
  const component = renderer.create(
    <Button>
      <span>Test</span>
    </Button>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
