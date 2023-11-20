import React, { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name, email, message };

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                console.log("E-mail envoyé avec succès");
            } else {
                console.error("Erreur lors de l'envoi de l'e-mail");
            }
        } catch (error) {
            console.error(error);
        }

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            Contact Us
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Send message here and we send you mail latter!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="lg:w-1/2 md:w-1/3 mx-auto">
                            <div className="mb-4 mr-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <div>
                                <center>
                                    <button
                                        className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
                                        type="submit"
                                    >
                                        Envoyer
                                        <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                                    </button>
                                </center>
                            </div>
                        </div>
                    </form>


                </div>
            </section>
        </>
    );
}