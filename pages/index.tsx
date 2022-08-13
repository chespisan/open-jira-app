import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { EntryList } from '../components/ui'



const HomePage: NextPage = () => {
  return (
  <Layout title='Home - OpenJira'>
    <Grid container spacing={2}>
      
      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title='pendientes' />

          {/* Se puede eliminar el card content - otro diseno */}
          <CardContent> 
            <EntryList />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title='pendientes' />
        </Card>
      </Grid>

      <Grid item xs={12} sm={4}>
        <Card sx={{ height: 'calc(100vh - 100px)' }}>
          <CardHeader title='pendientes' />
        </Card>
      </Grid>

    </Grid>
  </Layout>
  )
}

export default HomePage
