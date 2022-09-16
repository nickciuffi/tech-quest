import Header from '../../components/Header';
import { Questionaries } from '../../components/Questionaries';
import styles from './styles.module.scss';

type HomePageProps = {
  quests: [
    {
      id: number;
      title: string;
      description: string;
    },
  ];
};

export function HomePage(props: HomePageProps) {
  return (
    <>
      <Header theme={'blue'} />
      <div className={styles.container}>
        <div className={styles.title}>QUESTIONARIES</div>
        <Questionaries quests={props.quests} />
      </div>
    </>
  );
}
