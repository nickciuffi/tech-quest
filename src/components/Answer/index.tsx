import { AnswersProps } from '../../types/questionary';
import style from './styles.module.scss';

type AnswerProps = {
  ans: AnswersProps;
  changeAnswer: (id: number) => void;
  isChecked: boolean;
};

export function Answer({ ans, changeAnswer, isChecked }: AnswerProps) {
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
        onChange={() => console.log('I Changed')}
      />
      <label htmlFor={`checkbox${ans.id}`} />
    </div>
  );
}
