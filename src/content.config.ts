import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const translatedEntry = z.any();

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/pages" }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
    layout: z.string().optional(),
    description: z.string().optional(),
    background: z.string().optional(),
    heroHeight: z.string().optional(),
    documentStyle: z.string().optional(),
    robots: z.string().optional(),
    contentMaxWidth: z.string().optional(),
  }),
});

const navigation = defineCollection({
  loader: glob({ pattern: 'navi.yaml', base: "./src/content" }),
  schema: z.array(z.object({
    title: translatedEntry,
    link: translatedEntry,
    subnavi: z.array(z.object({
      title: translatedEntry,
      link: translatedEntry,
    })).optional(),
  })),
});

const board = defineCollection({
  loader: glob({ pattern: 'board.yaml', base: "./src/content" }),
  schema: ({ image }) => z.array(z.object({
    title: translatedEntry,
    name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
    telegram: z.string().optional(),
    picture: image().optional(),
    description: translatedEntry.optional(),
  })),
});

const officials = defineCollection({
  loader: glob({ pattern: 'officials.yaml', base: "./src/content" }),
  schema: ({ image }) => z.array(z.object({
    name: translatedEntry,
    members: z.array(z.object({
      name: z.string(),
      title: z.union([translatedEntry, z.array(translatedEntry)]),
      email: z.string().optional(),
      telegram: z.string().optional(),
      picture: image().optional(),
      description: translatedEntry.optional(),
      leader: z.boolean().optional(),
    })),
  })),
});

const counselors = defineCollection({
  loader: glob({ pattern: 'counselor.yaml', base: "./src/content" }),
  schema: ({ image }) => z.array(z.object({
    title: translatedEntry,
    name: z.string(),
    email: z.string(),
    phone: z.string().optional(),
    telegram: z.string().optional(),
    picture: image().optional(),
    description: translatedEntry.optional(),
  })),
});

const sponsors = defineCollection({
  loader: glob({ pattern: 'sponsors.yaml', base: "./src/content" }),
  schema: ({ image }) => z.array(z.object({
    name: z.string(),
    link: z.string(),
    picture: image().optional(),
  })),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/archive" }),
  schema: ({ image }) => z.object({
    year: z.string().optional(),
    board: z.array(z.object({
      title: translatedEntry,
      name: z.string(),
      email: z.string().optional(),
      phone: z.string().optional(),
      telegram: z.string().optional(),
      picture: image().optional(),
      description: translatedEntry.optional(),
    })).optional(),
    officials: z.array(z.object({
      name: translatedEntry,
      members: z.array(z.object({
        name: z.string(),
        title: z.union([translatedEntry, z.array(translatedEntry)]),
        email: z.string().optional(),
        telegram: z.string().optional(),
        picture: image().optional(),
        description: translatedEntry.optional(),
        leader: z.boolean().optional(),
      })),
    })).optional(),
    misc: z.array(z.object({
      title: translatedEntry,
      name: z.string(),
    })).optional(),
  }),
});

const minors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.yaml', base: "./src/content/minors" }),
  schema: z.object({
    lang: z.any(),
    curriculum: translatedEntry,
    name: translatedEntry,
    link: translatedEntry.optional(),
    desc: translatedEntry.optional(),
    why: translatedEntry.optional(),
    masters: z.object({
      info: translatedEntry.optional(),
      list: translatedEntry.optional(),
    }).optional(),
    courses: z.object({
      info: translatedEntry.optional(),
      list: translatedEntry.optional(),
    }).optional(),
  }),
});

export const collections = {
  'pages': pages,
  'navigation': navigation,
  'board': board,
  'officials': officials,
  'counselors': counselors,
  'sponsors': sponsors,
  'archive': archive,
  'minors': minors,
};
