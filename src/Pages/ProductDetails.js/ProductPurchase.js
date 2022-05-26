import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import usePurchaseDetails from '../../hooks/usePurchaseDetails';


const ProductPurchase = () => {
    const { productId } = useParams();
    const [product] = usePurchaseDetails(productId);
    const [user] = useAuthState(auth);

    return (
        <div className='container mx-auto'>
           <h2 className='text-primary text-3xl text-center font-bold mt-8'>Purchase Informations</h2>
            <div className="hero bg-base-200 my-12 rounded-xl">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user.displayName} placeholder="name" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' value={user.email} placeholder="email" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Prodcut Name</span>
                                    </label>
                                    <input type="text" name='productName' value={product.name} placeholder="product name" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" name='price' value={product.price} placeholder="price" className="input input-bordered" disabled />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Minimum Order Quantity</span>
                                    </label>
                                    <input type="number" value={product?.minQuantity} placeholder="minimum quantity" className="input input-bordered" disabled/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available Order Quantity</span>
                                    </label>
                                    <input type="number" value={product.availableQuantity}   placeholder="available quantity" className="input input-bordered" disabled/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Order Quantity</span>
                                    </label>
                                    <input type="number"  placeholder="qunatity" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" name='phone' placeholder="phone number" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name='address' placeholder="your address" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Place Order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left bg-primary rounded-xl p-4">
                        <div className=''>
                            <img className='w-full' src={product.img} alt="" />
                        </div>
                        <p className="py-6">{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPurchase;