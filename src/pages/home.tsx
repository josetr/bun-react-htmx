import { Layout } from "../components/Layout";

export function HomePage() {
  return <Layout title="Home">
    <div className="flex flex-col gap-8">
      <div className="bg-base-300 p-16">
        <div className=" text-center">
          <p className="text-lg">
            React + TailwindCSS + DaisyUI.
          </p>
        </div>
      </div>
    </div>
  </Layout>
}

