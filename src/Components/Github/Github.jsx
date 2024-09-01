import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const Github = () => {
	const data = useLoaderData();

	return (
		<div className="flex flex-wrap justify-center">
			{data.map((user, index) => (
				<Card key={index} data={user} />
			))}
		</div>
	);
};

export default Github;

export const githubInfoLoader = async (user) => {
	const response = await fetch(`https://api.github.com/users/${user}`);
	const data = await response.json();

	return data;
};
