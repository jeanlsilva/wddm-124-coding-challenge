import { useRef, useCallback, FormEvent } from 'react';
import Modal from '../Modal';
import { Form, Error } from './styles';

interface ModalSignupProps {
  isOpen: boolean;
  setIsOpen: () => void;
  signUp: (signUpCredentials) => void;
  error: string;
}

const ModalSignup = ({
  isOpen,
  setIsOpen,
  signUp,
  error,
}: ModalSignupProps): JSX.Element => {
  const formRef = useRef(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleSignIn = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      signUp({
        name: nameInputRef.current.value,
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
      });
      /*
      if (error.length > 1) {
        setIsOpen();
      }
      */
    },
    [signUp],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSignIn}>
        <h2>Login with your account</h2>
        <input type="text" ref={nameInputRef} name="name" placeholder="Name" />
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

        <button type="submit">Sign up</button>
        {error && <Error>{error}</Error>}
      </Form>
    </Modal>
  );
};

export default ModalSignup;
