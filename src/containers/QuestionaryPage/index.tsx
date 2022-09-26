import Header from '../../components/Header';
import { QuestProps } from '../../types/questionary';
import style from './styles.module.scss';
import { useState } from 'react';
import { GameStarter } from '../../components/GameStarter';
import { MainGame } from '../../components/MainGame';

export function QuestionaryPage(props: QuestProps) {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

  return (
    <>
      <Header theme="purple" />
      <div className={style.container}>
        {props.data.questions ? (
          <>
            <h1 className={style.title}>{props.data.title}</h1>

            {isGameStarted ? (
              <MainGame data={props.data.questions} />
            ) : (
              <GameStarter
                setIsGameStarted={setIsGameStarted}
                desc={props.data.desc}
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
