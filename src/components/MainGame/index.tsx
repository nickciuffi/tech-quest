import style from './styles.module.scss';
import React, { useState } from 'react';
import { AnswersBox } from '../AnswersBox';
import { MainGameHeader } from '../MainGameHeader';
import { PageSetters } from '../PageSetters';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import { qtdQuestions } from '../../config/appConfig';
import { QuestionWithAnswers } from '../../types/question';

type MainGameProps = {
  data: QuestionWithAnswers[];
};

export function MainGame({ data }: MainGameProps) {
  const [page, setPage] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const answers = data.length > 0 ? data[page].answers : [];
  const router = useRouter();

  function getCorrectAnswers(questions: QuestionWithAnswers[]): number[] {
    const corrects = questions.map((quest) =>
      quest.answers.reduce((acum, ans) => {
        if (ans.is_correct) {
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
    if (userAnswers.length < qtdQuestions) {
      return Swal.fire({
        title:
          'Are you sure you want to finish this questionary with answers missing?',
        showDenyButton: false,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Finish',
      }).then((result) => {
        if (result.isConfirmed) {
          const correctAnswers = getCorrectAnswers(data);
          const score = getFinalScore(correctAnswers, userAnswers);
          router.push(`/result/${score}`);
        }
      });
    }
    Swal.fire({
      title: 'Are you sure you want to finish this questionary?',
      showDenyButton: false,
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Finish',
    }).then((result) => {
      if (result.isConfirmed) {
        const correctAnswers = getCorrectAnswers(data);
        const score = getFinalScore(correctAnswers, userAnswers);
        router.push(`/result/${score}`);
      }
    });
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
    </div>
  );
}
