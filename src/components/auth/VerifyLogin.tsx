import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../Context/AuthContext';

const VerifyLogin = () => {
  const [status, setStatus] = useState('Verifying...');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const verifyToken = async () => {
      const token = searchParams.get('token');
      const userId = searchParams.get('userId');

      if (!token || !userId) {
        setStatus('Invalid verification link.');
        return;
      }

      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/auth/verify-token`, {
            token,  userId
        });

        console.log('Verified:', response.data);

        
        //Setting auth context
        login(response.data.user); 
        setStatus('Login verified successfully! Redirecting...');

        setTimeout(() => navigate('/dashboard'), 2000);
      } catch (error) {
        console.error('Verification Error:', axios.isAxiosError(error) ? error.response?.data || error.message : (error as Error).message);
        setStatus('Verification failed. The link may be expired or invalid.');
      }
    };

    verifyToken();
  }, [searchParams, navigate, login]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>{status}</h2>
    </div>
  );
};

export default VerifyLogin;