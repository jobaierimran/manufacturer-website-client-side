import React from 'react';

const AddReview = () => {
    return (
        <div>
            <div>
                <h4 className="text-2xl text-primary font-bold text-center my-12">Please Review Us</h4>
            </div>
            <div className='flex justify-center'>
                <form>
                    <div className='mb-5'>
                        <input type="text" name='reviewerName' className='border lg:w-96 h-12 text-md px-4 rounded-lg focus:outline-primary' placeholder='Your Name' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" name='reviewImg' className='border lg:w-96 h-12 text-md px-4 rounded-lg focus:outline-primary' placeholder='ImageURL' />
                    </div>
                    <div className='mb-5'>
                        <input type="text" name='rating' className='border lg:w-96 h-12 text-md px-4 rounded-lg focus:outline-primary' placeholder='Ratings 1-5' />
                    </div>
                    <div className='mb-5'>
                        <textarea type="text" name='comment' className='border lg:w-96 h-12 text-md px-4 rounded-lg focus:outline-primary' placeholder='Comment here' />
                    </div>
                    <div className="text-center">
                        <button className='btn btn-primary'><span className='px-9'>Submit</span></button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;