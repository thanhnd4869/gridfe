import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../redux/slices/user.slice';

const Home = () => {
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.user.userList);

    useEffect(() => {
        if (!userList.length) {
            dispatch(userActions.fetchAllUsers());
        }
    }, []);
    return (
        <>
            <ul>
                {(userList || []).map((user) => (
                    <li>{`${JSON.stringify(user)}`}</li>
                ))}
            </ul>
        </>
    );
};

export default Home;
