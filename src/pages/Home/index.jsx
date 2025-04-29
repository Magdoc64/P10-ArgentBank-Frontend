import Articles from "../../components/Articles/Articles.jsx"

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">Open a savings account with Argent Bank today!</p>
                </div>
            </section>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                <Articles/>
            </section>
        </main>
    )
}

export default Home