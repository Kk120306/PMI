import HomeBg from '../../assets/home-bg.jpg';

const HomePage = () => {
    return (
        <div className="text-white">

            <div
                className="relative h-[50vh] bg-cover bg-center flex items-end md:p-12 p-6 justify-between gap-5"
                style={{ backgroundImage: `url(${HomeBg})` }}
            >
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="z-10">
                    <h1 className="text-2xl md:text-5xl font-bold text-left ">
                        Global Insights<br />
                        Strategic Growth
                    </h1>
                    <p className="text-xs md:text-sm mt-4">
                        We deliver in-depth case studies and market analysis on global businesses. <br />
                        Our articles offer clear, actionable insights into company strategy and growth.
                    </p>
                </div>

            </div>

            <div className="p-8 bg-gray-900 text-white">
                <h2 className="text-2xl font-semibold mb-4">More Content Here</h2>
                <p>This</p>
            </div>

        </div>
    );
}

export default HomePage;
