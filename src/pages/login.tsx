import { Layout } from "../components/Layout";

export function LoginPage() {
  return <Layout title="Sign in">
    <form className="flex flex-col gap-4" method="post">
      <input type="email" name="email" className="input input-bordered w-full" placeholder="Email" required />
      <input type="text" name="password" className="input input-bordered w-full" placeholder="Password" required />
      <button className="btn btn-primary">
        Sign in
      </button>
    </form>
  </Layout>
}