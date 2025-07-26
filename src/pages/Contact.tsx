import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-card p-8 rounded-lg border border-border shadow">
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required className="w-full px-3 py-2 rounded border border-border bg-background text-foreground" />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-3 py-2 rounded border border-border bg-background text-foreground" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
          <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-3 py-2 rounded border border-border bg-background text-foreground" />
        </div>
        <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact; 
