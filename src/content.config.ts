import { defineCollection, type SchemaContext } from 'astro:content';
import z from 'astro/zod';
import { glob } from 'astro/loaders';

const translatedEntry = z.any();

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/pages' }),
  schema: z.object({
    title: z.string(),
    lead: z.string().optional(),
    layout: z.string().optional(),
    description: z.string().optional(),
    background: z.string().optional(),
    carousel: z.union([z.boolean(), z.string()]).optional(),
    banner: z.union([z.boolean(), z.string()]).optional(),
    theme: z.union([z.boolean(), z.string()]).optional(),
    heroHeight: z.string().optional(),
    documentStyle: z.string().optional(),
    robots: z.string().optional(),
    contentMaxWidth: z.string().optional(),
  }),
});

const navigation = defineCollection({
  loader: glob({ pattern: 'navi.yaml', base: './src/data' }),
  schema: z.array(
    z.object({
      title: translatedEntry,
      link: translatedEntry,
      subnavi: z
        .array(
          z.object({
            title: translatedEntry,
            link: translatedEntry,
          })
        )
        .optional(),
    })
  ),
});

const board = defineCollection({
  loader: glob({ pattern: 'board.yaml', base: './src/data' }),
  schema: ({ image }: SchemaContext) =>
    z.array(
      z.object({
        title: translatedEntry,
        name: z.string(),
        email: z.string(),
        phone: z.string().optional(),
        telegram: z.string().optional(),
        picture: image().optional(),
        description: translatedEntry.optional(),
      })
    ),
});

const officials = defineCollection({
  loader: glob({ pattern: 'officials.yaml', base: './src/data' }),
  schema: ({ image }: SchemaContext) =>
    z.array(
      z.object({
        name: translatedEntry,
        members: z.array(
          z.object({
            name: z.string(),
            title: z.union([translatedEntry, z.array(translatedEntry)]),
            email: z.string().optional(),
            telegram: z.string().optional(),
            picture: image().optional(),
            description: translatedEntry.optional(),
            leader: z.boolean().optional(),
          })
        ),
      })
    ),
});

const counselors = defineCollection({
  loader: glob({ pattern: 'counselor.yaml', base: './src/data' }),
  schema: ({ image }: SchemaContext) =>
    z.array(
      z.object({
        title: translatedEntry,
        name: z.string(),
        email: z.string(),
        phone: z.string().optional(),
        telegram: z.string().optional(),
        picture: image().optional(),
        description: translatedEntry.optional(),
      })
    ),
});

const sponsors = defineCollection({
  loader: glob({ pattern: 'sponsors.yaml', base: './src/data' }),
  schema: ({ image }: SchemaContext) =>
    z.array(
      z.object({
        name: z.string(),
        link: z.string(),
        picture: image().optional(),
      })
    ),
});

const archive = defineCollection({
  loader: glob({ pattern: '**/[^_]*.yaml', base: './src/data/archive' }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      year: z.string().optional(),
      board: z
        .array(
          z.object({
            title: translatedEntry,
            name: z.string(),
            email: z.string().optional(),
            phone: z.string().optional(),
            telegram: z.string().optional(),
            picture: image().optional(),
            description: translatedEntry.optional(),
          })
        )
        .optional(),
      officials: z
        .array(
          z.object({
            name: translatedEntry,
            members: z.array(
              z.object({
                name: z.string(),
                title: z.union([translatedEntry, z.array(translatedEntry)]),
                email: z.string().optional(),
                telegram: z.string().optional(),
                picture: image().optional(),
                description: translatedEntry.optional(),
                leader: z.boolean().optional(),
              })
            ),
          })
        )
        .optional(),
      accolades: z
        .array(
          z.object({
            name: translatedEntry,
            people: z.array(
              z.object({
                name: z.string(),
                description: translatedEntry,
              })
            ),
          })
        )
        .optional(),
      misc: z
        .array(
          z.object({
            title: translatedEntry,
            name: z.string(),
          })
        )
        .optional(),
    }),
});

const minors = defineCollection({
  loader: glob({ pattern: '**/[^_]*.yaml', base: './src/data/minors' }),
  schema: z.object({
    lang: z.any(),
    curriculum: translatedEntry,
    name: translatedEntry,
    link: translatedEntry.optional(),
    desc: translatedEntry.optional(),
    why: translatedEntry.optional(),
    masters: z
      .object({
        info: translatedEntry.optional(),
        list: translatedEntry.optional(),
      })
      .optional(),
    courses: z
      .object({
        info: translatedEntry.optional(),
        list: translatedEntry.optional(),
      })
      .optional(),
  }),
});

const carouselItemSchema = ({ image }: SchemaContext) =>
  z.object({
    src: z.union([image(), z.string()]),
    alt: z.string().optional(),
    title: z.union([z.string(), z.record(z.string(), z.string())]).optional(),
    lead: z.union([z.string(), z.record(z.string(), z.string())]).optional(),
    overlay: z.boolean().optional(),
  });

const carousel = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/data/carousel' }),
  schema: ({ image }: SchemaContext) =>
    z.object({
      autoplay: z.boolean().optional(),
      interval: z.number().optional(),
      items: z.array(carouselItemSchema({ image })),
    }),
});

const bannerItemSchema = z.object({
  text: z.union([z.string(), z.record(z.string(), z.string())]),
  link: z
    .union([
      z.string(),
      z.object({
        url: z.string(),
        text: z.union([z.string(), z.record(z.string(), z.string())]).optional(),
      }),
    ])
    .optional(),
  startDate: z.union([z.string(), z.date()]).optional(),
  endDate: z.union([z.string(), z.date()]).optional(),
  countdown: z.union([z.string(), z.date()]).optional(),
});

const banner = defineCollection({
  loader: glob({ pattern: 'banner.yaml', base: './src/data' }),
  schema: z.union([
    z.array(bannerItemSchema),
    z.object({
      enabled: z.boolean().optional(),
      items: z.array(bannerItemSchema).optional(),
    }),
    z.record(z.string(), z.any()),
  ]),
});

const theme = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/data/theme' }),
  schema: z.object({
    colors: z.record(z.string(), z.any()).nullable().optional(),
    startDate: z.union([z.string(), z.date()]).nullable().optional(),
    endDate: z.union([z.string(), z.date()]).nullable().optional(),
    carousel: z.union([z.string(), z.boolean()]).nullable().optional(),
    logo: z.any().optional(),
    logos: z.array(z.string()).optional(),
  }),
});

export const collections = {
  pages: pages,
  navigation: navigation,
  board: board,
  officials: officials,
  counselors: counselors,
  sponsors: sponsors,
  archive: archive,
  minors: minors,
  carousel: carousel,
  banner: banner,
  theme: theme,
};
