/* eslint-disable no-param-reassign */
import { memo, useCallback, useEffect, useState } from 'react';
import { fetchAllUsersRequest } from '../callAPIs/user';
import Pagination from './Pagination';
import Row from './Row';

const Table = () => {
    console.log('Table is rendered.');
    // Pagination
    const size = 10;
    const [paginatedUsers, setPaginatedUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false);
    let selectedUser;

    useEffect(() => {
        fetchAllUsersRequest({
            page: currentPage,
            limit: size,
        })
            .then((response) => {
                if (response.data.length === 0) {
                    setIsLastPage(true);
                    setCurrentPage((page) => page - 1);
                    console.log('This is last page.');
                } else {
                    const userArray = response.data.map((element, key) => {
                        return {
                            no: (currentPage - 1) * size + key + 1,
                            ...element,
                        };
                    });
                    setPaginatedUsers(userArray);
                    if (isLastPage) {
                        setIsLastPage(false);
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [currentPage]);

    const next = useCallback(() => {
        setCurrentPage((page) => page + 1);
    }, []);

    const prev = useCallback(() => {
        setCurrentPage((page) => page - 1);
    }, []);

    const handleActive = useCallback((item) => {
        console.log('handleActive - item: ', item);
        setCurrentPage(item);
        console.log('handleActive - currentPage: ', currentPage);
    }, []);

    // Focus
    const [active, setActive] = useState();
    const setActiveRow = useCallback((no) => {
        selectedUser = no;
        console.log('setActiveRow - selectedUser: ', selectedUser);
        setActive(selectedUser);
    }, []);

    const handleKeyDown = useCallback((e) => {
        console.log('handleKeyDown - currentPage: ', currentPage);
        console.log('handleKeyDown - size: ', size);
        switch (e.key) {
            case 'ArrowDown':
                if (selectedUser && selectedUser < currentPage * size) {
                    selectedUser += 1;
                    setActiveRow(selectedUser);
                }
                break;
            case 'ArrowUp':
                if (selectedUser && selectedUser > (currentPage - 1) * size + 1) {
                    selectedUser -= 1;
                    setActiveRow(selectedUser);
                }
                break;
            default:
                break;
        }
    }, []);

    if (!active) {
        window.myFn1 = handleKeyDown;
    } else {
        window.myFn2 = handleKeyDown;
        console.log('window.myFn1 === window.myFn2: ', window.myFn1 === window.myFn2);
    }

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First name</th>
                        <th scope="col">Last name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Address</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zip code</th>
                        <th scope="col">Job title</th>
                        <th scope="col">Company</th>
                        <th scope="col">Website</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Credit card number</th>
                        <th scope="col">Credit card issuer</th>
                        <th scope="col">Expiration date</th>
                        <th scope="col">Cvv</th>
                        <th scope="col">Bank account number</th>
                        <th scope="col">Routing number</th>
                        <th scope="col">Favorite color</th>
                        <th scope="col">Favorite food</th>
                        <th scope="col">Favorite movie</th>
                        <th scope="col">Favorite book</th>
                        <th scope="col">Favorite song</th>
                        <th scope="col">Favorite sport</th>
                        <th scope="col">Favorite animal</th>
                        <th scope="col">Favorite quote</th>
                        <th scope="col">About me</th>
                        <th scope="col">Hobbies</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {(paginatedUsers || []).map((user, key) => (
                        <Row
                            key={key}
                            user={user}
                            onClick={setActiveRow}
                            isActive={active === user.no}
                            onKeyDown={handleKeyDown}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                isLastPage={isLastPage}
                currentPage={currentPage}
                next={next}
                prev={prev}
                handleActive={handleActive}
            />
        </>
    );
};

export default memo(Table);
