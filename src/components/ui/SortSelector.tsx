import { Field, NativeSelect } from "@chakra-ui/react";
import { useState } from "react";

interface SelectItem {
  label: string;
  value: string;
}

const dataItems: SelectItem[] = [
  { label: "Relevance", value: "" },
  { label: "Date Added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release Date", value: "-release" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average Rating", value: "-rating" },
];

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  // Find the label of the currently selected item to show in the UI
  const currentSortOrder = dataItems.find(
    (item) => item.value === selectedValue
  );

  return (
    <Field.Root width="fit-content">
      <NativeSelect.Root size="sm">
        <NativeSelect.Field
          id="sort-select"
          title="Sort options"
          aria-label="Sort options"
          value={selectedValue}
          onChange={(event) => {
            const newValue = event.target.value;
            setSelectedValue(newValue);
            onSelectSortOrder(newValue);
          }}
        >
          {/* By setting the first option as the default "Order by" label, 
            it stays visible when 'Relevance' (empty string) is selected.
          */}
          <option value="">Order by: Relevance</option>

          {dataItems.map(
            (item) =>
              // We skip the empty string item here because we handled it above
              item.value !== "" && (
                <option key={item.value} value={item.value}>
                  Order by: {item.label}
                </option>
              )
          )}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  );
};

export default SortSelector;
