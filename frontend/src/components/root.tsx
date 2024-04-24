import React, { Suspense } from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fea500'
    }
  }
})

const paperContainer = {
  backgroundImage: 'url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/landscapes/trees-lining-a-sunny-field.jpg/trees-lining-a-sunny-field.jpg)',
  backgroundPosition: '50%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
}
export default function Root({
  children
}: Readonly<RootPageProps>): JSX.Element {
  return (
    <main>
      <Suspense>
        <ThemeProvider theme={theme}>
          <GlobalStyles
            styles={{
              html: { height: '100%' },
              body: {
                margin: 0,
                width: '100%',
                height: '100%'
              },
              main: {
                height: '100%'
              },
              '#__next': {
                height: '100%'
              },
              body1: {
                color: '#344238',
                fontSize: ' 1rem'
              }
            }}
          />
          <CssBaseline />
          <Paper style={paperContainer} component="section" id="mainContent">
            <Container maxWidth="md" sx={{ textAlign: 'center' }}>
              <Card variant="outlined">
                <CardContent>{children}</CardContent>
              </Card>
            </Container>
          </Paper>
        </ThemeProvider>
      </Suspense>
    </main>
  )
}

interface RootPageProps {
  children: JSX.Element
}
