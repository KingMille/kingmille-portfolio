import { defineType, defineField } from "sanity";

export const skillType = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "level",
      title: "Level",
      type: "number",
      validation: (rule) => rule.min(0).max(100),
      description: "Skill level from 0 to 100 (shown as %)",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Design", value: "Design" },
          { title: "Development", value: "Development" },
          { title: "AI", value: "AI" },
          { title: "Robotics", value: "Robotics" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Controls display order within category (lower first)",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
