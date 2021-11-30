const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 500);

const randerer = new THREE.WebGLRenderer({	
	canvas: document.querySelector("canvas"),
});

randerer.setPixelRatio(window.devicePixelRatio);
randerer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({color: 0x22bbdd});
var torus = new THREE.Mesh(geometry, material);
const point_light = new THREE.PointLight(0xffffff);
point_light.position.set(20, 20, 20);

scene.add(point_light);
scene.add(torus);

function animate(){	
	requestAnimationFrame(animate);

	torus.rotation.x += 0.05;
	torus.rotation.y += 0.005;
	torus.rotation.z += 0.05;

	randerer.render(scene, camera);
}

animate();

