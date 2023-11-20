
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ModifyFournniseur() {
    const router = useRouter();
    const { fournniseurId } = router.query;

    const [fournniseur, setFournniseur] = useState({});
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyDomaine, setCompanyDomaine] = useState('');
    const [companyImage, setCompanyImage] = useState('');

    useEffect(() => {
        if (fournniseurId) {
            fetchFournniseur(fournniseurId);
        }
    }, [fournniseurId]);

    const fetchFournniseur = async (fournniseurId) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/getPersonnel/${fournniseurId}`);
            const fournniseurData = res.data;
            setFournniseur(fournniseurData);
            setCompanyName(fournniseurData.companyName);
            setCompanyDescription(fournniseurData.companyDescription);
            setCompanyDomaine(fournniseurData.companyDomaine);
            setCompanyImage(fournniseurData.companyImage);
        } catch (error) {
            console.error(error);
        }
    };

    const handleModifyFournniseur = async () => {
        try {
            const updatedFournniseurData = {
                companyName,
                companyDescription,
                companyDomaine,
                companyImage,
            };

            await axios.put(`http://localhost:5000/api/modifyFournniseur/${fournniseurId}`, updatedFournniseurData);
                router.push('/fournniseur');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
        <div className="!z-5 relative rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black-700">
                Modify fournniseur
                </h2><br/>
                <form>
                    <div className="mb-3">
                        <label htmlFor="companyName" className="text-sm text-navy-700 text-gray-600 font-bold">
                        Company Name
                        </label>
                        <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="companyDescription" className="text-sm text-navy-700 text-gray-600 font-bold">
                        Company Description
                        </label>
                        <input
                            type="text"
                            id="companyDescription"
                            value={companyDescription}
                            onChange={(e) => setCompanyDescription(e.target.value)}
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                        />
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="companyDomaine" className="text-sm text-navy-700 text-gray-600 font-bold">
                        Company Domaine
                        </label>
                        <input
                            type="text"
                            id="companyDomaine"
                            value={companyDomaine}
                            onChange={(e) => setCompanyDomaine(e.target.value)}
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                        />
                    </div><div className="mb-3">
                        <label htmlFor="companyImage" className="text-sm text-navy-700 text-gray-600 font-bold">
                        Company Image
                        </label>
                        <input
                            type="text"
                            id="companyImage"
                            value={companyImage}
                            onChange={(e) => setCompanyImage(e.target.value)}
                            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                        />
                    </div><br/>
                   
                    <center>
                        <button
                            type="button"
                            onClick={handleModifyFournniseur}
                            className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg
                            text-white relative overflow-hidden"
                        >
                            Modify Fournniseur
                            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                            </div>
                        </button>
                    </center>
                </form>
            </div>
        </div>
    </div>
    );
}