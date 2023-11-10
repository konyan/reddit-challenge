
import { AcademicCapIcon, ArrowTrendingUpIcon, BookOpenIcon, BriefcaseIcon, CurrencyRupeeIcon, GlobeAltIcon, HeartIcon, HomeIcon, InformationCircleIcon, MegaphoneIcon, MusicalNoteIcon,  PuzzlePieceIcon, ScissorsIcon, TvIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import DropDownMenu from '../DropDownMenu/DropDownMenu'


const HOME_MENUS = [
  {
    name: 'Home',
    icon: <HomeIcon className='w-4 h-4'/>
  },
  {
    name: 'Popular',
    icon : <ArrowTrendingUpIcon className='w-4 h-4'/>
  }
]

const iconStyle ="w-4 h-4 inline-block"

const MENUS = [
  {
    title: 'Recent',
    data :[
      {
        name: 'Gaming',
        href: '/gaming',
        icon: <PuzzlePieceIcon className={iconStyle}/>,
        current: false,
        subChild:true,
        sub_menus:[
          {
            name: 'Dota 2',
            href: '/Dota2',
          },
          {
            name: 'Minecraft',
            href: '/minecraft',
          },
          {
            name: 'Valorant',
            href: '/valorant',
          }
        ]
      },
      {
        name: 'Sports',
        href: '/sports',
        icon: <GlobeAltIcon className={iconStyle}/>,
        current: false,
        subChild:false,
      },
      {
        name: 'Business',
        href: '/business',
        icon: <BriefcaseIcon className={iconStyle}/>,
        current: false,
        subChild:false,
      },
      {
        name: 'Crypto',
        href: '#',
        icon: <CurrencyRupeeIcon className={iconStyle}/>,
        current: false,
        subChild:false,

      },
      {
        name:'Technology',
        href: '#',
        icon: <TvIcon className={iconStyle}/>,
        current: false,
        subChild:false,

      },
      {
        name:'Entertainment',
        href: '#',
        icon: <MusicalNoteIcon className={iconStyle}/>,
        current: false,
        subChild:false,

      },
      {
        name:'Science',
        href: '#',
        icon: <AcademicCapIcon className={iconStyle}/>,
        current: false,
        subChild:false,

      },
      {
        name:'Health',
        href: '#',
        icon: <HeartIcon className={iconStyle}/>,
        current: false,
        subChild:false,

      }
    ]
  },
  {
    title: "Resources",
    data:[
      {
        name: 'About Reddit',
        href: '/gaming',
        icon: <ScissorsIcon className={iconStyle}/>,
        current: false,
        subChild:false,
      },
      {
        name: 'Advertise',
        href: '/gaming',
        icon: <MegaphoneIcon className={iconStyle}/>,
        current: false,
        subChild:false,
      },
      {
        name: 'Help',
        href: '/gaming',
        icon: <InformationCircleIcon className={iconStyle}/>,
        current: false,
        subChild:false,
      },
      {
        name: 'Blog',
        href: '/gaming',
        icon: <BookOpenIcon className={iconStyle}/>,
        current: false,
        subChild:false,
      },{
        name: 'Careers',
        href: '/gaming',
        icon: <UserGroupIcon className={iconStyle}/>,
        current: false,
        subChild:false,
      }
    ]
  }
]

const SideMenu =() =>{
  return(
    <nav className="side-menu">
      <ul className='pb-4 flex flex-col gap-2 border-b border-gray-200'>
        {HOME_MENUS.length && HOME_MENUS.map(home_menu =>{
          return(
            <li key={home_menu.name} className='cursor-pointer w-full flex items-center hover:bg-gray-50 px-2.5 rounded-lg py-3 pl-6'>
              {home_menu.icon} <small className='ml-5 text-base'>{home_menu.name}</small>
            </li>
          )
        })}
      </ul>

      <section>
        {
          MENUS.length && MENUS.map(menu =><DropDownMenu menu={menu} key={menu.title}/>)
        }
      </section>
    </nav>
  )
}

export default SideMenu;