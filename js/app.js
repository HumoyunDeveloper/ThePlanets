var mercury = document.getElementById('mercury');
var mars = document.getElementById('mars');
var venus = document.getElementById('venus');
var yer = document.getElementById('yer');
var saturn = document.getElementById('saturn');
var neptun = document.getElementById('neptun');
var uran = document.getElementById('uran');
var pos = document.getElementById('position');
var all = document.getElementById('all');
var planetState = '';

mercury.onmousedown = function () {
	planetState = 'mercury';
}

all.onmousedown = function () {
	planetState = 'all';
}
yer.onmousedown = function () {
	planetState = 'yer';
}

uran.onmousedown = function () {
	planetState = 'uran';
}
neptun.onmousedown = function () {
	planetState = 'neptun';
}
venus.onmousedown = function () {
	planetState = 'venus';
}
mars.onmousedown = function () {
	planetState = 'mars';
}
saturn.onmousedown = function(){
	planetState = 'saturn';
}

var pmex = localStorage.getItem('pmex') * 1 + 5;
var pmey = localStorage.getItem('pmey') * 1 + 1;
var pmez = localStorage.getItem('pmez');
var pmx = localStorage.getItem('pmx') * 1 + 5;
var pmy = localStorage.getItem('pmy') * 1 + 1;
var pmz = localStorage.getItem('pmz');
var pvx = localStorage.getItem('pvx') * 1 + 5;
var pvy = localStorage.getItem('pvy') * 1 + 1;
var pvz = localStorage.getItem('pvz');
var pjx = localStorage.getItem('pjx') * 1 + 5;
var pjy = localStorage.getItem('pjy') * 1 + 1;
var pjz = localStorage.getItem('pjz');
var pex = localStorage.getItem('pex') * 1 + 5;
var pey = localStorage.getItem('pey') * 1 + 1;
var pez = localStorage.getItem('pez');
var pux = localStorage.getItem('pux') * 1 + 5;
var puz = localStorage.getItem('puz');
var puy = localStorage.getItem('puy') * 1 + 1;
var pnex = localStorage.getItem('pvenx') * 1 + 5;
var pnez = localStorage.getItem('pvenz');
var pney = localStorage.getItem('pveny') * 1 + 1;
var psnx = localStorage.getItem('psnx') * 1 + 5;
var psnz = localStorage.getItem('psnz');
var psny = localStorage.getItem('psny') * 1 + 1;


var pnz = 100;
var pnx = 260;
var pny = 50;

