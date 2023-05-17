import Layout from '@/components/Layout';
import MainHolder from '@/components/MainHolder';
import ButtonHolder from '@/components/ButtonHolder';
import ListContainer from '@/components/listBox/ListContainer';

export default function Home() {
  return (
    <Layout>
      <ButtonHolder />
      <MainHolder />
      <ListContainer />
    </Layout>
  );
}
