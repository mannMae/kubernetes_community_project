import { useForm } from 'react-hook-form';

export const Form = ({ onSubmit, children, options, id }) => {
  const methods = useForm({ ...options });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  );
};
