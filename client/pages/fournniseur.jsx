import { useRouter } from 'next/router';
import axios from 'axios';
import { FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';
import { FaPen } from 'react-icons/fa';

export default function Fournniseur({ data }) {

    const router = useRouter();

    const handleDeleteFournniseur = async (fournniseurId) => {
        try {
            await axios.delete(`http://localhost:5000/api/deleteFournniseur/${fournniseurId}`);
            router.push('/fournniseur');
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <>
            <br />
            <div className="container mx-auto my-4">
                <div className="flex justify-center">
                    <Link href="/AddFournniseur">
                        <button className="group rounded-2xl h-12 w-48 bg-blue-500 font-bold text-lg text-white relative overflow-hidden" type="submit">
                            + Add Fournniseur
                            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                        </button>
                    </Link>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            OUR Supplier
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            More than two hundred suppliers sales their products on our website from different country around the world
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {Object.keys(data).map((title, i) => {
                            const fournniseur = data[title];
                            return (
                                <div key={i} className="p-4 lg:w-1/2">
                                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">

                                        <img
                                            alt="team"
                                            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                                            src={fournniseur.companyImage}
                                        />
                                        <div className="flex-grow sm:pl-8">
                                            <h2 className="title-font font-medium text-lg text-gray-900">
                                                {fournniseur.companyName}
                                            </h2>
                                            <h3 className="text-gray-500 mb-3">{fournniseur.companyDomaine}</h3>
                                            <p className="mb-4">
                                                {fournniseur.companyDescription}
                                            </p>
                                            <span className="inline-flex">
                                                <a className="text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                                    </svg>
                                                </a>
                                                <a className="ml-2 text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                                    </svg>
                                                </a>
                                                <a className="ml-2 text-gray-500">
                                                    <svg
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        className="w-5 h-5"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                                    </svg>

                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <center>
                                        <div className="mt-4">
                                            <Link href={`/modifyFournniseur?fournniseurId=${fournniseur._id}`}>
                                                <button className="group rounded-2xl h-10 w-20 bg-green-500 font-bold text-sm
                                              text-white relative overflow-hidden mr-2">
                                                    Modify
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteFournniseur(fournniseur._id)}
                                                className="group rounded-2xl h-10 w-20 bg-red-500 font-bold text-sm
                                              text-white relative overflow-hidden"
                                            >
                                                Delete
                                            </button><br/>
                                        </div>
                                    </center>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section >
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:5000/api/getFournniseur');
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                data: {},
            },
        };
    }
}