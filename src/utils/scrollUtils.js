import Cookies from 'js-cookie';


export const saveScrollPosition = () => {
    localStorage.setItem('scrollPosition', window.scrollY.toString());
  };
  
  export const getScrollPosition = () => {
    return parseInt(localStorage.getItem('scrollPosition') || '0', 10);
  };