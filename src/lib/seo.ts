export function getSEOTags({
  title,
  description,
  url,
}: {
  title?: string;
  description?: string;
  url?: string;
}) {
  return {
    title: title || "YourChoice",
    description: description || "Fast, optimized ecommerce",
    url: url || "",
  };
}
