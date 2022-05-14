import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import Product from ".";
import mockStore from "src/components/mocks/store";

const renderProduct = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <Product />
    </ReduxProvider>
  );

describe("Tests for <Product/>", () => {
  afterEach(cleanup);
  test("Product: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <Product />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderProduct();
  });

  it("Selects a variant", () => {
    const { getAllByTestId, getByText } = renderProduct();
    const selectVariantBtns = getAllByTestId("select-variant-btn");
    fireEvent.click(selectVariantBtns[0]);
    expect(getByText("€18.99")).toBeInTheDocument();
  });

  it("increaments quantity of item", () => {
    const { getByTestId } = renderProduct();
    const increamentQuantity = getByTestId("increament-quantity-btn");
    const quantityText = getByTestId("quantity-text");
    expect(quantityText.textContent).toBe("1");
    fireEvent.click(increamentQuantity);
    expect(quantityText.textContent).toBe("2");
  });

  it("decreaments quantity of item", () => {
    const { getByTestId } = renderProduct();
    const decreamentQuantity = getByTestId("decreament-quantity-btn");
    const increamentQuantity = getByTestId("increament-quantity-btn");
    const quantityText = getByTestId("quantity-text");

    expect(quantityText.textContent).toBe("1");
    fireEvent.click(increamentQuantity);
    expect(quantityText.textContent).toBe("2");
    fireEvent.click(decreamentQuantity);
    expect(quantityText.textContent).toBe("1");
    fireEvent.click(decreamentQuantity);
    expect(quantityText.textContent).toBe("1");
  });

  it("adds to cart", () => {
    const { getByTestId, getByText, getAllByTestId } = renderProduct();
    const addToCart = getByTestId("main-btn");
    const selectVariantBtns = getAllByTestId("select-variant-btn");
    fireEvent.click(selectVariantBtns[0]);
    expect(getByText("€18.99")).toBeInTheDocument();
    fireEvent.click(addToCart);
  });
});
