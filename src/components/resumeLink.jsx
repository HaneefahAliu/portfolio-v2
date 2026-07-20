import { useState } from 'react';

export default function ResumeButton({ className = "underline underline-offset-4 hover:text-black/50 transition text-[14px] font-inter" }) {
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const RESUME_URL = 'https://drive.google.com/file/d/16O7lryzTYDdf300XZD0CP47gqPur4KW7/view';
    const PASSWORD = 'haneefah123';

    const handleSubmit = () => {
        if (password === PASSWORD) {
            window.open(RESUME_URL, '_blank');
            setShowModal(false);
            setPassword('');
            setError('');
        } else {
            setError('Incorrect password. Try again.');
            setPassword('');
        }
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className={className}
            >
                Resume
            </button>

            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-sm mx-4">
                        <h3 className="text-[18px] font-bold font-plusJakarta mb-1">Access Resume</h3>
                        <p className="text-[13px] text-black/50 font-inter mb-6">
                            Enter the password to view my resume.
                        </p>

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setError(''); }}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                            className="w-full border border-black/15 rounded-xl px-4 py-3 text-[14px] font-inter outline-none focus:border-black/40 mb-3"
                            autoFocus
                        />

                        {error && (
                            <p className="text-[12px] text-red-500 mb-3">{error}</p>
                        )}

                        <div className="flex gap-3">
                            <button
                                onClick={() => { setShowModal(false); setPassword(''); setError(''); }}
                                className="flex-1 py-2.5 rounded-xl border border-black/15 text-[13px] font-inter hover:bg-black/5 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="flex-1 py-2.5 rounded-xl bg-black text-white text-[13px] font-inter hover:bg-black/80 transition"
                            >
                                View Resume
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}