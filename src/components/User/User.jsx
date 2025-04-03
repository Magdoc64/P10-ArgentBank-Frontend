import { useDispatch, useSelector } from "react-redux"
import { useRef} from 'react';
import './user.css'
import {profile} from '../../actions/profileAction'
import { isClosed } from "../../reducers/editReducer";

const User = () => {
    const form = useRef();
    const dispatch = useDispatch();
    
    const user = useSelector (state => state.user);
    const userFirstName = user.user.firstName;
    const userLastName = user.user.lastName;
    const userUserName = user.user.userName;
    
    const auth = useSelector(state => state.auth)
    const token = auth.userToken;

    const isOpened = useSelector(state => state.edit)
    
    const handleSave = () => {
        const userName = form.current[0].value;
        
        dispatch(profile({token,userName}))
        dispatch(isClosed())
    }
    
    const handleCancel = () => {
        dispatch(isClosed())
    }

    return isOpened?(
        <div className="edit">
            <h2 className="edit-title">Edit user info</h2>
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