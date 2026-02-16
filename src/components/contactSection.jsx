import React, { useMemo, useState } from "react";

export default function ContactSection({ action = "/api/contact" }) {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState({ state: "idle", msg: "" }); 
    // idle | loading | success | error

    const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

    const canSubmit = useMemo(() => {
        return (
        form.name.trim().length >= 2 &&
        isValidEmail(form.email.trim()) &&
        form.message.trim().length >= 10
        );
    }, [form]);

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((p) => ({ ...p, [name]: value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!canSubmit) {
            setStatus({ state: "error", msg: "Please fill all fields properly." });
            return;
        }

        try {
            setStatus({ state: "loading", msg: "" });
            const fd = new FormData();
            fd.append("name", form.name);
            fd.append("email", form.email);
            fd.append("message", form.message);
            // fd.append("_subject", "New message from portfolio");

            const res = await fetch(action, {
                method: "POST",
                body: fd,
                headers: { Accept: "application/json" },
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data?.error || "Request failed");
            setStatus({ state: "success", msg: "Message sent! I’ll get back to you soon." });
            setForm({ name: "", email: "", message: "" });
        } catch (err) {
            setStatus({
            state: "error",
            msg: "Something went wrong. Please try again or email me directly.",
            });
        }
    };


    return (
        <section className="py-60">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
                {/* LEFT */}
                <div>
                    <h2 className="text-[70px] font-extrabold font-anton leading-[1] tracking-tight">
                        LET&apos;S MAKE SOMETHING <br /> COOL!
                    </h2>

                    <p className="mt-8 max-w-[520px] text-[16px] font-light text-secondary-text leading-[1.9]">
                        Curious problems, ambitious teams, and thoughtful ideas are my favourite things to work on. If you&apos;re working on something great, I&apos;d love to hear from you :)
                    </p>
                </div>

                {/* RIGHT */}
                <form onSubmit={onSubmit} className="w-full">
                    <Field
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        placeholder=" "
                    />
                    <Field
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder=" "
                        type="email"
                    />
                    <Field
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        placeholder=" "
                        textarea
                    />

                    <div className="mt-14">
                        <button
                            type="submit"
                            disabled={!canSubmit || status.state === "loading"}
                            className="
                                inline-flex items-center justify-center
                                rounded-full border border-border-line
                                px-8 py-4 text-[16px] font-inter
                                transition
                                hover:border-black/25 hover:bg-black/5
                                disabled:cursor-not-allowed disabled:opacity-50
                            "
                        >
                            {status.state === "loading" ? "Sending..." : "Send Message"}
                        </button>

                        {/* status text */}
                        {status.state !== "idle" && (
                            <p 
                                className={`mt-4 text-sm ${
                                    status.state === "success" ? "text-green-700" : "text-black/50"
                                }`}
                            >
                                {status.msg}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}

    function Field({
    label,
    name,
    value,
    onChange,
    type = "text",
    textarea = false,
    placeholder,
    }) {
        const InputTag = textarea ? "textarea" : "input";

        return (
            <div className="relative mt-10">
                <label className="block text-[16px] font-inter font-light text-secondary-text">{label}</label>

                <InputTag
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={textarea ? 5 : undefined}
                    className="
                    mt-2 w-full resize-none bg-transparent
                    text-[16px] text-black outline-none
                    placeholder:text-transparent
                    "
                />

            {/* underline */}
            <div className="mt-4 h-[1px] w-full bg-border-line" />
            </div>
        );
}
