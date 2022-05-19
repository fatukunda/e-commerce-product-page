import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";
import ItemCard from "./";
import mockStore from "../mocks/store";
import { ISearchItem } from "src/models/SearchResult";

const item: ISearchItem = {
  price: 20.22,
  image: "https://test-image",
  vendor: "test vendor",
  title: "Test product title",
  id: "1",
  link: "https://test-image-link",
};

const renderItemCard = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <ItemCard item={item} />
    </ReduxProvider>
  );
describe("Tests for <ItemCard/>", () => {
  afterEach(cleanup);

  it("renders without crashing", () => {
    renderItemCard();
  });
  test("ItemCard: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <ItemCard item={item} />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Displays item data"', () => {
    const { getByText } = renderItemCard();
    expect(getByText("Test product title"));
    expect(getByText("€20.22"));
  });
});
