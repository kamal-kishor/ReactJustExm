import { render, screen,cleanup } from '@testing-library/react';
// import Home from "./components/Home";
import Sum from "./components/Sum";

// test('renders learn react link', () => {
//   render(<Home />);
//   const linkElement = screen.getByText(/Amazon/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Sample test case",()=>{
  expect(Sum()).toBe(14)
});