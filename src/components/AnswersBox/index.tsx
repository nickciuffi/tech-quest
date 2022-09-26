import { AnswersProps } from '../../types/questionary';
import { Answer } from '../Answer';
import style from './styles.module.scss';

export type AnswersBoxProps = {
  answers: AnswersProps[];
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
    console.log(userAnswers);
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
