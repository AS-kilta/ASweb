# ASweb version 2

_We have updated most of the codebase and nuked our version control. What now :D_

## New `master` branch

The `master` branch was rewritten on 2026-04-02 and does **NOT** share any of the commit hashes you might have on your local `master` branch. With this we could debloat the repository. Any of the content before the debloat was not lost.

Therefore, if you blindly merge the new `master` into your local feature branch, you might accidentally include the codebase twice along with the bloated parts.

```
master 1---2---3
            \
 your branch 4---5---6  <- The (merge) commit n.6 would result in the following commit history.
                    /      1---2---4---5---1---2---3 
new master 1---2---3       Now let's say commit n.2 was a bloated one and you'll see the issue.
```

The simplest solution is to _delete_ your local clone of the repository. You might have some local changes you don't want to lose though. Here is the next simplest solution then.

**First** fetch all the changes.
```bash
git fetch --all
```

For a branches you want to keep:
```bash
# WARNING!!!
# Overwrites the given branch. BACKUP your changes! For example you can use stash.
git checkout -B branch_name origin/branch_name
```

How to stash:
```bash
git checkout branch_name

# WARNING!!!
# Remove commits starting from head. 1 removes 1 commit, 2 removes 2, and so on...
# The changes are not lost, just uncommitted and return as non-committed changes.
git reset HEAD~1

# Stash all changes
git add .
git stash -m "my feature"
```

Recommended for all other branches:
```bash
# WARNING!!!
# Deletes the given branch!
git branch -D branch_name
```

## Migration to Astro

### `.astro` files

This new file type is similar to Svelte or Vue components. It consists of frontmatter inside triple dashes, structured tags (like HTML), and style tag. Place your JS and TS inside the frontmatter.

### New file structure

- `./public` is for assets that are directly available to the web.
- `./src/assets` is for mostly pictures and icons.
- `./src/components` is for UI components. Astro supports 
- `./src/data` is for website data such as profiles, minor guides, and navigation.
- `./src/layouts` is for reusable page templates. Used on basically every page.
- `./src/pages` is the website root. Create `.astro` pages here and they are automatically routed based on the folder structure.
- `./src/styles` is for CSS files.