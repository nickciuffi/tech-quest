import { HomePage } from '../containers/HomePage';
import { getQuestionaries } from '../data/requests/getQuestionaries';

type HomeProps = {
  quests: [
    {
      id: number;
      title: string;
      description: string;
    },
  ];
};

export default function Home({ quests }: HomeProps) {
  return <HomePage quests={quests} />;
}

export async function getStaticProps() {
  const quests = await getQuestionaries();

  return {
    props: {
      quests,
    },
    revalidate: 10,
  };
}
