import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import Loader from ".";
import mockStore from "../mocks/store";

const renderLoader = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <Loader />
    </ReduxProvider>
  );
describe("Tests for <Loader/>", () => {
  afterEach(cleanup);
  test("Loader: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <Loader />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderLoader();
  });
});
