import Link from 'next/link';
import { QuestionProps } from '../../types/questionary';
import style from './styles.module.scss';

type MainGameHeaderProps = {
  data: QuestionProps[];
  page: number;
};

export function MainGameHeader({ data, page }: MainGameHeaderProps) {
  function getPage() {
    return `${page + 1}/${data.length}`;
  }

  return (
    <div className={style.header}>
      <Link href={'/'}>
        <button className={style['exit-btn']}>EXIT</button>
      </Link>
      <h2 className={style.title}>{data[page].text}</h2>
      <h2 className={style['quest-btn']}>{getPage()}</h2>
    </div>
  );
}
