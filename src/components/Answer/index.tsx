import { AnswerProps } from '../../types/answer';
import style from './styles.module.scss';

type AnswersProps = {
  ans: AnswerProps;
  changeAnswer: (id: number) => void;
  isChecked: boolean;
};

export function Answer({ ans, changeAnswer, isChecked }: AnswersProps) {
  function handleClick() {
    const checkboxes = document.querySelectorAll('.checkbox');
    Array.from(checkboxes).map((check: HTMLInputElement) => {
      check.checked = false;
    });
    const checkboxToSelect = document.querySelector(
      `#checkbox${ans.id}`,
    ) as HTMLInputElement;
    checkboxToSelect.checked = true;

    changeAnswer(ans.id);
  }

  return (
    <div onClick={handleClick} className={style.answer}>
      <p className={style.text}>{ans.text}</p>
      <input
        checked={isChecked}
        className="checkbox"
        id={`checkbox${ans.id}`}
        type="checkbox"
      />
      <label htmlFor={`checkbox${ans.id}`} />
    </div>
  );
}
