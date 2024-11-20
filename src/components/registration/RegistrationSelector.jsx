import { Fragment, useState } from 'react';
<<<<<<< HEAD
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function RegistrationSelector({ data, selected, setSelected, icon }) {
=======
import { Combobox, Transition, } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

function RegistrationSelector({ data, selected, setSelected, icon}) {
>>>>>>> main
  const [query, setQuery] = useState('');

  const filteredData =
    query === ''
      ? data
      : data.filter((current) =>
          current.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

<<<<<<< HEAD
  return (
    <div className="w-full">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1 border rounded-md">
          <div className="relative flex items-center h-[40px] px-2 sm:px-4 cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 sm:text-sm">
            <img src={icon} className="w-[20px] h-[20px] object-contain" />
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-600 focus:ring-0 outline-none"
              displayValue={(current) => current.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400 hover:text-gray-500"
=======
  const returnValue = (val) => {

      return val.name;
    
  };

  return (
    <div className="w-full ">
      <Combobox
        value={selected}
        onChange={(val) => {
          setSelected(val);
        }
      }
      >
        <div className="relative mt-1 border rounded-md  ">
          <div className="relative w-full flex items-center h-[40px] pl-[10px]  cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <img src={icon} className="w-[20px]" />
            <Combobox.Input
              className="w-full outline-none border-none py-[6px] pl-3 pr-10 text-sm leading-5 font-normal text-gray-400 focus:ring-0"
              displayValue={(current) => current.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 w-[25px] justify-center  flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-full w-full text-gray-400 hover:text-gray-500"
>>>>>>> main
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
<<<<<<< HEAD
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredData.length === 0 && query !== '' ? (
=======
            <Combobox.Options className="absolute mt-1 z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredData?.length === 0 && query !== '' ? (
>>>>>>> main
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
<<<<<<< HEAD
                filteredData.map((current) => (
                  <Combobox.Option
                    key={current.id}
                    className={({ active }) =>
                      `relative cursor-default select-none flex items-center py-2 pl-10 pr-4 ${
=======
                filteredData?.map((current) => (
                  <Combobox.Option
                    key={current.id}
                    className={({ active }) =>
                      `relative cursor-default select-none flex py-2 pl-10 pr-4 ${
>>>>>>> main
                        active ? 'bg-green/70 text-white' : 'text-gray-900'
                      }`
                    }
                    value={current}
                  >
                    {({ selected, active }) => (
                      <>
<<<<<<< HEAD
                        {selected && (
                          <span
                            className={`absolute inset-y-0 left-2 flex items-center ${
=======
                      {selected ? (
                          <span
                            className={`absolute inset-y-0 left-[-30px] flex items-center  ${
>>>>>>> main
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
<<<<<<< HEAD
                        )}
=======
                        ) : null}
>>>>>>> main
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
<<<<<<< HEAD
                          {current.name || 'No name Attached'}
                        </span>
=======
                          {current.name ? current.name : 'No name Attached'}
                        </span>
                        
>>>>>>> main
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}

export default RegistrationSelector;
