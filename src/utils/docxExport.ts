import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  HeadingLevel,
  PageBreak,
  HeightRule
} from 'docx';
import { saveAs } from 'file-saver';
import { LessonPlan, TimetableSlot, SchoolConfig } from '../types';

export function getHalfPoints(fontSize: 12 | 13 | 14): number {
  return fontSize * 2;
}

export function getWeekDayDate(startDateStr: string, selectedWeek: number, dayOfWeek: string): string {
  const dayOffsets: Record<string, number> = {
    'Thứ Hai': 0,
    'Thứ Ba': 1,
    'Thứ Tư': 2,
    'Thứ Năm': 3,
    'Thứ Sáu': 4,
    'Thứ Bảy': 5,
    'Chủ Nhật': 6,
  };
  const offset = dayOffsets[dayOfWeek] ?? 0;

  try {
    let baseMonday = new Date('2026-09-07');
    if (startDateStr) {
      const parsed = new Date(startDateStr);
      if (!isNaN(parsed.getTime())) {
        baseMonday = parsed;
      }
    }
    
    // Calculate Monday of selectedWeek (Week 1 = baseMonday)
    const targetMonday = new Date(baseMonday);
    targetMonday.setDate(baseMonday.getDate() + (selectedWeek - 1) * 7);

    // Add day offset
    const targetDate = new Date(targetMonday);
    targetDate.setDate(targetMonday.getDate() + offset);

    const dd = String(targetDate.getDate()).padStart(2, '0');
    const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
    const yyyy = targetDate.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  } catch {
    return '';
  }
}

