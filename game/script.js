console.clear();

/*////////////////////////////////////////*/

var scene, camera, renderer, orbit, light;
let renderCalls = [];

scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x242426, 20, 600);

camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 600);
camera.position.z = 90;
//camera.position.y = 50;
//camera.position.x = 30;

renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x242426);
renderer.toneMapping = THREE.LinearToneMapping;

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

window.addEventListener('resize', function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

document.body.appendChild(renderer.domElement);

/*////////////////////////////////////////*/


// var ambientLight = new THREE.AmbientLight(0x222222);
// scene.add(ambientLight);

let hemiLight = new THREE.HemisphereLight(0xEBF7FD, 0xEBF7FD, 0.2);
//hemiLight.color.setRGB(0.75,0.8,0.95);
hemiLight.position.set(0, 20, 20);
scene.add(hemiLight);

/*////////////////////////////////////////*/

function noiseMap(size = 256, intensity = 60, repeat = 0) {
  var canvas = document.createElement('canvas'),
  ctx = canvas.getContext('2d'),
  width = canvas.width = size,
  height = canvas.height = size;

  var imageData = ctx.getImageData(0, 0, width, height),
  pixels = imageData.data,
  n = pixels.length,
  i = 0;

  while (i < n) {
    pixels[i++] = pixels[i++] = pixels[i++] = Math.sin(i * i * i + i / n * Math.PI) * intensity;
    pixels[i++] = 255;
  }
  ctx.putImageData(imageData, 0, 0);

  let texture = new THREE.Texture(canvas);
  if (repeat) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(repeat, repeat);
  }
  texture.needsUpdate = true;

  return texture;
}

/*////////////////////////////////////////*/

let carGeometry = new THREE.BoxGeometry(20, 10, 3);
let carMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  //specular: 0x009900,
  //bumpMap: noiseMap(128, 20, 5),
  shininess: 100,
  emissive: 0xFF0000,
  emissiveIntensity: 0.6 });


let carTopGeometry = new THREE.BoxGeometry(12, 8, 5);
let carTopMaterial = new THREE.MeshPhongMaterial({
  color: 0xB74242,
  //specular: 0x009900,
  //bumpMap: noiseMap(128, 20, 5),
  shininess: 100,
  emissive: 0x990000,
  emissiveIntensity: 0.7 });


let wheelGeometry = new THREE.CylinderGeometry(3, 3, 1, 6);
let wheelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });


function Car(color) {

  THREE.Object3D.apply(this, arguments);


  let carBody = new THREE.Mesh(carGeometry, carMaterial);
  carBody.castShadow = true;
  carBody.receiveShadow = true;
  this.add(carBody);

  let carTop = new THREE.Mesh(carTopGeometry, carTopMaterial);
  carTop.position.x -= 2;
  carTop.position.z += 3.5;
  carTop.castShadow = true;
  carTop.receiveShadow = true;

  this.add(carTop);

  this.castShadow = true;
  this.receiveShadow = true;

  /*////////////////////////////////////////*/

  var light = new THREE.PointLight(0xFFFFFF, 1, 0);
  light.position.z = 25;
  light.position.x = 5;

  light.castShadow = true;
  light.shadow.mapSize.width = 512;
  light.shadow.mapSize.height = 512;
  light.shadow.camera.near = 0.1;
  light.shadow.camera.far = 50;
  light.shadow.bias = 0.1;
  light.shadow.radius = 5;

  light.power = 3;

  this.add(light);


  /*////////////////////////////////////////*/


  this.wheels = Array(4).fill(null);
  this.wheels = this.wheels.map((wheel, i) => {
    wheel = new THREE.Mesh(wheelGeometry, wheelMaterial);
    wheel.position.y = i < 2 ? 6 : -6;
    wheel.position.x = i % 2 ? 6 : -6;
    wheel.position.z = -3;
    this.add(wheel);
    return wheel;
  });

  /*////////////////////////////////////////*/

  this.lights = Array(2).fill(null);
  this.lights = this.lights.map((light, i) => {

    light = new THREE.SpotLight(0xffffff);
    light.position.x = 11;
    light.position.y = i < 1 ? -3 : 3; //;
    light.position.z = -3;
    light.angle = Math.PI / 3.5;

    light.castShadow = true;

    light.shadow.mapSize.width = 512;
    light.shadow.mapSize.height = 512;

    light.shadow.camera.near = 1;
    light.shadow.camera.far = 400;
    light.shadow.camera.fov = 40;

    light.target.position.y = i < 1 ? -0.5 : 0.5;
    light.target.position.x = 35; // = Math.PI/2;

    this.add(light.target);
    this.add(light);

    return light;
  });

  //this.rotation.x = Math.PI / 2;

}

