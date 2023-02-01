import PropTypes from 'prop-types';


import { Form, Input, Button } from './SearchBar.styled';
export const SearchBar = ({ onSubmit, value, onChange}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        value={value}
        onChange={e => onChange(e.target.value)}
        type="text"
        name="query"
        placeholder="Search film"
        required
        autoFocus
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchBar.propTypes= {
  onChange:PropTypes.func.isRequired,
  onSubmit:PropTypes.func.isRequired,
  value:PropTypes.string
}