import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import Menu from ".";
import mockStore from "../mocks/store";

const renderMenu = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <Menu />
    </ReduxProvider>
  );
describe("Tests for <Menu/>", () => {
  afterEach(cleanup);
  test("Menu: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <Menu />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderMenu();
  });
});
