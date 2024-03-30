import emailjs from "@emailjs/browser";

(function (){
    emailjs.init(import.meta.env.VITE_REACT_APP_EMAILJS_KEY);
})();

function mail(dataToSend) {
  return emailjs.send(
    import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE,
    import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE,
    dataToSend,
  );
};

export default mail;