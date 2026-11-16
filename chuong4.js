// Chương 4: Polymer (Hóa học 12 - Kết nối tri thức với cuộc sống)[span_1](start_span)[span_1](end_span)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)[span_2](start_span)[span_2](end_span)

const CHAPTER_4 = [
    {
        "type": "MCQ",
        "question": "Polymer nào sau đây thuộc loại polymer thiên nhiên?",
        "options": [
            "Polyethylene",
            "Poly(vinyl chloride)",
            "Cellulose",
            "Polystyrene"
        ],
        "answer": "C",
        "explanation": "Cellulose là polymer có sẵn trong tự nhiên (cấu tạo nên thành tế bào thực vật). Polyethylene, poly(vinyl chloride) và polystyrene là các polymer tổng hợp."
    },
    {
        "type": "MCQ",
        "question": "Chất nào sau đây có khả năng tham gia phản ứng trùng hợp tạo thành polymer?",
        "options": [
            "Ethane",
            "Ethylene",
            "Propane",
            "Methane"
        ],
        "answer": "B",
        "explanation": "Điều kiện để monomer tham gia phản ứng trùng hợp là trong phân tử phải có liên kết bội (như liên kết đôi C=C ở ethylene CH2=CH2) hoặc vòng kém bền."
    },
    {
        "type": "MCQ",
        "question": "Tơ nào sau đây thuộc loại tơ bán tổng hợp (tơ nhân tạo)?",
        "options": [
            "Tơ tằm",
            "Tơ visco",
            "Tơ capron",
            "Tơ nitron"
        ],
        "answer": "B",
        "explanation": "Tơ visco (và tơ cellulose acetate) được chế biến hóa học từ polymer thiên nhiên là cellulose nên thuộc loại tơ bán tổng hợp (tơ nhân tạo). Tơ tằm là tơ thiên nhiên; tơ capron và tơ nitron là tơ tổng hợp."
    },
    {
        "type": "MCQ",
        "question": "Tên gọi của polymer có công thức (-CH2-CHCl-)n là",
        "options": [
            "polyethylene",
            "polypropylene",
            "poly(vinyl chloride)",
            "poly(methyl methacrylate)"
        ],
        "answer": "C",
        "explanation": "Monomer tạo thành (-CH2-CHCl-)n là vinyl chloride (CH2=CHCl) nên polymer tương ứng có tên là poly(vinyl chloride), viết tắt là PVC."
    },
    {
        "type": "MCQ",
        "question": "Cao su thiên nhiên được cấu tạo từ các mắt xích của monomer nào sau đây?",
        "options": [
            "Buta-1,3-diene",
            "Isoprene",
            "Chloroprene",
            "Styrene"
        ],
        "answer": "B",
        "explanation": "Cao su thiên nhiên là polymer của isoprene (2-methylbuta-1,3-diene) với cấu hình toàn bộ ở dạng cis: cis-polyisoprene."
    },
    {
        "type": "MCQ",
        "question": "Polymer nào sau đây được điều chế bằng phản ứng trùng ngưng?",
        "options": [
            "Poly(methyl methacrylate)",
            "Poly(ethylene terephthalate)",
            "Polyacrylonitrile",
            "Polystyrene"
        ],
        "answer": "B",
        "explanation": "Poly(ethylene terephthalate) (tơ lapsan) được điều chế bằng phản ứng trùng ngưng giữa terephthalic acid (HOOC-C6H4-COOH) và ethylene glycol (HO-CH2-CH2-OH), có giải phóng phân tử nhỏ H2O. Các chất còn lại điều chế bằng phản ứng trùng hợp."
    },
    {
        "type": "MCQ",
        "question": "Polymer nào sau đây có cấu trúc mạch không gian (mạng lưới)?",
        "options": [
            "Amylose",
            "Amylopectin",
            "Cao su lưu hóa",
            "Polyethylene"
        ],
        "answer": "C",
        "explanation": "Cao su lưu hóa (và nhựa bakelite) có các cầu nối disulfide (-S-S-) liên kết các mạch polymer với nhau tạo thành mạng không gian ba chiều vững chắc. Amylopectin có mạch phân nhánh; amylose và PE có mạch không phân nhánh."
    },
    {
        "type": "MCQ",
        "question": "Tơ nitron (olon) dùng để dệt vải may quần áo ấm hoặc bện thành sợi 'len' đan áo rét được tổng hợp từ monomer nào sau đây?",
        "options": [
            "CH2=CH-CN",
            "CH2=CH-Cl",
            "H2N-[CH2]5-COOH",
            "CH2=CH-CH=CH2"
        ],
        "answer": "A",
        "explanation": "Tơ nitron (polyacrylonitrile) được tổng hợp bằng phản ứng trùng hợp acrylonitrile (vinyl cyanide): CH2=CH-CN."
    },
    {
        "type": "MCQ",
        "question": "Phát biểu nào sau đây không đúng?",
        "options": [
            "Tơ nylon-6,6 kém bền trong môi trường acid mạnh và môi trường kiềm mạnh.",
            "Thủy tinh hữu cơ plexiglas được chế tạo từ poly(methyl methacrylate).",
            "Trùng hợp styrene thu được polymer dùng để sản xuất vật liệu cách nhiệt, hộp xốp.",
            "Cao su buna-S được tạo ra khi đồng trùng hợp buta-1,3-diene với lưu huỳnh."
        ],
        "answer": "D",
        "explanation": "Cao su buna-S được điều chế bằng phản ứng đồng trùng hợp buta-1,3-diene với styrene (chữ S viết tắt của styrene, không phải lưu huỳnh)."
    },
    {
        "type": "MCQ",
        "question": "Trong các polymer sau: (1) poly(vinyl acetate), (2) cellulose, (3) nylon-6, (4) polyethylene, (5) poly(ethylene terephthalate). Số polymer bị thủy phân trong dung dịch kiềm nóng là",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": "B",
        "explanation": "Các polymer bị thủy phân trong môi trường kiềm đun nóng gồm: (1) poly(vinyl acetate) (chứa nhóm chức ester), (3) nylon-6 (chứa nhóm chức amide -CO-NH-) và (5) poly(ethylene terephthalate) (chứa nhóm chức ester). Cellulose chỉ thủy phân trong môi trường acid, không thủy phân trong kiềm; PE trơ về mặt hóa học. Vậy có 3 chất."
    },
    {
        "type": "MCQ",
        "question": "Ký hiệu 'PET' thường thấy dưới đáy các chai nhựa đựng nước giải khát dùng một lần là viết tắt của loại chất dẻo nào?",
        "options": [
            "Polyethylene",
            "Poly(ethylene terephthalate)",
            "Polystyrene",
            "Polypropylene"
        ],
        "answer": "B",
        "explanation": "PET (hay PETE) là viết tắt của Poly(ethylene terephthalate) - loại nhựa nhiệt dẻo phổ biến nhất dùng để sản xuất chai đựng nước uống."
    },
    {
        "type": "MCQ",
        "question": "Cho các cặp monomer sau: (1) hexamethylenediamine và adipic acid; (2) caprolactam; (3) ethylene glycol và terephthalic acid; (4) phenol và formaldehyde. Số cặp có thể tham gia phản ứng trùng ngưng tạo polymer là",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "C",
        "explanation": "Các cặp phản ứng trùng ngưng gồm: (1) tạo nylon-6,6; (3) tạo poly(ethylene terephthalate); (4) tạo nhựa phenol-formaldehyde. Riêng (2) caprolactam tham gia phản ứng trùng hợp mở vòng tạo tơ capron. Vậy có 3 trường hợp."
    },
    {
        "type": "MCQ",
        "question": "Phân tử khối trung bình của một đoạn mạch polyethylene là 420000 amu. Hệ số polymer hóa (n) của đoạn mạch này là",
        "options": [
            "12000",
            "15000",
            "10000",
            "20000"
        ],
        "answer": "B",
        "explanation": "Mắt xích của polyethylene là -CH2-CH2- có phân tử khối M = 28. Hệ số polymer hóa n = 420000 / 28 = 15000."
    },
    {
        "type": "MCQ",
        "question": "Khối lượng của một đoạn mạch tơ nylon-6,6 là 27120 amu và của một đoạn mạch tơ capron là 17176 amu. Số lượng mắt xích trong đoạn mạch nylon-6,6 và capron lần lượt là",
        "options": [
            "120 và 152",
            "113 và 152",
            "120 và 113",
            "240 và 152"
        ],
        "answer": "A",
        "explanation": "Mắt xích của nylon-6,6 là -NH-[CH2]6-NH-CO-[CH2]4-CO- có M = 226 => số mắt xích = 27120 / 226 = 120. Mắt xích của tơ capron là -NH-[CH2]5-CO- có M = 113 => số mắt xích = 17176 / 113 = 152."
    },
    {
        "type": "MCQ",
        "question": "Trùng hợp 5,6 lít khí ethylene (đkc) với hiệu suất 80% thu được m gam polyethylene (PE). Biết thể tích mol khí ở đkc là 24,79 lít/mol. Giá trị của m gần nhất với",
        "options": [
            "5,06 gam",
            "6,33 gam",
            "7,91 gam",
            "4,52 gam"
        ],
        "answer": "A",
        "explanation": "n(C2H4) = 5,6 / 24,79 ≈ 0,2259 mol. Theo định luật bảo toàn khối lượng, khối lượng PE thu được bằng khối lượng ethylene phản ứng: m = 0,2259 * 28 * 0,8 = 5,06 gam."
    },
    {
        "type": "MCQ",
        "question": "Tiến hành đồng trùng hợp giữa buta-1,3-diene và acrylonitrile thu được một loại cao su buna-N có chứa 8,69% nitrogen về khối lượng. Tỉ lệ số mắt xích buta-1,3-diene và acrylonitrile trong loại polymer này là",
        "options": [
            "1 : 1",
            "2 : 1",
            "1 : 2",
            "3 : 1"
        ],
        "answer": "B",
        "explanation": "Gọi tỉ lệ số mắt xích C4H6 (M=54) và C3H3N (M=53) là x : y. Phần trăm khối lượng N = (14y) / (54x + 53y) = 0,0869 => 14y = 4,6926x + 4,6057y => 9,3943y = 4,6926x => x / y ≈ 2 / 1."
    },
    {
        "type": "MCQ",
        "question": "Trong công nghiệp, PVC được điều chế từ khí thiên nhiên (chứa 95% methane về thể tích) theo sơ đồ: CH4 -> C2H2 -> CH2=CHCl -> PVC. Nếu hiệu suất của toàn bộ quá trình điều chế đạt 20% thì thể tích khí thiên nhiên (đkc) cần lấy để sản xuất được 1 tấn PVC là",
        "options": [
            "3966,4 m³",
            "4175,2 m³",
            "3768,1 m³",
            "1983,2 m³"
        ],
        "answer": "B",
        "explanation": "Bảo toàn nguyên tố C: 2n CH4 -> n C2H2 -> n CH2=CHCl -> (-CH2-CHCl-)n. Cứ 2 mol CH4 (32 gam) tạo ra 1 mắt xích PVC (62,5 gam). Số kmol mắt xích PVC = 1000 / 62,5 = 16 kmol => n(CH4 lý thuyết) = 32 kmol. Với hiệu suất 20% và CH4 chiếm 95% khí thiên nhiên: n(CH4 thực tế) = 32 / 0,2 = 160 kmol. Thể tích khí thiên nhiên ở đkc (24,79 L/mol) = (160 * 24,79) / 0,95 = 4175,16 m³."
    },
    {
        "type": "MCQ",
        "question": "Khi clo hóa PVC thu được một loại tơ clorin có chứa 66,77% chlorine về khối lượng. Trung bình một phân tử Cl2 tác dụng với bao nhiêu mắt xích PVC?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "B",
        "explanation": "Phương trình clo hóa k mắt xích PVC: C2kH3kClk + Cl2 -> C2kH3k-1Clk+1 + HCl. Phần trăm khối lượng Cl trong tơ clorin là: 35,5*(k + 1) / (62,5k + 34,5) = 0,6677 => 35,5k + 35,5 = 41,73125k + 23,03565 => 6,23125k = 12,46435 => k = 2."
    },
    {
        "type": "MCQ",
        "question": "Một loại cao su lưu hóa có chứa 2,0% sulfur (lưu huỳnh) về khối lượng. Giả thiết rằng S đã thay thế cho H ở cầu nối disulfide (-S-S-) giữa các mạch polyisoprene. Trung bình có bao nhiêu mắt xích isoprene có một cầu nối disulfide?",
        "options": [
            "46",
            "23",
            "47",
            "92"
        ],
        "answer": "A",
        "explanation": "Gọi k là số mắt xích isoprene (C5H8, M=68) ứng với 1 cầu nối -S-S- (2 nguyên tử S, khối lượng 64 amu). Khi hình thành 1 cầu nối -S-S- từ 2S thì tách ra 2 nguyên tử H (giảm 2 amu). Ta có: %m(S) = 64 / (68k - 2 + 64) = 0,02 => 64 = 1,36k + 1,24 => 1,36k = 62,76 => k ≈ 46,15 => Trung bình 46 mắt xích isoprene có một cầu nối disulfide."
    },
    {
        "type": "MCQ",
        "question": "Đồng trùng hợp buta-1,3-diene với styrene thu được cao su buna-S. Đem đốt cháy hoàn toàn một mẫu cao su buna-S này thu được khí CO2 và hơi nước theo tỉ lệ mol n(CO2) : n(H2O) = 8 : 5. Tỉ lệ số mắt xích buta-1,3-diene và styrene trong mẫu cao su trên là",
        "options": [
            "1 : 1",
            "2 : 1",
            "1 : 2",
            "3 : 2"
        ],
        "answer": "B",
        "explanation": "Gọi số mắt xích buta-1,3-diene (C4H6) là x và styrene (C8H8) là y. Tổng số C = 4x + 8y; tổng số H = 6x + 8y => n(CO2) = 4x + 8y; n(H2O) = 3x + 4y. Theo đề bài: (4x + 8y) / (3x + 4y) = 8 / 5 => 20x + 40y = 24x + 32y => 4x = 8y => x / y = 2 / 1."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân không hoàn toàn một đoạn mạch polymer X (thuộc loại polyamide) thu được các sản phẩm gồm hexamethylenediamine, adipic acid và ε-aminocaproic acid. Polymer X được tổng hợp trực tiếp từ phản ứng đồng trùng ngưng của các monomer nào sau đây?",
        "options": [
            "Hexamethylenediamine, adipic acid và ε-aminocaproic acid",
            "Hexamethylenediamine, terephthalic acid và glycine",
            "Ethylene glycol, adipic acid và caprolactam",
            "Hexamethylenediamine và caprolactam"
        ],
        "answer": "A",
        "explanation": "Polymer X là đồng trùng ngưng polyamide tạo nên từ hỗn hợp 3 monomer chứa các nhóm -NH2 và -COOH tự do là hexamethylenediamine (H2N-[CH2]6-NH2), adipic acid (HOOC-[CH2]4-COOH) và ε-aminocaproic acid (H2N-[CH2]5-COOH)."
    },
    {
        "type": "MCQ",
        "question": "Cho các polymer sau: tơ tằm, sợi bông, tơ visco, tơ nylon-6, tơ nitron, cao su buna, thủy tinh hữu cơ. Số polymer có nguồn gốc từ cellulose là",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": "A",
        "explanation": "Các polymer có nguồn gốc từ cellulose gồm: sợi bông (thành phần chính là cellulose thiên nhiên) và tơ visco (tơ bán tổng hợp chế biến từ cellulose). Tơ tằm là protein; nylon-6, nitron, cao su buna, thủy tinh hữu cơ là polymer tổng hợp. Vậy có 2 polymer."
    },
    {
        "type": "MCQ",
        "question": "Cho sơ đồ chuyển hóa: Tinh bột -> X -> Y -> Z -> Cao su buna. Biết X, Y, Z là các hợp chất hữu cơ. Nếu dùng 100 kg tinh bột (chứa 19% tạp chất trơ) để điều chế cao su buna với hiệu suất các giai đoạn lần lượt là 80%, 75%, 60% và 90% thì khối lượng cao su buna thu được là",
        "options": [
            "8,748 kg",
            "17,496 kg",
            "11,664 kg",
            "14,580 kg"
        ],
        "answer": "A",
        "explanation": "Sơ đồ: (C6H10O5)n -> n C6H12O6 (X) -> 2n C2H5OH (Y) -> n CH2=CH-CH=CH2 (Z) -> (-CH2-CH=CH-CH2-)n. Cứ 1 mắt xích tinh bột (M=162) tạo ra 1 mắt xích cao su buna (M=54). Khối lượng tinh bột nguyên chất = 100 * 0,81 = 81 kg. Hiệu suất chung của toàn quá trình H = 0,8 * 0,75 * 0,6 * 0,9 = 0,324 (32,4%). Khối lượng cao su buna thực tế = (81 / 162) * 54 * 0,324 = 27 * 0,324 = 8,748 kg."
    },
    {
        "type": "MCQ",
        "question": "Polymer X có công thức cấu tạo lặp lại là (-NH-CH2-CO-NH-CH(CH3)-CO-)n. Khi đun nóng 12,8 gam X với dung dịch NaOH dư, sau khi phản ứng xảy ra hoàn toàn thu được khối lượng muối khan là",
        "options": [
            "20,8 gam",
            "22,6 gam",
            "19,0 gam",
            "24,4 gam"
        ],
        "answer": "A",
        "explanation": "Một mắt xích của X là (-NH-CH2-CO-NH-CH(CH3)-CO-) có phân tử khối M = 57 + 71 = 128. Số mol mắt xích = 12,8 / 128 = 0,1 mol. Khi thủy phân hoàn toàn 0,1 mol mắt xích trong NaOH dư thu được 0,1 mol H2NCH2COONa (M=97) và 0,1 mol H2NCH(CH3)COONa (M=111) => m(muối) = 0,1 * (97 + 111) = 20,8 gam."
    },
    {
        "type": "TF",
        "question": "Polymer là những hợp chất có phân tử khối rất lớn do nhiều đơn vị nhỏ (mắt xích) liên kết với nhau tạo nên. Xét các đặc điểm cấu tạo và tính chất vật lý chung của polymer:",
        "statements": [
            {
                "text": "Hầu hết các polymer đều là chất rắn, không bay hơi và không có nhiệt độ nóng chảy xác định mà nóng chảy ở một khoảng nhiệt độ khá rộng.",
                "answer": true,
                "explanation": "Đúng. Do polymer là tập hợp nhiều phân tử có hệ số polymer hóa n khác nhau nên chúng nóng chảy trong một khoảng nhiệt độ rộng."
            },
            {
                "text": "Khi đun nóng, tất cả các polymer đều nóng chảy thành chất lỏng nhớt rồi nguội đi lại đóng rắn (tính nhiệt dẻo) nên đều có thể tái chế nhiều lần.",
                "answer": false,
                "explanation": "Sai. Chỉ có polymer nhiệt dẻo (như PE, PP, PVC) mới nóng chảy khi đun nóng; còn polymer nhiệt rắn (như nhựa phenol-formaldehyde) không nóng chảy mà bị phân hủy khi đun nóng."
            },
            {
                "text": "Đa số các polymer không tan trong nước và các dung môi thông thường, một số tan được trong dung môi hữu cơ thích hợp tạo dung dịch nhớt.",
                "answer": true,
                "explanation": "Đúng. Ví dụ cao su tan được trong xăng, benzene; poly(vinyl acetate) tan được trong acetone."
            },
            {
                "text": "Các polymer thường có tính cách điện, cách nhiệt tốt nên được ứng dụng rộng rãi làm vỏ bọc dây điện và vật liệu xây dựng.",
                "answer": true,
                "explanation": "Đúng. Các nhựa tổng hợp như PE, PVC không dẫn điện và dẫn nhiệt kém."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Vật liệu composite là vật liệu tổ hợp gồm ít nhất hai thành phần chính là vật liệu nền (thường là polymer) và vật liệu cốt (sợi thủy tinh, sợi carbon, bột gỗ...). Xét các đặc điểm của vật liệu composite:",
        "statements": [
            {
                "text": "Vật liệu nền có vai trò liên kết các thành phần cốt với nhau, tạo tính thống nhất và bảo vệ cốt khỏi tác động của môi trường.",
                "answer": true,
                "explanation": "Đúng. Vật liệu nền (nhựa epoxy, polyester không no...) đóng vai trò chất kết dính và truyền ứng suất sang vật liệu cốt."
            },
            {
                "text": "Vật liệu cốt giúp tăng cường cơ tính (độ bền, độ cứng, khả năng chịu lực, chịu nhiệt) cho vật liệu composite.",
                "answer": true,
                "explanation": "Đúng. Các sợi cốt như sợi carbon, sợi thủy tinh chịu phần lớn tải trọng cơ học của vật liệu."
            },
            {
                "text": "Vật liệu composite thường nặng hơn kim loại nhưng có giá thành rẻ hơn nên được dùng thay thế thép trong xây dựng cầu đường.",
                "answer": false,
                "explanation": "Sai. Ưu điểm vượt trội của composite là khối lượng riêng nhỏ (nhẹ hơn nhiều so với kim loại) nhưng lại có độ bền cơ học rất cao, chống ăn mòn tốt, nên được dùng chế tạo vỏ máy bay, tàu vũ trụ, ô tô thể thao."
            },
            {
                "text": "Gỗ nhựa (nhựa gỗ) được sản xuất từ bột gỗ và nhựa nhiệt dẻo (PE, PP, PVC) là một ứng dụng phổ biến của vật liệu composite trong nội ngoại thất.",
                "answer": true,
                "explanation": "Đúng. Gỗ nhựa composite chống ẩm mốc, mối mọt và chịu thời tiết tốt hơn gỗ tự nhiên."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Xét các loại tơ phổ biến trong đời sống và công nghiệp: tơ tằm, sợi bông, tơ visco, tơ capron, tơ nylon-6,6 và tơ lapsan.",
        "statements": [
            {
                "text": "Tơ tằm và tơ nylon-6,6 đều chứa các nhóm liên kết -CO-NH- trong mạch phân tử.",
                "answer": true,
                "explanation": "Đúng. Tơ tằm bản chất là protein (chứa liên kết peptide -CO-NH-) còn nylon-6,6 là polyamide (cũng chứa nhóm amide -CO-NH-)."
            },
            {
                "text": "Có thể phân biệt vải dệt từ tơ tằm và vải dệt từ sợi bông bằng cách đốt thử: tơ tằm cháy có mùi khét như tóc cháy, còn sợi bông cháy có mùi như giấy cháy.",
                "answer": true,
                "explanation": "Đúng. Tơ tằm chứa nguyên tố N và S (protein) nên khi đốt có mùi khét đặc trưng; sợi bông là cellulose (C, H, O) nên cháy giống giấy."
            },
            {
                "text": "Không nên giặt quần áo bằng tơ tằm hoặc len lông cừu bằng xà phòng có tính kiềm mạnh hay nước quá nóng.",
                "answer": true,
                "explanation": "Đúng. Liên kết peptide trong tơ tằm và len rất dễ bị thủy phân trong môi trường kiềm và nhiệt độ cao, làm sợi vải bị mủn và nhanh hỏng."
            },
            {
                "text": "Tơ lapsan thuộc loại tơ polyamide, được tổng hợp từ phản ứng trùng ngưng giữa ethylene glycol và terephthalic acid.",
                "answer": false,
                "explanation": "Sai. Tơ lapsan được tạo thành từ alcohol đa chức (ethylene glycol) và carboxylic acid đa chức (terephthalic acid) nên chứa nhóm chức ester (-COO-), thuộc loại tơ polyester chứ không phải polyamide."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Cao su và rác thải nhựa là những vấn đề gắn liền với công nghiệp hóa chất và bảo vệ môi trường hiện đại. Xét các phát biểu sau:",
        "statements": [
            {
                "text": "Cao su lưu hóa có tính đàn hồi, chịu nhiệt, lâu mòn và khó tan trong các dung môi hữu cơ hơn cao su chưa lưu hóa.",
                "answer": true,
                "explanation": "Đúng. Quá trình lưu hóa tạo các cầu nối disulfide biến cấu trúc mạch không phân nhánh thành mạng không gian, cải thiện vượt trội cơ tính của cao su."
            },
            {
                "text": "Cao su buna được sản xuất bằng phản ứng trùng hợp buta-1,3-diene có xúc tác sodium (Na) ở nhiệt độ thích hợp.",
                "answer": true,
                "explanation": "Đúng. Tên gọi 'buna' xuất phát từ 'bu' (butadiene) và 'na' (chất xúc tác Na)."
            },
            {
                "text": "Tất cả các loại rác thải nhựa như PE, PP, PVC đều dễ dàng bị phân hủy sinh học bởi vi sinh vật trong đất sau vài tháng.",
                "answer": false,
                "explanation": "Sai. Các nhựa tổng hợp như PE, PP, PVC có mạch carbon rất bền vững, mất hàng trăm năm mới phân hủy trong tự nhiên, gây ô nhiễm trắng nghiêm trọng."
            },
            {
                "text": "Sử dụng nhựa phân hủy sinh học (như PLA - poly(lactic acid)) và hạn chế túi nilon dùng một lần là giải pháp thiết thực giúp giảm thiểu ô nhiễm môi trường.",
                "answer": true,
                "explanation": "Đúng. PLA được tổng hợp từ nguồn nguyên liệu tái tạo (tinh bột ngô, mía) và có khả năng phân hủy sinh học hoàn toàn thành CO2 và H2O trong điều kiện ủ công nghiệp."
            }
        ]
    }
];
