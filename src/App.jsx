import RootHeader from './components/RootHeader/RootHeader';
import RootLayout from './components/RootLayout/RootLayout';
import AuthRoute from './routes/AuthRoute';
import RecipeRoute from './routes/RecipeRoute';

function App() {




  return (
    <>
      <RootLayout>
        <RootHeader>
          <AuthRoute />
          <RecipeRoute />
        </RootHeader>
      </RootLayout>

    </>
  );
}

export default App;
