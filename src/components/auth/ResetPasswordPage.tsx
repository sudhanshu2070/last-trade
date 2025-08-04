import { useParams } from 'react-router-dom';
import PasswordForm from './authComponents/PasswordForm';

const ResetPasswordPage = () => {
  const { token } = useParams();

  return (
    <PasswordForm 
      mode="reset"
      token={token}
      title="Reset Your Password"
      description="Please enter your new password below"
    />
  );
};

export default ResetPasswordPage;