import { Page } from '../styles/templates';
import { Header } from './Header';

export const Layout = (props: { children: JSX.Element }) => {
  return (
    <Page>
      <Header />
      {props.children}
    </Page>
  );
};
