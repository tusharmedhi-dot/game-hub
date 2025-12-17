import usePlatforms from "@/hooks/usePlatforms";
import { type Platform } from "@/hooks/usePlatforms";
import { Field, NativeSelect, VisuallyHidden } from "@chakra-ui/react";
import { useMemo } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
  const { data, error, loading } = usePlatforms();

  const selectItems = useMemo(() => {
    return (
      data?.map((platform: Platform) => ({
        label: platform.name,
        value: platform.id.toString(),
      })) || []
    );
  }, [data]);

  if (loading) return <div className="w-25">Loading platforms...</div>;
  if (error)
    return <div className="w-25 text-danger">Error fetching platforms.</div>;

  return (
    <Field.Root width="320px">
      <VisuallyHidden>
        <Field.Label htmlFor="platform-select">
          Select a gaming platform
        </Field.Label>
      </VisuallyHidden>

      <NativeSelect.Root size="sm">
        <NativeSelect.Field
          id="platform-select"
          // Adding aria-label here satisfies the "accessible name" requirement
          title="Select a gaming platform"
          aria-label="Select a gaming platform"
          placeholder="Select platform"
          onChange={(event) => {
            const selectedId = event.target.value;
            const platform = data?.find((p) => p.id.toString() === selectedId);
            if (platform) onSelectPlatform(platform);
          }}
        >
          {selectItems.map((platform) => (
            <option value={platform.value} key={platform.value}>
              {platform.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  );
};

export default PlatformSelector;
