import Link from 'next/link';
import Image from 'next/image';
import { useCallback } from 'react';
import { Container, Content, Logo, Menu } from './styles';

interface HeaderProps {
  openModalLogin: () => void;
  openModalSignup: () => void;
  openModalCart: () => void;
  openModalAddProduct: () => void;
  user: User;
  signOut: () => void;
  total: number;
}

interface User {
  name: string;
  email: string;
  password: string;
}

const Header = ({
  openModalLogin,
  openModalSignup,
  openModalCart,
  openModalAddProduct,
  user,
  signOut,
  total,
}: HeaderProps): JSX.Element => {
  const handleSignOut = useCallback(() => {
    localStorage.removeItem('@penseapp:login');

    signOut();
  }, [signOut]);

  return (
    <Container>
      <Content>
        <Logo>
          <Link href="/">
            <a>
              <h1>Supershop</h1>
            </a>
          </Link>
        </Logo>
        <Menu>
          {openModalCart ? (
            <button type="button" onClick={openModalCart}>
              <Image
                src="/assets/images/cart.png"
                alt="cart"
                width="30px"
                height="30px"
              />
              {total > 0 && `(${total})`}
            </button>
          ) : (
            <button type="button" onClick={openModalAddProduct}>
              Add product
            </button>
          )}
          {user ? (
            <>
              <span>Welcome, {user.name}!</span>
              <button type="button" onClick={handleSignOut}>
                Logout
              </button>
            </>
          ) : (
            <>
              <button type="button" onClick={openModalLogin}>
                {user ? `Welcome, ${user.name}!` : 'Login'}
              </button>
              {!user && (
                <button type="button" onClick={openModalSignup}>
                  Sign up
                </button>
              )}
            </>
          )}
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;
