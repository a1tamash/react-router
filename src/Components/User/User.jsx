import { useParams } from "react-router-dom";

const User = () => {
	const { userId } = useParams();

	return (
		<div>
			<h1
				className="text-center mx-auto max-w-md shadow-lg bg-white/30  backdrop-blur-2xl p-4 m-4 text-xl text-emerald-500
            "
			>
				User: {userId}
			</h1>
		</div>
	);
};

export default User;
