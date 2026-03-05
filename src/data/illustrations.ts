export type Illustration = {
  slug: string;
  title: string;
  description: string;
  image: string;
  character: string;
  emotion: string;
  pose: string;
  grade: number;
};

const poses = ["standA", "standB", "standC", "standD", "standE"];
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
    image: `/images/girl01/png/girl01_${pose}_${emotion}.png`,
    character: "girl01",
    emotion,
    pose,
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