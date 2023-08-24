import * as yup from 'yup';

export const payrollValidationSchema = yup.object().shape({
  salary: yup.number().integer().required(),
  deductions: yup.number().integer().required(),
  net_pay: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
});
