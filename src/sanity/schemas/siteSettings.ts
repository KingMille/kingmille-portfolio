import { defineType, defineField } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "KingMille",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short tagline shown in the hero",
    }),
    defineField({
      name: "heroIntro",
      title: "Hero Introduction",
      type: "text",
      rows: 3,
      description: "The short paragraph in the hero section",
    }),
    defineField({
      name: "aboutText",
      title: "About Text",
      type: "array",
      of: [{ type: "block" }],
      description: "Paragraphs for the About section",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "github", title: "GitHub URL", type: "url" },
        { name: "linkedin", title: "LinkedIn URL", type: "url" },
        { name: "twitter", title: "X (Twitter) URL", type: "url" },
        { name: "instagram", title: "Instagram URL", type: "url" },
        { name: "behance", title: "Behance URL", type: "url" },
        { name: "dribbble", title: "Dribbble URL", type: "url" },
      ],
    }),
  ],
  preview: {
    select: { title: "title" },
  },
});
