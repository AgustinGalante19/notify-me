import { useState } from 'react';

export function useErrorAlert() {
  const [isShowed, setIsShowed] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showAlert = () => setIsShowed(true);
  const closeAlert = () => setIsShowed(false);
  const changeErrorMessage = (message: string) => setErrorMessage(message);

  return { isShowed, showAlert, closeAlert, changeErrorMessage, errorMessage };
}
