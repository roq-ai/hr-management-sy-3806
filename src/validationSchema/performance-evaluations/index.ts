import * as yup from 'yup';

export const performanceEvaluationValidationSchema = yup.object().shape({
  evaluation_date: yup.date().required(),
  evaluation_score: yup.number().integer().required(),
  evaluation_comments: yup.string().required(),
  user_id: yup.string().nullable().required(),
  evaluator_id: yup.string().nullable().required(),
});
