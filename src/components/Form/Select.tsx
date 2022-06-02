import { Fragment, useState } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { BsCheck } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export function Select() {

    const people = [
        {
          id: 1,
          name: 'Wade Cooper',
          avatar:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 2,
          name: 'Arlene Mccoy',
          avatar:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 3,
          name: 'Devon Webb',
          avatar:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
        {
          id: 4,
          name: 'Tom Cook',
          avatar:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 5,
          name: 'Tanya Fox',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 6,
          name: 'Hellen Schmidt',
          avatar:
            'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 7,
          name: 'Caroline Schultz',
          avatar:
            'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 8,
          name: 'Mason Heaney',
          avatar:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 9,
          name: 'Claudie Smitham',
          avatar:
            'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 10,
          name: 'Emil Schaefer',
          avatar:
            'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]

    const [selected, setSelected] = useState(people[3])
    const [isError, setIsError] = useState(true)

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex flex-col gap-2">
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-semibold text-neutral-200">Assigned to</Listbox.Label>
                        <div className="mt-[0.6rem] relative">
                            <Listbox.Button className={classNames(isError ? "border border-red-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500" : "border-neutral-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500", "relative w-full border bg-neutral-700 text-neutral-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default  sm:text-sm")}>
                                <span className="flex items-center">
                                    <img src={selected.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                    <span className="ml-3 block truncate">{selected.name}</span>
                                </span>

                                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <MdOutlineKeyboardArrowDown className="h-4 w-4 text-gray-300" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 w-full bg-neutral-600 shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-neutral-900 ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                    {people.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            className={
                                                classNames(
                                                selected.id === person.id ? 'text-white bg-sun-500' : 'text-neutral-300',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={person}
                                        >
                                            <div className="flex items-center">
                                                <img src={person.avatar} alt="" className="flex-shrink-0 h-6 w-6 rounded-full" />
                                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                                    {person.name}
                                                </span>
                                            </div>

                                            {selected.id === person.id ? (
                                                <span className="absolute text-white inset-y-0 right-0 flex items-center pr-4">
                                                    <BsCheck className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>

            {isError && <span className="block text-xs font-medium text-red-400">Selecione da sua conta de energia</span>}
        </div>
    );
}