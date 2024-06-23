export default function filterWithImages(items) {
  return items.filter(
    (item) => item.thumbnail && !item.thumbnail.path.includes('image_not_available')
  );
}
