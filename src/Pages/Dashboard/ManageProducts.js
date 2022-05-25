import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageProductRow from './ManageProductRow';

const ManageProducts = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/product').then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-2xl my-5">Total Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Minimum Quantity</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <ManageProductRow
                                key={product._id}
                                product={product}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></ManageProductRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;