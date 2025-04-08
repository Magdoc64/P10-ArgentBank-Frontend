import { useDispatch, useSelector } from "react-redux"
import { useRef} from 'react';
import './user.css'
import {profile} from '../../actions/profileAction'
import { isClosed } from "../../reducers/editReducer";
import { user } from "../../actions/userAction";


const User = () => {
    const form = useRef();
    const dispatch = useDispatch();

    const userDetail = useSelector (state => state.user);
    const userFirstName = userDetail.user.firstName;
    const userLastName = userDetail.user.lastName;
    const userUserName = userDetail.user.userName;
    const error = useSelector(state => state.error);

    const auth = useSelector(state => state.auth)
    const userToken = auth.userToken;

    const isOpened = useSelector(state => state.edit)
    
    const handleSave = () => {
        if(error.length===0){
            const userName = form.current[0].value;
            dispatch(profile({userToken,userName}))
            dispatch(user({userToken}))
            dispatch(isClosed())
        }
    }
    
    const handleCancel = () => {
        dispatch(isClosed())
    }

    return isOpened?(
        <div className="edit">
            <h2 className="edit-title">Edit user info</h2>
            {error!==null && <p className='error-message'>{error}</p>}
            <form ref={form} className="edit-form">
                <div className="form-section">
                    <label htmlFor="userName">Username :</label>
                    <input type="text" className="input-form" id="userName" name="username" defaultValue={userUserName}/>
                </div>
                <div className="form-section">
                    <label htmlFor="firstName">Firstname :</label>
                    <input type="text" className="input-form" id="firstName" name="firstname" defaultValue={userFirstName} disabled/>
                </div>
                <div className="form-section">
                    <label htmlFor="lastName">Lastname :</label>
                    <input type="text" className="input-form" id="lastName" name="lastname" defaultValue={userLastName} disabled/>
                </div>
            </form>
            <div className="form-control">
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    ):null
}

export default User