import Layout from '@/components/Layout';
import MainDisplay from '@/components/MainDisplay';
import ResetButton from '@/components/ResetButton';
import MenuButton from '@/components/MenuButton';
import MainButtonsContainer from '@/components/MainButtonsContainer';

export default function Home() {
  return (
    <Layout>
      <MenuButton />
      <ResetButton />
      <MainDisplay />
      <MainButtonsContainer />
    </Layout>
  );
}
