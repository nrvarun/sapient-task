import Header from "../global/Header";

describe("Header component", () => {
  const wrapper = shallow(<Header />);

  it("Should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have text", () => {
    const logo = wrapper.find("h1");
    expect(logo.length).toBe(1);
  });
});
