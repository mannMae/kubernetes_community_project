import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <Layout title="로그인">
      <LoginForm onSuccess={() => navigate('/')} />
    </Layout>
  );
};
