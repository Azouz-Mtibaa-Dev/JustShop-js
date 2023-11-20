import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddFournniseur() {
    const [fournniseurData, setFournniseurData] = useState({
        companyName: '',
        companyDescription: '',
        companyDomaine: '',
        companyImage: '',
    });
    const router = useRouter();

    const handleChange = (e) => {
        setFournniseurData({ ...fournniseurData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/addFournniseur', fournniseurData);
            router.push('/fournniseur');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
      
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="!z-5 relative rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-7s00">
                            Add Fournniseur
                        </h2><br/>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="companyName"
                                className="text-sm text-navy-700 text-gray-600 font-bold"
                            >
                                Company Name
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={fournniseurData.companyName}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="companyDescription"
                                className="text-sm text-navy-700 text-gray-600 font-bold"
                            >
                                Company Description
                            </label>
                            <input
                                type="text"
                                id="companyDescription"
                                name="companyDescription"
                                value={fournniseurData.companyDescription}
                                onChange={handleChange}
                                placeholder="Company Description"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="companyDomaine"
                                className="text-sm text-navy-700 text-gray-600 font-bold"
                            >
                                Company Domaine
                            </label>
                            <input
                                type="text"
                                id="companyDomaine"
                                name="companyDomaine"
                                value={fournniseurData.companyDomaine}
                                onChange={handleChange}
                                placeholder="Company Domaine"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label
                                htmlFor="companyImage"
                                className="text-sm text-navy-700 text-gray-600 font-bold"
                            >
                                Company Image
                            </label>
                            <input
                                type="text"
                                id="companyImage"
                                name="companyImage"
                                value={fournniseurData.companyImage}
                                onChange={handleChange}
                                placeholder="Company Image"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <br /><br />
                        <center>
                            <button
                                className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
                                type="submit"
                            >
                                Ajouter
                                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                            </button>
                        </center>
                    </form>
                </div>
            </div>
            <br /><br />
            <br /><br />
        </>
    );
}