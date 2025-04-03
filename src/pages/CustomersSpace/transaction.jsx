import { useParams } from 'react-router-dom'
import Items from '../../components/Items/Items.jsx'
import accounts from '../../data/amount.js'

const Transactions = () => {
    const {idAccount} = useParams();
    const accountTransaction = accounts.find(account => idAccount === account.id)
    
    return (
        <main>
            <section className='transaction'>
                <Items key={accountTransaction.id} account={accountTransaction}/>
            </section>
        </main>
    )
}

export default Transactions