import { GetStaticPaths, GetStaticProps } from 'next';
import { ScorePage } from '../../containers/ScorePage';

type ScorePageProps = {
  score: number;
};

type ContextType = {
  params: {
    score: string;
  };
};

export default function Score({ score }: ScorePageProps) {
  return <ScorePage score={score} />;
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: ContextType) => {
  return {
    props: {
      score: params.score,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [];
  for (let x = 0; x < 6; x++) {
    paths.push({ params: { score: `${x}` } });
  }

  return {
    paths: paths,
    fallback: false,
  };
};
