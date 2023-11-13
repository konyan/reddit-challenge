import {
  ArrowTrendingUpIcon,
  BriefcaseIcon,
  CurrencyRupeeIcon,
  GlobeAltIcon,
  HomeIcon,
  MegaphoneIcon,
  PuzzlePieceIcon,
  ScissorsIcon,
} from '@heroicons/react/24/outline'
import DropDownMenu from '../DropDownMenu/DropDownMenu'
import { Link } from 'react-router-dom'

const HOME_MENUS = [
  {
    name: 'Home',
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    name: 'Popular',
    icon: <ArrowTrendingUpIcon className="h-4 w-4" />,
  },
]

const iconStyle = 'w-4 h-4 inline-block'

const MENUS = [
  {
    title: 'Recent',
    data: [
      {
        name: 'Gaming',
        href: '/gaming',
        icon: <PuzzlePieceIcon className={iconStyle} />,
        current: false,
        subChild: true,
        sub_menus: [
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
          },
        ],
      },
      {
        name: 'Sports',
        href: '/sports',
        icon: <GlobeAltIcon className={iconStyle} />,
        current: false,
        subChild: false,
      },
      {
        name: 'Business',
        href: '/business',
        icon: <BriefcaseIcon className={iconStyle} />,
        current: false,
        subChild: false,
      },
      {
        name: 'Crypto',
        href: '#',
        icon: <CurrencyRupeeIcon className={iconStyle} />,
        current: false,
        subChild: false,
      },
      /* {
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

      } */
    ],
  },
  {
    title: 'Resources',
    data: [
      {
        name: 'About Reddit',
        href: '/gaming',
        icon: <ScissorsIcon className={iconStyle} />,
        current: false,
        subChild: false,
      },
      {
        name: 'Advertise',
        href: '/gaming',
        icon: <MegaphoneIcon className={iconStyle} />,
        current: false,
        subChild: false,
      },
      /*  {
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
      } */
    ],
  },
]

const SideMenu = () => {
  return (
    <nav className="side-menu">
      <ul className="flex flex-col gap-2 border-b border-gray-200 pb-4">
        {HOME_MENUS.length &&
          HOME_MENUS.map((home_menu) => {
            return (
              <Link to="/"
                key={home_menu.name}
              >
                <li
                  onClick={() => console.log('clicked')}
                  className="flex w-full cursor-pointer items-center rounded-lg px-2.5 py-3 pl-6 hover:bg-gray-50"
                >
                  {home_menu.icon} <small className="ml-5 text-base">{home_menu.name}</small>
                </li>
              </Link>
            )
          })}
      </ul>

      <section>
        {MENUS.length && MENUS.map((menu) => <DropDownMenu menu={menu} key={menu.title} />)}
      </section>
    </nav>
  )
}

export default SideMenu
