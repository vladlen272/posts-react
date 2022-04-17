import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

function PostsFilter({filter, setFilter}) {
  return (
    <div>
      <Input
        placeholder="search"
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      ></Input>
      <Select
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        value={filter.sort}
        defaultValue={"select"}
        options={[
          { value: "default", name: "default" },
          { value: "title", name: "title" },
          { value: "body", name: "body" },
        ]}
      />
    </div>
  );
}

export default PostsFilter;
