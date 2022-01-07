import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DogList from './Dogs';

it('should render a list of dogs', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogList />
    </MemoryRouter>
  );
  await screen.findByText('Stinky');
  expect(container).toMatchSnapshot();
});
