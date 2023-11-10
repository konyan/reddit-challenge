import Navbar from './components/Navbar/Navbar'
import SideMenu from './components/SideMenu/SideMenu'


export default function App() {
  return (
    <div className='px-4'>
      <Navbar/>
      <div className='grid grid-cols-4 gap-4 w-[80%] mx-auto mt-8'>
        <section className='col-span-1 h-full'>
          <SideMenu/>
        </section>
        <section className='col-span-2 bg-yellow-100'>section 2</section>
        <section className='col-span-1 bg-green-100'>section 3</section>
      </div>
    </div>
  )
}
