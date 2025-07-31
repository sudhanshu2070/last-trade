import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyLogin = () => {
  const [status, setStatus] = useState('Verifying...');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = searchParams.get('token');
      const userId = searchParams.get('userId');

      if (!token || !userId) {
        setStatus('Invalid verification link.');
        return;
      }

      try {
        const response = await axios.post(
          `${import.meta.env.BACKEND_API_URL}/api/auth/verify-token`,
          { token, userId },
          { withCredentials: true }
        );

        console.log('Verified:', response.data);

        setStatus('Login verified successfully! Redirecting...');
        setTimeout(() => navigate('/dashboard'), 2000);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error('Verification Error:', error.response?.data || error.message);
        } else {
          console.error('Verification Error:', (error as Error).message);
        }
        setStatus('Verification failed. The link may be expired or invalid.');
      }
    };

    verifyToken();
  }, [searchParams, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>{status}</h2>
    </div>
  );
};

export default VerifyLogin;