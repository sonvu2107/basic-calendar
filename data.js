// Dữ liệu lịch học
const scheduleData = {
  8: {
    // Thứ 2 - 25/08/2025
    25: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 26/08/2025
    26: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 4 - 27/08/2025
    27: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 5 - 28/08/2025
    28: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      }
    ],
    // Thứ 6 - 29/08/2025
    29: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
  },
  9: {
    // Thứ 2 - 01/09/2025
    1: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 02/09/2025
    2: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 4 - 03/09/2025
    3: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 5 - 04/09/2025
    4: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      }
    ],
    // Thứ 6 - 05/09/2025
    5: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 2 - 08/09/2025
    8: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 09/09/2025
    9: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 4 - 10/09/2025
    10: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 6 - 12/09/2025
    12: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 2 - 15/09/2025
    15: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 16/09/2025
    16: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 4 - 17/09/2025
    17: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 5 - 18/09/2025
    18: [
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 6 - 19/09/2025
    19: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 2 - 22/09/2025
    22: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 23/09/2025
    23: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 4 - 24/09/2025
    24: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 5 - 25/09/2025
    25: [
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 7 - 27/09/2025
    27: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 2 - 29/09/2025
    29: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 30/09/2025
    30: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
  },
  10: {
    // Thứ 4 - 01/10/2025
    1: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 5 - 02/10/2025
    2: [
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 7 - 04/10/2025
    4: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 2 - 06/10/2025
    6: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 07/10/2025
    7: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 4 - 08/10/2025
    8: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 5 - 09/10/2025
    9: [
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 7 - 11/10/2025
    11: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 2 - 13/10/2025
    13: [
      {
        name: "Giáo dục thể chất P3",
        code: "GD4503_23TT 1",
        time: "6:55 - 9:30",
        location: "NTĐ-NTĐ10",
        teacher: "(GDTC) Nguyễn Thị Dung",
        credits: 1.00
      },
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 3 - 14/10/2025
    14: [
      {
        name: "Xử lý bề mặt vải",
        code: "MT8434_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Phạm Anh Thư",
        credits: 2.00
      }
    ],
    // Thứ 4 - 15/10/2025
    15: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
    // Thứ 5 - 16/10/2025
    16: [
      {
        name: "Chủ nghĩa Xã hội khoa học",
        code: "CT3902.2_22TT 1",
        time: "15:00 - 17:05",
        location: "Ngoài Trường-Online",
        teacher: "Lại Thị Huệ",
        credits: 2.00
      }
    ],
    // Thứ 7 - 18/10/2025
    18: [
      {
        name: "Đồ họa thời trang 2",
        code: "MT8431_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M11.07",
        teacher: "Phạm Thị Mai Hoa",
        credits: 2.00
      }
    ],
  },
  11: {
    // Thứ 2 - 03/11/2025
    3: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 04/11/2025
    4: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 05/11/2025
    5: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 6 - 07/11/2025
    7: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 7 - 08/11/2025
    8: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 2 - 10/11/2025
    10: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 11/11/2025
    11: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 12/11/2025
    12: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 6 - 14/11/2025
    14: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 7 - 15/11/2025
    15: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 2 - 17/11/2025
    17: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 18/11/2025
    18: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 19/11/2025
    19: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 6 - 21/11/2025
    21: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 2 - 24/11/2025
    24: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 25/11/2025
    25: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 26/11/2025
    26: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 6 - 28/11/2025
    28: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
  },
  12: {
    // Thứ 2 - 01/12/2025
    1: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 02/12/2025
    2: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 03/12/2025
    3: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 7 - 06/12/2025
    6: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 2 - 08/12/2025
    8: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 09/12/2025
    9: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 10/12/2025
    10: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 7 - 13/12/2025
    13: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 2 - 15/12/2025
    15: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 16/12/2025
    16: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 17/12/2025
    17: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 7 - 20/12/2025
    20: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 2 - 22/12/2025
    22: [
      {
        name: "Công nghệ may trang phục 3",
        code: "MT8409_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M18.1_XTT1",
        teacher: "Lê Thị Hồng Quyên",
        credits: 2.00
      }
    ],
    // Thứ 3 - 23/12/2025
    23: [
      {
        name: "Sáng tác thời trang 2",
        code: "MT8417_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Nguyễn Thị Kim Hương",
        credits: 3.00
      }
    ],
    // Thứ 4 - 24/12/2025
    24: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
    // Thứ 7 - 27/12/2025
    27: [
      {
        name: "Thiết kế kỹ thuật trang phục 3",
        code: "MT8412_23TT 1",
        time: "7:45 - 11:55",
        location: "M-M20.1_B",
        teacher: "Bùi Thị Thùy Linh",
        credits: 2.00
      }
    ],
  },
};

