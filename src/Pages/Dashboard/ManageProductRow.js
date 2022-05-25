import React from 'react';

const ManageProductRow = ({ product, index }) => {
    const { name, description, price, minQuantity, availableQuantity, img } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{minQuantity}</td>
            <td>{availableQuantity}</td>
        </tr>
    );
};

export default ManageProductRow;