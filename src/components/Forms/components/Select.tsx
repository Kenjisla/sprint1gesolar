import { Fragment } from 'react';

import { Listbox, Transition } from '@headlessui/react';
import { BsCheck } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown, MdAttachMoney } from 'react-icons/md'
import { FieldError } from 'react-hook-form';

type SelectData = {
    id: number,
    amount: string;
    defaultValue?: boolean;
}

interface SelectProps {
    selectValue: SelectData;
    onChangeSelectValue: (value: SelectData) => void;
    error?: FieldError;
}

export function Select({ selectValue, onChangeSelectValue, error, ...rest }: SelectProps) {
    const selectData = [
        {
          id: 1,
          amount: '200 - 299',
        },
        {
            id: 2,
            amount: '300 - 399',
        },
        {
            id: 3,
            amount: '400 - 499',
        },
        {
            id: 4,
            amount: '500 - 599',
        },
        {
            id: 5,
            amount: '600 - 699',
        },
    ]

    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className="flex flex-col gap-2">
            <Listbox value={selectValue} onChange={(value) => onChangeSelectValue(value)}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-semibold text-neutral-200">Valor da conta de luz</Listbox.Label>
                        <div className="mt-[0.6rem] relative">
                            <Listbox.Button className={classNames(error ? "border border-red-500 focus:outline-none focus:ring-2 ring-offonChage-2 ring-offset-neutral-800 focus:ring-red-500 focus:border-red-500" : "border-neutral-500 focus:outline-none focus:ring-2 ring-offset-2 ring-offset-neutral-800 focus:ring-sun-500 focus:border-sun-500", "relative w-full border bg-neutral-700 text-neutral-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default  sm:text-sm")}>
                                <span className="flex items-center">
                                    <span className="flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-neutral-400">
                                        <MdAttachMoney className="w-5 h-5 text-white"/>
                                    </span>
                                    <span className="ml-3 w-full text-ellipsis overflow-hidden">{selectValue.amount}</span>
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
                                    {selectData.map((person) => (
                                        <Listbox.Option
                                            key={person.id}
                                            className={
                                                classNames(
                                                selectValue?.id === person.id ? 'text-white bg-sun-500' : 'text-neutral-300',
                                                'cursor-default select-none relative py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={person}
                                            {...rest}
                                        >
                                            <div className="flex items-center">
                                            <span className="flex items-center justify-center flex-shrink-0 h-6 w-6 rounded-full bg-neutral-400">
                                                <MdAttachMoney className="w-5 h-5 text-white"/>
                                            </span>
                                                <span className={classNames(selectValue ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                                                    {person.amount}
                                                </span>
                                            </div>

                                            {selectValue?.id === person.id ? (
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

            {error && <span className="block text-xs font-medium text-red-400">{error.message}</span>}
        </div>
    );
}