import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">Contact us</p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
            Questions, CoA updates, and wholesale requests
          </h1>
          <div className="mt-8 grid gap-4 text-slate-600">
            <p className="flex items-center gap-3"><Mail size={19} /> research@divineaminos.com</p>
            <p className="flex items-center gap-3"><MapPin size={19} /> Mailing address pending client assets</p>
          </div>
        </div>

        <form className="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" />
            <Field label="Last name" />
          </div>
          <Field label="Email" type="email" />
          <label className="mt-4 block">
            <span className="text-sm font-bold text-slate-700">Message</span>
            <textarea className="focus-ring mt-2 min-h-36 w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-slate-950" />
          </label>
          <button className="focus-ring mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white">
            Send message <Send size={17} />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="mt-4 block">
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <input type={type} className="focus-ring mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-slate-950" />
    </label>
  );
}
