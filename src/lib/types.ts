export type CardProps = {
  href: string;
  title: string;
  body: string;
};

export type FrontmatterProps = {
  title: string;
  description: string;
  publishDate: string;
  heroImage?: {
    src: string;
    alt: string;
  };
};
