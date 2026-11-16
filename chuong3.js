// Chương 3: Hợp chất chứa Nitrogen (Hóa học 12 - Kết nối tri thức với cuộc sống)[span_0](start_span)[span_0](end_span)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)[span_1](start_span)[span_1](end_span)

const CHAPTER_3 = [
    {
        "type": "MCQ",
        "question": "Chất nào sau đây thuộc loại amine bậc hai?",
        "options": [
            "CH3NH2",
            "(CH3)2NH",
            "(CH3)3N",
            "C6H5NH2"
        ],
        "answer": "B",
        "explanation": "Bậc của amine được tính bằng số nguyên tử hydrogen trong phân tử NH3 bị thay thế bởi gốc hydrocarbon. (CH3)2NH (dimethylamine) có 2 gốc methyl thay thế 2 nguyên tử H nên là amine bậc hai."
    },
    {
        "type": "MCQ",
        "question": "Tên gọi của amine có công thức cấu tạo CH3CH2NH2 là",
        "options": [
            "methylamine",
            "ethylamine",
            "propylamine",
            "dimethylamine"
        ],
        "answer": "B",
        "explanation": "Gốc hydrocarbon là C2H5- (ethyl) gắn với nhóm -NH2 nên tên gọi gốc - chức là ethylamine (tên thay thế là ethanamine)."
    },
    {
        "type": "MCQ",
        "question": "Dung dịch chất nào sau đây làm quỳ tím chuyển sang màu xanh?",
        "options": [
            "Aniline",
            "Methylamine",
            "Glycine",
            "Alanine"
        ],
        "answer": "B",
        "explanation": "Methylamine (CH3NH2) là amine no mạch hở có tính base mạnh hơn ammonia nên làm quỳ tím hóa xanh. Aniline có tính base rất yếu không làm đổi màu quỳ tím; glycine và alanine có số nhóm -NH2 bằng số nhóm -COOH nên môi trường gần như trung tính."
    },
    {
        "type": "MCQ",
        "question": "Chất nào sau đây thuộc loại α-amino acid?",
        "options": [
            "H2NCH2CH2COOH",
            "H2NCH2COOH",
            "CH3CH2NH2",
            "CH3CONH2"
        ],
        "answer": "B",
        "explanation": "H2NCH2COOH (glycine) có nhóm -NH2 gắn ở nguyên tử carbon vị trí số 2 (vị trí α) so với nhóm -COOH nên là α-amino acid."
    },
    {
        "type": "MCQ",
        "question": "Số liên kết peptide có trong một phân tử tripeptide mạch hở là",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "B",
        "explanation": "Phân tử n-peptide mạch hở được tạo thành từ n gốc α-amino acid liên kết với nhau bằng (n - 1) liên kết peptide. Tripeptide có 3 gốc nên có 3 - 1 = 2 liên kết peptide (-CO-NH-)."
    },
    {
        "type": "MCQ",
        "question": "Nhỏ vài giọt nước bromine vào ống nghiệm đựng dung dịch aniline, hiện tượng quan sát được là",
        "options": [
            "xuất hiện kết tủa màu trắng",
            "xuất hiện kết tủa màu vàng nhạt",
            "có bọt khí không màu thoát ra",
            "tạo dung dịch màu xanh lam"
        ],
        "answer": "A",
        "explanation": "Do ảnh hưởng của nhóm -NH2 làm tăng mật độ electron ở vòng benzene tại các vị trí ortho và para, aniline phản ứng dễ dàng với nước bromine tạo kết tủa trắng 2,4,6-tribromoaniline."
    },
    {
        "type": "MCQ",
        "question": "Số đồng phân cấu tạo amine ứng với công thức phân tử C3H9N là",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": "C",
        "explanation": "Có 4 đồng phân cấu tạo amine của C3H9N gồm: CH3CH2CH2NH2, (CH3)2CHNH2 (2 amine bậc 1), CH3CH2NHCH3 (1 amine bậc 2) và (CH3)3N (1 amine bậc 3)."
    },
    {
        "type": "MCQ",
        "question": "Chất nào sau đây có tính lưỡng tính?",
        "options": [
            "Ethylamine",
            "Alanine",
            "Aniline",
            "Trimethylamine"
        ],
        "answer": "B",
        "explanation": "Alanine (CH3-CH(NH2)-COOH) là amino acid, phân tử chứa đồng thời nhóm -NH2 (tính base) và nhóm -COOH (tính acid) nên có tính chất lưỡng tính, tác dụng được với cả acid mạnh và base mạnh."
    },
    {
        "type": "MCQ",
        "question": "Dãy các chất nào sau đây đều có phản ứng màu biuret với Cu(OH)2 trong môi trường kiềm?",
        "options": [
            "Gly-Ala, Gly-Ala-Val, lòng trắng trứng",
            "Gly-Ala-Val, Ala-Gly-Val-Gly, lòng trắng trứng",
            "Glycine, Ala-Gly, tinh bột",
            "Aniline, glucose, Gly-Ala-Gly"
        ],
        "answer": "B",
        "explanation": "Phản ứng màu biuret (tạo phức chất màu tím đặc trưng với Cu(OH)2 trong môi trường kiềm) xảy ra với các peptide có từ 2 liên kết peptide trở lên (tức từ tripeptide trở lên) và protein (như lòng trắng trứng). Dipeptide (Gly-Ala) chỉ có 1 liên kết peptide nên không có phản ứng màu biuret."
    },
    {
        "type": "MCQ",
        "question": "Sắp xếp các chất sau theo chiều lực base tăng dần: (1) NH3, (2) C6H5NH2 (aniline), (3) CH3NH2, (4) (CH3)2NH.",
        "options": [
            "(2) < (1) < (3) < (4)",
            "(1) < (2) < (3) < (4)",
            "(2) < (1) < (4) < (3)",
            "(4) < (3) < (1) < (2)"
        ],
        "answer": "A",
        "explanation": "Gốc phenyl (-C6H5) hút electron làm giảm mật độ electron trên nguyên tử N của aniline nên lực base của aniline yếu hơn NH3. Ngược lại, gốc alkyl (-CH3) đẩy electron làm tăng mật độ electron trên N, amine bậc 2 có 2 gốc đẩy mạnh hơn amine bậc 1. Thứ tự tăng dần lực base: C6H5NH2 < NH3 < CH3NH2 < (CH3)2NH."
    },
    {
        "type": "MCQ",
        "question": "Muối monosodium glutamate được dùng làm gia vị thực phẩm (mì chính / bột ngọt) được điều chế từ amino acid nào sau đây?",
        "options": [
            "Glycine",
            "Alanine",
            "Valine",
            "Glutamic acid"
        ],
        "answer": "D",
        "explanation": "Glutamic acid có công thức HOOC-CH2-CH2-CH(NH2)-COOH (2 nhóm -COOH, 1 nhóm -NH2). Muối mononatri của nó (HOOC-CH2-CH2-CH(NH2)-COONa) chính là bột ngọt (mì chính)."
    },
    {
        "type": "MCQ",
        "question": "Hiện tượng riêu cua nổi lên mặt nước khi nấu canh cua là do",
        "options": [
            "sự thủy phân protein trong môi trường kiềm",
            "sự đông tụ protein dưới tác dụng của nhiệt độ",
            "phản ứng màu biuret của protein với ion kim loại",
            "sự hòa tan protein trong nước nóng"
        ],
        "answer": "B",
        "explanation": "Protein hình cầu (như albumin trong gạch cua, lòng trắng trứng) tan được trong nước tạo dung dịch keo, nhưng khi đun nóng bị biến tính và đông tụ lại thành từng mảng nổi lên trên."
    },
    {
        "type": "MCQ",
        "question": "Cho 9,3 gam một amine no, đơn chức, mạch hở X tác dụng vừa đủ với 300 mL dung dịch HCl 1M. Công thức phân tử của X là",
        "options": [
            "CH5N",
            "C2H7N",
            "C3H9N",
            "C4H11N"
        ],
        "answer": "A",
        "explanation": "n(HCl) = 0,3 * 1 = 0,3 mol. Vì X là amine đơn chức nên n(X) = n(HCl) = 0,3 mol. M(X) = 9,3 / 0,3 = 31 (CH3NH2, công thức phân tử CH5N)."
    },
    {
        "type": "MCQ",
        "question": "Cho 15 gam glycine (H2NCH2COOH) tác dụng vừa đủ với dung dịch NaOH, sau phản ứng cô cạn dung dịch thu được m gam muối khan. Giá trị của m là",
        "options": [
            "19,4",
            "19,6",
            "22,2",
            "17,2"
        ],
        "answer": "A",
        "explanation": "n(Gly) = 15 / 75 = 0,2 mol. Phương trình: H2NCH2COOH + NaOH -> H2NCH2COONa + H2O. n(muối) = 0,2 mol => m(muối) = 0,2 * (75 + 22) = 0,2 * 97 = 19,4 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 17,8 gam alanine (CH3CH(NH2)COOH) tác dụng hoàn toàn với 300 mL dung dịch HCl 1M, thu được dung dịch X. Cho toàn bộ dung dịch X tác dụng vừa đủ với V mL dung dịch NaOH 1M. Giá trị của V là",
        "options": [
            "200",
            "300",
            "500",
            "400"
        ],
        "answer": "C",
        "explanation": "n(Ala) = 17,8 / 89 = 0,2 mol; n(HCl) = 0,3 mol. Khi cho hỗn hợp sau phản ứng (gồm muối Ala.HCl 0,2 mol và HCl dư 0,1 mol) tác dụng với NaOH thì cả Ala và HCl ban đầu đều phản ứng với NaOH theo tỉ lệ 1:1. Tổng n(NaOH) = n(Ala) + n(HCl) = 0,2 + 0,3 = 0,5 mol => V = 0,5 / 1 = 0,5 lít = 500 mL."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn 14,6 gam Gly-Ala trong dung dịch NaOH dư, đun nóng. Khối lượng muối thu được sau phản ứng là",
        "options": [
            "18,6 gam",
            "20,8 gam",
            "22,6 gam",
            "16,8 gam"
        ],
        "answer": "B",
        "explanation": "M(Gly-Ala) = 75 + 89 - 18 = 146 => n(Gly-Ala) = 14,6 / 146 = 0,1 mol. Phương trình: Gly-Ala + 2NaOH -> Gly-Na + Ala-Na + H2O. m(muối) = 0,1 * 97 + 0,1 * 111 = 9,7 + 11,1 = 20,8 gam (Hoặc bảo toàn khối lượng: 14,6 + 0,2*40 - 0,1*18 = 20,8 gam)."
    },
    {
        "type": "MCQ",
        "question": "Đốt cháy hoàn toàn một amine no, đơn chức, mạch hở X thu được khí CO2 và hơi nước theo tỉ lệ mol n(CO2) : n(H2O) = 2 : 5. Tên gọi của X là",
        "options": [
            "methylamine",
            "ethylamine",
            "propylamine",
            "trimethylamine"
        ],
        "answer": "A",
        "explanation": "Amine no, đơn chức, mạch hở có công thức CnH2n+3N. Khi đốt cháy tạo n mol CO2 và (n + 1,5) mol H2O. Theo đề bài: n / (n + 1,5) = 2 / 5 => 5n = 2n + 3 => 3n = 3 => n = 1. Vậy X là CH3NH2 (methylamine)."
    },
    {
        "type": "MCQ",
        "question": "Hợp chất X có công thức phân tử C3H7O2N. Cho 0,1 mol X tác dụng vừa đủ với 100 mL dung dịch NaOH 1M, đun nóng thu được muối Y và 3,2 gam alcohol Z. Công thức cấu tạo của X là",
        "options": [
            "H2NCH2COOCH3",
            "H2NCH2CH2COOH",
            "CH3CH(NH2)COOH",
            "HCOONH3CH=CH2"
        ],
        "answer": "A",
        "explanation": "n(Z) = 0,1 mol => M(Z) = 3,2 / 0,1 = 32 (CH3OH). Vậy X là ester của glycine với methanol: H2NCH2COOCH3."
    },
    {
        "type": "MCQ",
        "question": "Hỗn hợp X gồm hai amine no, đơn chức, mạch hở kế tiếp nhau trong dãy đồng đẳng. Cho 10,7 gam X tác dụng vừa đủ với 300 mL dung dịch HCl 1M. Công thức phân tử của hai amine trong X là",
        "options": [
            "CH5N và C2H7N",
            "C2H7N và C3H9N",
            "C3H9N và C4H11N",
            "C4H11N và C5H13N"
        ],
        "answer": "A",
        "explanation": "n(X) = n(HCl) = 0,3 mol. Phân tử khối trung bình M(X) = 10,7 / 0,3 = 35,67. Hai amine no, đơn chức kế tiếp có M trung bình bằng 35,67 phải là CH5N (M = 31) và C2H7N (M = 45)."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn m gam tetrapeptide mạch hở Gly-Ala-Val-Gly trong dung dịch KOH dư, đun nóng thu được 50,8 gam hỗn hợp các muối. Giá trị của m là",
        "options": [
            "45,8",
            "30,2",
            "48,4",
            "40,2"
        ],
        "answer": "B",
        "explanation": "M(Gly-Ala-Val-Gly) = 75*2 + 89 + 117 - 3*18 = 302. Gọi số mol tetrapeptide là x. Khi thủy phân hoàn toàn trong KOH thu được 2x mol Gly-K (M=113), x mol Ala-K (M=127) và x mol Val-K (M=155). Tổng khối lượng muối = x * (2*113 + 127 + 155) = 508x = 50,8 => x = 0,1 mol => m = 0,1 * 302 = 30,2 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 0,1 mol α-amino acid X tác dụng vừa đủ với 100 mL dung dịch HCl 1M, thu được dung dịch Y. Cho toàn bộ dung dịch Y tác dụng vừa đủ với 300 mL dung dịch NaOH 1M, thu được dung dịch chứa 24,95 gam hỗn hợp muối. Tên gọi của X là",
        "options": [
            "Glycine",
            "Alanine",
            "Glutamic acid",
            "Lysine"
        ],
        "answer": "C",
        "explanation": "n(X) = 0,1 mol; n(HCl) = 0,1 mol => X có 1 nhóm -NH2. Tổng n(NaOH) phản ứng với Y là 0,3 mol, trong đó 0,1 mol NaOH trung hòa 0,1 mol HCl tạo 0,1 mol NaCl (5,85 gam), còn lại 0,2 mol NaOH phản ứng với 0,1 mol X => X có 2 nhóm -COOH. Khối lượng muối của X = 24,95 - 5,85 = 19,1 gam => M(muối của X) = 191 => M(X) = 191 - 44 = 147 (Glutamic acid, C5H9NO4)."
    },
    {
        "type": "MCQ",
        "question": "Hợp chất hữu cơ X có công thức phân tử C4H12O2N2. Đun nóng 12,0 gam X với dung dịch NaOH vừa đủ thu được chất khí Y làm xanh quỳ tím ẩm và dung dịch Z chứa một muối duy nhất. Cô cạn Z thu được 9,7 gam chất rắn khan. Công thức cấu tạo của X là",
        "options": [
            "H2NCH2COONH3C2H5",
            "CH3CH(NH2)COONH3CH3",
            "C2H5COONH3CH2NH2",
            "CH3COONH3CH2CH2NH2"
        ],
        "answer": "A",
        "explanation": "M(X) = 120 => n(X) = 12,0 / 120 = 0,1 mol. M(muối) = 9,7 / 0,1 = 97 (H2NCH2COONa). Vậy X là muối ammonium của glycine với ethylamine: H2NCH2COONH3C2H5 (khí Y là C2H5NH2 làm xanh quỳ tím ẩm)."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn 1 mol pentapeptide mạch hở X thu được 3 mol glycine, 1 mol alanine và 1 mol valine. Khi thủy phân không hoàn toàn X thu được hỗn hợp sản phẩm trong đó có chứa các dipeptide Ala-Gly, Gly-Ala và tripeptide Gly-Gly-Val. Số công thức cấu tạo thỏa mãn của X là",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "A",
        "explanation": "X gồm 3 Gly, 1 Ala, 1 Val. Vì có tripeptide Gly-Gly-Val nên 3 mắt xích này đứng liền nhau. Thêm 1 Ala và 1 Gly còn lại sao cho xuất hiện cả Ala-Gly và Gly-Ala. Ghép Ala vào trước Gly-Gly-Val ta được: Ala-Gly-Gly-Val (chưa có Gly-Ala). Ghép thêm 1 Gly vào đầu mạch ta được: Gly-Ala-Gly-Gly-Val. Kiểm tra lại: trong mạch này có Gly-Ala (vị trí 1-2), Ala-Gly (vị trí 2-3) và Gly-Gly-Val (vị trí 3-4-5). Chỉ có duy nhất 1 công thức cấu tạo thỏa mãn."
    },
    {
        "type": "MCQ",
        "question": "Đốt cháy hoàn toàn 0,1 mol một amine X mạch hở thu được 0,3 mol CO2, 0,45 mol H2O và 0,05 mol N2. Số đồng phân cấu tạo của X tác dụng được với dung dịch HNO2 ở nhiệt độ thường giải phóng khí N2 là",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "B",
        "explanation": "Từ số mol các sản phẩm cháy: số C = 0,3 / 0,1 = 3; số H = (0,45 * 2) / 0,1 = 9; số N = (0,05 * 2) / 0,1 = 1. Vậy CTPT của X là C3H9N. Amine mạch hở tác dụng với HNO2 giải phóng khí N2 phải là amine bậc một (có nhóm -NH2). C3H9N có 2 đồng phân amine bậc một là CH3-CH2-CH2-NH2 và (CH3)2CH-NH2."
    },
    {
        "type": "TF",
        "question": "Tiến hành thí nghiệm nghiên cứu tính chất của aniline và methylamine theo các bước sau:\n- Bước 1: Nhỏ vài giọt aniline vào ống nghiệm (1) chứa 2 mL nước cất, lắc đều rồi để yên.\n- Bước 2: Nhỏ tiếp vào ống nghiệm (1) vài giọt dung dịch HCl đặc, lắc nhẹ.\n- Bước 3: Nhúng mẩu giấy quỳ tím vào ống nghiệm (2) đựng dung dịch methylamine 5%.",
        "statements": [
            {
                "text": "Ở bước 1, aniline hầu như không tan trong nước và lắng xuống đáy ống nghiệm vì nặng hơn nước.",
                "answer": true,
                "explanation": "Đúng. Aniline là chất lỏng không màu, rất ít tan trong nước và có khối lượng riêng D ≈ 1,02 g/cm³ (nặng hơn nước) nên lắng xuống đáy ống nghiệm."
            },
            {
                "text": "Ở bước 2, chất lỏng trong ống nghiệm (1) trở nên đồng nhất và trong suốt do tạo thành muối phenylammonium chloride tan tốt trong nước.",
                "answer": true,
                "explanation": "Đúng. Phương trình: C6H5NH2 + HCl -> C6H5NH3Cl. Muối này tan tốt trong nước tạo dung dịch đồng nhất."
            },
            {
                "text": "Ở bước 3, mẩu giấy quỳ tím chuyển sang màu đỏ do dung dịch methylamine có tính acid.",
                "answer": false,
                "explanation": "Sai. Methylamine có tính base mạnh hơn ammonia nên làm giấy quỳ tím chuyển sang màu xanh."
            },
            {
                "text": "Nếu nhỏ dung dịch NaOH dư vào ống nghiệm (1) sau bước 2 thì dung dịch lại bị vẩn đục trở lại.",
                "answer": true,
                "explanation": "Đúng. Base mạnh NaOH đẩy base yếu aniline ra khỏi muối: C6H5NH3Cl + NaOH -> C6H5NH2 + NaCl + H2O. Aniline không tan tách ra làm dung dịch vẩn đục."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Cho các amino acid thiên nhiên phổ biến gồm: glycine (Gly), alanine (Ala), valine (Val), lysine (Lys) và glutamic acid (Glu).",
        "statements": [
            {
                "text": "Ở điều kiện thường, tất cả các amino acid trên đều là chất rắn kết tinh, dễ tan trong nước và có nhiệt độ nóng chảy cao.",
                "answer": true,
                "explanation": "Đúng. Trong tinh thể cũng như trong dung dịch, amino acid tồn tại chủ yếu ở dạng ion lưỡng cực (H3N+-R-COO-) nên có lực hút tĩnh điện mạnh, là chất rắn kết tinh và tan tốt trong nước."
            },
            {
                "text": "Dung dịch lysine làm quỳ tím hóa xanh, còn dung dịch glutamic acid làm quỳ tím hóa đỏ.",
                "answer": true,
                "explanation": "Đúng. Lysine có 2 nhóm -NH2 và 1 nhóm -COOH nên tính base trội hơn (quỳ hóa xanh); glutamic acid có 2 nhóm -COOH và 1 nhóm -NH2 nên tính acid trội hơn (quỳ hóa đỏ)."
            },
            {
                "text": "Cả 5 amino acid trên đều có cấu tạo dạng β-amino acid.",
                "answer": false,
                "explanation": "Sai. Tất cả các amino acid cấu tạo nên protein tự nhiên đều là α-amino acid (nhóm -NH2 gắn ở carbon số 2)."
            },
            {
                "text": "Khi đặt dung dịch hỗn hợp gồm Lys, Ala và Glu trong một điện trường ở pH ≈ 6,0 thì Lys di chuyển về cực âm, Glu di chuyển về cực dương còn Ala hầu như không di chuyển.",
                "answer": true,
                "explanation": "Đúng. Ở pH ≈ 6,0 (điểm đẳng điện của Ala), Ala tồn tại dạng ion lưỡng cực trung hòa điện nên đứng yên; Lys nhận thêm H+ thành cation tích điện dương nên về cực âm (catot); Glu nhường H+ thành anion tích điện âm nên về cực dương (anot)."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Cho tripeptide mạch hở X có công thức cấu tạo là H2N-CH2-CO-NH-CH(CH3)-CO-NH-CH(CH(CH3)2)-COOH.",
        "statements": [
            {
                "text": "Tên viết tắt của tripeptide X là Gly-Ala-Val.",
                "answer": true,
                "explanation": "Đúng. Tính từ đầu N (nhóm -NH2 tự do) sang đầu C (nhóm -COOH tự do): gốc đầu tiên là Gly, gốc thứ hai là Ala, gốc cuối cùng là Val."
            },
            {
                "text": "Trong phân tử X có chứa 3 nguyên tử nitrogen và 4 nguyên tử oxygen.",
                "answer": true,
                "explanation": "Đúng. Mỗi mắt xích α-amino acid có 1 N nên tripeptide có 3 N; có 2 nhóm -CO- (2 O) và 1 nhóm -COOH cuối mạch (2 O), tổng cộng là 4 O."
            },
            {
                "text": "Thủy phân hoàn toàn 1 mol X trong dung dịch HCl dư cần dùng tối đa 3 mol HCl và thu được 3 mol muối.",
                "answer": true,
                "explanation": "Đúng. Phương trình: Gly-Ala-Val + 2H2O + 3HCl -> ClH3N-CH2-COOH + ClH3N-CH(CH3)-COOH + ClH3N-CH(C3H7)-COOH."
            },
            {
                "text": "Tripeptide X không phản ứng với Cu(OH)2 trong môi trường kiềm do phân tử chỉ có 2 liên kết peptide.",
                "answer": false,
                "explanation": "Sai. Điều kiện để có phản ứng màu biuret là có từ 2 liên kết peptide trở lên. Tripeptide X có đúng 2 liên kết peptide nên phản ứng bình thường tạo phức màu tím đặc trưng."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Protein và enzyme đóng vai trò nền tảng trong cấu trúc và hoạt động sống của mọi tế bào. Xét các phát biểu về protein và enzyme:",
        "statements": [
            {
                "text": "Protein đơn giản khi thủy phân hoàn toàn chỉ cho hỗn hợp các α-amino acid.",
                "answer": true,
                "explanation": "Đúng. Protein đơn giản (như albumin, fibroin) được tạo thành chỉ từ các chuỗi polypeptide chứa các gốc α-amino acid."
            },
            {
                "text": "Khi nhỏ dung dịch HNO3 đặc vào lòng trắng trứng xuất hiện kết tủa màu vàng đặc trưng.",
                "answer": true,
                "explanation": "Đúng. Đây là phản ứng màu xanthoproteic do các gốc amino acid chứa vòng thơm (như tyrosine, phenylalanine) trong protein tác dụng với HNO3 đặc tạo hợp chất nitro màu vàng."
            },
            {
                "text": "Enzyme là những chất xúc tác sinh học có tính chọn lọc rất cao, mỗi enzyme thường chỉ xúc tác cho một hoặc một vài phản ứng nhất định.",
                "answer": true,
                "explanation": "Đúng. Tính đặc hiệu (chọn lọc cao) và tốc độ xúc tác cực lớn ở điều kiện sinh lý bình thường là đặc trưng của enzyme."
            },
            {
                "text": "Tóc, móng tay, sừng động vật và tơ tằm đều thuộc loại protein hình cầu nên tan tốt trong nước ấm.",
                "answer": false,
                "explanation": "Sai. Keratin (tóc, móng, sừng) và fibroin (tơ tằm) thuộc loại protein hình sợi, có cấu trúc bền vững và hoàn toàn không tan trong nước."
            }
        ]
    }
];
