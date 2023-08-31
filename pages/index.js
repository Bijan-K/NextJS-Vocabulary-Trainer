import Layout from '@/components/Layout';
import MainDisplay from '@/components/MainDisplay';
import ListContainer from '@/components/MenuContainer/MenuContainer';
import MainButtonsContainer from '@/components/MainButtonsContainer';
import WordsContext from '@/context/WordsContext';
import TopButtonsContainer from '@/components/TopButtonsContainer';
import { useContext } from 'react';
import AddListButton from '@/components/AddListButton';
import GuideCard from '@/components/GuideCard';

export default function Home() {
  const { showMenu } = useContext(WordsContext);

  return (
    <Layout>
      {showMenu ? <ListContainer /> : null}
      <TopButtonsContainer />
      <MainDisplay />
      <MainButtonsContainer />
      <GuideCard />
      <AddListButton />
    </Layout>
  );
}
