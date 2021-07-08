import Header from '../components/Header'

const HomePageLayout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}
export default HomePageLayout