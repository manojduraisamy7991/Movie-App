import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { useSelector } from 'react-redux';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieCard from '../componets/MovieCard';
import Paginations from '../componets/Paginations';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchInput from '../componets/SearchInput';
import Loader from '../componets/Loader';

function NotFound() {
  return (
    <Typography variant="h6" align="center" gutterBottom>
      No Results
    </Typography>
  );
}
const defaultTheme = createTheme();

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [actorName, setActorName] = useState('');
  const [options, setOptions] = React.useState([]);
  const searchResultListData = useSelector(
    (state) => state.searchActorListData
  );
  const data = searchResultListData?.data;
  const currentPageData =
    data.length > 0 ? data.slice((currentPage - 1) * 6, currentPage * 6) : [];

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LiveTvIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            MyFilmApp
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            {' '}
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <SearchInput
                options={options}
                setOptions={setOptions}
                setActorName={setActorName}
              />
            </Stack>
          </Container>
        </Box>
        {searchResultListData.loading ? (
          <Loader />
        ) : (
          <Container sx={{ py: 8 }} maxWidth="md">
            {data && data.length > 0 && (
              <Grid container spacing={4}>
                {currentPageData.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <MovieCard data={card} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Container>
        )}
        {data && data.length > 0 && (
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Paginations
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              count={data.length}
              data={data.length > 0 ? searchResultListData?.data : []}
              perPage={6}
            />
          </Stack>
        )}
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        {actorName && data.length == 0 && <NotFound />}
      </Box>
    </ThemeProvider>
  );
}
