export interface Slugs {
  [key: string]: number;
}

export function createSlug(title: string, slugs: Slugs) {
  let slug: string = title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(' ', '-');
  if (!(slug in slugs)) {
    slugs[slug] = 0;
    return slug;
  }
  slugs[slug]++;
  return `${slug}-${slugs[slug]}`;
}
