import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import AppFooter from ".";
import mockStore from "../mocks/store";

const renderAppFooter = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <AppFooter />
    </ReduxProvider>
  );
describe("Tests for <AppFooter/>", () => {
  afterEach(cleanup);
  test("AppFooter: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <AppFooter />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderAppFooter();
  });
  it("Displays Heading links", () => {
    const { getByText } = renderAppFooter();
    expect(getByText("Frank Atukunda")).toBeInTheDocument();
  });
});
