import { Field, NativeSelect } from "@chakra-ui/react";
import { useState } from "react";

interface SelectItem {
  label: string;
  value: string;
}

const dataItems: SelectItem[] = [
  //{ label: "Order By: Relevance", value: "opt1" },
  { label: "Relevance", value: "Relevance" },
  { label: "Date Added", value: "Date Added" },
  { label: "Name", value: "Name" },
  { label: "Release Date", value: "Release Date" },
  { label: "Popularity", value: "Popularity" },
  { label: "Average Rating", value: "Average Rating" },
];

const SortSelector = () => {
  const [selectedValue, setSelectedValue] = useState<string>("opt2");

  return (
    <Field.Root width="300px">
      {/* <Field.Label htmlFor="sort-select">Sort Options</Field.Label> */}
      <NativeSelect.Root size="sm">
        <NativeSelect.Field
          id="sort-select"
          // This explicitly gives the select an accessible name for audit tools
          title="Sort options"
          aria-label="Sort options"
          placeholder="Select an option"
          value={selectedValue}
          onChange={(event) => {
            setSelectedValue(event.target.value);
            //console.log("Selected:", event.target.value);
          }}
        >
          {/* <option value="Order By: Relevance">Order By: Relevance</option> */}
          {dataItems.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  );
};

export default SortSelector;
