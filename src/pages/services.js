"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Services = function () {
    var services = [
        {
            id: 1,
            title: "Web Development",
            description: "We offer innovative web development solutions for your business.",
            imgSrc: "/website-development-banner.jpg",
        },
        {
            id: 2,
            title: "Mobile App Development",
            description: "Creating fast and functional mobile applications to meet business needs.",
            imgSrc: "/mobile-app-development.jpg",
        },
        {
            id: 3,
            title: "SEO Optimization",
            description: "Optimizing your website's visibility on search engines with our SEO strategies.",
            imgSrc: "/seo-optimization-banner.jpg",
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-gray-100 py-10", children: [(0, jsx_runtime_1.jsx)("section", { className: "text-center text-white py-20 relative", style: {
                    backgroundImage: "url('service.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                }, children: (0, jsx_runtime_1.jsxs)("div", { className: "relative z-10", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl font-bold", children: "Our Services" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-lg", children: "We offer a variety of services to meet your business needs" })] }) }), (0, jsx_runtime_1.jsx)("section", { className: "container mx-auto px-6 py-10", children: (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: services.map(function (service) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden", children: [(0, jsx_runtime_1.jsx)("img", { className: "w-full h-56 object-cover", src: service.imgSrc, alt: service.title }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold text-gray-800", children: service.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 mt-4", children: service.description }), (0, jsx_runtime_1.jsx)("button", { className: "mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600", children: "Learn More" })] })] }, service.id)); }) }) }), (0, jsx_runtime_1.jsxs)("section", { className: " text-black py-10 text-center", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl font-bold", children: "Ready to work with us?" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-lg", children: "Contact us to start your project!" }), (0, jsx_runtime_1.jsx)("button", { className: "mt-4 bg-white text-blue-600 px-6 py-3 rounded hover:bg-gray-200", children: "Contact Us" })] })] }));
};
exports.default = Services;
