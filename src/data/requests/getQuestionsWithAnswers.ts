import axios, { AxiosError, AxiosResponse } from 'axios';
import { apiLocation } from '../../config/appConfig';
import { QuestionWithAnswers } from '../../types/question';

export async function getQuestionsWithAnswers(
  id: string,
): Promise<QuestionWithAnswers[] | string> {
  try {
    const data = await axios.get<QuestionWithAnswers[]>(
      `${apiLocation}/questions/questionary/with-ans/${id}`,
    );
    return data.data;
  } catch (e) {
    const errors = e as AxiosError | Error;
    if (!axios.isAxiosError(errors)) {
      return errors.message;
    }
    return 'something went wrong';
  }
}
