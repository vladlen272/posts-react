import Input from "../UI/input/Input";
import Select from "../UI/select/Select";

function PostsFilter({filter, setFilter}) {
  return (
    <div>
      <Input
        placeholder="search"
        value={filter.search}
        onChange={(e) => setFilter({...filter, search: e.target.value})}
      ></Input>
      <Select
        onChange={selectedSort => setFilter({...filter, select: selectedSort})}
        value={filter.select}
        defaultValue={"select"}
        options={[
          { value: "title", name: "title" },
          { value: "body", name: "body" },
        ]}
      />
    </div>
  );
}

export default PostsFilter;
