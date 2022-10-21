import { GetStaticPaths, GetStaticProps } from 'next';
import { QuestionaryPage } from '../../containers/QuestionaryPage';
import { getQuestionaries } from '../../data/requests/getQuestionaries';
import { useRouter } from 'next/router';
import { getQuestionsWithAnswers } from '../../data/requests/getQuestionsWithAnswers';
import { QuestionWithAnswers } from '../../types/question';

type ContextType = {
  params: {
    id: string;
  };
};

type questProps = {
  questionary: {
    title: string;
    desc: string;
    questions: QuestionWithAnswers[];
  };
};

export default function Questionary(props: questProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return <QuestionaryPage questionary={props.questionary} />;
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: ContextType) => {
  let quests = await getQuestionsWithAnswers(params.id);
  if (typeof quests === 'string') {
    quests = [];
  }
  const quest = await getQuestionaries(params.id);
  return {
    props: {
      questionary: {
        title: quest[0].title,
        desc: quest[0].description,
        questions: quests,
      },
    },
    revalidate: 200,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allQuestionaries = await getQuestionaries();
  const paths = allQuestionaries.map((q) => ({
    params: { id: `${q.id}` },
  }));
  return {
    paths: paths,
    fallback: true,
  };
};
