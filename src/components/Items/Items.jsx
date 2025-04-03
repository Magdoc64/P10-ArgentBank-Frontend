import './items.css'
import PropTypes from "prop-types";

const Items = ({account}) => {
    
    return (
        <div className="account-content-wrapper">
            <h3 className="account-title">{account.title}</h3>
            <p className="account-amount">{account.amount}</p>
            <p className="account-amount-description">{account.description}</p>
        </div>
    )
}

Items.PropTypes = {
    account: PropTypes.array,
}

export default Items