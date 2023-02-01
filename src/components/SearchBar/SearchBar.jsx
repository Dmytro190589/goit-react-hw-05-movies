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
