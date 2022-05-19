import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";
import AppSearch from "./";
import mockStore from "../mocks/store";

const renderAppSearch = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <AppSearch />
    </ReduxProvider>
  );
describe("Tests for <AppSearch/>", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    renderAppSearch();
  });
  test("AppSearch: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <AppSearch />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Searches for product"', () => {
    const { getByTitle } = renderAppSearch();
    const searchInput = getByTitle("search-input") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "prev" } });
    expect(searchInput.value).toBe("prev");
  });
});
