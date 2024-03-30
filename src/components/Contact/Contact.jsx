import { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Bounce } from "react-awesome-reveal";
import mail from './mailer';
import styles from './Contact.module.scss'
import { SendHorizonal } from 'lucide-react';


const empty = () =>
    toast.error("Ehi! Compila tutti i campi prima.", {
        id: "error",
        style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
        },
    });

const error = () =>
    toast.error("Oops... errore!", {
        id: "error",
        style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
        },
    });

const success = () =>
    toast.success("Messaggio mandato!", {
        id: "success",
        style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
        },
    });

export default function Contact() {
    const initialForm = { name: "", email: "", message: "" };
    const [formData, setFormData] = useState(initialForm);
    const [mailerResponse, setMailerResponse] = useState("not initiated");
    const [isSending, setIsSending] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const buttonEl = useRef(null);

    function emptyForm() {
        setFormData(initialForm)
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(String(email).toLowerCase());
      }

    function handleChange(event) {
        const {id, value} = event.target;
        value.length === 0 ? setIsSending(false) : setIsSending(true);
        setFormData(prevFormData => ({
            ...prevFormData,
            [id]: value
        }))
    }

    useEffect(() => {
        setIsDisabled(
            formData.name === "" ||
            formData.email === "" ||
            formData.message === ""
                ? true
                : false
        );
    }, [formData]);
    

    function handleSubmit(event) {
        event.preventDefault();
    
        const dataToSend = {
            name: formData.name,
            recipient: formData.email,
            message: formData.message,
        };

        if (!isValidEmail(dataToSend.recipient)) {
            toast.error("Please enter a valid email address", {
                id: "error",
                style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                },
            });
            return;
        }
    
        if (dataToSend.name === "" || dataToSend.recipient === "" || dataToSend.message === "") {
            empty();
            return setMailerResponse("empty");
        }
    
        setIsSending(true);
        mail(dataToSend)
          .then((res) => {
            if (res.status === 200) {
              setMailerResponse("success");
              emptyForm();
            } else {
              setMailerResponse("error");
            }
          })
          .catch((err) => {
            setMailerResponse("error");
            console.error(err);
          });
      };

      useEffect(() => {
        if(mailerResponse === "success") {
            buttonEl.current.classList.add(`${styles.submitted}`)
        }
        else {
            buttonEl.current.classList.remove(`${styles.submitted}`)
        }
        setTimeout(() => {
          setMailerResponse("not initiated");
        }, 3500);
      }, [mailerResponse]);

    return (
        <section id="contact" className="mt-32 pt-28 sm:pt-20 md:pt-16 pb-20 w-full bg-teal-2 relative">
            <Toaster />
            <div className="section-container flex flex-col justify-center">
                <div className="flex flex-col">
                    <p className="uppercase tracking-widest text-gray-100">
                        CONTATTI
                    </p>
                    <h1 className="text-6xl mt-2 font-medium text-gradient w-fit">
                        Scrivimi
                    </h1>
                    <h2 className="text-[1.7rem] font-medium md:max-w-lg w-full mt-2">
                        Entriamo in contatto.
                    </h2>
                </div>

                <form className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem]">
                    <Bounce duration={700} triggerOnce>
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-cyan-light bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete='on'
                            />
                            <label
                                htmlFor="name"
                                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
                            >
                                Nome
                            </label>
                        </div>
                        
                        <div className="relative mt-14">
                            <input
                                type="text"
                                id="email"
                                className="block w-full h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-cyan-light bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete='on'
                            />
                            <label
                                htmlFor="email"
                                className="absolute top-0 left-0 h-full flex items-center pl-4 text-lg font-mono transform transition-all"
                            >
                                Email
                            </label>
                            </div>

                            <div className="relative mt-14">
                            <textarea
                                id="message"
                                className="block w-full h-auto min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-cyan-light bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                autoComplete='off'
                            />
                            <label
                                htmlFor="message"
                                className="absolute top-0 left-0 h-14 flex items-center pl-4 text-lg font-mono transform transition-all"
                            >
                                Message
                            </label>
                        </div>
                    </Bounce>

                    {mailerResponse !== "not initiated" &&
                        (mailerResponse === "success" ? (
                            <div className="hidden">{success()}</div>
                        ) : (
                            <div className="hidden">{error()}</div>
                        ))}
                </form>
                <div className='mx-auto'>
                    <Bounce duration={700} triggerOnce>
                        <div className={`mt-9 mx-auto ${isDisabled ? "" : "link"}`}> 
                            <button
                                className={`${styles.button}`}
                                ref={buttonEl}
                                disabled={isDisabled}
                                onClick={handleSubmit}
                            >
                                <span className='mr-2'>Invia</span> 
                                <SendHorizonal size={24}/>
                            </button>
                        </div>
                    </Bounce>
                </div>
            </div>
        </section>
    );
}