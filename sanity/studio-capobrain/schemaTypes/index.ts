import {defineField, defineType} from 'sanity'

export const schemaTypes = [
  // School Ranking Schema
  defineType({
    name: 'school',
    title: 'School',
    type: 'document',
    fields: [
      defineField({
        name: 'rank',
        title: 'Rank',
        type: 'number',
        validation: (Rule) => Rule.required().min(1).integer(),
        description: 'Rank of the school (1 for top rank)',
      }),
      defineField({
        name: 'name',
        title: 'School Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: 'description1',
        title: 'Description Paragraph 1',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'description2',
        title: 'Description Paragraph 2',
        type: 'text',
      }),
      defineField({
        name: 'detailsLink',
        title: 'Details Link',
        type: 'url',
        description: 'URL for more details or external resources',
      }),
    ],
  }),

  // Custom Schema to group rankings
  defineType({
    name: 'rankingTabs',
    title: 'Ranking Tabs',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
        description: 'Title for the ranking tab (e.g., "Top 3 Schools")',
      }),
      defineField({
        name: 'schools',
        title: 'Schools',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'school'}],
          },
        ],
        description: 'Add schools that belong to this ranking tab',
      }),
    ],
  }),

  // Define block content type (if needed)
  defineType({
    name: 'blockContent',
    title: 'Block Content',
    type: 'array',
    of: [
      {
        type: 'block',
      },
      {
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }),
]
