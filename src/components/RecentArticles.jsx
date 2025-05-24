import articles from './../data/articles.json';
import { IoPricetagsOutline } from "react-icons/io5";
import Recent1 from './../assets/recent1.jpg';
import Recent2 from './../assets/recent2.jpg';
import Recent3 from './../assets/recent3.jpg';
import { Link } from "react-router-dom";

const RecentArticles = () => {
    const sortedArticles = [...articles].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    const images = [Recent1, Recent2, Recent3];
    const newest = sortedArticles.slice(0, 3);

    if (newest.length === 0) return <p>No articles available.</p>;

    return (
        <div className="text-black max-w-6xl mx-auto mt-15">
            <h2 className="text-3xl md:text-5xl font-semibold mb-15 font-serif">Read More</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
                {newest.map((article, index) => (
                    <div key={article.slug || index} className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sky-600 font-semibold">
                            <IoPricetagsOutline />
                            <span>{article.tags[0]}</span>
                        </div>
                        <img
                            src={images[index]}
                            alt={`Recent article ${index + 1}`}
                            className="w-full h-48 sm:h-52 md:h-56 object-cover rounded"
                        />
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        <p className="text-sm text-gray-500">{new Date(article.publishedAt).toDateString()}</p>
                        <p className="text-gray-700">{article.summary}</p>
                        <Link
                            to={`/articles/${article.slug}`}
                            className="mt-auto text-sky-600 hover:text-black font-medium"
                        >
                            Read More →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentArticles;
