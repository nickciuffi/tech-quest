import { Questionary } from '../Questionary';
import styles from './styles.module.scss';

type QuestionariesProps = {
  quests: [
    {
      id: number;
      title: string;
      description: string;
    },
  ];
};

export function Questionaries(props: QuestionariesProps) {
  return (
    <div className={styles.quests}>
      {props.quests.length > 0
        ? props.quests.map((quest, id) => {
            return (
              <Questionary
                id={quest.id}
                title={quest.title}
                description={quest.description}
                key={id}
              />
            );
          })
        : 'No Questionaries available'}
    </div>
  );
}
