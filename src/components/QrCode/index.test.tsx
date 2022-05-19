import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import QRCode from ".";
import mockStore from "../mocks/store";

const renderQRCode = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <QRCode url="https://test-url" />
    </ReduxProvider>
  );
describe("Tests for <QRCode/>", () => {
  afterEach(cleanup);
  test("QRCode: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <QRCode url="https://test-url" />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderQRCode();
  });
});
