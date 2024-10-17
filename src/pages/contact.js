"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var ModalContact = function (_a) {
    var isVisible = _a.isVisible, onClose = _a.onClose;
    if (!isVisible)
        return null;
    var handleSubmit = function (e) {
        e.preventDefault();
        console.log("Form submitted!");
        onClose();
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative", children: [(0, jsx_runtime_1.jsx)("button", { className: "absolute top-3 right-3 text-gray-600 hover:text-gray-900", onClick: onClose, children: "\u00D7" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-2xl font-bold mb-4 text-center", children: "Contact Us" }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-gray-700", children: "Full Name" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600", placeholder: "Enter your name", required // Tambahkan validasi
                                    : true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-gray-700", children: "Email Address" }), (0, jsx_runtime_1.jsx)("input", { type: "email", className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600", placeholder: "Enter your email", required // Tambahkan validasi
                                    : true })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-gray-700", children: "Message" }), (0, jsx_runtime_1.jsx)("textarea", { className: "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600", placeholder: "Enter your message", rows: 4, required // Tambahkan validasi
                                    : true })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300", children: "Send Message" })] })] }) }));
};
exports.default = ModalContact;
