import articles from "../../data/listArticles"

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
                {articles.map (article => 
                <article className="feature-item" key={article.id}>
                    <img 
                        src={article.imageSrc} 
                        alt={article.imageAlt} 
                        className="feature-icon" 
                    />
                    <h3 className="feature-item-title">{article.title}</h3>
                    <p>
                        {article.text}
                    </p>
                </article>
                )}
            </section>
        </main>
    )
}

export default Home