Car.prototype = Object.assign(THREE.Object3D.prototype, {
  constructor: Car,


  maxspeed: 3,
  speed: 0,
  angle: 0,
  steering: 0,
  lightsOn: true,

  // Driving controls adapted from https://codepen.io/Beclamide/pen/bNyxVz?editors=0010
  update() {

    var prev = {
      x: this.position.x,
      y: this.position.y,
      rot: this.rotation.z };


    var steerPower = 0.0006; // / (this.speed + 1);

    // steering
    if (keys[39] || keys[68]) {
      this.steering += this.steering > -.01 ? steerPower : 0;
      // left
    } else if (keys[37] || keys[65]) {
      this.steering -= this.steering < .01 ? steerPower : 0;
    } else {
      this.steering *= 0.92;
    }

    // gas
    if (keys[38] || keys[87]) {
      this.speed += this.speed < this.maxspeed ? 0.04 : 0;
    } else if (keys[40] || keys[83]) {// reverse
      this.speed -= this.speed > -this.maxspeed / 2 ? 0.04 : 0;
    } else {
      this.speed *= 0.96;
    }

    this.speed *= 1 - Math.abs(this.steering / 2);

    this.angle += this.steering * this.speed;

    if (this.wheels) {
      this.wheels.forEach((wheel, i) => {
        wheel.rotation.y += 0.1 * this.speed;
        //wheel.rotation.x = Math.sin(this.angle);// * 0.2;
      });
    }

    var xdir = this.speed * Math.cos(this.angle);
    var ydir = this.speed * Math.sin(this.angle);

    this.position.x += xdir;
    this.position.y += -ydir;
    this.rotation.z = -this.angle;


    if (this.lights) {
      this.lights.forEach((light, i) => {

        light.rotation.z = this.angle;
        light.target.position.clone(this.position);
        light.target.position.x += 10;
        light.target.position.y += i < 1 ? -0.5 : 0.5;
        light.target.updateMatrixWorld();
      });

      if (keys[76]) {

        keys[76] = false;
        this.lightsOn = !this.lightsOn;

        TweenMax.staggerTo(this.lights, 0.3, {
          intensity: this.lightsOn ? 1 : 0,
          ease: RoughEase.ease },
        0.02);

      }
    }


    this.position.x = this.position.x > 990 || this.position.x < -990 ? prev.x : this.position.x;
    this.position.y = this.position.y > 990 || this.position.y < -990 ? prev.y : this.position.y;

    camera.position.x += (this.position.x - camera.position.x) * 0.1; //0.02; // (camera.position.x - this.position.x)/50;
    camera.position.y = this.position.y - 40 - this.speed * 10; //(( this.position.y -camera.position.y ) * 0.01 ) +; //0.02; //(camera.position.y - thiposition.y)/50;

    //camera.position.z = ( 40 + (Math.cos(this.speed)+1/2) * 40 );

    camera.lookAt(
    new THREE.Vector3(
    this.position.x, // + (xdir * 4), 
    this.position.y, // - (ydir * 4), 
    0 //Math.sin( (this.speed / this.maxspeed) * Math.PI*2 )+1/2 * 80)
    ));

  } });



var keys = [];

document.body.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
  e.preventDefault();
});

document.body.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
  e.preventDefault();
});

let car = new Car();
scene.add(car);

renderCalls.push(car.update.bind(car));

/*////////////////////////////////////////*/



