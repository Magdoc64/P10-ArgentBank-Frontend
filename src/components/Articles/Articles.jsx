import listArticles from "../../data/listArticles"
import "./articles.css"
const Articles = () => {
    return(listArticles.map(article => (
            <article key={article.id} className="feature-item">
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
        ))
    )
}

export default Articles