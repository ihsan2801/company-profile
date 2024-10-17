"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var contact_1 = __importDefault(require("../pages/contact"));
var Navbar = function (_a) {
    var toggleModal = _a.toggleModal;
    var _b = (0, react_1.useState)(false), isMenuOpen = _b[0], setIsMenuOpen = _b[1];
    var isModalOpen = (0, react_1.useState)(false)[0]; // State untuk modal
    var toggleMenu = function () {
        setIsMenuOpen(!isMenuOpen);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("header", { className: "fixed top-0 left-0 right-0 z-50 bg-[#3f3f40] py-4 px-8 transition-all duration-300", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto flex justify-between items-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "logo", children: (0, jsx_runtime_1.jsx)("img", { src: "public/veritaslogo.jpg", alt: "veritas", className: "max-w-[100px] max-h-[50px]" }) }), (0, jsx_runtime_1.jsx)("div", { className: "md:hidden", children: (0, jsx_runtime_1.jsx)("button", { onClick: toggleMenu, className: "text-white", children: isMenuOpen ? 'Close' : 'Menu' }) }), (0, jsx_runtime_1.jsx)("nav", { className: "md:flex ".concat(isMenuOpen ? 'block' : 'hidden', " bg-[#3f3f40]"), children: (0, jsx_runtime_1.jsxs)("ul", { className: "flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 py-4 md:py-0", children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/", className: "text-white font-medium", onClick: toggleMenu, children: "Home" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/about", className: "text-white font-medium", onClick: toggleMenu, children: "About" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/services", className: "text-white font-medium", onClick: toggleMenu, children: "Services" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/teams", className: "text-white font-medium", onClick: toggleMenu, children: "Teams" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("button", { className: "text-white font-medium", onClick: toggleModal, children: "Contact" }) })] }) })] }) }), (0, jsx_runtime_1.jsx)(contact_1.default, { isVisible: isModalOpen, onClose: toggleModal })] }));
};
exports.default = Navbar;
