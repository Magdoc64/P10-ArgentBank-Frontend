//import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import Items from '../../components/Items/Items.jsx'
import accounts from '../../data/amount.js'
import User from '../../components/User/User.jsx';
import { isOpened } from '../../reducers/editReducer.js';

const CustomersSpace = () => {
    const user = useSelector (state => state.user);
    const userFirstName = user.user.firstName;
    const userLastName = user.user.lastName;
    
    const dispatch = useDispatch();
    const open = useSelector(state => state.edit).status
   
    const handleClick = () => {
        dispatch(isOpened())
    }

    return open===false?(
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{userFirstName} {userLastName}!</h1>
                <button onClick={handleClick} className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map(account => (
                <section key={account.id} className="account">
                    <Items account={account}/>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">{account.button}</button>
                    </div>
                </section>
            ))}
        </main>
    ):(
        <main className="main bg-dark">
            <div className="header">
                <User/>
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accounts.map(account => (
                <section key={account.id} className="account">
                    <Items account={account}/>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">{account.button}</button>
                    </div>
                </section>
            ))}
        </main>
    )
}

export default CustomersSpace