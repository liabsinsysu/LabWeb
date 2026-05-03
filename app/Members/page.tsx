'use client'

import { useState, SetStateAction } from "react";
import { GraduateStudent, Student, AlumniData, CurrentStudent } from "../Datas/GraduateStudent";

type Identity = "Director" | "Current Student" | "Alumni";

export default function Home() {
  const [identity, setIdentity] = useState<Identity>("Director");

  return (
    <div className="min-h-screen bg-gray-50">

      {/* 🔵 Tabs */}
      <div className="w-[85%] max-w-5xl mx-auto pt-10">
        <div className="flex border-b">
          <IdentityButton identity="Director" current={identity} setIdentity={setIdentity} />
          <IdentityButton identity="Current Student" current={identity} setIdentity={setIdentity} />
          <IdentityButton identity="Alumni" current={identity} setIdentity={setIdentity} />
        </div>
      </div>

      {/* 🔵 Content */}
      <div className="w-[85%] max-w-5xl mx-auto">
        {identity === 'Director' && <Director />}
        {identity === 'Current Student' && <Graduate />}
        {identity === 'Alumni' && <Alumni />}
      </div>
    </div>
  );
}

interface IdentityButtonPros {
  identity: Identity;
  current: Identity;
  setIdentity: React.Dispatch<SetStateAction<Identity>>;
}

function IdentityButton({ identity, current, setIdentity }: IdentityButtonPros) {
  const isActive = current === identity;

  return (
    <button
      onClick={() => setIdentity(identity)}
      className={`
        relative px-6 py-3 text-sm md:text-base font-medium transition-all duration-300
        ${isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-500"}
      `}
    >
      {identity}

      {/* 底線動畫 */}
      <span
        className={`
          absolute left-0 bottom-0 h-[2px] w-full transition-all duration-300
          ${isActive ? "bg-blue-500" : "bg-transparent"}
        `}
      />
    </button>
  );
}

function Director() {
  return (
    <div className="mt-8 animate-fadeIn">

      {/* 標題 */}
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Director</h2>

      {/* 卡片 */}
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300">
        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* 圖片 */}
          <div className="flex-shrink-0">
            <img
              src="/director.jpg"
              alt="程正傑 助理教授"
              className="w-[220px] h-[300px] object-contain rounded-xl border"
            />
          </div>

          {/* 內容 */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              程正傑 助理教授
              <span className="ml-3 text-base font-medium">
                甲組（資訊組）
              </span>
            </h1>

            <div className="w-full h-[2px] bg-gray-200 mb-4"></div>

            <div className="text-gray-700 leading-relaxed space-y-2 text-[15px]">
              <p>國立臺灣大學生醫電子與資訊學研究所博士</p>
              <p>專長：定量磁振造影序列設計、超音波生理信號探測系統</p>
              <p>研究室：電資大樓 工EC9036室</p>

              <p>
                E-mail：
                <a
                  href="mailto:cccheng@cse.nsysu.edu.tw"
                  className="text-blue-500 hover:underline ml-1"
                >
                  cccheng@cse.nsysu.edu.tw
                </a>
              </p>

              <p>TEL：07-5252000 ext. 4367</p>
              <p>實驗室：智慧生醫信號分析實驗室 工EC9012-1室</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Graduate() {
  return (
    <div className="mt-8 animate-fadeIn">

      {/* 標題 */}
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Students
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {CurrentStudent.map((s, index) => (
          <StudentCard key={index} student={s} />
        ))}
      </div>
    </div>
  );
}

function StudentCard({ student }: { student: Student }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">

      {/* 圖片 */}
      <div className="overflow-hidden">
        <img
          src={student.photoPath}
          alt={student.name}
          className="w-full h-[220px] object-contain group-hover:scale-105  transition duration-300"
        />
      </div>

      {/* 文字 */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">
          {student.name}
        </h3>

        <p className="text-sm text-gray-600 mt-2 max-h-[80px] overflow-y-auto">
          {student.describe}
        </p>
      </div>
    </div>
  );
}

function Alumni() {
  const [selected, setSelected] = useState<AlumniData | null>(null);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-6">
        Alumni
      </h2>

      {/* 卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {GraduateStudent.map((a, i) => (
          <AlumniCard key={i} data={a} onClick={() => setSelected(a)} />
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <AlumniModal data={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}
function AlumniCard({ data, onClick }: {
  data: AlumniData;
  onClick: () => void;
}) {
  return (
    <div

      className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group flex flex-col h-full"
    >
      {/* 圖片 */}
      <div className="overflow-hidden">
        <img
          src={data.photoPath}
          alt={data.name}
          className="w-full h-[220px] object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* 內容 */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800">
          {data.name}
        </h3>

        <p className="text-sm text-gray-600 mt-2 max-h-[80px] overflow-y-auto">
          {data.describe}
        </p>

        <div onClick={onClick} className="mt-auto pt-3 text-sm text-shadow-cyan-800 hover:underline text-right">
          View Thesis →
        </div>
      </div>
    </div>
  );
}
function AlumniModal({ data, onClose }: {
  data: AlumniData;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* 內容（阻止冒泡） */}
      <div
        className="bg-white max-w-2xl w-[90%] rounded-2xl p-6 shadow-xl relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 關閉按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        {/* 標題 */}
        <h2 className="text-xl font-bold mb-4">
          {data.thesisTitle}
        </h2>

        {/* 海報 */}
        <img
          src={data.projectorImgPath}
          alt="project"
          className="w-full h-[250px] object-contain rounded-lg mb-4"
        />

        {/* 摘要 */}
        <p className="text-gray-700 leading-relaxed">
          {data.thesisAbtrast}
        </p>
      </div>
    </div>
  );
}