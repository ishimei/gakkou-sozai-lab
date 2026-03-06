export type Illustration = {
  slug: string;
  title: string;
  description: string;
  png: string;
  svg: string;
  character: string;
  emotion: string;
  pose: string;
  action: string;
  grade: number;
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