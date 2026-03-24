export type Illustration = {
  slug: string;
  title: string;
  description: string;

  png: string;
  svg: string;

  line_png?: string;
  line_svg?: string;

  character: string;
  category: "character" | "item";
  emotion?: string;
  pose?: string;
  action?: string;
  grade?: number;
  tags?: string[];
};
