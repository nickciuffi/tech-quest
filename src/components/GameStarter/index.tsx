import style from './styles.module.scss';

type GameStartedProps = {
  desc: string;
  setIsGameStarted: (boolean) => void;
};

export function GameStarter({ desc, setIsGameStarted }: GameStartedProps) {
  return (
    <div className={style.container}>
      <div className={style.desc}>{desc}</div>
      <button
        onClick={() => setIsGameStarted(true)}
        className={style.startbutton}
      >
        START QUIZ
      </button>
    </div>
  );
}
