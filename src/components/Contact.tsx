import { type SubmitEvent, type ChangeEvent, useState } from 'react';
import { Send } from 'lucide-react';
import '../styles/Contact.css'

interface ContactProps {
    name: string;
    email: string;
    message: string;
}

export default function Contact() {
    const [form, setForm] = useState<ContactProps>({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = 
        (field: keyof ContactProps) => 
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
    };

    return(
        <div 
            className="contact"
            id="contact"
        >
            <span className="contact-header">
                <p>Contact</p>
                <span></span>
            </span>
            <div className="contact-objects">
                <div className="contact-text">
                    <h1>Let's Talk.</h1>
                    <p>Open to software and ML engineering roles. Blah blah blah...</p>
                    <span className="contact-buttons">
                        <a href="">seandickson0909@gmail.com</a>
                        <a href="">1</a>
                        <a href="">2</a>
                        <a href="">3</a>
                    </span>
                </div>
                <form className="contact-boxes" onSubmit={handleSubmit}>

                    <div className="input-name">
                        <label>Name</label>
                        <input 
                            required
                            type="text"
                            value={form.name}
                            onChange={handleChange("name")}
                            placeholder="Your name"
                        />
                    </div>
                    <div className="input-email">
                        <label>Email</label>
                        <input 
                            required
                            type="email"
                            value={form.email}
                            onChange={handleChange("email")}
                            placeholder="you@company.com"
                        />
                    </div>
                    <div className="input-message">
                        <label>Message</label>
                        <input 
                            required
                            type="text"
                            value={form.message}
                            onChange={handleChange('message')}
                            placeholder='What would you like to talk about?'
                        />
                    </div>

                    <button
                        type="submit"
                        className="input-submit-button"
                        style={{ background: `linear-gradient(120deg, var(--accent-c), var(--accent-a))` }}
                    >
                        Send Message
                        <Send size={14} />
                    </button>

                </form>
            </div>
        </div>
    );
}
