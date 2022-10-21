import Header from '../../components/Header';
import style from './styles.module.scss';
import { useState } from 'react';
import { GameStarter } from '../../components/GameStarter';
import { MainGame } from '../../components/MainGame';
import { QuestionWithAnswers } from '../../types/question';

type questProps = {
  questionary: {
    title: string;
    desc: string;
    questions: QuestionWithAnswers[];
  };
};

export function QuestionaryPage(props: questProps) {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  function hasCompleteAnswers(q: QuestionWithAnswers[]): boolean {
    let hasComplete = true;
    q.forEach((quest) => {
      if (quest.answers.length !== 4) {
        hasComplete = false;
        return;
      }
    });
    return hasComplete;
  }

  return (
    <>
      <Header theme="purple" />
      <div className={style.container}>
        {props.questionary ? (
          <>
            <h1 className={style.title}>{props.questionary.title}</h1>

            {isGameStarted ? (
              props.questionary.questions.length > 3 &&
              hasCompleteAnswers(props.questionary.questions) ? (
                <MainGame data={props.questionary.questions} />
              ) : (
                <h3 style={{ marginTop: '20px' }}>
                  This Questionary has no Questions yet
                </h3>
              )
            ) : (
              <GameStarter
                setIsGameStarted={setIsGameStarted}
                desc={props.questionary.desc}
              />
            )}
          </>
        ) : (
          <h1>This questionary is not available</h1>
        )}
      </div>
    </>
  );
}
