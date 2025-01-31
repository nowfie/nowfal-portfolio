import { useState, useEffect } from "react";
import PrimaryScroll from "../animations/PrimaryScroll";
import axios from "axios";

const ContactSection = () => {
    const [spinner, setSpinner] = useState("neutral");

    useEffect(() => {
        console.log("Spinner state updated:", spinner);
    }, [spinner]);

    const handleMail = async (e) => {
        e.preventDefault();
    
        const form = e.target.closest("form");
    
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
    
        setSpinner("clicked");
    
        const formData = new FormData(form);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            service: formData.get("service"),
            message: formData.get("message"),
        };
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/mail`, data);
            
            if (response.status === 200) { // Ensure success response
                console.log("Email sent successfully:", response.data.message);
                setSpinner("success");
            } else {
                console.error("Unexpected response:", response);
                setSpinner("failed");
            }
        } catch (error) {
            console.error("Error sending email:", error?.response?.data?.message || error.message);
            setSpinner("failed");
        }
    };
    

    return (
        <section className="overflow-x-hidden py-12 lg:py-16">
            <div className="main flex flex-col lg:flex-row gap-8 lg:gap-20">
                <div className="lg:w-1/2 flex flex-col gap-9">
                    <PrimaryScroll className="space-y-9">
                        <h5 className="flex items-center text-xs font-semibold gap-2 text-paragraph uppercase tracking-widest">
                            Contact
                        </h5>
                        <h1 className="uppercase !font-heading heading">
                            Let&apos;s{" "}
                            <span className="text-primary !font-heading">
                                make
                            </span>{" "}
                            <br /> an{" "}
                            <span className="text-primary !font-heading">
                                impact
                            </span>
                            <br /> together.
                        </h1>
                    </PrimaryScroll>
                    <PrimaryScroll className="border-l-[4px] border-primary pl-5">
                        <p className="text-paragraph leading-relaxed text-base lg:w-3/4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maxime tempora rem unde excepturi ut nesciunt, doloribus 
                            mollitia atque sit vitae.
                        </p>
                    </PrimaryScroll>
                </div>
                <div className="lg:w-1/2 space-y-10">
                    <form className="space-y-10" onSubmit={handleMail}>
                        <div className="flex flex-col gap-5">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <input
                                    required
                                    name="name"
                                    placeholder="Enter your name"
                                    className="!rounded-none placeholder-paragraph capitalize text-paragraph border-paragraph/20 bg-transparent p-5 border-b"
                                    type="text"
                                />
                                <input
                                    required
                                    name="email"
                                    placeholder="Enter your mail"
                                    className="!rounded-none placeholder-paragraph capitalize text-paragraph border-paragraph/20 bg-transparent p-5 border-b"
                                    type="email"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <input
                                    required
                                    name="phone"
                                    placeholder="Enter your phone"
                                    className="!rounded-none placeholder-paragraph capitalize text-paragraph border-paragraph/20 bg-transparent p-5 border-b"
                                    type="tel"
                                />
                                <select
                                    className="!rounded-none placeholder-paragraph capitalize text-paragraph border-paragraph/20 bg-transparent p-5 border-b"
                                    name="service"
                                    required
                                >
                                    <option value="" disabled selected>Select a service</option>
                                    {["website", "mobile", "desktop", "aiml", "other"].map(
                                        (item, index) => (
                                            <option className="bg-background" value={item} key={index}>
                                                {item}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                            <textarea
                                required
                                name="message"
                                placeholder="Message here"
                                className="!rounded-none placeholder-paragraph capitalize text-paragraph p-5 border-paragraph/20 w-full h-44 bg-transparent border-b"
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-paragraph text-xs">
                                *We promise not to disclose your personal information to third parties.
                            </p>
                            <button
                                type="submit"
                                className="hover:scale-105 focus:scale-105 active:scale-105 duration-300 transition-all bg-primary px-5 py-3 rounded-full text-heading uppercase font-semibold text-xs tracking-widest"
                                disabled={spinner === "clicked"}
                            >
                                {spinner === "clicked"
                                    ? "Loading..."
                                    : spinner === "success"
                                    ? "Sent Successfully!"
                                    : spinner === "failed"
                                    ? "Failed! Try Again"
                                    : "Send Message"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
