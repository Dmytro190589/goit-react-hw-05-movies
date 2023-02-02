import PropTypes from 'prop-types';

import { Form, Input, Button } from './SearchBar.styled';
export const SearchBar = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" name="query" placeholder="Search film" autoFocus required />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
