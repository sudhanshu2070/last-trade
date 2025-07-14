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
          `${import.meta.env.VITE_API_URL}/api/auth/verify-token`,
          { token, userId },
          { withCredentials: true }
        );

        // for debugging and testing purposes
        console.log(response.data);
        if (response.data.success) {    
            alert('Verification successful! You can now log in.');
        } else {    
            setStatus('Verification failed. Please try again.');
            return;
        }

        setStatus('Login successful! Redirecting...');
        setTimeout(() => navigate('/dashboard'), 2000);
      } catch (error) {
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
