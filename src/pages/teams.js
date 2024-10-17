"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var Teams = function () {
    // Leadership team data
    var leadershipTeamMembers = [
        {
            id: 1,
            name: "Alexander Reinhardt",
            title: "Chief Technology Officer",
            description: "Expertise: Cloud Infrastructure, Software Engineering, System Architecture. John leads the technology strategy at Veritas with over 15 years of experience.",
            imgSrc: "/alexander-reinhardt.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:alexanderreinhardt@veritas.com",
        },
        {
            id: 2,
            name: "Victoria Thompson",
            title: "Chief Executive Officer",
            description: "Expertise: Corporate Strategy, Innovation Leadership, Business Growth. As the visionary leader of Veritas, Emily steers the company toward innovation and growth, ensuring we remain at the forefront of industry advancements. Her commitment to excellence fosters a culture of collaboration and continuous improvement.",
            imgSrc: "/victoria-thompson.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:victoriathompson@veritas.com",
        },
    ];
    // Membership team data
    var membershipTeamMembers = [
        {
            id: 1,
            name: "Ethan Montgomery",
            title: "Lead Engineer",
            description: "Expertise: Full-Stack Development, Systems Architecture, AI-driven Engineering. Ethan spearheads Veritas' engineering division, delivering cutting-edge technology solutions.",
            imgSrc: "/ethan-montgomery.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:ethanmontgomery@veritas.com",
        },
        {
            id: 2,
            name: "Samantha Brooks",
            title: "Head of Products Development",
            description: "Expertise: Product Design, User Experience (UX), Agile Development. Samantha bridges the gap between product vision and reality, leading a cross-functional team to bring innovative products to market.",
            imgSrc: "/samantha-brooks.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:samanthabrooks@veritas.com",
        },
        {
            id: 3,
            name: "Michael Jennings",
            title: "Data Science Lead",
            description: "Expertise: Machine Learning, Predictive Analytics, Data Strategy. Michael harnesses the power of data to unlock insights that fuel Veritas’ strategic decisions.",
            imgSrc: "/michael-jennings.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:michaeljennings@veritas.com",
        },
        {
            id: 4,
            name: "Olivia Rivers",
            title: "Senior Marketing Strategist",
            description: "Expertise: Brand Strategy, Digital Marketing, Consumer Engagement. Olivia leads Veritas' global marketing efforts, ensuring that the company’s brand resonates across digital channels.",
            imgSrc: "/olivia-rivers.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:oliviarivers@veritas.com",
        },
        {
            id: 5,
            name: "Daniel Cohen",
            title: "Head of Research and Development",
            description: "Expertise: Emerging Technologies, Innovation Strategy, R&D. Daniel drives the R&D agenda at Veritas, exploring new technologies that will shape the future of the business.",
            imgSrc: "/daniel-cohen.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:danielcohen@veritas.com",
        },
        {
            id: 6,
            name: "Grace Campbell",
            title: "Human Resources Director",
            description: "Expertise: Talent Acquisition, Organizational Development, Leadership Coaching. Grace is responsible for cultivating a high-performing team at Veritas.",
            imgSrc: "/grace-campbell.jpg",
            instagram: "https://instagram.com",
            linkedin: "https://linkedin.com",
            email: "mailto:gracecampbell@veritas.com",
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { id: "teams", className: "bg-blue-900 text-white py-16 text-center mt-16", style: {
                    backgroundImage: "url('/meet-the-team.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px",
                    filter: "brightness(90%)",
                }, children: [(0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-black opacity-50" }), (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold mb-4 text-shadow", children: "Meet the Veritas Team" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl", children: "Veritas, our success is driven by our talented and dedicated team. Explore the mix of innovation, collaboration, and expertise that drives us forward." })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "py-16 bg-gray-100", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold mb-8", children: "Leadership Team" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: leadershipTeamMembers.map(function (member) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white shadow-lg rounded-lg p-6 flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("img", { src: member.imgSrc, alt: member.name, className: "w-25 h-25 rounded-full mb-4 object-cover" }), (0, jsx_runtime_1.jsx)("h4", { className: "font-bold mt-4", children: member.name }), (0, jsx_runtime_1.jsx)("h5", { className: "text-gray-500 mt-1", children: member.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-center mt-3", children: member.description }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-4 mt-4", children: [(0, jsx_runtime_1.jsx)("a", { href: member.instagram, target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaInstagram, { className: "text-gray-500 hover:text-blue-500" }) }), (0, jsx_runtime_1.jsx)("a", { href: member.linkedin, target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaLinkedin, { className: "text-gray-500 hover:text-blue-500" }) }), (0, jsx_runtime_1.jsx)("a", { href: member.email, target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaEnvelope, { className: "text-gray-500 hover:text-blue-500" }) })] })] }, member.id)); }) })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "py-16 bg-gray-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto text-center", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold mb-8", children: "Membership Team" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: membershipTeamMembers.map(function (member) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white shadow-lg rounded-lg p-6 flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("img", { src: member.imgSrc, alt: member.name, className: "w-25 h-25 rounded-full mb-4 object-cover" }), (0, jsx_runtime_1.jsx)("h4", { className: "font-bold mt-4", children: member.name }), (0, jsx_runtime_1.jsx)("h5", { className: "text-gray-500 mt-1", children: member.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-center mt-3", children: member.description }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-4 mt-4", children: [(0, jsx_runtime_1.jsx)("a", { href: member.instagram, target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaInstagram, { className: "text-gray-500 hover:text-blue-500" }) }), (0, jsx_runtime_1.jsx)("a", { href: member.linkedin, target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaLinkedin, { className: "text-gray-500 hover:text-blue-500" }) }), (0, jsx_runtime_1.jsx)("a", { href: member.email, target: "_blank", rel: "noopener noreferrer", children: (0, jsx_runtime_1.jsx)(fa_1.FaEnvelope, { className: "text-gray-500 hover:text-blue-500" }) })] })] }, member.id)); }) })] }) })] }));
};
exports.default = Teams;
