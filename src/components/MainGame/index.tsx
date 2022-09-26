import { QuestionProps } from '../../types/questionary';
import style from './styles.module.scss';
import React, { useState } from 'react';
import { AnswersBox } from '../AnswersBox';
import { MainGameHeader } from '../MainGameHeader';
import { PageSetters } from '../PageSetters';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';

type MainGameProps = {
  data: QuestionProps[];
};

export function MainGame({ data }: MainGameProps) {
  const [page, setPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const answers = data ? data[page].answers : [];
  const router = useRouter();

  function getCorrectAnswers(questions: QuestionProps[]): number[] {
    const corrects = questions.map((quest) =>
      quest.answers.reduce((acum, ans) => {
        if (ans.isCorrect) {
          return ans.id;
        }
        return acum + 0;
      }, 0),
    );
    return corrects;
  }

  function getFinalScore(correct: number[], user: number[]): number {
    const score = user.reduce((score, ans, index) => {
      if (ans === correct[index]) {
        return score + 1;
      }
      return score;
    }, 0);
    return score;
  }

  function finishQuestionary() {
    const correctAnswers = getCorrectAnswers(data);
    const score = getFinalScore(correctAnswers, userAnswers);
    router.push(`/result/${score}`);
  }

  return (
    <div className={style.container}>
      <MainGameHeader data={data} page={page} />
      <AnswersBox
        setUserAnswers={setUserAnswers}
        userAnswers={userAnswers}
        answers={answers}
        questId={page}
      />
      <PageSetters
        setPage={setPage}
        page={page}
        amountOfQuestions={data.length}
        finishQuestionary={finishQuestionary}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
