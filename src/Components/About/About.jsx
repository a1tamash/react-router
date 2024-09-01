const About = () => {
	return (
		<div className="py-16 bg-white">
			<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
				<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
					<div className="md:5/12 lg:w-5/12 shadow-xl rounded-lg">
						<img
							className="rounded-lg border border-gray-100"
							src="https://repository-images.githubusercontent.com/440090256/6ee7b3f8-2b08-4b47-8c47-966240d2540c"
							alt="image"
						/>
					</div>
					<div className="md:7/12 lg:w-6/12">
						<h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
							React development is carried out by passionate developers
						</h2>
						<p className="mt-6 text-gray-600">
							React development thrives on the enthusiasm of dedicated
							developers who craft dynamic, responsive web applications. Their
							passion drives innovation, ensuring cutting-edge solutions and
							exceptional user experiences in every project.
						</p>
						<p className="mt-4 text-gray-600">
							Their expertise in React transforms complex ideas into intuitive
							interfaces, enhancing both functionality and user engagement.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
