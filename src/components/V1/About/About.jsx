import React from 'react'

export default function About() {
    return (
        <section id='about' className="py-20 bg-black-50">
            <div className="container items-center max-w-6xl px-4 mx-auto sm:px-20 md:px-32 lg:px-16">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md">
                            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed with all the tools needed to succeed!</h2>
                            <p className="mb-4 font-medium tracking-tight text-black-400 xl:mb-6">Im a pro-active person that works perfectly on team or at single, im empatic and curious, i can handle the changes with a possitive attitude.
                                              I consideer teamwork and honestity as great values.
                                              Im on the way to learn many more skills and habilities, to travel and know everything that appasionates me.</p>
                            <ul>
                                <li className="flex items-center py-2 space-x-4 xl:py-3">
                                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                    </svg>
                                    <span className="font-medium text-black-500">Fast working and delivery.</span>
                                </li>
                                <li className="flex items-center py-2 space-x-4 xl:py-3">
                                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                    </svg>
                                    <span className="font-medium text-black-500">Out of the Box thinking.</span>
                                </li>
                                <li className="flex items-center py-2 space-x-4 xl:py-3">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                    <span className="font-medium text-black-500">100% trustworthy and friendly.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img className="mx-auto sm:max-w-sm lg:max-w-full" src="https://i.gifer.com/XOsa.gif" alt="feature"/></div>
                </div>
            </div>
        </section>
    )
}
