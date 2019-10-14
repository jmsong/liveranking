export const animate = ({ start, end, duration, doAction }) => {
  let range = end - start;

  const startTime = performance.now();
  const endTime = startTime + duration;
  let request;

  function run() {
    let now = performance.now();
    let remaining = Math.max((endTime - now) / duration, 0);
    let value = Math.round(end - remaining * range);
    doAction(value);

    if (value === end) {
      cancelAnimationFrame(request);
    }
  }

  const fps = 60;
  function animate() {
    setTimeout(function() {
      request = requestAnimationFrame(animate);
      run();
    }, 1000 / fps);
  }

  animate();
};

export default animate;
