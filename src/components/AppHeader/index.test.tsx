import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import AppHeader from ".";
import mockStore from "../mocks/store";

const renderAppHeader = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <AppHeader />
    </ReduxProvider>
  );
describe("Tests for <AppHeader/>", () => {
  afterEach(cleanup);
  test("AppHeader: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <AppHeader />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderAppHeader();
  });
  it("Displays Heading links", () => {
    const { getByText } = renderAppHeader();
    expect(getByText("Home")).toBeInTheDocument();
  });
  it("Displays the burger icon on small screen", () => {
    const { getByTestId } = renderAppHeader();
    const showMenu = getByTestId("menu-open-btn");
    fireEvent.click(showMenu)
    expect(getByTestId('closeIcon')).toBeTruthy()
    const hideMenu = getByTestId("menu-close-btn");
    fireEvent.click(hideMenu)
    expect(getByTestId('menu-open-btn')).toBeTruthy()

  });
  it('Toggles cart display', () => {
    const { getByTestId, getByText } = renderAppHeader();
    const cartOpenModal = getByTestId("cart-open-btn");
    fireEvent.click(cartOpenModal)
    expect(getByText('nu3 Bio Acerola')).toBeInTheDocument();
    fireEvent.click(cartOpenModal)
    expect(getByText('1')).toBeInTheDocument();
  })
});
