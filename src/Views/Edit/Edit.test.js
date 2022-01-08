import { MemoryRouter, Route } from 'react-router-dom';
import Edit from './Edit';
import { render, screen } from '@testing-library/react';

it('should render the dogs info in the form', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/6/edit']}>
      <Route path="/dogs/:id/edit">
        <Edit />
      </Route>
    </MemoryRouter>
  );
  //   screen.findByText('Name');
  await screen.findByDisplayValue('I am not a dog, how did I get here?');

  expect(container).toMatchSnapshot();
});
