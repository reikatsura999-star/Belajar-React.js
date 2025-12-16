// App.jsx (Menggabungkan ThemeContext dan UserContext)
import ThemeProvider from './context/ThemeProvider'; // Dari contoh sebelumnya
import UserProvider from './context/UserProvider';
import ThemedButton from './components/ThemedButton'; // Dari contoh sebelumnya
import ThemedParagraph from './components/ThemedParagraph'; // Dari contoh sebelumnya
import UserInfoDisplay from './components/UserinfoDisplay';

function App() {
  return (
    <ThemeProvider> {/* Provider pertama */}
      <UserProvider> {/* Provider kedua */}
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Aplikasi dengan Multiple Contexts</h2>
          <ThemedButton />
          <ThemedParagraph />
          <hr />
          <UserInfoDisplay />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;