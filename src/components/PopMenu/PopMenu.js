import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FolderIcon } from '@heroicons/react/24/outline'

const PopMenu = ({ icon, text, active, menuItems }) => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-300">
            {text}
            {icon}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              {menuItems.map((item, index) => (
                <Menu.Item key={index}>
                  <button
                    onClick={item.onClick}
                    className={`${
                      item.active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100 focus:outline-none`}
                  >
                    {item.icon}
                    {item.text}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

PopMenu.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.element,
  active: PropTypes.string,
  menuItems: PropTypes.array.isRequired,
}

function EditInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  )
}

export default PopMenu
