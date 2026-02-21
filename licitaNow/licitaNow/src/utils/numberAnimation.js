const animateValue = (obj, duration, extension, target, start) => {
  let startTimestamp = 0;

  const step = (timeStamp) => {
    if (!startTimestamp) startTimestamp = timeStamp;
    const progress = Math.min((timeStamp - startTimestamp) / duration, 1);

    if (obj)
      obj.innerHTML = `${Math.floor(progress * (target - start) + start)}${
        extension ? extension : ""
      }`;
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
};

export default animateValue;
