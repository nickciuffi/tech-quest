import style from './styles.module.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

type PageSettersProps = {
  setPage: (page: number) => void;
  page: number;
  amountOfQuestions: number;
  finishQuestionary: () => void;
};

export function PageSetters({
  setPage,
  page,
  amountOfQuestions,
  finishQuestionary,
}: PageSettersProps) {
  const goesToLeft = page > 0;
  const goesToRight = page + 1 < amountOfQuestions;

  function handlePageChange(dir: number) {
    if (dir === -1 && goesToLeft) {
      setPage(page - 1);
    }
    if (dir === 1 && goesToRight) {
      setPage(page + 1);
    }
  }

  return (
    <div className={style.container}>
      <AiOutlineArrowLeft
        className={style.setter}
        size={64}
        onClick={() => handlePageChange(-1)}
        display={goesToLeft ? 'initial' : 'none'}
      />
      <AiOutlineArrowRight
        className={`${style.setter} ${style.right}`}
        size={64}
        onClick={() => handlePageChange(1)}
        display={goesToRight ? 'initial' : 'none'}
      />
      <button
        className={style['finish-btn']}
        style={{
          display: goesToRight ? 'none' : 'block',
        }}
        onClick={finishQuestionary}
      >
        FINISH
      </button>
    </div>
  );
}
