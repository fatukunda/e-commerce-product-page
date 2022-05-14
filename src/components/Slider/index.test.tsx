import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import Slider from ".";
import mockStore from "../mocks/store";

const renderCart = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <Slider />
    </ReduxProvider>
  );
describe("Tests for <Slider/>", () => {
  afterEach(cleanup);
  test("Slider: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <Slider />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderCart();
  });
  it("Displays the next image", () => {
    const { getByTestId } = renderCart();
    const getNextBtn = getByTestId("get-next-btn");
    const currentImage = getByTestId("current-image");

    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/7_252F9_252Fe_252F2_252F79e29bdc358cf46c6f6df40f78ec1cabeda1a36a_21032_Top.jpg?v=1630500085"
    );
    fireEvent.click(getNextBtn);
    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/a_252F2_252F4_252Ff_252Fa24f85e82f207a80c119cb64b0fa99d3ac4def70_21452.jpg?v=1630500198"
    );
  });
  it("Displays the previouse image", () => {
    const { getByTestId } = renderCart();
    const getPrevBtn = getByTestId("get-previous-btn");
    const currentImage = getByTestId("current-image");
    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/7_252F9_252Fe_252F2_252F79e29bdc358cf46c6f6df40f78ec1cabeda1a36a_21032_Top.jpg?v=1630500085"
    );

    fireEvent.click(getPrevBtn);
    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/a_252F2_252F4_252Ff_252Fa24f85e82f207a80c119cb64b0fa99d3ac4def70_21452.jpg?v=1630500198"
    );
    fireEvent.click(getPrevBtn);
    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/7_252F9_252Fe_252F2_252F79e29bdc358cf46c6f6df40f78ec1cabeda1a36a_21032_Top.jpg?v=1630500085"
    );
  });
  it("Displays the selected image", () => {
    const { getAllByTestId, getByTestId } = renderCart();
    const imagesToSelect = getAllByTestId("selected-img");
    const currentImage = getByTestId("current-image");

    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/7_252F9_252Fe_252F2_252F79e29bdc358cf46c6f6df40f78ec1cabeda1a36a_21032_Top.jpg?v=1630500085"
    );
    fireEvent.click(imagesToSelect[1]);
    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/a_252F2_252F4_252Ff_252Fa24f85e82f207a80c119cb64b0fa99d3ac4def70_21452.jpg?v=1630500198"
    );
    fireEvent.click(imagesToSelect[0]);
    expect(currentImage.getAttribute("src")).toBe(
      "https://cdn.shopify.com/s/files/1/0095/2274/1329/products/7_252F9_252Fe_252F2_252F79e29bdc358cf46c6f6df40f78ec1cabeda1a36a_21032_Top.jpg?v=1630500085"
    );
  });
});
