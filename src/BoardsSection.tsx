import { useState } from 'react';
import { Building2, GraduationCap, ArrowRight, BookOpen, Globe2 } from 'lucide-react';

type Board = {
  id: string;
  name: string;
  subtitle: string;
  group: string;
  levels: string[];
  initials: string;
};

const boards: Board[] = [
  {
    id: 'cbse',
    name: 'CBSE',
    subtitle: 'Central Board of Secondary Education',
    group: 'National Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'CBSE',
  },
  {
    id: 'cisce',
    name: 'CISCE',
    subtitle: 'ICSE (Class 10) · ISC (Class 12)',
    group: 'National Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'CISCE',
  },
  {
    id: 'nios',
    name: 'NIOS',
    subtitle: 'National Institute of Open Schooling',
    group: 'National Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'NIOS',
  },
  {
    id: 'seba',
    name: 'SEBA',
    subtitle: 'ASSEB Division I · HSLC',
    group: 'Assam Boards',
    levels: ['Class 10'],
    initials: 'SEBA',
  },
  {
    id: 'ahsec',
    name: 'AHSEC',
    subtitle: 'ASSEB Division II · Higher Secondary',
    group: 'Assam Boards',
    levels: ['Class 12'],
    initials: 'AHSEC',
  },
  {
    id: 'up',
    name: 'UP Board',
    subtitle: 'Uttar Pradesh Madhyamik Shiksha Parishad',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'UP',
  },
  {
    id: 'bihar',
    name: 'Bihar Board',
    subtitle: 'Bihar School Examination Board',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'BSEB',
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra Board',
    subtitle: 'Maharashtra State Board',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'MSB',
  },
  {
    id: 'west-bengal',
    name: 'West Bengal Board',
    subtitle: 'West Bengal Board of Secondary Education',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'WBB',
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan Board',
    subtitle: 'Board of Secondary Education Rajasthan',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'RBSE',
  },
  {
    id: 'gujarat',
    name: 'Gujarat Board',
    subtitle: 'Gujarat Secondary and Higher Secondary Board',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'GSEB',
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya Board',
    subtitle: 'Meghalaya Board of School Education',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'MBOSE',
  },
  {
    id: 'nagaland',
    name: 'Nagaland Board',
    subtitle: 'Nagaland Board of School Education',
    group: 'Popular State Boards',
    levels: ['Class 10', 'Class 12'],
    initials: 'NBSE',
  },
];

const groups = ['National Boards', 'Assam Boards', 'Popular State Boards'];

export default function BoardsSection() {
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  const [selectedClass, setSelectedClass] = useState('');

  return (
    <section id="school-boards" className="py-16 sm:py-20 px-4 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 text-xs font-bold text-blue-700 mb-5">
            <BookOpen className="w-4 h-4" />
            SCHOOL EDUCATION
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1730] tracking-tight">
            Explore School Boards
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed">
            Find your education board, choose your class and get ready to learn,
            practise and achieve better results with MERITLY.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {[
            { icon: Globe2, title: 'National Boards', count: '03 Boards' },
            { icon: Building2, title: 'Assam Boards', count: '02 Divisions' },
            { icon: GraduationCap, title: 'State Boards', count: '08 Boards' },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-[#0B1730]">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.count}</p>
              </div>
            </div>
          ))}
        </div>

        {groups.map((group) => (
          <div key={group} className="mb-10">
            <div className="flex items-center justify-between gap-3 mb-5">
              <h3 className="text-lg sm:text-xl font-black text-[#0B1730]">{group}</h3>
              <span className="text-xs font-semibold text-slate-400">
                {boards.filter((board) => board.group === group).length} options
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {boards.filter((board) => board.group === group).map((board) => (
                <button
                  key={board.id}
                  type="button"
                  onClick={() => {
                    setSelectedBoard(board);
                    setSelectedClass('');
                  }}
                  aria-pressed={selectedBoard?.id === board.id}
                  className={`text-left bg-white border rounded-2xl p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                    selectedBoard?.id === board.id
                      ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1730] text-white flex items-center justify-center text-xs font-black tracking-wide">
                      {board.initials}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 mt-1" />
                  </div>

                  <h4 className="mt-5 font-black text-[#0B1730] text-base">
                    {board.name}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed min-h-9">
                    {board.subtitle}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-700">
                      {board.levels.length === 2 ? 'Class 10 & 12' : board.levels[0]}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400">
                      Explore
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}

        {selectedBoard && (
          <div className="mt-8 bg-white border border-blue-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Selected Board
                </p>
                <h3 className="text-2xl font-black text-[#0B1730] mt-2">
                  {selectedBoard.name}
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Choose your class to continue.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {selectedBoard.levels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setSelectedClass(level)}
                    className={`px-5 py-3 rounded-xl text-sm font-bold border transition ${
                      selectedClass === level
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-[#0B1730] border-slate-200 hover:border-blue-400'
                    }`}
                  >
                    <GraduationCap className="w-4 h-4 inline mr-2" />
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {selectedClass && (
              <p className="mt-6 p-4 rounded-xl bg-blue-50 text-sm text-blue-800 font-semibold">
                {selectedBoard.name} · {selectedClass} selected.
                Study materials and practice tests can be connected here in a future update.
              </p>
            )}
          </div>
        )}

        <p className="text-center text-xs text-slate-400 mt-8">
          More education boards will be added as MERITLY expands.
        </p>
      </div>
    </section>
  );
}