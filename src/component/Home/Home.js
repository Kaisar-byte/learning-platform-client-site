<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../assets/images/hero1.png";
import hero2 from "../../assets/images/hero2.jpg";
import hero3 from "../../assets/images/hero3.jpg";
import hero4 from "../../assets/images/hero4.jpg";
import Features from "../Features/Features";

const Home = () => {
	return (
		<div className="md:container mx-auto ">
			<div className="bg-gradient-to-b from-purple-600 to-blue-600">
				<div className="w-5/6 mx-auto flex justify-around gap-4">
					<div className="text-left w-3/5">
						<h2 className="text-6xl text-white mt-40 mb-4 font-semibold bg-gradient-to-r from-yellow-500">
							Programming Zone
						</h2>
						<p className="text-xl mr-[120px]">
							A learning platform to build career and place your CV for got hire
						</p>
						<Link to="/courses">
							<button className="border-0 bg-red-400 px-4 text-xl rounded-sm py-1 mt-5 text-white ">
								Our Courses
							</button>
						</Link>
					</div>
					<div className="flex w-2/5 mt-6">
						<div className="flex align-center content-center">
							<img
								src={hero1}
								className="w-[200px] h-[200px] rounded-full mt-20"
								alt=""
							/>
						</div>
						<div className="h-[420px] flex-col">
							<img
								src={hero2}
								className="w-[150px] h-[150px] rounded-full mb-2"
								alt=""
							/>
							<img
								src={hero3}
								className="w-[230px] h-[230px] rounded-full"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="w-5/6 mx-auto">
				<div>
					<div className="feature-heading text-center">
						<h2 className="text-3xl mt-8 mb8">Our Features</h2>
						<p className="mb-8">
							Programing Zone has good resource to learn and build your career
						</p>
					</div>
				</div>
				<div className="grid grid-cols-2">
					<Features></Features>
					<Features></Features>
					<Features></Features>
					<Features></Features>
				</div>
			</div>
		</div>
	);
};

export default Home;
=======
import React from 'react';
import heroImg from '../../assets/images/hero-img.png'

const Home = () => {
    return (
        <div>
            <div>
                <h2>Start Your Programming Training</h2>
            </div>
            <img src={heroImg} alt="" />
        </div>
    );
};

export default Home;
>>>>>>> 7bdb76546368d35ce897c98fe6786183e3739598
