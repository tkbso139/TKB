import React from 'react';
import { SchoolConfig, GradeLevel } from '../types';
import {
  Calendar,
  BookOpen,
  FileText,
  Clock,
  Sparkles,
  School,
  Settings,
  Download,
  Layers,
  ChevronDown
} from 'lucide-react';

interface HeaderProps {
  config: SchoolConfig;
  onChangeConfig: (newConfig: Partial<SchoolConfig>) => void;
  activeTab: 'tkb' | 'lichbaogiang' | 'khbd' | 'reference';
  setActiveTab: (tab: 'tkb' | 'lichbaogiang' | 'khbd' | 'reference') => void;
  onOpenSettings: () => void;
  onQuickExportWord: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  config,
  onChangeConfig,
  activeTab,
  setActiveTab,
  onOpenSettings,
  onQuickExportWord
}) => {
  const grades: GradeLevel[] = [1, 2, 3, 4, 5];

  return (
    <header className="bg-slate-950 text-white shadow-xs border-b border-slate-800/80 sticky top-0 z-40 text-xs">
      {/* Top Banner with School Info & Global Settings */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2.5">
          {/* Logo & School Header */}
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-xs">
              <School className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-sm sm:text-base font-bold text-slate-100 tracking-tight leading-tight">
                  {config.schoolName || 'Trường Tiểu Học Tân Thạnh'}
                </h1>
                <span className="bg-slate-800 text-blue-300 text-[10px] px-1.5 py-0.5 rounded border border-slate-700 font-semibold font-mono">
                  {config.campusName || 'Điểm 1'}
                </span>
                <span className="bg-slate-800 text-slate-400 text-[10px] px-1.5 py-0.5 rounded border border-slate-700 font-mono">
                  {config.schoolYear}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 leading-normal">
                Quản lý TKB • Lịch Báo Giảng • KHBD (CV 2345 & NLS 3456)
              </p>
            </div>
          </div>

          {/* Quick Controls: Week, Font Size, Settings */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Week Selector */}
            <div className="flex items-center bg-slate-900 rounded-md px-2 py-1 border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-blue-400 mr-1" />
              <label className="text-[11px] text-slate-300 font-medium mr-1">Tuần:</label>
              <select
                value={config.selectedWeek}
                onChange={(e) => onChangeConfig({ selectedWeek: parseInt(e.target.value, 10) })}
                className="bg-slate-950 text-white text-[11px] font-semibold rounded px-1.5 py-0.5 border border-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-400 cursor-pointer"
              >
                {Array.from({ length: 35 }, (_, i) => i + 1).map((w) => (
                  <option key={w} value={w}>
                    Tuần {w} {w <= 18 ? '(HK1)' : '(HK2)'}
                  </option>
                ))}
              </select>
            </div>

            {/* Word Font Size Selector */}
            <div className="flex items-center bg-slate-900 rounded-md px-2 py-1 border border-slate-800">
              <span className="text-[11px] text-slate-300 font-medium mr-1.5">Word:</span>
              <div className="flex bg-slate-950 rounded p-0.5 border border-slate-800 text-[10px] font-mono font-bold">
                {([12, 13, 14] as const).map((fs) => (
                  <button
                    key={fs}
                    onClick={() => onChangeConfig({ wordFontSize: fs })}
                    className={`px-1.5 py-0.5 rounded transition-colors ${
                      config.wordFontSize === fs
                        ? 'bg-blue-600 text-white font-bold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title={`Xuất Word font Times New Roman ${fs}pt`}
                  >
                    {fs}pt
                  </button>
                ))}
              </div>
            </div>

            {/* Fast Download Button */}
            <button
              onClick={onQuickExportWord}
              className="flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-2.5 py-1.5 rounded-md shadow-xs transition-all active:scale-95"
              title="Tải trọn bộ KHBD tuần sang Word .docx"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải Word Tuần {config.selectedWeek}</span>
            </button>

            {/* School / Class Settings Modal Trigger */}
            <button
              onClick={onOpenSettings}
              className="p-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-md border border-slate-800 transition-colors"
              title="Cấu hình thông tin trường, lớp, giáo viên"
            >
              <Settings className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Grade Selection Bar & Navigation Tabs */}
        <div className="mt-2.5 pt-2.5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
          {/* Grade selection */}
          <div className="flex items-center space-x-1">
            <span className="text-[10px] font-bold text-slate-400 mr-1.5 flex items-center tracking-wider">
              <Layers className="w-3 h-3 mr-1 text-blue-400" />
              KHỐI:
            </span>
            <div className="flex bg-slate-900 p-0.5 rounded-md border border-slate-800">
              {grades.map((grade) => {
                const isSelected = config.selectedGrade === grade;
                return (
                  <button
                    key={grade}
                    onClick={() => {
                      const defaultClass = `${grade}A`;
                      onChangeConfig({
                        selectedGrade: grade,
                        selectedClass: defaultClass
                      });
                    }}
                    className={`px-2.5 py-1 text-[11px] font-bold rounded transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    Khối {grade}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex space-x-1 bg-slate-900 p-0.5 rounded-md border border-slate-800">
            <button
              onClick={() => setActiveTab('tkb')}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                activeTab === 'tkb'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Thời Khóa Biểu</span>
            </button>

            <button
              onClick={() => setActiveTab('lichbaogiang')}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                activeTab === 'lichbaogiang'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Lịch Báo Giảng</span>
            </button>

            <button
              onClick={() => setActiveTab('khbd')}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                activeTab === 'khbd'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Kế Hoạch Bài Dạy</span>
            </button>

            <button
              onClick={() => setActiveTab('reference')}
              className={`flex items-center space-x-1.5 px-2.5 py-1 rounded text-[11px] font-semibold transition-all ${
                activeTab === 'reference'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Khung AI & NLS</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};
