import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Card = ({ data }) => {
	// const data = useLoaderData();
	// const [data, setData] = useState({});

	// useEffect(() => {
	// 	fetch(`https://api.github.com/users/${user}`)
	// 		.then((response) => response.json())
	// 		.then((res) => setData(res));
	// }, []);

	// console.log(data);

	return (
		<div className="text-orange-700 bg-white/30 backdrop-blur-sm shadow-lg max-w-md m-4 min-w-[448px] border border-gray-200 rounded-xl">
			<img
				className="m-4 max-w-36 mx-auto rounded-full "
				src={data?.avatar_url}
				alt="githubLogo"
			/>

			<h1 className="m-2 text-center text-2xl font-extrabold">{data?.login}</h1>
			<h1 className="m-2 text-center ">
				<span className="font-extrabold">Followers: </span>
				{data?.followers}
			</h1>
			<h1 className="m-2 text-center font-bold">{data?.name}</h1>
			<h1 className="m-2 text-center font-semibold ">
				<span className="font-bold"> Bio:</span> {data?.bio}
			</h1>
			<h1 className="m-2 text-center font-semibold">{data?.location}</h1>
		</div>
	);
};

export default Card;
