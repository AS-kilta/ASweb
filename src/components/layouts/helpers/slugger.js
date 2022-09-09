export function createSlug(title, slugs) {
    let slug = title.toLowerCase()
        .normalize("NFD")
        .replace(/[^a-z0-9 ]/g, "")
        .replace(" ", "-")
    if (!(slug in slugs)) {
        slugs[slug] = 0;
        return slug;
    }
    slugs[slug]++
    return `${slug}-${slugs[slug]}`
}
