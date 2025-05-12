import './shared/styles/styles.css'
import Header from './moduls/layouts/Header/Header'
import Theme from './context/Theme'
import PageLayout from './moduls/layouts/PageLayout/PageLayout'
import Navigation from './pages/Navigation'
import Footer from './moduls/layouts/Footer/Footer'


function App() {

  return (
    <>
      <Theme>
        <PageLayout>
          <Header />
          <Navigation />
          <Footer />
        </PageLayout>
      </Theme>
    </>
  )
}

export default App
