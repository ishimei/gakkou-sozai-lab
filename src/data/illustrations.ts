export type Illustration = {
  slug: string;
  title: string;
  description: string;

  png: string;
  svg: string;

  line_png?: string;
  line_svg?: string;

  character: string;
  emotion?: string;
  pose?: string;
  action?: string;
  grade?: number;
};

const poses = [
  "standA",
  "standB",
  "standC",
  "standD",
  "standE",
  "action_write_note_A",
  "action_read_textbook_A",
  "action_raise_hand_A"
];
const emotions = [
  "smile",
  "laugh",
  "trouble",
  "sad",
  "cry",
  "angry",
  "surprised",
  "thinking"
];

export const illustrations: Illustration[] = poses.flatMap((pose) =>
  emotions.map((emotion) => ({
    slug: `girl01-${pose}-${emotion}`,
    title: `小学生の女の子（${emotionLabel(emotion)}）のイラスト`,
    description: `小学校で使える、${emotionLabel(emotion)}表情の小学生の女の子のフリーイラスト素材です。`,
    png: `/images/girl01/png/girl01_${pose}_${emotion}.png`,
    svg: `/images/girl01/svg/girl01_${pose}_${emotion}.svg`,
    character: "girl01",
    emotion,
    pose,
    action: actionFromPose(pose), 
    grade: 1,
  }))
);

