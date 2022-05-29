<Popover className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <a href="#">
        <img
          className="h-8 w-auto sm:h-10"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt=""
        />
      </a>
    </div>
    <div className="-mr-2 -my-2 md:hidden">
      <Popover.Button className="bg-neutral-800 rounded-md p-2 inline-flex items-center justify-center text-neutral-200 hover:text-sun-500 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sun-500">
        <span className="sr-only">Open menu</span>
        <MenuIcon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
    </div>
    <Popover.Group as="nav" className="hidden md:flex space-x-10">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className='group text-neutral-200 inline-flex items-center text-base font-medium hover:text-sun-500'>
              <span>Solutions</span>
              <ChevronDownIcon
                className='ml-2 h-5 w-5 group-hover:text-sun-500'
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <div className="relative grid gap-6 bg-neutral-800 px-5 py-6 sm:gap-8 sm:p-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-neutral-700"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-sun-500" aria-hidden="true" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-neutral-200">{item.name}</p>
                          <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>

      <a href="#" className='text-base text-neutral-200 font-medium hover:text-sun-500'>
        Pricing
      </a>
      <a href="#" className='text-base text-neutral-200 font-medium hover:text-sun-500'>
        Docs
      </a>

      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button className='group text-neutral-200 inline-flex items-center text-base font-medium hover:text-sun-500'>
              <span>More</span>
              <ChevronDownIcon
                className='ml-2 h-5 w-5 group-hover:text-sun-500'
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg overflow-hidden">
                  <div className="relative grid gap-6 bg-neutral-800 px-5 py-6 sm:gap-8 sm:p-8">
                    {resources.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-neutral-700"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-sun-500" aria-hidden="true" />
                        <div className="ml-4">
                          <p className="text-base font-medium text-neutral-200">{item.name}</p>
                          <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </Popover.Group>
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
      <a href="#" className="whitespace-nowrap text-base font-medium text-neutral-200 hover:text-sun-500">
        Sign in
      </a>
      <a
        href="#"
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-9 py-1 border- border-neutral-200 rounded-2xl shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-amber-500"
      >
        Sign up
      </a>
    </div>
  </div>
</div>

<Transition
  as={Fragment}
  enter="duration-200 ease-out"
  enterFrom="opacity-0 scale-95"
  enterTo="opacity-100 scale-100"
  leave="duration-100 ease-in"
  leaveFrom="opacity-100 scale-100"
  leaveTo="opacity-0 scale-95"
>
  <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
    <div className="rounded-lg shadow-lg bg-neutral-800 divide-y-2 divide-neutral-700">
      <div className="pt-5 pb-6 px-5">
        <div className="flex items-center justify-between">
          <div>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
          </div>
          <div className="-mr-2">
            <Popover.Button className="bg-neutral-700 rounded-md p-2 inline-flex items-center justify-center text-neutral-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sun-500">
              <span className="sr-only">Close menu</span>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
        </div>
        <div className="mt-10 mb-6">
          <nav className="grid gap-y-8">
            {solutions.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-m-3 p-3 flex items-center rounded-md hover:bg-amber-400"
              >
                <item.icon className="flex-shrink-0 h-6 w-6 text-sun-500" aria-hidden="true" />
                <span className="ml-3 text-base font-medium text-neutral-200">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="py-6 px-5 space-y-6">
        <div>
          <a
            href="#"
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sun-500 hover:bg-indigo-700"
          >
            Sign up
          </a>
          <p className="mt-6 text-center text-base font-medium text-neutral-200">
            Existing customer?{' '}
            <a href="#" className="text-sun-500 hover:text-amber-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  </Popover.Panel>
</Transition>
</Popover>