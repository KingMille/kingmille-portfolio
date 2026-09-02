import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

type ImageSource = Parameters<typeof builder.image>[0];

export function urlFor(source: ImageSource) {
  return builder.image(source);
}

export async function getProjects() {
  return client.fetch(`*[_type == "project"] | order(featured desc) {
    _id,
    title,
    slug,
    category,
    description,
    coverImage,
    liveUrl,
    githubUrl,
    tags,
    featured
  }`);
}

export async function getProjectBySlug(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      description,
      coverImage,
      gallery,
      liveUrl,
      githubUrl,
      tags,
      featured,
      content
    }`,
    { slug }
  );
}

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    category,
    coverImage,
    publishedAt,
    readTime
  }`);
}

export async function getBlogPostBySlug(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      category,
      coverImage,
      publishedAt,
      readTime,
      body
    }`,
    { slug }
  );
}

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0] {
    title,
    tagline,
    heroIntro,
    aboutText,
    email,
    social
  }`);
}

export async function getSkills() {
  return client.fetch(`*[_type == "skill"] | order(order asc) {
    _id,
    name,
    level,
    category
  }`);
}
