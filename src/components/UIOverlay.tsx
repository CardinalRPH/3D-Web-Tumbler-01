import React from 'react';

export const UIOverlay: React.FC = () => {
    return (
        <>
            {/* 3D Scroll Wrapper */}
            <div className="scroll-container relative z-20 mt-[-100vh]">
                {/* Scene 0 */}
                <section className="h-screen flex items-center justify-start px-12 md:px-24">
                    <div className="max-w-md bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Scene 00</span>
                        <h1 className="text-4xl font-bold mt-2">Hydration Evolved</h1>
                        <p className="mt-4 text-neutral-300">Premium insulated mug designed for all-day temperature control.</p>
                    </div>
                </section>

                {/* Scene 1 */}
                <section className="h-screen flex items-center justify-end px-12 md:px-24">
                    <div className="max-w-md bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Scene 01</span>
                        <h2 className="text-3xl font-bold mt-2">Ergonomic Handle</h2>
                        <p className="mt-4 text-neutral-300">Durable matte finish body with a comfortable, high-durability handle grip.</p>
                    </div>
                </section>

                {/* Scene 2 */}
                <section className="h-screen flex items-center justify-start px-12 md:px-24">
                    <div className="max-w-md bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Scene 02</span>
                        <h2 className="text-3xl font-bold mt-2">Rotating Lid & Straw</h2>
                        <p className="mt-4 text-neutral-300">Features a splash-resistant lid opening and reusable drink straw.</p>
                    </div>
                </section>

                {/* Scene 3 */}
                <section className="h-screen flex items-center justify-end px-12 md:px-24">
                    <div className="max-w-md bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Scene 03</span>
                        <h2 className="text-3xl font-bold mt-2">Open Interior</h2>
                        <p className="mt-4 text-neutral-300">Food-grade stainless steel chamber engineered for maximum thermal retention.</p>
                    </div>
                </section>

                {/* Scene 4 */}
                <section className="h-screen flex items-center justify-center px-12 text-center">
                    <div className="max-w-sm bg-black/50 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Scene 04</span>
                        <h2 className="text-3xl font-bold mt-2">Pick Your Color</h2>
                        <p className="mt-2 text-sm text-neutral-300">Compare styles and choose the perfect tumbler for your daily carry.</p>
                    </div>
                </section>
            </div>

            {/* Non 3D Scroll Wrapper */}
            <div className="relative z-30 bg-[#1e1e1e] text-white">
                {/* Customer Reviews Section */}
                <section className="min-h-screen py-24 px-8 md:px-24 flex flex-col justify-center max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">Testimonials</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">Loved by Hydration Enthusiasts</h2>
                        <p className="mt-4 text-neutral-400 max-w-xl mx-auto">
                            See what our community has to say about their daily experience with our tumbler.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Review 1 */}
                        <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="flex text-amber-400 mb-4">★★★★★</div>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    "Keeps my water ice-cold through an entire 8-hour shift and a gym workout afterwards. The handle grip is super comfortable."
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <h4 className="font-semibold text-white">Sarah M.</h4>
                                <p className="text-xs text-neutral-500">Verified Buyer</p>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="flex text-amber-400 mb-4">★★★★★</div>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    "I’ve dropped it twice on concrete and not even a dent. Absolutely superior build quality compared to other brands."
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <h4 className="font-semibold text-white">David K.</h4>
                                <p className="text-xs text-neutral-500">Verified Buyer</p>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="flex text-amber-400 mb-4">★★★★★</div>
                                <p className="text-neutral-300 text-sm leading-relaxed">
                                    "Zero leaks even when tossed into my tote bag. The rotating straw lid is smooth and easy to clean."
                                </p>
                            </div>
                            <div className="mt-6 pt-4 border-t border-white/10">
                                <h4 className="font-semibold text-white">Elena R.</h4>
                                <p className="text-xs text-neutral-500">Verified Buyer</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Highlights Section */}
                <section className="py-24 px-8 md:px-24 bg-[#141414] border-t border-white/5">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">24 Hours</h3>
                            <p className="mt-2 text-sm text-neutral-400">Cold drinks stay cold</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">12 Hours</h3>
                            <p className="mt-2 text-sm text-neutral-400">Hot drinks stay warm</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">100%</h3>
                            <p className="mt-2 text-sm text-neutral-400">BPA-free & non-toxic</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">Lifetime</h3>
                            <p className="mt-2 text-sm text-neutral-400">Durability guarantee</p>
                        </div>
                    </div>
                </section>
                <section className="py-24 px-8 md:px-24 bg-[#141414] border-t border-white/5">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">24 Hours</h3>
                            <p className="mt-2 text-sm text-neutral-400">Cold drinks stay cold</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">12 Hours</h3>
                            <p className="mt-2 text-sm text-neutral-400">Hot drinks stay warm</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">100%</h3>
                            <p className="mt-2 text-sm text-neutral-400">BPA-free & non-toxic</p>
                        </div>
                        <div className="p-6">
                            <h3 className="text-3xl font-extrabold text-blue-400">Lifetime</h3>
                            <p className="mt-2 text-sm text-neutral-400">Durability guarantee</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};