export async function exportWeeklyLessonPlansDocx(
  lessonPlans: LessonPlan[],
  config: SchoolConfig,
  fontSize: 12 | 13 | 14 = 13
) {
  const halfPoints = getHalfPoints(fontSize);
  const titleHalfPoints = (fontSize + 2) * 2;
  const headerHalfPoints = (fontSize + 1) * 2;

  const docChildren: (Paragraph | Table)[] = [];

  // Document Title & National Header
  docChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { style: BorderStyle.NONE },
        bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE },
        right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 45, type: WidthType.PERCENTAGE },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: config.schoolName.toUpperCase() || 'TRƯỜNG TIỂU HỌC', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: `TỔ CHUYÊN MÔN KHỐI ${config.selectedGrade}`.toUpperCase(), bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: `Phân hiệu: ${config.campusName || 'Điểm chính'}`, italics: true, size: halfPoints - 2, font: 'Times New Roman' }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: { size: 55, type: WidthType.PERCENTAGE },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: 'Độc lập - Tự do - Hạnh phúc', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: '---------------', size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );

  docChildren.push(new Paragraph({ text: '', spacing: { before: 120, after: 120 } }));

  // Main Title
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 100, after: 80 },
      children: [
        new TextRun({
          text: `KẾ HOẠCH BÀI DẠY CHI TIẾT TUẦN ${config.selectedWeek}`,
          bold: true,
          size: titleHalfPoints + 2,
          color: '003366',
          font: 'Times New Roman',
        }),
      ],
    })
  );

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [
        new TextRun({
          text: config.filterMode === 'teacher'
            ? `GIÁO VIÊN: ${config.selectedTeacher} | LỚP CHỦ NHIỆM / GIẢNG DẠY: ${config.selectedClass} | NĂM HỌC: ${config.schoolYear}`
            : `LỚP: ${config.selectedClass} | GIÁO VIÊN: ${config.selectedTeacher} | NĂM HỌC: ${config.schoolYear}`,
          bold: true,
          size: headerHalfPoints,
          font: 'Times New Roman',
        }),
      ],
    })
  );

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 240 },
      children: [
        new TextRun({
          text: `(Soạn theo chuẩn Công văn 2345/BGDĐT - Tích hợp Năng lực số CV 3456, Trí tuệ nhân tạo AI, QCN, QPAN)`,
          italics: true,
          size: halfPoints - 2,
          color: '555555',
          font: 'Times New Roman',
        }),
      ],
    })
  );

  // Group lesson plans by day
  let currentDay = '';

  lessonPlans.forEach((plan, index) => {
    if (plan.dayOfWeek !== currentDay) {
      currentDay = plan.dayOfWeek;
      docChildren.push(
        new Paragraph({
          spacing: { before: 240, after: 120 },
          children: [
            new TextRun({
              text: `★ ${currentDay.toUpperCase()} (${plan.session.toUpperCase()})${plan.dateStr ? ` - NGÀY ${plan.dateStr}` : ''}`,
              bold: true,
              size: headerHalfPoints,
              color: 'C00000',
              font: 'Times New Roman',
            }),
          ],
        })
      );
    }

    // Lesson Header
    docChildren.push(
      new Paragraph({
        spacing: { before: 140, after: 60 },
        children: [
          new TextRun({
            text: `MÔN: ${plan.subject.toUpperCase()} ${plan.subSubject ? `(${plan.subSubject.toUpperCase()})` : ''} - TIẾT PPCT ${plan.ppctNumber}`,
            bold: true,
            size: headerHalfPoints,
            color: '002060',
            font: 'Times New Roman',
          }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 100 },
        children: [
          new TextRun({
            text: `Bài dạy: ${plan.lessonName}`,
            bold: true,
            italics: true,
            size: halfPoints,
            font: 'Times New Roman',
          }),
        ],
      })
    );

    // I. YÊU CẦU CẦN ĐẠT
    docChildren.push(
      new Paragraph({
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({ text: 'I. YÊU CẦU CẦN ĐẠT', bold: true, size: halfPoints, color: '003366', font: 'Times New Roman' }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: '1. Năng lực đặc thù: ', bold: true, size: halfPoints, font: 'Times New Roman' }),
          new TextRun({ text: plan.competencies.specific, size: halfPoints, font: 'Times New Roman' }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: '2. Năng lực chung: ', bold: true, size: halfPoints, font: 'Times New Roman' }),
          new TextRun({ text: plan.competencies.general, size: halfPoints, font: 'Times New Roman' }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: '3. Phẩm chất: ', bold: true, size: halfPoints, font: 'Times New Roman' }),
          new TextRun({ text: plan.competencies.qualities, size: halfPoints, font: 'Times New Roman' }),
        ],
      })
    );

    if (plan.integrations && plan.integrations.length > 0) {
      docChildren.push(
        new Paragraph({
          spacing: { after: 40 },
          children: [
            new TextRun({ text: '4. Nội dung tích hợp lồng ghép:', bold: true, size: halfPoints, font: 'Times New Roman' }),
          ],
        })
      );

      plan.integrations.forEach((intg) => {
        docChildren.push(
          new Paragraph({
            spacing: { after: 30 },
            bullet: { level: 0 },
            children: [
              new TextRun({ text: `[${intg.type}${intg.code ? ` - ${intg.code}` : ''}] ${intg.title}: `, bold: true, size: halfPoints, font: 'Times New Roman' }),
              new TextRun({ text: `${intg.content} ${intg.activityLocation ? `(Địa chỉ lồng ghép: ${intg.activityLocation})` : ''}`, size: halfPoints, font: 'Times New Roman' }),
            ],
          })
        );
      });
    }

    // II. ĐỒ DÙNG DẠY HỌC
    docChildren.push(
      new Paragraph({
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({ text: 'II. ĐỒ DÙNG DẠY HỌC VÀ HỌC LIỆU', bold: true, size: halfPoints, color: '003366', font: 'Times New Roman' }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 40 },
        children: [
          new TextRun({ text: '- Giáo viên: ', bold: true, size: halfPoints, font: 'Times New Roman' }),
          new TextRun({ text: plan.equipment.teacher, size: halfPoints, font: 'Times New Roman' }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 80 },
        children: [
          new TextRun({ text: '- Học sinh: ', bold: true, size: halfPoints, font: 'Times New Roman' }),
          new TextRun({ text: plan.equipment.student, size: halfPoints, font: 'Times New Roman' }),
        ],
      })
    );

    // III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU (Bảng 2 cột chuẩn)
    docChildren.push(
      new Paragraph({
        spacing: { before: 80, after: 60 },
        children: [
          new TextRun({ text: 'III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU', bold: true, size: halfPoints, color: '003366', font: 'Times New Roman' }),
        ],
      })
    );

    const activityRows: TableRow[] = [
      new TableRow({
        tableHeader: true,
        children: [
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            shading: { fill: '003366' },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'HOẠT ĐỘNG CỦA GIÁO VIÊN', bold: true, color: 'FFFFFF', size: halfPoints, font: 'Times New Roman' }),
                ],
              }),
            ],
          }),
          new TableCell({
            width: { size: 50, type: WidthType.PERCENTAGE },
            shading: { fill: '003366' },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'HOẠT ĐỘNG CỦA HỌC SINH', bold: true, color: 'FFFFFF', size: halfPoints, font: 'Times New Roman' }),
                ],
              }),
            ],
          }),
        ],
      }),
    ];

    plan.activities.forEach((act, actIdx) => {
      // Phase banner row
      activityRows.push(
        new TableRow({
          children: [
            new TableCell({
              columnSpan: 2,
              shading: { fill: 'EAECEE' },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: `${actIdx + 1}. Hoạt động: ${act.phase.toUpperCase()}`, bold: true, color: '003366', size: halfPoints, font: 'Times New Roman' }),
                    new TextRun({ text: ` (Mục tiêu: ${act.goal})`, italics: true, size: halfPoints - 2, font: 'Times New Roman' }),
                  ],
                }),
              ],
            }),
          ],
        })
      );

      // Teacher vs Student columns
      const teacherParagraphs = act.teacherActivity.split('\n').map(
        line => new Paragraph({
          spacing: { after: 40 },
          children: [new TextRun({ text: line, size: halfPoints, font: 'Times New Roman' })],
        })
      );

      const studentParagraphs = act.studentActivity.split('\n').map(
        line => new Paragraph({
          spacing: { after: 40 },
          children: [new TextRun({ text: line, size: halfPoints, font: 'Times New Roman' })],
        })
      );

      activityRows.push(
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              children: teacherParagraphs.length > 0 ? teacherParagraphs : [new Paragraph({ text: '' })],
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              children: studentParagraphs.length > 0 ? studentParagraphs : [new Paragraph({ text: '' })],
            }),
          ],
        })
      );
    });

    docChildren.push(
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: activityRows,
      })
    );

    // IV. ĐIỀU CHỈNH SAU BÀI DẠY
    docChildren.push(
      new Paragraph({
        spacing: { before: 80, after: 40 },
        children: [
          new TextRun({ text: 'IV. ĐIỀU CHỈNH SAU BÀI DẠY', bold: true, size: halfPoints, color: '003366', font: 'Times New Roman' }),
        ],
      })
    );

    docChildren.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({ text: plan.adjustmentNote || '...........................................................................................................................................', italics: true, size: halfPoints - 2, font: 'Times New Roman' }),
        ],
      })
    );

    // Divider or page break if not last
    if (index < lessonPlans.length - 1) {
      docChildren.push(
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 80, after: 120 },
          children: [
            new TextRun({ text: '------------------------------------------------------------------------------------------------------------------------', size: halfPoints - 4, color: 'CCCCCC', font: 'Times New Roman' }),
          ],
        })
      );
    }
  });

  // End of Document Signature Block
  docChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { style: BorderStyle.NONE },
        bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE },
        right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: 'TỔ TRƯỞNG CHUYÊN MÔN', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, size: halfPoints - 2, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({ text: '', spacing: { before: 400, after: 400 } }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: '................................................', size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: 'GIÁO VIÊN GIẢNG DẠY', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: '(Ký và ghi rõ họ tên)', italics: true, size: halfPoints - 2, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({ text: '', spacing: { before: 400, after: 400 } }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: config.selectedTeacher || 'Nguyễn Hoàng Tuấn', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1134, // ~2cm
              bottom: 1134,
              left: 1417, // ~2.5cm
              right: 1134, // ~2cm
            },
          },
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const fileTarget = config.filterMode === 'teacher' 
    ? `GV_${config.selectedTeacher.replace(/\s+/g, '_')}`
    : `Lop_${config.selectedClass}`;
  saveAs(blob, `KHBD_Tuan_${config.selectedWeek}_${fileTarget}_Font${fontSize}.docx`);
}

