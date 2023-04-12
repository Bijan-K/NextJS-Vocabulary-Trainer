import Layout from '@/components/Layout';
import MainHolder from '@/components/MainHolder';
import InfoButton from '@/components/InfoButton';
import ButtonHolder from '@/components/ButtonHolder';

export default function Home() {
  return (
    <Layout>
      <ButtonHolder />
      <MainHolder />
      <InfoButton />
    </Layout>
  );
}
