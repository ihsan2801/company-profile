"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fa_1 = require("react-icons/fa");
var react_router_dom_1 = require("react-router-dom");
var Footer = function (_a) {
    var toggleModal = _a.toggleModal;
    return ((0, jsx_runtime_1.jsxs)("footer", { className: "bg-gray-900 text-white py-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-4 flex flex-col md:flex-row justify-between", children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-6 md:mb-0", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold", children: "Veritas" }), (0, jsx_runtime_1.jsx)("p", { children: "Empowering Future Innovators" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-6 md:mb-0", children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-bold mb-2", children: "Company" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "hover:text-gray-400", children: "Home" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/about", className: "hover:text-gray-400", children: "About Us" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/services", className: "hover:text-gray-400", children: "Services" }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-6 md:mb-0", children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-bold mb-2", children: "Resources" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { className: "hover:text-gray-400", onClick: toggleModal, children: "Contact Us" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/testimonials", className: "hover:text-gray-400", children: "Testimonials" }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-bold mb-2", children: "Follow Us" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-4", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://instagram.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gray-400", children: (0, jsx_runtime_1.jsx)(fa_1.FaInstagram, { size: 24 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gray-400", children: (0, jsx_runtime_1.jsx)(fa_1.FaTwitter, { size: 24 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer", className: "hover:text-gray-400", children: (0, jsx_runtime_1.jsx)(fa_1.FaLinkedin, { size: 24 }) })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-center mt-6", children: (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: "\u00A9 2024 Veritas Digital Technology. All rights reserved." }) })] }));
};
exports.default = Footer;
