import { AnswerProps } from '../../types/answer';
import { Answer } from '../Answer';
import style from './styles.module.scss';

export type AnswersBoxProps = {
  answers: AnswerProps[];
  userAnswers: number[];
  setUserAnswers: (ans: number[]) => void;
  questId: number;
};

export function AnswersBox({
  answers,
  userAnswers,
  setUserAnswers,
  questId,
}: AnswersBoxProps) {
  function changeAnswer(id: number) {
    const ansToChange = [...userAnswers];
    ansToChange[questId] = id;
    setUserAnswers(ansToChange);
  }

  return (
    <div className={style['answers-box']}>
      {answers.map((ans, key) => (
        <Answer
          isChecked={ans.id === userAnswers[questId]}
          changeAnswer={changeAnswer}
          ans={ans}
          key={key}
        />
      ))}
    </div>
  );
}
