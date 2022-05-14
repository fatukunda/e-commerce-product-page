import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import Cart from ".";
import mockStore from "../mocks/store";

const renderCart = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <Cart />
    </ReduxProvider>
  );
describe("Tests for <Cart/>", () => {
  afterEach(cleanup);
  test("AppHeader: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <Cart />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderCart();
  });
  it('Displays heading "Shopping Cart"', () => {
    const { getByText } = renderCart();
    expect(getByText("Your shopping Cart")).toBeInTheDocument();
  });
  it("Displays product variables correctly", () => {
    const { getByText } = renderCart();
    expect(getByText("nu3 Bio Acerola")).toBeInTheDocument();
    expect(getByText("150 g")).toBeInTheDocument();
    expect(getByText("€18.99 x 1")).toBeInTheDocument();
    expect(getByText("€18.99")).toBeInTheDocument();
  });
  it('Removes item from the cart', () => {
    const { getAllByTestId, getByText } = renderCart();
    const deleteBtns = getAllByTestId('delete-btn');

    fireEvent.click(deleteBtns[0])
    expect(getByText('Your cart is empty')).toBeInTheDocument();
});
});
