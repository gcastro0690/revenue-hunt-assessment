import './App.css'
import '@shopify/polaris/build/esm/styles.css'
import LeftColumn from './components/LeftColumn'
import RightColumn from './components/RightColumn'
import { AppProvider, Grid, Page } from '@shopify/polaris'
import CentralColumn from './components/CentralColumn'
import enTranslations from '@shopify/polaris/locales/en.json'
import { useState } from 'react'

function App() {
  const [cssStyle, setCssStyle] = useState('button{ border-radius: 0px; }')

  return (
    <AppProvider i18n={enTranslations}>
      <div className="App">
        <Page>
          <Grid>
            <Grid.Cell columnSpan={{ xs: 6, sm: 2, lg: 2 }}>
              <LeftColumn />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 4, lg: 8 }}>
              <CentralColumn cssStyle={cssStyle} />
            </Grid.Cell>
            <Grid.Cell columnSpan={{ xs: 6, sm: 2, lg: 2 }}>
              <RightColumn setCssStyle={setCssStyle} cssStyle={cssStyle} />
            </Grid.Cell>
          </Grid>
        </Page>
      </div>
    </AppProvider>
  )
}

export default App
