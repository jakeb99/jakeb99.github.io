const AboutMeSection = () => {
    return (
        <div className="px-[15%] py-12 bg-teal-300">
            <h1 className="text-3xl font-bold text-gray-900 pb-8">Hi, I'm Jake</h1>
            <blockquote class="text-center text-xl/8 font-regular text-gray-900 px-8 sm:text-2xl/9">
                <p>
                I'm a developer with hands-on experience building games in Unity using C# and prototyping gameplay systems in C++. My background includes two years as a professional web developer, giving me a solid technical foundation and a strong grasp of performance, UI, and clean code practices. I'm passionate about game design, systems programming, and creating engaging, interactive experiences. Now, I'm fully focused on breaking into the game industry and bringing my skills to a studio that values creativity and technical excellence. </p>
            </blockquote>
            <div className="flex justify-center mt-6">
            <a
            href="/resume.pdf"  // Update path if needed
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            >
                View Resume
            </a>
            </div>
        </div>
    );
};

export default AboutMeSection;