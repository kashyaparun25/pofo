"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var AboutMe = function AboutMe() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center gap-6"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "your-photo.jpg",
    alt: "Your Name",
    className: "w-32 h-32 rounded-full border-4 border-white shadow-lg"
  }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold mb-2"
  }, "About Me"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600"
  }, "Hi, I'm a [Your Profession]! I specialize in data science, machine learning, and web development."))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold"
  }, "Education"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600"
  }, "Bachelor's in Computer Science, 2020-2024"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-500"
  }, "University Name")), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg font-bold"
  }, "Certifications"), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-disc ml-6"
  }, /*#__PURE__*/_react["default"].createElement("li", null, "AWS Solutions Architect, 2024"), /*#__PURE__*/_react["default"].createElement("li", null, "Google Data Analytics, 2023"))));
};
var Projects = function Projects() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold mb-4"
  }, "Projects"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "space-y-4"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "border p-4 rounded-lg shadow"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "font-bold"
  }, "Project 1"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600"
  }, "A description of your first project.")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "border p-4 rounded-lg shadow"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "font-bold"
  }, "Project 2"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-600"
  }, "A description of your second project."))));
};
var Articles = function Articles() {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold mb-4"
  }, "Articles"), /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-blue-600"
  }, "Article 1: Data Science Tips")), /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "#",
    className: "text-blue-600"
  }, "Article 2: Machine Learning Basics"))));
};
var Portfolio = function Portfolio() {
  var _React$useState = _react["default"].useState('about'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeTab = _React$useState2[0],
    setActiveTab = _React$useState2[1];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4 max-w-4xl mx-auto"
  }, /*#__PURE__*/_react["default"].createElement("nav", {
    className: "flex gap-4 mb-8"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "py-2 px-4 ".concat(activeTab === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200'),
    onClick: function onClick() {
      return setActiveTab('about');
    }
  }, "About Me"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "py-2 px-4 ".concat(activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200'),
    onClick: function onClick() {
      return setActiveTab('projects');
    }
  }, "Projects"), /*#__PURE__*/_react["default"].createElement("button", {
    className: "py-2 px-4 ".concat(activeTab === 'articles' ? 'bg-blue-500 text-white' : 'bg-gray-200'),
    onClick: function onClick() {
      return setActiveTab('articles');
    }
  }, "Articles")), activeTab === 'about' && /*#__PURE__*/_react["default"].createElement(AboutMe, null), activeTab === 'projects' && /*#__PURE__*/_react["default"].createElement(Projects, null), activeTab === 'articles' && /*#__PURE__*/_react["default"].createElement(Articles, null));
};
_reactDom["default"].render(/*#__PURE__*/_react["default"].createElement(Portfolio, null), document.getElementById('root'));