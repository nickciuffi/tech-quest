import { HomePage } from '../containers/HomePage';

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
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://35.238.25.150');
  const quests = await res.json();

  return {
    props: {
      quests,
    },
  };
}
