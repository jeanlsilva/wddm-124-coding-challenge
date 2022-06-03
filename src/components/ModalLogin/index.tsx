import { useRef, useCallback, FormEvent } from 'react';
import Modal from '../Modal';
import { Form, Error } from './styles';

interface ModalLoginProps {
  isOpen: boolean;
  setIsOpen: () => void;
  signIn: (loginCredentials) => void;
  error: string;
}

const ModalLogin = ({
  isOpen,
  setIsOpen,
  signIn,
  error,
}: ModalLoginProps): JSX.Element => {
  const formRef = useRef(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSignIn = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      signIn({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      /*
      if (error.length > 1) {
        setIsOpen();
      }
      */
    },
    [signIn],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSignIn}>
        <h2>Login with your account</h2>
        <input
          type="text"
          ref={emailInputRef}
          name="email"
          placeholder="Email"
        />
        <input
          type="password"
          ref={passwordInputRef}
          name="password"
          placeholder="Password"
        />

        <button type="submit">Login</button>
        {error && <Error>{error}</Error>}
      </Form>
    </Modal>
  );
};

export default ModalLogin;
