import MegaNav from '../../components/megaNav/MegaNav';
import Header from '../../components/header/Header';
import PageStyled from './PageStyled';

const Page = ({ children }) => {
  return (
    <PageStyled>
      <Header />
      <MegaNav />
      {children}
    </PageStyled>
  );
}

export default Page;
