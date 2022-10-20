import axios from 'axios';
import { apiLocation } from '../../config/appConfig';

type QuestionaryData = {
  id: number;
  title: string;
  description: string;
};

export async function getQuestionaries(
  query?: string,
): Promise<QuestionaryData[]> {
  const data = await axios.get<QuestionaryData[]>(
    `${apiLocation}/questionaries/${query ? query : ''}`,
  );
  return data.data as QuestionaryData[];
}