export async function exportLichBaoGiangDocx(
  slots: TimetableSlot[],
  config: SchoolConfig,
  fontSize: 12 | 13 | 14 = 13
) {
  const halfPoints = getHalfPoints(fontSize);
  const titleHalfPoints = (fontSize + 2) * 2;
  const headerHalfPoints = (fontSize + 1) * 2;

  const docChildren: (Paragraph | Table)[] = [];

  // Header
  docChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: {
        top: { style: BorderStyle.NONE },
        bottom: { style: BorderStyle.NONE },
        left: { style: BorderStyle.NONE },
        right: { style: BorderStyle.NONE },
        insideHorizontal: { style: BorderStyle.NONE },
        insideVertical: { style: BorderStyle.NONE },
      },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 45, type: WidthType.PERCENTAGE },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: config.schoolName.toUpperCase() || 'TRƯỜNG TIỂU HỌC TÂN THẠNH', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: `Phân hiệu: ${config.campusName || 'Điểm 1'} | Lớp: ${config.selectedClass}`, bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: `GV: ${config.selectedTeacher}`, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: { size: 55, type: WidthType.PERCENTAGE },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: 'Độc lập - Tự do - Hạnh phúc', bold: true, size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({ text: '---------------------------', size: halfPoints, font: 'Times New Roman' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );

  docChildren.push(new Paragraph({ text: '', spacing: { before: 100, after: 100 } }));

  // Main Title
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({
          text: `LỊCH BÁO GIẢNG TUẦN ${config.selectedWeek}`,
          bold: true,
          size: titleHalfPoints + 2,
          color: '003366',
          font: 'Times New Roman',
        }),
      ],
    })
  );

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 180 },
      children: [
        new TextRun({
          text: `Năm học: ${config.schoolYear} --- Khối lớp: ${config.selectedGrade} --- Lớp: ${config.selectedClass}`,
          italics: true,
          size: halfPoints,
          font: 'Times New Roman',
        }),
      ],
    })
  );

  // Group slots by Day and Session for proper 1-Day & 1-Session cell merging
  const DAYS_ORDER = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
  const isTeacherMode = config.filterMode === 'teacher';

  interface SessionGroup {
    session: 'Sáng' | 'Chiều';
    slots: TimetableSlot[];
  }

  interface DayGroup {
    dayOfWeek: string;
    dateStr: string;
    totalSlots: number;
    sessions: SessionGroup[];
  }

  const dayGroups: DayGroup[] = [];
  DAYS_ORDER.forEach((day) => {
    const daySlots = slots.filter((s) => s.dayOfWeek === day);
    if (daySlots.length === 0) return;

    const morning = daySlots
      .filter((s) => s.session === 'Sáng')
      .sort((a, b) => a.period - b.period);
    const afternoon = daySlots
      .filter((s) => s.session === 'Chiều')
      .sort((a, b) => a.period - b.period);

    const sessions: SessionGroup[] = [];
    if (morning.length > 0) sessions.push({ session: 'Sáng', slots: morning });
    if (afternoon.length > 0) sessions.push({ session: 'Chiều', slots: afternoon });

    const totalSlots = morning.length + afternoon.length;
    const dateStr = getWeekDayDate(config.startDate, config.selectedWeek, day);

    dayGroups.push({
      dayOfWeek: day,
      dateStr,
      totalSlots,
      sessions,
    });
  });

  // Table header
  const tableHeaderCells: TableCell[] = [
    new TableCell({
      width: { size: 14, type: WidthType.PERCENTAGE },
      shading: { fill: '003366' },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Thứ / Ngày',
              bold: true,
              color: 'FFFFFF',
              size: halfPoints - 2,
              font: 'Times New Roman',
            }),
          ],
        }),
      ],
    }),
    new TableCell({
      width: { size: 8, type: WidthType.PERCENTAGE },
      shading: { fill: '003366' },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Buổi',
              bold: true,
              color: 'FFFFFF',
              size: halfPoints - 2,
              font: 'Times New Roman',
            }),
          ],
        }),
      ],
    }),
    new TableCell({
      width: { size: 6, type: WidthType.PERCENTAGE },
      shading: { fill: '003366' },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Tiết',
              bold: true,
              color: 'FFFFFF',
              size: halfPoints - 2,
              font: 'Times New Roman',
            }),
          ],
        }),
      ],
    }),
  ];

  if (isTeacherMode) {
    tableHeaderCells.push(
      new TableCell({
        width: { size: 8, type: WidthType.PERCENTAGE },
        shading: { fill: '003366' },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: 'Lớp',
                bold: true,
                color: 'FFFFFF',
                size: halfPoints - 2,
                font: 'Times New Roman',
              }),
            ],
          }),
        ],
      })
    );
  }

  tableHeaderCells.push(
    new TableCell({
      width: { size: isTeacherMode ? 20 : 22, type: WidthType.PERCENTAGE },
      shading: { fill: '003366' },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Môn học / Phân môn',
              bold: true,
              color: 'FFFFFF',
              size: halfPoints - 2,
              font: 'Times New Roman',
            }),
          ],
        }),
      ],
    }),
    new TableCell({
      width: { size: 8, type: WidthType.PERCENTAGE },
      shading: { fill: '003366' },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Tiết PPCT',
              bold: true,
              color: 'FFFFFF',
              size: halfPoints - 2,
              font: 'Times New Roman',
            }),
          ],
        }),
      ],
    }),
    new TableCell({
      width: { size: isTeacherMode ? 26 : 30, type: WidthType.PERCENTAGE },
      shading: { fill: '003366' },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Tên bài dạy',
              bold: true,
              color: 'FFFFFF',
              size: halfPoints - 2,
              font: 'Times New Roman',
            }),
          ],
        }),
      ],
    }),
    new TableCell({
      width: { size: 10, type: WidthType.PERCENTAGE },
      shading: { fill: '003366' },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({
              text: 'Ghi chú',
              bold: true,
              color: 'FFFFFF',
              size: halfPoints - 2,
              font: 'Times New Roman',
            }),
          ],
        }),
      ],
    })
  );

  const tableRows: TableRow[] = [
    new TableRow({
      tableHeader: true,
      children: tableHeaderCells,
    }),
  ];

  dayGroups.forEach((dayGroup) => {
    dayGroup.sessions.forEach((sessionGroup, sessionIdx) => {
      sessionGroup.slots.forEach((s, slotIdx) => {
        const isFirstOfDay = sessionIdx === 0 && slotIdx === 0;
        const isFirstOfSession = slotIdx === 0;

        const rowCells: TableCell[] = [];

        // 1. Merged cell for Day / Date (Only created on the 1st row of that day, rowSpan = totalSlots)
        if (isFirstOfDay) {
          rowCells.push(
            new TableCell({
              rowSpan: dayGroup.totalSlots,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: dayGroup.dayOfWeek,
                      bold: true,
                      size: halfPoints - 2,
                      font: 'Times New Roman',
                    }),
                  ],
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: dayGroup.dateStr ? `(${dayGroup.dateStr})` : '',
                      size: halfPoints - 4,
                      bold: true,
                      font: 'Times New Roman',
                    }),
                  ],
                }),
              ],
            })
          );
        }

        // 2. Merged cell for Buổi (Only created on the 1st row of that session, rowSpan = session slots count)
        if (isFirstOfSession) {
          rowCells.push(
            new TableCell({
              rowSpan: sessionGroup.slots.length,
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: sessionGroup.session,
                      bold: true,
                      size: halfPoints - 2,
                      font: 'Times New Roman',
                    }),
                  ],
                }),
              ],
            })
          );
        }

        // 3. Tiết
        rowCells.push(
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: s.period.toString(),
                    bold: true,
                    size: halfPoints - 2,
                    font: 'Times New Roman',
                  }),
                ],
              }),
            ],
          })
        );

        // 4. Lớp (if in teacher mode)
        if (isTeacherMode) {
          rowCells.push(
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: s.className || config.selectedClass,
                      bold: true,
                      size: halfPoints - 2,
                      font: 'Times New Roman',
                    }),
                  ],
                }),
              ],
            })
          );
        }

        // 5. Môn học / Phân môn
        rowCells.push(
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${s.subject}${s.subSubject ? ` (${s.subSubject})` : ''}`,
                    bold: true,
                    size: halfPoints - 2,
                    font: 'Times New Roman',
                  }),
                ],
              }),
            ],
          })
        );

        // 6. Tiết PPCT
        rowCells.push(
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: s.ppct ? s.ppct.toString() : '-',
                    bold: true,
                    size: halfPoints - 2,
                    font: 'Times New Roman',
                  }),
                ],
              }),
            ],
          })
        );

        // 7. Tên bài dạy
        rowCells.push(
          new TableCell({
            children: [
              new Paragraph({
                children: [
                  new TextRun({
                    text: s.lessonName || `${s.subject} Tuần ${config.selectedWeek}`,
                    size: halfPoints - 2,
                    font: 'Times New Roman',
                  }),
                ],
              }),
            ],
          })
        );

        // 8. Ghi chú (bỏ trống theo yêu cầu)
        rowCells.push(
          new TableCell({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({
                    text: s.note || '',
                    size: halfPoints - 4,
                    italics: true,
                    font: 'Times New Roman',
                  }),
                ],
              }),
            ],
          })
        );

        tableRows.push(new TableRow({ children: rowCells }));
      });
    });
  });

  docChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: tableRows,
    })
  );

  // Notice: The prompt specifically requested: "Lich báo giảng rõ Tên GV – Trường Phân Hiệu – Lớp phần cuối không cần những ký duyệt cuối bảng . o ghi gv chuyên hay chủ nhiệm"
  // So no bottom signature block for Lịch Báo Giảng!

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1134, bottom: 1134, left: 1417, right: 1134 },
          },
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  const fileTarget = config.filterMode === 'teacher' 
    ? `GV_${config.selectedTeacher.replace(/\s+/g, '_')}`
    : `Lop_${config.selectedClass}`;
  saveAs(blob, `LichBaoGiang_Tuan_${config.selectedWeek}_${fileTarget}_Font${fontSize}.docx`);
}

export async function exportTimetableDocx(
  slots: TimetableSlot[],
  config: SchoolConfig,
  targetClassOrTeacher: string,
  type: 'class' | 'teacher',
  fontSize: 12 | 13 | 14 = 13
) {
  const halfPoints = getHalfPoints(fontSize);
  const titleHalfPoints = (fontSize + 2) * 2;

  const docChildren: (Paragraph | Table)[] = [];

  // Header Title
  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 40 },
      children: [
        new TextRun({
          text: `THỜI KHÓA BIỂU ${type === 'class' ? `LỚP ${targetClassOrTeacher}` : `GIÁO VIÊN ${targetClassOrTeacher}`}`,
          bold: true,
          size: titleHalfPoints + 2,
          color: '003366',
          font: 'Times New Roman',
        }),
      ],
    })
  );

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      children: [
        new TextRun({
          text: `Áp dụng từ Thứ Hai đến Thứ Sáu | Tuần ${config.selectedWeek} (Năm học ${config.schoolYear})`,
          bold: true,
          size: halfPoints - 1,
          color: '1E3A8A',
          font: 'Times New Roman',
        }),
      ],
    })
  );

  docChildren.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [
        new TextRun({
          text: `${config.schoolName} - ${config.campusName}`,
          italics: true,
          size: halfPoints - 2,
          font: 'Times New Roman',
        }),
      ],
    })
  );

  const days: ('Thứ Hai' | 'Thứ Ba' | 'Thứ Tư' | 'Thứ Năm' | 'Thứ Sáu')[] = [
    'Thứ Hai',
    'Thứ Ba',
    'Thứ Tư',
    'Thứ Năm',
    'Thứ Sáu',
  ];

  const rows: TableRow[] = [
    new TableRow({
      tableHeader: true,
      children: [
        new TableCell({
          width: { size: 10, type: WidthType.PERCENTAGE },
          shading: { fill: '003366' },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: 'Buổi',
                  bold: true,
                  color: 'FFFFFF',
                  size: halfPoints - 2,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        }),
        new TableCell({
          width: { size: 8, type: WidthType.PERCENTAGE },
          shading: { fill: '003366' },
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: 'Tiết',
                  bold: true,
                  color: 'FFFFFF',
                  size: halfPoints - 2,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        }),
        ...days.map(
          (d) =>
            new TableCell({
              width: { size: 16.4, type: WidthType.PERCENTAGE },
              shading: { fill: '003366' },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  children: [
                    new TextRun({
                      text: d,
                      bold: true,
                      color: 'FFFFFF',
                      size: halfPoints - 2,
                      font: 'Times New Roman',
                    }),
                  ],
                }),
              ],
            })
        ),
      ],
    }),
  ];

  // Sáng (Tiết 1 -> 4)
  const morningPeriods = [1, 2, 3, 4];
  morningPeriods.forEach((p, idx) => {
    const rowCells: TableCell[] = [];

    if (idx === 0) {
      rowCells.push(
        new TableCell({
          rowSpan: morningPeriods.length,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: 'SÁNG',
                  bold: true,
                  size: halfPoints - 1,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        })
      );
    }

    rowCells.push(
      new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: p.toString(),
                bold: true,
                size: halfPoints - 2,
                font: 'Times New Roman',
              }),
            ],
          }),
        ],
      })
    );

    days.forEach((d) => {
      const match = slots.find(
        (s) => s.session === 'Sáng' && s.period === p && s.dayOfWeek === d
      );
      const subjectText = match ? match.subject : '-';
      const subInfo = match?.subSubject ? ` (${match.subSubject})` : '';
      const teacherInfo = match && type === 'class' && match.teacherName ? `\n${match.teacherName}` : '';
      const classInfo = match && type === 'teacher' && match.className ? `\nLớp ${match.className}` : '';

      rowCells.push(
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `${subjectText}${subInfo}`,
                  bold: !!match,
                  size: halfPoints - 2,
                  font: 'Times New Roman',
                }),
                new TextRun({
                  text: `${teacherInfo}${classInfo}`,
                  italics: true,
                  size: halfPoints - 4,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        })
      );
    });

    rows.push(new TableRow({ children: rowCells }));
  });

  // Chiều (Tiết 1 -> 3)
  const afternoonPeriods = [1, 2, 3];
  afternoonPeriods.forEach((p, idx) => {
    const rowCells: TableCell[] = [];

    if (idx === 0) {
      rowCells.push(
        new TableCell({
          rowSpan: afternoonPeriods.length,
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: 'CHIỀU',
                  bold: true,
                  size: halfPoints - 1,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        })
      );
    }

    rowCells.push(
      new TableCell({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: p.toString(),
                bold: true,
                size: halfPoints - 2,
                font: 'Times New Roman',
              }),
            ],
          }),
        ],
      })
    );

    days.forEach((d) => {
      const match = slots.find(
        (s) => s.session === 'Chiều' && s.period === p && s.dayOfWeek === d
      );
      const subjectText = match ? match.subject : '-';
      const subInfo = match?.subSubject ? ` (${match.subSubject})` : '';
      const teacherInfo = match && type === 'class' && match.teacherName ? `\n${match.teacherName}` : '';
      const classInfo = match && type === 'teacher' && match.className ? `\nLớp ${match.className}` : '';

      rowCells.push(
        new TableCell({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `${subjectText}${subInfo}`,
                  bold: !!match,
                  size: halfPoints - 2,
                  font: 'Times New Roman',
                }),
                new TextRun({
                  text: `${teacherInfo}${classInfo}`,
                  italics: true,
                  size: halfPoints - 4,
                  font: 'Times New Roman',
                }),
              ],
            }),
          ],
        })
      );
    });

    rows.push(new TableRow({ children: rowCells }));
  });

  docChildren.push(
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows,
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1134, bottom: 1134, left: 1417, right: 1134 },
          },
        },
        children: docChildren,
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, `TKB_${type === 'class' ? 'Lop_' : 'GV_'}${targetClassOrTeacher}_Font${fontSize}.docx`);
}
