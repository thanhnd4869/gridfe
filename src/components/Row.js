/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */

import { memo } from 'react';

/* eslint-disable no-param-reassign */
const Row = ({ user, onClick, isActive, onKeyDown }) => {
    console.log(`User #${user.no}'s row is rendered.`);
    return (
        <>
            <tr
                onClick={() => onClick(user.no)}
                className={`${isActive ? 'active-row' : null}`}
                onKeyDown={(e) => onKeyDown(e)}
                tabIndex={user.no}
                data-no={user.no}>
                <th scope="row">{user.no}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.zipCode}</td>
                <td>{user.jobTitle}</td>
                <td>{user.company}</td>
                <td>{user.website}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.creditCardNumber}</td>
                <td>{user.creditCardIssuer}</td>
                <td>{user.expirationDate}</td>
                <td>{user.cvv}</td>
                <td>{user.bankAccountNumber}</td>
                <td>{user.routingNumber}</td>
                <td>{user.favoriteColor}</td>
                <td>{user.favoriteFood}</td>
                <td>{user.favoriteMovie}</td>
                <td>{user.favoriteBook}</td>
                <td>{user.favoriteSong}</td>
                <td>{user.favoriteSport}</td>
                <td>{user.favoriteAnimal}</td>
                <td>{user.favoriteQuote}</td>
                <td>{user.aboutMe}</td>
                <td>{user.hobbies}</td>
            </tr>
        </>
    );
};

export default memo(Row);
