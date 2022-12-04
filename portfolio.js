import emoji from "react-easy-emoji";

export const greetings = {
	name: "Jônatas",
	title: "Oi tudo, eu sou Jônatas",
	description:
		"Sou um desenvolvedor web Full Stack apaixonado por ter uma experiência de aplicações web com desenvolvimento Node.JS, MongoDB, React.js, Next.js.",
	resumeLink:
		""// "https://docs.google.com/document/d/1_4RIfbyt4FFHW_bNplnoINQr01neTu7XDeeUlT_2O_k/edit?usp=sharing",
};

export const openSource = {
	githubUserName: "jonatasjs",
};

export const contact = {};

export const socialLinks = {
	url: "https://jonatas.app/",
	// linkedin: "https://www.linkedin.com/in/jonatasjs/",
	github: "https://github.com/jonatasjs",
	instagram: "https://www.instagram.com/_jonatas.js",
	// facebook: "https://www.facebook.com/jonatasjs",
	// twitter: "https://twitter.com/jonatasjs",
};

export const skillsSection = {
	title: "O que eu faço",
	subTitle:
		"DESENVOLVEDOR LOUCO DE PILHA COMPLETA QUE QUER EXPLORAR CADA PILHA DE TECNOLOGIA",
	data: [
		{
			title: "Full Stack Development Junior",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("? Building responsive static websites using Next.js"),
				emoji(
					"? Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji(
					"? Building RESTful APIs in Node.JS & Express REST"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "Express",
					fontAwesomeClassname: "logos:express",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
			],
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "60", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "40",
	},
];

export const educationInfo = [
	// {
	// 	schoolName: "Harvard University",
	// 	subHeader: "Master of Science in Computer Science",
	// 	duration: "September 2017 - April 2019",
	// 	desc: "Participated in the research of XXX and published 3 papers.",
	// 	grade: "Grade A",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// },
];

export const experience = [
	{
		role: "NOC 1",
		company: "SiM Internet",
		companylogo: "/img/icons/common/SiM-Internet.png",
		date: "Set 2021 – ****",
		desc: "Trabalhei com configuração de ONU's, verificação para resolução de problemas com, falta de conexão, lentidão, oscilações, perda de pacote, configuração de ip fixo, abrir portas, etc.",
	}
];

export const projects = [
	{
		name: "developer-portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/jonatasjs/developer-portfolio",
		link: "https://jonatas.app/",
	}
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Jônatas Souza Soares",
	description:
		"A passionate Full Stack Web Developer.",
	author: "Jônatas Souza Soares",
	image: "https://github.com/jonatasjs.png",
	url: "https://jonatas.app",
	keywords: [
		"Jônatas",
		"Jôantas Souza",
		"@jonatasjs",
		"jonatasjs",
		"Portfolio",
		"Souza Portfolio ",
		"Joantas Souza Portfolio",
		"Jônatas Souza Soares",
		"Next Rocket",
		"Next",
		"Rocket",
	],
}
