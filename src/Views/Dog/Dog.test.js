import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogDetail from './Dog';

it('should render an individual dog', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/6']}>
      {' '}
      <Route path="/dogs/:id">
        <DogDetail />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('This is Mittens');
  expect(container).toMatchSnapshot();
});
