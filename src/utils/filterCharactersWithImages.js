export default function filterCharactersWithImages(characters) {
  return characters.filter(
    (c) => c.thumbnail && !c.thumbnail.path.includes('image_not_available')
  );
}
