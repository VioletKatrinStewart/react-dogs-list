import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Form from './Admin';

it('should render text in form', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/admin']}>
      {' '}
      <Route path="/admin">
        <Form />
      </Route>
    </MemoryRouter>
  );
  await screen.findByText('Name');
  expect(container).toMatchSnapshot();
});
