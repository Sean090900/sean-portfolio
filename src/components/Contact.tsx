import { type SubmitEvent, type ChangeEvent, useState } from 'react';
import { Send, Mail, Download } from 'lucide-react';
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
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = 
        (field: keyof ContactProps) => 
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            setForm((prev) => ({ ...prev, [field]: e.target.value }));
        };

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error('Request failed');
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
        } catch {
            setStatus('error');
        }
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
                    <p>Open to full-time software and ML engineering roles, prefferably in the biotech space but not limited to it.</p>
                    <span className="contact-buttons">

                        <a className="email-link" href="mailto:seandickson0909@gmail.com">
                            <Mail size={15} /> 
                            seandickson0909@gmail.com
                        </a>
                        <a className="github-link" href="https://github.com/Sean090900/SeanPortfolioPublic" target="_blank" rel="noopener noreferrer">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"/>
                            </svg>
                        </a>
                        <a className="linkedin-link" href="https://www.linkedin.com/in/sean-dickson-8b0745188/" target="_blank" rel="noopener noreferrer">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.56V9h3.55v11.45Z"/>
                            </svg>
                        </a>
                        <a className="resume-download" href="/SeanDicksonResume.pdf" download="SeanDicksonResume.pdf">
                            <Download size={15} />
                        </a>

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
                        <textarea
                            required
                            value={form.message}
                            onChange={handleChange('message')}
                            placeholder='What would you like to talk about?'
                        />
                    </div>
                    <button
                        type="submit"
                        className="input-submit-button"
                        disabled={status === 'sending'}
                        style={{ background: `linear-gradient(120deg, var(--accent-c), var(--accent-a))` }}
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                        <Send size={14}/>
                    </button>
                    {status === 'success' && <p className="form-status form-status-success">Message sent — thanks for reaching out!</p>}
                    {status === 'error' && <p className="form-status form-status-error">Something went wrong. Please try again or email me directly.</p>}

                </form>
            </div>
        </div>
    );
}
