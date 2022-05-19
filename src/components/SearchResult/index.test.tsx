import { render, cleanup, fireEvent, getByTitle } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import SearchResult from ".";
import mockStore from "src/components/mocks/store";

const renderSearchResult = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <SearchResult />
    </ReduxProvider>
  );

describe("Tests for <SearchResult/>", () => {
  afterEach(cleanup);
  test("Search Result: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <SearchResult />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderSearchResult();
  });
  it('Filters results in ascending order', () => {
    const { getByText, getAllByTitle, getByTitle } = renderSearchResult();
    const filterBtn = getByTitle('select-filter-btn')
    expect(getByText('Random')).toBeInTheDocument()
    fireEvent.click(filterBtn)
    const options = getAllByTitle('option')
    expect(options).toHaveLength(5)
    fireEvent.click(options[1])
    expect(filterBtn).toHaveTextContent('Ascending')
  });
  it('Filters results in descending order', () => {
    const { getByText, getAllByTitle, getByTitle } = renderSearchResult();
    const filterBtn = getByTitle('select-filter-btn')
    expect(getByText('Random')).toBeInTheDocument()
    fireEvent.click(filterBtn)
    const options = getAllByTitle('option')
    fireEvent.click(options[2])
    expect(filterBtn).toHaveTextContent('Descending')
  });
  it('Filters results in descending order', () => {
    const { getByText, getAllByTitle, getByTitle } = renderSearchResult();
    const filterBtn = getByTitle('select-filter-btn')
    expect(getByText('Random')).toBeInTheDocument()
    fireEvent.click(filterBtn)
    const options = getAllByTitle('option')
    fireEvent.click(options[3])
    expect(filterBtn).toHaveTextContent('Price Low to High')
  });
  it('Filters results in descending order', () => {
    const { getByText, getAllByTitle, getByTitle } = renderSearchResult();
    const filterBtn = getByTitle('select-filter-btn')
    expect(getByText('Random')).toBeInTheDocument()
    fireEvent.click(filterBtn)
    const options = getAllByTitle('option')
    fireEvent.click(options[4])
    expect(filterBtn).toHaveTextContent('Price High to Low')
  });
});
