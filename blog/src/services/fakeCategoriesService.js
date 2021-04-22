export const categories = [
  { _id: "5b21ca3eeb7f6fbccd471818", nom: "JS" },
  { _id: "5b21ca3eeb7f6fbccd471814", nom: "NodeJS" },
  { _id: "5b21ca3eeb7f6fbccd471820", nom: "React" }
];

export function getCategories() {
  return categories.filter(g => g);
}
