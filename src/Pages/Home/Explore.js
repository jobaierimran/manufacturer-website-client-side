import React from 'react';
import banner1 from '../../Assests/images/banner/banner-1.jpg'
const Explore = () => {
    return (
        <div className='my-12'>
            <h2 className='text-primary text-3xl text-center font-bold mb-8'>Explore Us</h2>
            <div class="hero py-8" style={{
                background: `url(${banner1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.6)"
            }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello Peoples</h1>
                        <p class="mb-5">We are a renowned Manufacturer and Exporter of the quality approved assortment of Medical Equipment. These products are admired for their excellent resistance...</p>
                        <button class="btn btn-primary">Explore More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Explore;