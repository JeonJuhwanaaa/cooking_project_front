import RootContainer from './components/RootContainer/RootContainer';
import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import AuthRoute from './routes/AuthRoute';
import RecipeRoute from './routes/RecipeRoute';

function App() {




  return (
    <>
      <RootLayout>
        <RootHeader>
          <RootContainer>
            <AuthRoute />
            <RecipeRoute />
          </RootContainer>
        </RootHeader>
      </RootLayout>

    </>
  );
}

export default App;
