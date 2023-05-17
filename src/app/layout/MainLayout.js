import MainFooter from '../components/MainFooter'
import MainHeader from '../components/MainHeader'

export default function MainLayout({ children }) {

  
  return (
    <div>
      <MainHeader />
      {children}

      <MainFooter />
    </div>
  )
}
