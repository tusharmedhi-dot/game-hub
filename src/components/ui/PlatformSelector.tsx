import usePlatforms, { type Platform } from "@/hooks/usePlatforms"; // Ensure Platform is imported
import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useMemo } from "react";

// Define the expected structure for the list collection items
interface SelectItem {
  label: string;
  value: string;
}

// Define an empty collection to use for loading/error states
const EMPTY_COLLECTION = createListCollection<SelectItem>({ items: [] });

const PlatformSelector = () => {
  const { data, error, loading } = usePlatforms();

  // Memoize (cache) the transformed data to prevent unnecessary re-renders
  const selectItems: SelectItem[] = useMemo(() => {
    return (
      data?.map((platform: Platform) => ({
        label: platform.name,
        value: platform.id.toString(),
      })) || []
    );
  }, [data]);

  // Create the list collection based on the fetched data
  const platformsCollection = useMemo(() => {
    if (selectItems.length > 0) {
      return createListCollection({ items: selectItems });
    }
    return EMPTY_COLLECTION;
  }, [selectItems]);

  // Determine which collection to use for the Select.Root
  const finalCollection =
    loading || error ? EMPTY_COLLECTION : platformsCollection;

  // Optional: Display dedicated loading/error messages inside a container
  if (loading) {
    return <div className="w-25">Loading platforms...</div>;
  }

  if (error) {
    return <div className="w-25 text-danger">Error fetching platforms.</div>;
  }

  // Use the platformsCollection in the Select.Root and map over its items
  return (
    <Select.Root
      collection={finalCollection} // Use the correct collection
      size="sm"
      width="320px"
    >
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Select platform" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {/* Map over the items in the dynamic collection */}
            {finalCollection.items.map((platform) => (
              <Select.Item item={platform} key={platform.value}>
                {platform.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default PlatformSelector;
