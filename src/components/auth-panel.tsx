import Link from "next/link";
import { FlaskConical } from "lucide-react";

export function AuthPanel({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";

  return (
    <section className="grid min-h-[calc(100svh-72px)] place-items-center bg-[radial-gradient(circle_at_top,#dff6ff,transparent_42%),#f6f9fc] px-4 py-16">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-950/10">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-slate-950 text-white">
          <FlaskConical size={22} />
        </div>
        <h1 className="mt-6 text-center text-3xl font-black text-slate-950">
          {isSignup ? "Create account" : "Welcome back"}
        </h1>
        <p className="mt-2 text-center text-sm text-slate-500">
          {isSignup ? "Request research access and order updates." : "Sign in to manage orders and CoA records."}
        </p>

        <form className="mt-8 grid gap-4">
          {isSignup && <Field label="Full name" />}
          <Field label="Email" type="email" />
          <Field label="Password" type="password" />
          <button className="focus-ring mt-2 h-12 rounded-full bg-slate-950 text-sm font-bold text-white">
            {isSignup ? "Create account" : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          {isSignup ? "Already have an account?" : "Need an account?"}{" "}
          <Link href={isSignup ? "/login" : "/signup"} className="font-black text-slate-950">
            {isSignup ? "Login" : "Sign up"}
          </Link>
        </p>
      </div>
    </section>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label>
      <span className="text-sm font-bold text-slate-700">{label}</span>
      <input type={type} className="focus-ring mt-2 h-12 w-full rounded-md border border-slate-200 bg-white px-4 text-slate-950" />
    </label>
  );
}
