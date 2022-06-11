import 'antd/dist/antd.css';
import {
  Layout,
  PageHeader,
  Typography,
  Divider
} from 'antd'
import { FilteringSection } from '../../components/FilteringSection'
import { ComparativeSection } from '../../components/ComparativeSection'
import { ResetSection } from '../../components/ResetSection'
import PokemonDetailsProvider from '../../components/PokemonDetailsProvider'

export const App = () => {
  
  return (
    <PokemonDetailsProvider>
      <Layout>
        <PageHeader><Typography.Title style={{textAlign: "center"}}>Pokémon React Exercise</Typography.Title></PageHeader>
        
        {/* Filtering section */}
        <FilteringSection />

        <Divider />

        {/* Comparative section goes here */}
        <ComparativeSection />

        <Divider />

        <ResetSection />

      </Layout>
    </PokemonDetailsProvider>
  );
}