import { GetStaticPaths, GetStaticProps } from 'next';
import { QuestionaryPage } from '../../containers/QuestionaryPage';
import {
  getAllQuestionaries,
  getQuestionaries,
} from '../../data/requests/getQuestionaries';
import { QuestProps } from '../../types/questionary';

type ContextType = {
  params: {
    id: string;
  };
};

export default function Questionary(props: QuestProps) {
  return <QuestionaryPage data={props.data} />;
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: ContextType) => {
  const quest = await getQuestionaries(params.id);
  return {
    props: {
      data: quest,
    },
    revalidate: 200,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allQuestionaries = await getAllQuestionaries();
  const paths = allQuestionaries.map((q) => ({
    params: { id: `${q.id}` },
  }));
  console.log(paths);
  return {
    paths: paths,
    fallback: true,
  };
};
