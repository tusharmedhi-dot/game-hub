import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string | null | undefined) => {
  // 1. If no URL or "null" string, return placeholder
  if (!url || url === "null") return noImage;

  const target = "media/";

  // 2. Check if the URL actually contains "media/"
  if (!url.includes(target)) return url;

  // 3. Replace "media/" with "media/crop/600/400/"
  // This ensures the instruction is inserted exactly once in the right spot
  return url.replace(target, target + "crop/600/400/");
};

export default getCroppedImageUrl;
