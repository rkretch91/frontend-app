import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["AAAA", "Break time", "Change your life", "Learn to code", "HIIIIIIIIII"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
