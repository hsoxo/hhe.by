import Sider from "@/components/Sider";
import data from "@/data/infoEn.json";
import Profile from "@/components/Profile";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const isEn = true;
  const state = { info: data };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-8">
        <aside className="w-full lg:w-1/4">
          <Sider />
        </aside>

        <section className="flex-1 space-y-8">
          <Profile data={state.info} />

          <Experiences state={state.info} isEn={isEn} />

          <Contact />

          <Footer />
        </section>
      </main>
    </div>
  );
}
