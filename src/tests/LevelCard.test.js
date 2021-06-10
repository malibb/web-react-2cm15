import { render, screen } from '@testing-library/react';
import LevelCard from '../Components/LevelCard';

test('renders learn react link', () => {
  const title = "Level N";
  render(<LevelCard title="title"/>);
  const linkElement = screen.getByText(/title/i);
  expect(linkElement).toBeInTheDocument();
});
