import Link from 'next/link';
import Header from '../../components/Header';
import { qtdQuestions } from '../../config/appConfig';
import style from './styles.module.scss';

export function ScorePage({ score }: { score: number }) {
  const isGood = score > qtdQuestions * 0.6;
  return (
    <>
      <Header theme={isGood ? 'green' : 'red'} />
      <div className={`${style.container} ${style[isGood ? 'green' : 'red']}`}>
        <p className={style.title}>
          {isGood ? 'You are a MASTER' : 'You are BAD'}
        </p>
        <h1>
          Your score is {score}/{qtdQuestions}
        </h1>
        <Link href={'/'}>
          <button
            className={`${style['try-another']} ${
              style[isGood ? 'green' : 'red']
            }`}
          >
            Try another Quiz
          </button>
        </Link>
      </div>
    </>
  );
}