let noise = noiseMap(256, 20, 30);
function snowyGround() {

  let geometry = new THREE.PlaneGeometry(2000, 2000, 40, 45);
  for (let i = 0; i < geometry.vertices.length; i++) {
    geometry.vertices[i].x += (Math.cos(i * i) + 1 / 2) * 2;
    geometry.vertices[i].y += (Math.cos(i) + 1 / 2) * 2;
    geometry.vertices[i].z = (Math.sin(i * i * i) + 1 / 2) * -4;
  }
  geometry.verticesNeedUpdate = true;
  geometry.normalsNeedUpdate = true;
  geometry.computeFaceNormals();

  let material = new THREE.MeshPhongMaterial({
    color: 0xFFFFFF,
    shininess: 80,
    //metalness: 1,
    //specularMap: noiseMap(512,255),

    bumpMap: noise,

    bumpScale: 0.15,
    //emissive: 0xEBF7FD,
    //emissiveIntensity: 0.05,
    shading: THREE.SmoothShading });


  let plane = new THREE.Mesh(geometry, material);
  //plane.rotation.x = Math.PI / -2;
  plane.receiveShadow = true;
  plane.position.z = -5;

  return plane;

}
scene.add(snowyGround());

/*////////////////////////////////////////*/

let count = 3;
function render() {

  requestAnimationFrame(render);
  count += 0.03;

  renderCalls.forEach(callback => {
    callback();
  });

  renderer.toneMappingExposure = Math.pow(0.91, 5.0);
  renderer.render(scene, camera);

};

render();

/*

// http://www.somethinghitme.com/2013/11/13/snippets-i-always-forget-movement/
var canvas = document.createElement("canvas"),
    ctx = canvas.getContext("2d"),
    width = 500,
    height = 500,
    keys = [];

document.body.appendChild(canvas);

canvas.width = width;
canvas.height = height;

document.body.addEventListener("keydown", function(e) {
    keys[e.keyCode] = true;
    e.preventDefault();
});

document.body.addEventListener("keyup", function(e) {
    keys[e.keyCode] = false;
    e.preventDefault();
});


var Ship = function (x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 10;

    this.isThrusting = false;
    this.thrust = 0.1;
    this.turnSpeed = 0.001;
    this.angle = 0;

    this.color = color || "rgb(255,0,0)";

    this.pointLength = 20;
    this.px = 0;
    this.py = 0;

    this.velX = 0;
    this.velY = 0;
}

Ship.prototype.turn = function(dir){
    this.angle += this.turnSpeed * dir;
};

const rad2deg = Math.PI * 180;
Ship.prototype.update = function () {
    // Get the direction we are facing
    var radians = this.angle/Math.PI * 180;

    //lol wut
    if(this.isThrusting){
      this.velX += Math.cos(radians) * this.thrust;
      this.velY += Math.sin(radians) * this.thrust;
    }

    // bounds check    
    if(this.x < this.radius){
        this.x = canvas.width;   
    }
    if(this.x > canvas.width){
        this.x = this.radius;   
    }
    if(this.y < this.radius){
        this.y = canvas.height;   
    }
    if(this.y > canvas.height){
        this.y = this.radius;   
    }

    // calc the point out in front of the ship
    this.px = this.x - this.pointLength * Math.cos(radians);
    this.py = this.y - this.pointLength * Math.sin(radians);

    // apply friction
    this.velX *= 0.985;
    this.velY *= 0.985;

    // apply velocities    
    this.x -= this.velX;
    this.y -= this.velY;
};

Ship.prototype.render = function () {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = "rgb(0,0,255)";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.px, this.py);
    ctx.closePath();
    ctx.stroke();
};

var ship = new Ship(width/2, height/2, 10);

function render() {

    // check keys
    // up arrow or space
    ship.isThrusting = (keys[38] || keys[32]);

    if (keys[39]) {
        // right arrow
        ship.turn(1);
    }
    if (keys[37]) {
        // left arrow
       ship.turn(-1);
    }


    ctx.clearRect(0, 0, width, height);
    ship.update();
    ship.render();
    requestAnimationFrame(render);
}

render();

/**/