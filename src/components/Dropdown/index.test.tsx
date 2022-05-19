import { render, cleanup, fireEvent, screen} from "@testing-library/react";
import renderer from "react-test-renderer";
import { Provider as ReduxProvider } from "react-redux";

import Dropdown, { IOption } from ".";
import mockStore from "src/components/mocks/store";

const options: IOption[] = [
  {
    id: 1,
    name: "Option 1",
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
  },
];

const selectOption = jest.fn()
const toggleDropdown = jest.fn()

const renderDropdown = () =>
  render(
    <ReduxProvider store={mockStore()}>
      <Dropdown
        options={options}
        change={selectOption}
        selectedItem={options[0]}
        isOpen={true}
        toggleOpen={toggleDropdown}
        close={() => jest.fn()}
      />
    </ReduxProvider>
  );

describe("Tests for <Dropdown/>", () => {
  afterEach(cleanup);
  test("Dropdown: Snapshot", () => {
    const component = renderer.create(
      <ReduxProvider store={mockStore()}>
        <Dropdown
          options={options}
          change={() => jest.fn()}
          selectedItem={options[0]}
          isOpen={false}
          toggleOpen={() => jest.fn()}
          close={() => jest.fn()}
        />
      </ReduxProvider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Renders without crashing", () => {
    renderDropdown();
  });
  it("Toggles dropdown", () => {
    const { getByTitle } = renderDropdown();
    const dropdownButton = getByTitle("select-filter-btn");
    const selectedItem = getByTitle('selected-item')
    expect(selectedItem.textContent).toBe('Option 1')
    fireEvent.click(dropdownButton)
    expect(toggleDropdown).toHaveBeenCalled()
  });
  it('Selects an option when clicked', () => {
    const { getAllByTitle } = renderDropdown();
    const options = getAllByTitle('option')
    fireEvent.click(options[1])
    expect(selectOption).toHaveBeenCalled()
  })
});
