const Hero=()=>{
    return(
        <>
            <div>
                <div className="flex flex-col items-center justify-center h-screen ">
                    <h1 className="text-sm font-bold mb-4">Welcome to My Portfolio</h1>
                    <p className="text-lg text-neutral-100 mb-8">Explore my projects, blogs, and more!</p>
                    <a href="/projects" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">View Projects</a>
                </div>
            </div>
        </>
    )
}

export default Hero;