function emotionLabel(emotion: string) {
  switch (emotion) {
    case "smile": return "笑顔";
    case "cry": return "泣く";
    case "angry": return "怒る";
    case "sad": return "しょんぼり";
    case "trouble": return "困る";
    case "laugh": return "笑う";
    case "surprised": return "びっくり";
    case "thinking": return "考える";
    default: return emotion;
  }
}
function actionFromPose(pose: string) {
  switch (pose) {
    case "standA": return "stand";
    case "standB": return "present";
    case "standC": return "polite";
    case "standD": return "raise_hand";
    case "standE": return "point";

    case "action_raise_hand_A": return "raise_hand";
    case "action_write_note_A": return "write_note";
    case "action_read_textbook_A": return "read_textbook";

    default: return "stand";
  }
}
export const itemIllustrations: Illustration[] = [
  {
    slug: "item-pencil-basic",
    title: "鉛筆のイラスト",
    description: "小学校で使える鉛筆のフリーイラスト素材です。",
    png: "/images/item/png/item_pencil_basic.png",
    svg: "/images/item/svg/item_pencil_basic.svg",
    line_png: "/images/item/line_png/item_pencil_basic.png",
    line_svg: "/images/item/line_svg/item_pencil_basic.svg",
    character: "item",
  },
  {
    slug: "item-pencil-eraser",
    title: "消しゴム付き鉛筆のイラスト",
    description: "小学校で使える消しゴム付き鉛筆のフリーイラスト素材です。",
    png: "/images/item/png/item_pencil_eraser.png",
    svg: "/images/item/svg/item_pencil_eraser.svg",
    line_png: "/images/item/line_png/item_pencil_eraser.png",
    line_svg: "/images/item/line_svg/item_pencil_eraser.svg",
    character: "item",
  },
  {
    slug: "item-pencil-red",
    title: "赤鉛筆のイラスト",
    description: "小学校で使える赤鉛筆のフリーイラスト素材です。",
    png: "/images/item/png/item_pencil_red.png",
    svg: "/images/item/svg/item_pencil_red.svg",
    line_png: "/images/item/line_png/item_pencil_red.png",
    line_svg: "/images/item/line_svg/item_pencil_red.svg",
    character: "item",
  },
  {
    slug: "item-pencil-short",
    title: "短い鉛筆のイラスト",
    description: "小学校で使える短い鉛筆のフリーイラスト素材です。",
    png: "/images/item/png/item_pencil_short.png",
    svg: "/images/item/svg/item_pencil_short.svg",
    line_png: "/images/item/line_png/item_pencil_short.png",
    line_svg: "/images/item/line_svg/item_pencil_short.svg",
    character: "item",
  },
  {
    slug: "item-eraser-basic",
    title: "消しゴムのイラスト",
    description: "小学校で使える消しゴムのフリーイラスト素材です。",
    png: "/images/item/png/item_eraser_basic.png",
    svg: "/images/item/svg/item_eraser_basic.svg",
    line_png: "/images/item/line_png/item_eraser_basic.png",
    line_svg: "/images/item/line_svg/item_eraser_basic.svg",
    character: "item",
  },
  {
    slug: "item-eraser-diagonal",
    title: "消しゴム（斜め）のイラスト",
    description: "小学校で使える消しゴム（斜め）のフリーイラスト素材です。",
    png: "/images/item/png/item_eraser_diagonal.png",
    svg: "/images/item/svg/item_eraser_diagonal.svg",
    line_png: "/images/item/line_png/item_eraser_diagonal.png",
    line_svg: "/images/item/line_svg/item_eraser_diagonal.svg",
    character: "item",
  },
  {
    slug: "item-randoseru-front-black",
    title: "ランドセル（黒・正面）のイラスト",
    description: "小学校で使えるランドセル（黒・正面）のフリーイラスト素材です。",
    png: "/images/item/png/item_randoseru_front_black.png",
    svg: "/images/item/svg/item_randoseru_front_black.svg",
    line_png: "/images/item/line_png/item_randoseru_front_black.png",
    line_svg: "/images/item/line_svg/item_randoseru_front_black.svg",
    character: "item",
  },
  {
    slug: "item-randoseru-front-red",
    title: "ランドセル（赤・正面）のイラスト",
    description: "小学校で使えるランドセル（赤・正面）のフリーイラスト素材です。",
    png: "/images/item/png/item_randoseru_front_red.png",
    svg: "/images/item/svg/item_randoseru_front_red.svg",
    line_png: "/images/item/line_png/item_randoseru_front_red.png",
    line_svg: "/images/item/line_svg/item_randoseru_front_red.svg",
    character: "item",
  },
  {
slug: "item-randoseru-diagonal-black",
title: "ランドセル（黒・斜め）のイラスト",
description: "小学校で使えるランドセルのフリーイラスト素材です。",
png: "/images/item/png/item_randoseru_diagonal_black.png",
svg: "/images/item/svg/item_randoseru_diagonal_black.svg",
line_png: "/images/item/line/png/item_randoseru_diagonal_black.png",
line_svg: "/images/item/line/svg/item_randoseru_diagonal_black.svg",
character: "item"
},

{
slug: "item-randoseru-diagonal-red",
title: "ランドセル（赤・斜め）のイラスト",
description: "小学校で使えるランドセルのフリーイラスト素材です。",
png: "/images/item/png/item_randoseru_diagonal_red.png",
svg: "/images/item/svg/item_randoseru_diagonal_red.svg",
line_png: "/images/item/line/png/item_randoseru_diagonal_red.png",
line_svg: "/images/item/line/svg/item_randoseru_diagonal_red.svg",
character: "item"
},
{
slug: "item-randoseru-diagonal2-black",
title: "ランドセル（黒・斜め2）のイラスト",
description: "小学校で使えるランドセルのフリーイラスト素材です。",
png: "/images/item/png/item_randoseru_diagonal2_black.png",
svg: "/images/item/svg/item_randoseru_diagonal2_black.svg",
line_png: "/images/item/line/png/item_randoseru_diagonal2_black.png",
line_svg: "/images/item/line/svg/item_randoseru_diagonal2_black.svg",
character: "item"
},
{
slug: "item-randoseru-diagonal2-red",
title: "ランドセル（赤・斜め2）のイラスト",
description: "小学校で使えるランドセルのフリーイラスト素材です。",
png: "/images/item/png/item_randoseru_diagonal2_red.png",
svg: "/images/item/svg/item_randoseru_diagonal2_red.svg",
line_png: "/images/item/line/png/item_randoseru_diagonal2_red.png",
line_svg: "/images/item/line/svg/item_randoseru_diagonal2_red.svg",
character: "item"
}
];
export const allIllustrations: Illustration[] = [
  ...illustrations,
  ...itemIllustrations,
];