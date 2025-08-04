import PasswordForm from "./authComponents/PasswordForm";

const SetupPasswordPage = () => {
  return (
    <PasswordForm 
      mode="setup"
      title="Set Your Password"
      description="Please create a password for your account"
    />
  );
};

export default SetupPasswordPage;