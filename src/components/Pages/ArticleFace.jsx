import { useParams } from "react-router-dom";
import articles from '../../data/articles.json';
import authors from '../../data/author.json';
import PDFPreview from '../PDFPreview';

const ArticleFace = () => {
    const { slug } = useParams();
    const article = articles.find(article => article.slug === slug);
    if (!article) return <p>Article not found.</p>;

    const author = authors.find(author => author.id === article.authorId);

    return (
        <div className="px-6 md:px-16 py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{article.title}</h1>
            <p className="text-sm text-gray-500 mb-2">
                Published on {new Date(article.publishedAt).toLocaleDateString()}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-sky-100 text-sky-700 px-3 py-1 text-sm rounded-full font-medium"
                    >
                        #{tag}
                    </span>
                ))}
            </div>

            {author && (
                <div className="flex items-center gap-4 mb-10">
                    <img
                        src={author.profileImage}
                        alt={author.name}
                        className="w-16 h-16 rounded-full object-cover border"
                    />
                    <div>
                        <h4 className="text-lg font-semibold">{author.name}</h4>
                        <p className="text-sm text-gray-600">{author.bio}</p>
                        <a href={`mailto:${author.contact}`} className="text-sm text-sky-600">
                            {author.contact}
                        </a>
                    </div>
                </div>
            )}

            <div className="prose prose-lg text-gray-800 max-w-none">
                {article.summary.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>

            <div>
                <PDFPreview
                    fileUrl={article.src}
                />
            </div>

        </div>
    );
};

export default ArticleFace;