var APP = {

	Player: function () {

		var renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.outputEncoding = THREE.sRGBEncoding;

		var loader = new THREE.ObjectLoader();
		var camera, scene;

		var vrButton = VRButton.createButton(renderer);

		var events = {};

		var dom = document.createElement('div');
		dom.appendChild(renderer.domElement);
		dom.classList.toggle('three')
		dom.appendChild(renderer.domElement);

		this.dom = dom;

		this.width = 500;
		this.height = 500;

		this.load = function (json) {

			var project = json.project;

			if (project.vr !== undefined) renderer.xr.enabled = project.vr;
			if (project.shadows !== undefined) renderer.shadowMap.enabled = project.shadows;
			if (project.shadowType !== undefined) renderer.shadowMap.type = project.shadowType;
			if (project.toneMapping !== undefined) renderer.toneMapping = project.toneMapping;
			if (project.toneMappingExposure !== undefined) renderer.toneMappingExposure = project.toneMappingExposure;
			if (project.physicallyCorrectLights !== undefined) renderer.physicallyCorrectLights = project.physicallyCorrectLights;

			this.setScene(loader.parse(json.scene));
			this.setCamera(loader.parse(json.camera));

			events = {
				init: [],
				start: [],
				stop: [],
				keydown: [],
				keyup: [],
				mousedown: [],
				mouseup: [],
				mousemove: [],
				touchstart: [],
				touchend: [],
				touchmove: [],
				update: []
			};

			var scriptWrapParams = 'player,renderer,scene,camera';
			var scriptWrapResultObj = {};

			for (var eventKey in events) {

				scriptWrapParams += ',' + eventKey;
				scriptWrapResultObj[eventKey] = eventKey;

			}

			var scriptWrapResult = JSON.stringify(scriptWrapResultObj).replace(/\"/g, '');

			for (var uuid in json.scripts) {

				var object = scene.getObjectByProperty('uuid', uuid, true);

				if (object === undefined) {

					console.warn('APP.Player: Script without object.', uuid);
					continue;

				}

				var scripts = json.scripts[uuid];

				for (var i = 0; i < scripts.length; i++) {

					var script = scripts[i];

					var functions = (new Function(scriptWrapParams, script.source + '\nreturn ' + scriptWrapResult + ';').bind(object))(this, renderer, scene, camera);

					for (var name in functions) {

						if (functions[name] === undefined) continue;

						if (events[name] === undefined) {

							console.warn('APP.Player: Event type not supported (', name, ')');
							continue;

						}

						events[name].push(functions[name].bind(object));

					}

				}

			}

			dispatch(events.init, arguments);

		};

		this.setCamera = function (value) {

			camera = value;
			camera.aspect = this.width / this.height;
			camera.updateProjectionMatrix();

		};

		this.setScene = function (value) {

			scene = value;

		};

		this.setSize = function (width, height) {

			this.width = width;
			this.height = height;

			if (camera) {

				camera.aspect = this.width / this.height;
				camera.updateProjectionMatrix();

			}

			if (renderer) {

				renderer.setSize(width, height);

			}

		};

		function dispatch(array, event) {

			for (var i = 0, l = array.length; i < l; i++) {

				array[i](event);

			}

		}

		var time, prevTime;

		function animate() {

			time = performance.now();

			try {

				dispatch(events.update, { time: time, delta: time - prevTime });

			} catch (e) {

				console.error((e.message || e), (e.stack || ""));

			}
			position.innerHTML = 'x: ' + Math.floor(camera.position.x) + ' , y:' + Math.floor(camera.position.y) + ' , z:' + Math.floor(camera.position.z);

			if (planetState == 'jupiter') {
				var dx = camera.position.x - pjx;
				var dy = camera.position.y - pjy;
				var dz = camera.position.z - pjz;
				if (camera.position.x != pjx) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != pjy) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != pjz) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'yer') {
				var dx = camera.position.x - pex;
				var dy = camera.position.y - pey;
				var dz = camera.position.z - pez;
				if (camera.position.x != pex) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != pey) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != pez) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'venus') {
				var dx = camera.position.x - pvx;
				var dy = camera.position.y - pvy;
				var dz = camera.position.z - pvz;
				if (camera.position.x != pvx) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != pvy) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != pvz) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'neptun') {
				var dx = camera.position.x - pnex;
				var dy = camera.position.y - pney;
				var dz = camera.position.z - pnez;
				if (camera.position.x != pnex) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != pney) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != pnez) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'uran') {
				var dx = camera.position.x - pux;
				var dy = camera.position.y - puy;
				var dz = camera.position.z - puz;
				if (camera.position.x != pux) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != puy) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != puz) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'mercury') {
				var dx = camera.position.x - pmex;
				var dy = camera.position.y - pmey;
				var dz = camera.position.z - pmez;
				if (camera.position.x != pmex) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != pmey) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != pmez) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'mars') {
				var dx = camera.position.x - pmx;
				var dy = camera.position.y - pmy;
				var dz = camera.position.z - pmz;
				if (camera.position.x != pmx) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != pmy) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != pmz) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'saturn') {
				var dx = camera.position.x - psnx;
				var dy = camera.position.y - psny;
				var dz = camera.position.z - psnz;
				if (camera.position.x != psnx) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != psny) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != psnz) {
					camera.position.z -= dz / 20;
				}
			}
			if (planetState == 'all') {
				var dx = camera.position.x - pnx;
				var dy = camera.position.y - pny;
				var dz = camera.position.z - pnz;
				if (camera.position.x != pnx) {
					camera.position.x -= dx / 20;
				}
				if (camera.position.y != pny) {
					camera.position.y -= dy / 20;
				}
				if (camera.position.z != pnz) {
					camera.position.z -= dz / 20;
				}
			}
			renderer.render(scene, camera);

			prevTime = time;

		}

		this.play = function () {

			if (renderer.xr.enabled) dom.append(vrButton);

			prevTime = performance.now();

			document.addEventListener('keydown', onDocumentKeyDown);
			document.addEventListener('keyup', onDocumentKeyUp);
			document.addEventListener('mousedown', onDocumentMouseDown);
			document.addEventListener('mouseup', onDocumentMouseUp);
			document.addEventListener('mousemove', onDocumentMouseMove);
			document.addEventListener('touchstart', onDocumentTouchStart);
			document.addEventListener('touchend', onDocumentTouchEnd);
			document.addEventListener('touchmove', onDocumentTouchMove);

			dispatch(events.start, arguments);

			renderer.setAnimationLoop(animate);

		};

		this.stop = function () {

			if (renderer.xr.enabled) vrButton.remove();

			document.removeEventListener('keydown', onDocumentKeyDown);
			document.removeEventListener('keyup', onDocumentKeyUp);
			document.removeEventListener('mousedown', onDocumentMouseDown);
			document.removeEventListener('mouseup', onDocumentMouseUp);
			document.removeEventListener('mousemove', onDocumentMouseMove);
			document.removeEventListener('touchstart', onDocumentTouchStart);
			document.removeEventListener('touchend', onDocumentTouchEnd);
			document.removeEventListener('touchmove', onDocumentTouchMove);

			dispatch(events.stop, arguments);

			renderer.setAnimationLoop(null);

		};

		this.dispose = function () {

			renderer.dispose();

			camera = undefined;
			scene = undefined;

		};

		//

		function onDocumentKeyDown(event) {

			dispatch(events.keydown, event);

		}

		function onDocumentKeyUp(event) {

			dispatch(events.keyup, event);

		}

		function onDocumentMouseDown(event) {

			dispatch(events.mousedown, event);

		}

		function onDocumentMouseUp(event) {

			dispatch(events.mouseup, event);

		}

		function onDocumentMouseMove(event) {

			dispatch(events.mousemove, event);

		}

		function onDocumentTouchStart(event) {

			dispatch(events.touchstart, event);

		}

		function onDocumentTouchEnd(event) {

			dispatch(events.touchend, event);

		}

		function onDocumentTouchMove(event) {

			dispatch(events.touchmove, event);

		}

	}

};

export { APP };
