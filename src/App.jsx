import RootContainer from './components/RootContainer/RootContainer';
import RootFooter from './components/RootFooter/RootFooter';
import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import AuthRoute from './routes/AuthRoute';
import RecipeRoute from './routes/RecipeRoute';

function App() {




  return (
    <>
      <RootLayout>
        <RootHeader />
          <RootContainer >
            <AuthRoute />
            <RecipeRoute />
          </RootContainer>
        <RootFooter />
      </RootLayout>

    </>
  );
}

export default App;
