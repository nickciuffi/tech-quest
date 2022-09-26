export type QuestProps = {
  data: {
    id: number;
    title: string;
    desc: string;
    questions: [
      {
        id: number;
        text: string;
        answers: [
          {
            id: number;
            text: string;
            isCorrect: boolean;
          },
        ];
      },
    ];
  };
};
export type QuestionProps = {
  id: number;
  text: string;
  answers: [
    {
      id: number;
      text: string;
      isCorrect: boolean;
    },
  ];
};

export type AnswersProps = {
  id: number;
  text: string;
  isCorrect: boolean;
};
