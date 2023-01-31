import { Form, Input, Button } from './SearchBar.styled';
export const SearchBar = () => {
  const onChange = e => {
    e.target.value.toLowerCase();
  };
  return (
    <Form>
      <Input
        type="text"
        name="searchFilm"
        placeholder="Search film"
        required
        autoFocus
        onChange={onChange}
      />
      <Button>Search</Button>
    </Form>
  );
};
