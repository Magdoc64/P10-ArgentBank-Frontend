//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Accounts from '../../components/Accounts/Accounts.jsx'
import accounts from '../../data/accounts.js'
import User from '../../components/User/User.jsx';
import { isOpened } from '../../reducers/editReducer.js';
import Error from '../../components/Error/Error'

const Profile = () => {
    const {userToken} = useSelector((state) => state.auth);
    
    const user = useSelector (state => state.user);
    const userFirstName = user.user.firstName;
    const userLastName = user.user.lastName;
    
    const dispatch = useDispatch();
    const open = useSelector(state => state.edit).status
   
    const handleClick = () => {
        dispatch(isOpened())
    }

    return userToken===null?(
        <Error/>
    ): open===false?(
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userFirstName} {userLastName}!</h1>
                <button onClick={handleClick} className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map(account => (
                <Accounts key={account.id} account={account}/>
            ))}
        </main>
    ):(
        <main className="main bg-dark">
            <div className="header">
                <User/>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map(account => (
                <Accounts key={account.id} account={account}/>
            ))}
        </main>
    )
}

export default Profile