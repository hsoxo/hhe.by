import Sider from "@/components/Sider";
import data from "@/data/infoEn.json";
import Profile from "@/components/Profile";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export default function Home() {
  const isEn = true;
  const state = { info: data };
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      {/* <header className="flex justify-between items-center h-20 px-6 border-b bg-white shadow-sm">
        <h1 className="text-xl font-semibold">Herbert He</h1>
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 bg-[#c1e3e7] text-gray-800 px-4 py-1.5 rounded-full shadow hover:bg-[#add8dc] transition"
        >
          <Languages className="w-4 h-4" />
          {isEn ? "中文" : "English"}
        </button>
      </header> */}

      {/* 主体区域：左右布局 */}
      <main className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-8 gap-8">
        {/* 左侧个人卡片 */}
        <aside className="w-full lg:w-1/4">
          <Sider />
        </aside>

        {/* 右侧主要内容 */}
        <section className="flex-1 space-y-8">
          {/* Profile 信息 */}
          <Profile data={state.info} />

          {/* 工作 & 教育经历 */}
          <Experiences state={state.info} isEn={isEn} />

          {/* 联系表单 */}
          <Contact />

          {/* 页脚 */}
          <Footer />
        </section>
      </main>
    </div>
  );
}
