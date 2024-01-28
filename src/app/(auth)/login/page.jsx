import { handleGithubLogin } from '@/libs/actions';

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
    </div>
  );
};
export default LoginPage;
