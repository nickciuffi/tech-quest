import { Questionaries } from '../../components/Questionaries';
import styles from './styles.module.scss';

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Tech Quest</h2>
        <Questionaries />
      </div>
    </div>
  );
}
