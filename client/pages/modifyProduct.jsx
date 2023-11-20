import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ModifyProduct() {
    const router = useRouter();
    const { productId } = router.query;

    const [product, setProduct] = useState({});
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [isModifiable, setIsModifiable] = useState(true);

    useEffect(() => {
        if (productId) {
            fetchProduct(productId);
        }
    }, [productId]);

    const fetchProduct = async (productId) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/getProduct/${productId}`);
            const productData = res.data;
            setProduct(productData);
            setTitle(productData.title);
            setDes(productData.des);
            setQty(productData.qty);
            setPrice(productData.price);
            setColor(productData.color);
            setSize(productData.size);
            setImage(productData.image);
            setCategory(productData.category);
            setIsModifiable(productData.isModifiable);
        } catch (error) {
            console.error(error);
        }
    };

    const handleModifyProduct = async () => {
        try {
            const updatedProductData = {
                title,
                des,
                qty,
                price,
                color,
                size,
                image,
                category,
                isModifiable,
            };

            await axios.put(`http://localhost:5000/api/modifyProduct/${productId}`, updatedProductData);
            router.push('/shop');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <br />
            <br />
            <br /><br />
            <br />
          <br />
          <br />
         
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="!z-5 relative rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black-700">
                            Modify Product
                        </h2><br/>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="des" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Description
                                </label>
                                <textarea
                                    id="des"
                                    value={des}
                                    onChange={(e) => setDes(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="qty" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    id="qty"
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="color" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Color
                                </label>
                                <input
                                    type="text"
                                    id="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="size" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Size
                                </label>
                                <input
                                    type="text"
                                    id="size"
                                    value={size}
                                    onChange={(e) => setSize(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    id="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="text-sm text-navy-700 text-gray-600 font-bold">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="isModifiable" className="text-sm text-navy-700 text-gray-600 font-bold mr-2 ">
                                    Is Modifiable
                                </label>
                                <input
                                    type="checkbox"
                                    id="isModifiable"
                                    checked={isModifiable}
                                    onChange={(e) => setIsModifiable(e.target.checked)}
                                    className="mt-1 form-checkbox h-5 w-5 text-blue-500 focus:outline-none focus:border-blue-500"
                                />
                            </div><br/>
                            <center>
                                <button
                                    type="button"
                                    onClick={handleModifyProduct}
                                    className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg
                                    text-white relative overflow-hidden"
                                >
                                    Modify Product
                                    <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                                    </div>
                                </button>
                            </center>
                        </form>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br /><br /><br /><br />
        </>
    );
}
