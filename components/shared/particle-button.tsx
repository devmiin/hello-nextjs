import React from 'react'
import html2canvas from 'html2canvas';

interface IButtonProps {
  clicked: Function;
  className: string;
}

export default class extends React.Component<IButtonProps, any> {
  ctx;
  reductionFactor = 17;
  particles = [];
  particleCanvas;
  particleCtx;

  constructor(props) {
    super(props)

    this.getColorAtPoint = this.getColorAtPoint.bind(this)
    this.createParticleCanvas = this.createParticleCanvas.bind(this)
    this.update = this.update.bind(this)
  }

  render() {
    return (
      <button 
        type="button"
        className={`btn btn__particle ${this.props.className}`}
        onClick={this.getColorAtPoint}>
        {this.props.children}
      </button>
    )
  }

  componentDidMount() {
    const btn = document.querySelector('button');
    html2canvas(btn).then(canvas => {
      this.ctx = canvas.getContext('2d')      

      this.createParticleCanvas();

      // btn.addEventListener('click', this.getColorAtPoint)
    });

    window.requestAnimationFrame(this.update);
    
  }  

  getColorAtPoint() {    
    const btn = document.querySelector('button');

    // Get the color data for our button
    let width = btn.offsetWidth;
    let height = btn.offsetHeight
    let colorData = this.ctx.getImageData(0, 0, width, height).data;    

    // Keep track of how many times we've iterated (in order to reduce
    // the total number of particles create)
    let count = 0;

    // Go through every location of our button and create a particle    
    for (let localX = 0; localX < width; localX++) {
      for (let localY = 0; localY < height; localY++) {
        if (count % this.reductionFactor === 0) {
          let index = (localY * width + localX) * 4;
          let rgbaColorArr = colorData.slice(index, index + 4);

          let bcr = btn.getBoundingClientRect();
          let globalX = bcr.left + localX;
          let globalY = bcr.top + localY;

          this.createParticleAtPoint(globalX, globalY, rgbaColorArr);
        }
        count++;
      }
    }
  }

  createParticleCanvas() {

    // Create our canvas
    this.particleCanvas = document.createElement('canvas');    
    this.particleCtx = this.particleCanvas.getContext('2d');

    // Size our canvas
    this.particleCanvas.width = window.innerWidth;
    this.particleCanvas.height = window.innerHeight;

    // Position out canvas
    this.particleCanvas.style.position = 'absolute';
    this.particleCanvas.style.top = 0;
    this.particleCanvas.style.left = 0;

    // Make sure it's on top of other elements
    this.particleCanvas.style.zIndex = 1001;

    // Make sure other elements under it are clickable
    this.particleCanvas.style.pointerEvents = 'none';

    // Add our canvas to the page
    document.body.appendChild(this.particleCanvas);
  }

  createParticleAtPoint(x, y, colorData) {    
    let particle = new ExplodingParticle();
    particle.rgbArray = colorData;
    particle.startX = x;
    particle.startY = y;
    particle.startTime = Date.now();

    this.particles.push(particle);
  }

  update() {
    // Clear out the old particles
    if (this.particleCtx) {
      this.particleCtx.clearRect(
        0, 0, window.innerWidth, window.innerHeight
      )
    }

    // Draw all of our particles in their new location
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].draw(this.particleCtx);

      // Simple way to clean up if the last particle is done animating
      if (i === this.particles.length - 1) {
        let percent = (Date.now() - this.particles[i].startTime) / this.particles[i].animationDuration;

        if (percent > 1) {
          this.particles = [];
        }
      }
    }

    // Animate performantly
    window.requestAnimationFrame(this.update);
  }
}

const ExplodingParticle = function () {
  // Set how long we want our particle to animate for
  this.animationDuration = 1000; // in ms

  // Set the speed for our particle
  this.speed = {
    x: -5 + Math.random() * 10,
    y: -5 + Math.random() * 10
  };

  // Size our particle
  this.radius = 5 + Math.random() * 5;

  // Set a max time to live for our particle
  this.life = 30 + Math.random() * 10;
  this.remainingLife = this.life;

  // This function will be called by our animation logic later on
  this.draw = ctx => {
    let p = this;

    if (this.remainingLife > 0
      && this.radius > 0) {
      // Draw a circle at the current location
      ctx.beginPath();
      ctx.arc(p.startX, p.startY, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + this.rgbArray[0] +
        ',' + this.rgbArray[1] +
        ',' + this.rgbArray[2] + ", 1)";
      
      ctx.fill();

      // Update the particle's location and life
      p.remainingLife--;
      p.radius -= 0.25;
      p.startX += p.speed.x;
      p.startY += p.speed.y;
    }
  }
}
