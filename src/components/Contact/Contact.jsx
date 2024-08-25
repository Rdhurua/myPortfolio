import React, { useRef } from 'react';
import { useState } from 'react';
import right from "/src/assets/images/accept.png";
import wrong from "/src/assets/images/remove.png";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [email, setEmail] = useState("");
    const [result1, setResult1] = useState(null);
    const [Rdata, setRdata] = useState(null);
    const form = useRef();

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setResult1("ok");
        return re.test(String(email).toLowerCase());
    };



    const onEmailChange = (e) => {
        const email = e.target.value;
        setEmail(email);

        setRdata(validateEmail(email));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        emailjs.sendForm("service_758wpga", import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
            .then(
                () => {
                    alert("message succesfully sent");
                    e.target.reset();

                    setResult1("");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className='mt-16 mb-8' id='contact'>
            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact me</h2>
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm shadow-md shadow-gray-200 rounded-md">
                <form ref={form} onSubmit={onSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-11/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Enter your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-11/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Enter your Email"
                            onChange={onEmailChange}
                            required
                        />

                        {result1 && (
                            <div className="rounded-md">
                                <p className='text-black text-2xl'>
                                    {Rdata === true ? (
                                        <span className='text-green-500 text-sm flex items-center'>
                                            <img className='mx-2 mt-2 h-4 w-4' src={right} alt="Valid" /><span className='mt-2'>Valid Email</span>
                                        </span>) : (<span className='text-red-500 text-sm flex items-center'>
                                            <img className='mx-2 mt-2 h-4 w-4' src={wrong} alt="Invalid" /> <span className='mt-2'>Enter a Valid Email</span>
                                        </span>
                                    )}
                                </p>
                            </div>
                        )}

                    </div>



                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message to me</label>
                        <textarea
                            id="message"
                            rows="6"
                            name="message"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave your message..." required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 md:px-40 md:ml-[4.75rem] text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
