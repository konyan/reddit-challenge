import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const DropDownMenu= ({menu}) =>{

  return(
    <Disclosure as="nav" key={menu.title} className="pt-6" defaultOpen>
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 px-6">
              <span className="text-sm text-gray-800 font-light leading-7  mb-2 uppercase">{menu.title}</span>
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
              <ul className='px-4 pb-8 flex flex-col gap-2 border-b border-gray-200'>
                {menu.data.length && menu.data.map(m =>{
                  return(
                    <>
                      {
                        !m.subChild ? (
                          <li key={m.name} className='cursor-pointer block text-left hover:bg-gray-50 px-2.5 rounded-lg py-3'>
                            {m.icon && m.icon} <small className='ml-5 text-base'>{m.name}</small>
                          </li>
                        ) : 
                          <Disclosure as="nav" key={menu.title} className="">
                            {({ open }) => (
                              <>
                                <dt>
                                  <Disclosure.Button className="flex w-full items-start justify-between text-gray-900">
                                    <span className="text-base text-gray-600 leading-7 px-2.5">{ m.icon}
                                    
                                      <small className='ml-5 text-base'>{m.name}</small></span>
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
                                    <ul className='px-4 pb-2 flex flex-col gap-2'>
                                      {m.sub_menus.length && m.sub_menus.map(sub =>{
                                        return(
                                          <li key={sub.name} className='cursor-pointer w-full block text-start hover:bg-gray-50 pl-8 rounded-lg py-3'>
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
                      }
                    </>
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
    data: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      subChild: PropTypes.bool.isRequired,
      sub_menus: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      }))
    }))
  })
}

export default DropDownMenu;
