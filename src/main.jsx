import { createRoot } from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./Components/User/User.jsx";
import Github from "./Components/Github/Github.jsx";
import { githubInfoLoader } from "./Components/Github/Github.jsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <Layout />,
// 		children: [
// 			{
// 				path: "",
// 				element: <Home />,
// 			},
// 			{
// 				path: "about",
// 				element: <About />,
// 			},
// 			{
// 				path: "profile",
// 				element: <Profile />,
// 			},
// 			{
// 				path: "contact",
// 				element: <Contact />,
// 			},
// 		],
// 	},
// ]);

const list = ["a1tamash", "abhay31"];

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />}></Route>
			<Route path="about" element={<About />}></Route>
			<Route path="profile" element={<Profile />}></Route>
			<Route path="contact" element={<Contact />}></Route>
			<Route path="user/:userId" element={<User />}></Route>
			<Route
				loader={async () => {
					// data is an array of promises
					const data = await Promise.all(
						list.map((user) => githubInfoLoader(user))
					);
					return data;
				}}
				path="github"
				element={<Github />}
			></Route>
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
