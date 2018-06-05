var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = document.getElementById('app');
var data = [{
	id: 1,
	name: "Island",
	image: "https://images.unsplash.com/photo-1442530792250-81629236fe54?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9631adb2d2f752e3a0734f393fef634b"
}, {
	id: 2,
	name: "Forest",
	image: "https://images.unsplash.com/photo-1468851508491-4f854ec88aa0?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=b1222b6a1d3694cac76d2a23c3a02254"
}, {
	id: 3,
	name: "Whale",
	image: "https://images.unsplash.com/photo-1454991727061-be514eae86f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=3c55430f01fe9ac9a9ccb3383d1416ff"
}, {
	id: 4,
	name: "Mountain",
	image: "https://images.unsplash.com/photo-1467890947394-8171244e5410?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=9396f0adf263b51b44626228225684d0"
}, {
	id: 5,
	name: "Boat",
	image: "https://images.unsplash.com/photo-1443302382600-0bfacc473376?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=0c0f26518c1001f67b6c2e4480a8d3e0"
}, {
	id: 6,
	name: "Flowers",
	image: "https://images.unsplash.com/photo-1429091443922-e7d9ae79a837?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=e81cb6a60c53788559edb9bec21b80fc"
}, {
	id: 7,
	name: "Fire",
	image: "https://images.unsplash.com/photo-1468245856972-a0333f3f8293?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=1f57cc13084e32839627453821a43abf"
}, {
	id: 8,
	name: "Garden",
	image: "https://images.unsplash.com/photo-1427392797425-39090deb14ec?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=900&h=900&fit=crop&s=8bfe49466d0da200e61128a8ab0e8fbe"
}, {
	id: 9,
	name: "Bridge",
	image: "https://images.unsplash.com/photo-1445723356089-6dbb51d9c4f8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=980&h=980&fit=crop&s=6e476c6e7ce1adac161295616d1bec05"
}  
           ];

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(Tiles, { data: this.props.data });
		}
	}]);

	return App;
}(React.Component);

var Tiles = function (_React$Component2) {
	_inherits(Tiles, _React$Component2);

	function Tiles() {
		_classCallCheck(this, Tiles);

		return _possibleConstructorReturn(this, (Tiles.__proto__ || Object.getPrototypeOf(Tiles)).apply(this, arguments));
	}

	_createClass(Tiles, [{
		key: "render",
		value: function render() {
			// Create tile for each item in data array
			// Pass data to each tile and assign a key
			return React.createElement(
				"div",
				{ className: "tiles" },
				this.props.data.map(function (data) {
					return React.createElement(Tile, { data: data, key: data.id });
				})
			);
		}
	}]);

	return Tiles;
}(React.Component);

var Tile = function (_React$Component3) {
	_inherits(Tile, _React$Component3);

	function Tile(props) {
		_classCallCheck(this, Tile);

		var _this3 = _possibleConstructorReturn(this, (Tile.__proto__ || Object.getPrototypeOf(Tile)).call(this, props));

		_this3.state = {
			open: false,
			mouseOver: false
		};
		// Bind properties to class instance
		_this3._clickHandler = _this3._clickHandler.bind(_this3);
		_this3._mouseEnter = _this3._mouseEnter.bind(_this3);
		_this3._mouseLeave = _this3._mouseLeave.bind(_this3);
		return _this3;
	}
	// Event handlers to modify state values


	_createClass(Tile, [{
		key: "_mouseEnter",
		value: function _mouseEnter(e) {
			e.preventDefault();
			if (this.state.mouseOver === false) {
				console.log(this.props.data.name);
				this.setState({
					mouseOver: true
				});
			}
		}
	}, {
		key: "_mouseLeave",
		value: function _mouseLeave(e) {
			e.preventDefault();
			if (this.state.mouseOver === true) {
				this.setState({
					mouseOver: false
				});
			}
		}
	}, {
		key: "_clickHandler",
		value: function _clickHandler(e) {
			e.preventDefault();
			if (this.state.open === false) {
				this.setState({
					open: true
				});
			} else {
				this.setState({
					open: false
				});
			}
		}
	}, {
		key: "render",
		value: function render() {
			// Modify styles based on state values
			var tileStyle = {};
			var headerStyle = {};
			var zoom = {};
			// When tile clicked
			if (this.state.open) {
				tileStyle = {
					width: '62vw',
					height: '62vw',
					position: 'absolute',
					top: '50%',
					left: '50%',
					margin: '0',
					marginTop: '-31vw',
					marginLeft: '-31vw',
					boxShadow: '0 0 40px 5px rgba(0, 0, 0, 0.3)',
					transform: 'none'
				};
			} else {
				tileStyle = {
					width: '18vw',
					height: '18vw'
				};
			}

			return React.createElement(
				"div",
				{ className: "tile" },
				React.createElement("img", {
					onMouseEnter: this._mouseEnter,
					onMouseLeave: this._mouseLeave,
					onClick: this._clickHandler,
					src: this.props.data.image,
					alt: this.props.data.name,
					style: tileStyle
				})
			);
		}
	}]);

	return Tile;
}(React.Component);

ReactDOM.render(React.createElement(App, { data: data }), app);