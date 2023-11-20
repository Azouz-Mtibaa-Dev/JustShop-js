import Link from "next/link"
export default function Home() {
    return (
        <section className="text-gray-600 body-font">
            <header>

                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat"
                    style={{
                        backgroundPosition: "100%",
                        backgroundImage: 'url("https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg")',
                        height: 550
                    }}
                >
                    <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    >
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h1 className="mb-6 text-5xl font-bold mr-4">Just Shop</h1>
                                <h4 className=" mb-4 text-2xl font-bold ">Welcome to Just Shop, your ultimate destination <br />for online shopping!</h4><br />
                                <Link href={'/shop'}>
                                    <span
                                        type="button"
                                        className="inline-block rounded border-2 border-neutral-50 px-10 py-4 text-base font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                                        data-te-ripple-init=""
                                        data-te-ripple-color="light"
                                        style={{ fontSize: "1.25rem" }} // Ajoutez cette ligne pour définir la taille du texte
                                    >
                                        Get your Products Now!
                                    </span>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                        Numbers Of Our Shop Store                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Check out our impressive statistics as an e-commerce platform. We have managed
                        to satisfy a large number of customers, In addition, we have processed a considerable
                        volume of orders, We are also proud to have established strong partnerships
                        with several companies
                    </p>
                </div>
                <div className="flex flex-wrap -m-4 text-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 17l4 4 4-4m-4-5v9" />
                                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                            <p className="leading-relaxed">Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                <circle cx={9} cy={7} r={4} />
                                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                            <p className="leading-relaxed">Client</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 18v-6a9 9 0 0118 0v6" />
                                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                            <p className="leading-relaxed">Files</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                            <p className="leading-relaxed">Company</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Enter your E-mail Adress to be updated
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
                        typewriter affogato, hella selvage wolf narwhal dreamcatcher.
                    </p>
                    <div className="flex w-full md:justify-start justify-center items-end">
                        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                            <label htmlFor="hero-field" className="leading-7 text-lg text-gray-600">
                                NewsLetter :
                            </label>
                            <input
                                type="text"
                                id="hero-field"
                                name="hero-field"
                                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                placeholder="E-mail Adress"
                            />
                        </div>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Send
                        </button>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                        Or get our App from here :
                    </p>
                    <div className="flex lg:flex-row md:flex-col">
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6"
                                viewBox="0 0 512 512"
                            >
                                <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                                <span className="title-font font-medium">Google Play</span>
                            </span>
                        </button>
                        <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="w-6 h-6"
                                viewBox="0 0 305 305"
                            >
                                <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                                <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                            </svg>
                            <span className="ml-4 flex items-start flex-col leading-none">
                                <span className="text-xs text-gray-600 mb-1">Download on the</span>
                                <span className="title-font font-medium">App Store</span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="/images/logo3.png"
                    />
                </div>
            </div>

        </section>


    )
}