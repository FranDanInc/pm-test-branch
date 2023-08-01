import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Students/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';

import AccountBalance from '@/content/Dashboards/Students/AccountBalance';
import Wallets from '@/content/Dashboards/Students/Wallets';
import AccountSecurity from '@/content/Dashboards/Students/AccountSecurity';
import WatchList from '@/content/Dashboards/Students/WatchList';

function DashboardStudents() {
  return (
    <>
      <Head>
        <title>Student Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardStudents.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardStudents;
