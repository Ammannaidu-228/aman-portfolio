'use client';
import { useState } from 'react';

export default function Contact(){
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [msg,setMsg]=useState('');
  function submit(e:React.FormEvent){
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${msg}\n\nContact: ${email}`);
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  }
  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="section-title text-center">Contact</h2>
        <div className="max-w-xl mx-auto card p-6">
          <form onSubmit={submit} className="space-y-4">
            <input className="input" placeholder="Your name" value={name} onChange={e=>setName(e.target.value)} required />
            <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} required />
            <textarea className="input" rows={5} placeholder="Message" value={msg} onChange={e=>setMsg(e.target.value)} required />
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
