import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import PropTypes from 'prop-types'

const DropDownMenu = ({ menu }) => {
  return (
    <Disclosure as="nav" key={menu.title} className="pt-6" defaultOpen>
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between px-6 text-left text-gray-900">
              <span className="mb-2 text-sm font-light uppercase  leading-7 text-gray-800">
                {menu.title}
              </span>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel as="dd" className="mt-2">
              <ul className="flex flex-col gap-2 border-b border-gray-200 px-4 pb-8">
                {menu.data.length &&
                  menu.data.map((m) => {
                    return (
                      <div key={m.name}>
                        {!m.subChild ? (
                          <li
                            key={m.name}
                            className="block cursor-pointer rounded-lg px-2.5 py-3 text-left hover:bg-gray-50"
                          >
                            {m.icon && m.icon} <small className="ml-5 text-base">{m.name}</small>
                          </li>
                        ) : (
                          <Disclosure as="nav" key={menu.title} className="">
                            {({ open }) => (
                              <>
                                <dt>
                                  <Disclosure.Button className="flex w-full items-start justify-between text-gray-900">
                                    <span className="px-2.5 text-base leading-7 text-gray-600">
                                      {m.icon}

                                      <small className="ml-5 text-base">{m.name}</small>
                                    </span>
                                    <span className="ml-6 flex h-7 items-center">
                                      {open ? (
                                        <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                                      ) : (
                                        <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                                      )}
                                    </span>
                                  </Disclosure.Button>
                                </dt>
                                <Transition
                                  enter="transition duration-100 ease-out"
                                  enterFrom="transform scale-95 opacity-0"
                                  enterTo="transform scale-100 opacity-100"
                                  leave="transition duration-75 ease-out"
                                  leaveFrom="transform scale-100 opacity-100"
                                  leaveTo="transform scale-95 opacity-0"
                                >
                                  <Disclosure.Panel as="dd" className="mt-2">
                                    <ul className="flex flex-col gap-2 px-4 pb-2">
                                      {m.sub_menus.length &&
                                        m.sub_menus.map((sub) => {
                                          return (
                                            <li
                                              key={sub.name}
                                              className="block w-full cursor-pointer rounded-lg py-3 pl-8 text-start hover:bg-gray-50"
                                            >
                                              {sub.name}
                                            </li>
                                          )
                                        })}
                                    </ul>
                                  </Disclosure.Panel>
                                </Transition>
                              </>
                            )}
                          </Disclosure>
                        )}
                      </div>
                    )
                  })}
              </ul>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

DropDownMenu.propTypes = {
  menu: PropTypes.shape({
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
        subChild: PropTypes.bool.isRequired,
        sub_menus: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
          })
        ),
      })
    ),
  }),
}

export default DropDownMenu
