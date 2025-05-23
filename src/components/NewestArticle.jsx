import articles from './../data/articles.json';
import { FaReadme } from "react-icons/fa6";

const NewestArticle = () => {
    const sortedArticles = [...articles].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

    const newest = sortedArticles[0];

    if (!newest) return <p>No articles available.</p>;

    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-semibold mb-15 font-serif">Our Latest</h2>
            <div className="flex flex-col md:flex-row items-start justify-between md:gap-18 lg:gap-40 gap-7">
                <div>
                    <div className="flex items-center mb-4 gap-2 ">
                        <FaReadme className="text-red-500"/>
                        <span className="text-red-500 font-semibold">Must Read</span>
                    </div>
                    <h2 className="md:text-4xl text-2xl font-bold mb-2">{newest.title}</h2>
                    <p className="text-sm text-gray-500 mb-8">{new Date(newest.publishedAt).toDateString()}</p>
                    <a
                        href={`/articles/${newest.slug}`}
                        className="text-black-600 border-1 px-10 py-4 
                        transition duration-300 ease-in-out hover:bg-black hover:text-white"
                    >
                        Read More →
                    </a>
                </div>

                <p className="mb-4 max-w-xl text-gray-700 md:mt-15">{newest.summary}</p>
            </div>
        </div>

    );
};

export default NewestArticle;
