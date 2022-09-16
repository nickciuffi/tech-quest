import Link from 'next/link';
import styles from './styles.module.scss';
import { BsPlayFill } from 'react-icons/bs';

type QuestProps = {
  title: string;
  description: string;
  id: number;
};

export function Questionary(props: QuestProps) {
  return (
    <div className={styles.quest}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.desc}>{props.description}</div>
      <Link href={`/questionary/${props.id}`}>
        <button className={styles.buttonplay}>
          <BsPlayFill size={38} />
        </button>
      </Link>
    </div>
  );
}
