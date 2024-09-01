import React from "react";

const Profile = () => {
	return (
		<div className="py-16">
			<div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
				<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
					<div className="md:5/12 lg:w-5/12">
						<img
							src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
							alt="Profile"
							className="w-full rounded-lg"
						/>
					</div>
					<div className="md:7/12 lg:w-6/12">
						<h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
							Meet Our Team
						</h2>
						<p className="mt-6 text-gray-600">
							Our team is comprised of highly skilled professionals who are
							passionate about delivering exceptional results. Each member
							brings a unique set of skills and experiences, contributing to a
							collaborative and innovative environment.
						</p>
						<p className="mt-4 text-gray-600">
							From experienced developers to creative designers, our team is
							dedicated to excellence and committed to transforming ideas into
							successful projects. Learn more about their backgrounds and
							expertise.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
