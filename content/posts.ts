import post1 from '../notion-data/180588d3-a5c2-80b2-a63e-c24bd6c8bdb1.json'

const posts = [
  {
    title: "Il fallait bien recommencer quelque part...",
    slug: "il-fallait-bien-recommencer-quelque-part",
    content: post1,
    date: "2025-01-19",
    description: "Voil&agrave; que je me remets &agrave; &eacute;crire. Mais, pourquoi donc ? R&eacute;ponse ici.",
    image: undefined,
  },
] as Post[];

export default posts;

export type Post = {
  title: string;
  slug: string;
  content: { blocks: any[] };
  date: string;
  description: string;
  image?: string;
};
