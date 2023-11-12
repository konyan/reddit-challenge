import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PropTypes from 'prop-types'

const PopMenu = ({ icon, text,  menuItems }) => {
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

export default PopMenu
