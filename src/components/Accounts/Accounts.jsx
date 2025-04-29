import './accounts.css'
import PropTypes from "prop-types";

const Accounts = ({account}) => {
    
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{account.title}</h3>
                <p className="account-amount">{account.amount}</p>
                <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">{account.button}</button>
            </div>
        </section>
    )
}

Accounts.PropTypes = {
    account: PropTypes.array,
}

export default Accounts