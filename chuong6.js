// Chương 6: Đại cương về kim loại (Hóa học 12 - Kết nối tri thức với cuộc sống)[span_0](start_span)[span_0](end_span)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)[span_1](start_span)[span_1](end_span)

const CHAPTER_6 = [
    {
        "type": "MCQ",
        "question": "Tính chất vật lý chung của kim loại (tính dẻo, tính dẫn điện, tính dẫn nhiệt, ánh kim) gây ra chủ yếu bởi",
        "options": [
            "các electron tự do trong mạng tinh thể kim loại",
            "các ion dương kim loại dao động quanh nút mạng",
            "khối lượng riêng lớn của các nguyên tử kim loại",
            "cấu tạo mạng tinh thể lập phương tâm khối"
        ],
        "answer": "A",
        "explanation": "Các electron hóa trị chuyển động tự do trong toàn bộ mạng tinh thể kim loại chính là nguyên nhân gây ra 4 tính chất vật lý chung: tính dẻo, dẫn điện, dẫn nhiệt và ánh kim."
    },
    {
        "type": "MCQ",
        "question": "Kim loại nào sau đây có tính dẫn điện tốt nhất trong tất cả các kim loại ở điều kiện thường?",
        "options": [
            "Cu",
            "Ag",
            "Au",
            "Al"
        ],
        "answer": "B",
        "explanation": "Thứ tự dẫn điện giảm dần của một số kim loại tiêu biểu ở điều kiện thường: Ag > Cu > Au > Al > Fe. Bạc (Ag) dẫn điện tốt nhất."
    },
    {
        "type": "MCQ",
        "question": "Kim loại nào sau đây có nhiệt độ nóng chảy cao nhất nên thường được dùng làm dây tóc bóng đèn sợi đốt?",
        "options": [
            "W (Tungsten)",
            "Fe",
            "Cr",
            "Cu"
        ],
        "answer": "A",
        "explanation": "Tungsten (W, vonfram) có nhiệt độ nóng chảy cao nhất trong tất cả các kim loại (khoảng 3422 °C) nên được dùng làm dây tóc bóng đèn."
    },
    {
        "type": "MCQ",
        "question": "Ở nhiệt độ thường, kim loại nào sau đây tồn tại ở trạng thái lỏng?",
        "options": [
            "Hg",
            "Cs",
            "Ga",
            "Na"
        ],
        "answer": "A",
        "explanation": "Thủy ngân (Hg) có nhiệt độ nóng chảy -38,83 °C nên là kim loại duy nhất ở thể lỏng tại điều kiện thường."
    },
    {
        "type": "MCQ",
        "question": "Phương pháp nào sau đây thường được dùng để điều chế các kim loại hoạt động hóa học trung bình và yếu (như Fe, Cu, Pb, Zn) từ oxide của chúng trong công nghiệp?",
        "options": [
            "Nhiệt luyện",
            "Điện phân nóng chảy",
            "Thủy luyện",
            "Chiết"
        ],
        "answer": "A",
        "explanation": "Phương pháp nhiệt luyện dùng các chất khử mạnh như C, CO, H₂, Al khử ion kim loại trong oxide ở nhiệt độ cao để điều chế các kim loại đứng sau Al trong dãy hoạt động hóa học."
    },
    {
        "type": "MCQ",
        "question": "Kim loại nào sau đây phản ứng mãnh liệt với nước ở nhiệt độ thường tạo thành dung dịch kiềm và giải phóng khí H₂?",
        "options": [
            "Na",
            "Fe",
            "Cu",
            "Ag"
        ],
        "answer": "A",
        "explanation": "Các kim loại kiềm (như Na, K) và kim loại kiềm thổ (Ca, Sr, Ba) khử được nước ở nhiệt độ thường: 2Na + 2H₂O -> 2NaOH + H₂↑."
    },
    {
        "type": "MCQ",
        "question": "Cho dãy các kim loại: Fe, Cu, Mg, Ag. Số kim loại trong dãy phản ứng được với dung dịch HCl loãng ở điều kiện thường là",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "B",
        "explanation": "Chỉ có các kim loại đứng trước H trong dãy điện hóa mới khử được ion H⁺ của dung dịch HCl loãng. Trong dãy trên có Mg và Fe phản ứng được (2 kim loại); Cu và Ag đứng sau H nên không phản ứng."
    },
    {
        "type": "MCQ",
        "question": "Trong hợp kim gang và thép (thành phần chính là Fe và C), khi để lâu trong không khí ẩm sẽ xảy ra hiện tượng ăn mòn điện hóa. Tại cực âm (anode) xảy ra quá trình nào?",
        "options": [
            "Fe -> Fe²⁺ + 2e",
            "O₂ + 2H₂O + 4e -> 4OH⁻",
            "2H⁺ + 2e -> H₂",
            "C + O₂ -> CO₂"
        ],
        "answer": "A",
        "explanation": "Trong pin điện hóa Fe-C (môi trường không khí ẩm), Fe có tính khử mạnh hơn đóng vai trò cực âm (anode) và bị oxi hóa: Fe -> Fe²⁺ + 2e. Tại cực dương (cathode - C), O₂ hòa tan trong màng nước nhận electron tạo OH⁻."
    },
    {
        "type": "MCQ",
        "question": "Thí nghiệm nào sau đây chỉ xảy ra ăn mòn hóa học mà không xảy ra ăn mòn điện hóa?",
        "options": [
            "Đốt dây sắt (Fe) nguyên chất trong bình đựng khí O₂ khô.",
            "Nhúng thanh Zn vào dung dịch CuSO₄.",
            "Để tấm tôn (sắt tráng kẽm) bị trầy xước sâu trong không khí ẩm.",
            "Nối dây đồng với dây sắt rồi nhúng vào dung dịch nước muối."
        ],
        "answer": "A",
        "explanation": "Đốt Fe nguyên chất trong O₂ khô chỉ có sự trao đổi electron trực tiếp giữa Fe và O₂ (không có cặp điện cực khác chất và không có dung dịch chất điện li) nên là ăn mòn hóa học thuần túy. Các trường hợp B, C, D đều hình thành pin điện hóa."
    },
    {
        "type": "MCQ",
        "question": "Để bảo vệ vỏ tàu biển làm bằng thép (phần ngập dưới nước) khỏi bị ăn mòn điện hóa, người ta thường gắn vào mặt ngoài vỏ tàu các tấm kim loại nào sau đây?",
        "options": [
            "Zn (Kẽm)",
            "Cu (Đồng)",
            "Sn (Thiếc)",
            "Pb (Chì)"
        ],
        "answer": "A",
        "explanation": "Đây là phương pháp bảo vệ điện hóa (dùng điện cực hi sinh). Phải gắn kim loại có tính khử mạnh hơn Fe (như Zn hoặc Mg) để Zn đóng vai trò anode bị ăn mòn thay cho vỏ tàu thép (đóng vai trò cathode được bảo vệ)."
    },
    {
        "type": "MCQ",
        "question": "Kim loại nào sau đây bị thụ động hóa trong dung dịch HNO₃ đặc, nguội và H₂SO₄ đặc, nguội?",
        "options": [
            "Al, Fe, Cr",
            "Cu, Ag, Zn",
            "Mg, Al, Zn",
            "Fe, Cu, Mg"
        ],
        "answer": "A",
        "explanation": "Al, Fe và Cr tạo lớp màng oxide bền vững, trơ về mặt hóa học trên bề mặt khi tiếp xúc với HNO₃ đặc nguội hoặc H₂SO₄ đặc nguội nên bị thụ động hóa (không phản ứng tiếp)."
    },
    {
        "type": "MCQ",
        "question": "Hợp kim nào sau đây có đặc tính nhẹ, bền, chịu nhiệt tốt nên được ứng dụng rộng rãi trong ngành công nghiệp chế tạo vỏ máy bay và tên lửa?",
        "options": [
            "Duralumin (hợp kim của Al với Cu, Mg, Mn, Si)",
            "Gang trắng (hợp kim của Fe và C)",
            "Đồng thau (hợp kim của Cu và Zn)",
            "Hợp kim hàn (hợp kim của Sn và Pb)"
        ],
        "answer": "A",
        "explanation": "Duralumin (đura) là hợp kim nhẹ của nhôm có độ bền cơ học ngang với thép nhẹ nhưng khối lượng riêng chỉ bằng khoảng 1/3 thép nên là vật liệu chủ lực trong hàng không vũ trụ."
    },
    {
        "type": "MCQ",
        "question": "Cho 11,2 gam bột Fe tác dụng hoàn toàn với dung dịch H₂SO₄ loãng dư. Thể tích khí H₂ thoát ra ở điều kiện chuẩn (25 °C, 1 bar) là (biết 1 mol khí ở đkc có thể tích 24,79 lít)",
        "options": [
            "4,958 lít",
            "7,437 lít",
            "2,479 lít",
            "9,916 lít"
        ],
        "answer": "A",
        "explanation": "n(Fe) = 11,2 / 56 = 0,2 mol. Phương trình: Fe + H₂SO₄ (loãng) -> FeSO₄ + H₂↑. n(H₂) = n(Fe) = 0,2 mol => V(H₂) = 0,2 * 24,79 = 4,958 lít."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 5,4 gam Al trong dung dịch HNO₃ loãng dư thu được V lít khí NO (sản phẩm khử duy nhất, ở đkc). Giá trị của V là (biết thể tích mol khí ở đkc là 24,79 lít/mol)",
        "options": [
            "4,958",
            "2,479",
            "7,437",
            "3,7185"
        ],
        "answer": "A",
        "explanation": "n(Al) = 5,4 / 27 = 0,2 mol. Bảo toàn electron: 3 * n(Al) = 3 * n(NO) => n(NO) = 0,2 mol => V(NO) = 0,2 * 24,79 = 4,958 lít."
    },
    {
        "type": "MCQ",
        "question": "Thổi luồng khí CO dư đi qua ống sứ đựng 24,0 gam hỗn hợp gồm CuO và Fe₂O₃ nung nóng. Sau khi các phản ứng xảy ra hoàn toàn, thu được 17,6 gam chất rắn trong ống sứ và hỗn hợp khí X. Dẫn toàn bộ khí X vào dung dịch Ca(OH)₂ dư thu được m gam kết tủa trắng. Giá trị của m là",
        "options": [
            "40,0",
            "30,0",
            "20,0",
            "50,0"
        ],
        "answer": "A",
        "explanation": "Khối lượng chất rắn giảm chính là khối lượng nguyên tử O trong oxide bị CO chiếm lấy: m(O bị khử) = 24,0 - 17,6 = 6,4 gam => n(O bị khử) = 6,4 / 16 = 0,4 mol. Vì mỗi phân tử CO lấy 1 nguyên tử O để tạo thành 1 phân tử CO₂ nên n(CO₂) = n(O bị khử) = 0,4 mol => m(CaCO₃) = 0,4 * 100 = 40,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 7,8 gam hỗn hợp gồm Mg và Al bằng dung dịch HCl dư, sau phản ứng thu được 8,6765 lít khí H₂ (đkc) và dung dịch chứa m gam muối chloride. Giá trị của m là (biết 1 mol khí ở đkc có thể tích 24,79 lít)",
        "options": [
            "32,65",
            "25,55",
            "29,10",
            "36,20"
        ],
        "answer": "A",
        "explanation": "n(H₂) = 8,6765 / 24,79 = 0,35 mol. Bảo toàn nguyên tố H: n(HCl phản ứng) = 2 * n(H₂) = 0,70 mol => n(Cl⁻ tạo muối) = 0,70 mol. Khối lượng muối = m(kim loại) + m(Cl⁻) = 7,8 + 0,70 * 35,5 = 7,8 + 24,85 = 32,65 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 5,6 gam bột Fe tác dụng hoàn toàn với 250 mL dung dịch AgNO₃ 1M. Sau khi phản ứng kết thúc, khối lượng chất rắn thu được là",
        "options": [
            "27,0 gam",
            "21,6 gam",
            "24,3 gam",
            "16,2 gam"
        ],
        "answer": "A",
        "explanation": "n(Fe) = 5,6 / 56 = 0,10 mol; n(AgNO₃) = 0,25 * 1 = 0,25 mol. Giai đoạn 1: Fe + 2Ag⁺ -> Fe²⁺ + 2Ag (0,10 mol Fe phản ứng với 0,20 mol Ag⁺ tạo 0,20 mol Ag, còn dư 0,05 mol Ag⁺). Giai đoạn 2: Fe²⁺ + Ag⁺ -> Fe³⁺ + Ag (0,05 mol Ag⁺ dư oxi hóa 0,05 mol Fe²⁺ tạo thêm 0,05 mol Ag). Tổng n(Ag) = 0,20 + 0,05 = 0,25 mol => m(Ag) = 0,25 * 108 = 27,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 16,2 gam Al tác dụng vừa đủ với 2,5 lít dung dịch HNO₃ loãng, sau phản ứng chỉ thu được dung dịch chứa một muối duy nhất và hỗn hợp khí X gồm N₂O và N₂ có tỉ khối so với H₂ bằng 18,0. Thể tích hỗn hợp khí X ở điều kiện chuẩn (25 °C, 1 bar) là (biết V_mol = 24,79 L/mol)",
        "options": [
            "4,958 lít",
            "7,437 lít",
            "3,7185 lít",
            "6,1975 lít"
        ],
        "answer": "A",
        "explanation": "M(X) = 18 * 2 = 36 => Dùng quy tắc đường chéo cho N₂O (M=44) và N₂ (M=28) với M_tb = 36 ta được tỉ lệ mol n(N₂O) : n(N₂) = 1 : 1. Đặt n(N₂O) = n(N₂) = x mol. n(Al) = 16,2 / 27 = 0,6 mol. Bảo toàn electron: 3 * 0,6 = 8x + 10x => 18x = 1,8 => x = 0,1 mol => Tổng n(khí X) = 0,2 mol => V(X) = 0,2 * 24,79 = 4,958 lít."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 11,6 gam hỗn hợp gồm Fe, FeO, Fe₂O₃ và Fe₃O₄ bằng dung dịch HNO₃ loãng dư thu được 1,2395 lít khí NO (sản phẩm khử duy nhất, ở đkc) và dung dịch X. Cô cạn dung dịch X thu được m gam muối khan. Giá trị của m là (biết 1 mol khí ở đkc có thể tích 24,79 lít)",
        "options": [
            "36,30",
            "48,40",
            "39,93",
            "42,35"
        ],
        "answer": "A",
        "explanation": "Quy đổi 11,6 gam hỗn hợp thành Fe (x mol) và O (y mol) => 56x + 16y = 11,6. n(NO) = 1,2395 / 24,79 = 0,05 mol. Bảo toàn electron: 3x = 2y + 3 * 0,05 => 3x - 2y = 0,15. Giải hệ phương trình được: x = 0,15 mol và y = 0,15 mol. Muối khan duy nhất là Fe(NO₃)₃ (0,15 mol) => m = 0,15 * 242 = 36,30 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 2,7 gam bột Al vào 100 mL dung dịch chứa đồng thời AgNO₃ 0,5M và Cu(NO₃)₂ 1,5M. Sau khi các phản ứng xảy ra hoàn toàn, thu được m gam chất rắn. Giá trị của m là",
        "options": [
            "15,00",
            "13,40",
            "11,80",
            "16,60"
        ],
        "answer": "B",
        "explanation": "n(Al) = 2,7 / 27 = 0,10 mol (tổng e tối đa có thể nhường = 0,30 mol). n(Ag⁺) = 0,05 mol (cần nhận 0,05 mol e); n(Cu²⁺) = 0,15 mol (cần nhận 0,30 mol e). Tổng e tối đa ion kim loại nhận = 0,05 + 0,30 = 0,35 > 0,30 => Al tan hết. Thứ tự khử: Ag⁺ hết trước tạo 0,05 mol Ag (5,4 gam); lượng electron còn lại của Al là 0,30 - 0,05 = 0,25 mol khử được 0,25 / 2 = 0,125 mol Cu²⁺ tạo 0,125 mol Cu (8,0 gam). Tổng khối lượng rắn = 5,4 + 8,0 = 13,40 gam."
    },
    {
        "type": "MCQ",
        "question": "Nung hỗn hợp gồm 10,8 gam bột Al và 23,2 gam Fe₃O₄ trong điều kiện không có không khí (phản ứng nhiệt nhôm) với hiệu suất 100%, thu được hỗn hợp rắn X. Cho toàn bộ X tác dụng với dung dịch NaOH dư thu được V lít khí H₂ (đkc). Giá trị của V là (biết V_mol = 24,79 L/mol)",
        "options": [
            "3,7185 lít",
            "4,9580 lít",
            "2,4790 lít",
            "7,4370 lít"
        ],
        "answer": "B",
        "explanation": "n(Al) = 10,8 / 27 = 0,40 mol; n(Fe₃O₄) = 23,2 / 232 = 0,10 mol. Phương trình nhiệt nhôm: 8Al + 3Fe₃O₄ -> 4Al₂O₃ + 9Fe. Lập tỉ lệ: 0,40 / 8 = 0,05 > 0,10 / 3 = 0,0333 => Al dư, Fe₃O₄ hết. Số mol Al phản ứng = (8/3) * 0,10 = 4/15 mol => Số mol Al dư = 0,40 - 4/15 = 2/15 mol. Khi cho X vào NaOH dư, chỉ có Al dư sinh khí H₂: n(H₂) = 1,5 * n(Al dư) = 1,5 * (2/15) = 0,20 mol => V(H₂) = 0,20 * 24,79 = 4,9580 lít."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 15,6 gam hỗn hợp gồm Mg, Al và Zn bằng dung dịch H₂SO₄ loãng vừa đủ thu được 9,916 lít khí H₂ (đkc) và dung dịch X. Cô cạn cẩn thận dung dịch X thu được m gam muối sulfate khan. Giá trị của m là (biết V_mol = 24,79 L/mol)",
        "options": [
            "54,0 gam",
            "44,4 gam",
            "34,8 gam",
            "63,6 gam"
        ],
        "answer": "A",
        "explanation": "n(H₂) = 9,916 / 24,79 = 0,40 mol. Bảo toàn nguyên tố H: n(H₂SO₄ phản ứng) = n(H₂) = 0,40 mol => n(SO₄²⁻ trong muối) = 0,40 mol. Khối lượng muối khan = m(kim loại) + m(SO₄²⁻) = 15,6 + 0,40 * 96 = 15,6 + 38,4 = 54,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Trong công nghiệp luyện gang từ quặng hematite đỏ (chứa 80% Fe₂O₃, còn lại là tạp chất trơ không chứa sắt) bằng phương pháp nhiệt luyện với khí CO trong lò cao. Giả sử hiệu suất toàn bộ quá trình sản xuất gang đạt 90% và gang thành phẩm chứa 95% sắt về khối lượng. Để sản xuất được 1 tấn gang thành phẩm thì khối lượng quặng hematite đỏ cần dùng là",
        "options": [
            "1,885 tấn",
            "1,696 tấn",
            "1,508 tấn",
            "2,115 tấn"
        ],
        "answer": "A",
        "explanation": "Khối lượng Fe có trong 1 tấn gang = 1 * 0,95 = 0,95 tấn. Sơ đồ: Fe₂O₃ -> 2Fe (160 tấn Fe₂O₃ tạo ra 112 tấn Fe). Khối lượng Fe₂O₃ lý thuyết cần dùng = (0,95 * 160) / 112 = 1,35714 tấn. Tính cả hiệu suất 90% và hàm lượng Fe₂O₃ trong quặng là 80%: m(quặng) = 1,35714 / (0,90 * 0,80) = 1,8849 tấn ≈ 1,885 tấn."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 21,6 gam hỗn hợp gồm Fe và CuO bằng một lượng vừa đủ dung dịch HCl 1M thu được dung dịch X chỉ chứa hai muối. Cho dung dịch AgNO₃ dư vào X, sau khi các phản ứng xảy ra hoàn toàn thu được 68,2 gam kết tủa. Thể tích dung dịch HCl 1M đã dùng là",
        "options": [
            "400 mL",
            "300 mL",
            "500 mL",
            "200 mL"
        ],
        "answer": "A",
        "explanation": "Gọi n(Fe) = x mol, n(CuO) = y mol => 56x + 80y = 21,6. Khi hòa tan vào HCl vừa đủ tạo dung dịch X chỉ chứa 2 muối (FeCl₂ và CuCl₂ dư, Fe hết) thì x < y, khi đó n(FeCl₂) = x mol và n(CuCl₂ dư) = (y - x) mol, tổng n(Cl⁻ trong X) = 2x + 2(y - x) = 2y mol. Khi cho AgNO₃ dư vào X: kết tủa gồm AgCl (2y mol) và Ag (do Fe²⁺ + Ag⁺ -> Fe³⁺ + Ag, tạo x mol Ag). Ta có: 143,5*(2y) + 108x = 68,2 => 108x + 287y = 68,2. Giải hệ (56x + 80y = 21,6 và 108x + 287y = 68,2) được: x = 0,10 mol và y = 0,20 mol. Tổng n(HCl) = 2y = 0,40 mol => V(HCl) = 0,40 lít = 400 mL."
    },
    {
        "type": "TF",
        "question": "Cho các kim loại phổ biến sau: vàng (Au), đồng (Cu), nhôm (Al), sắt (Fe) và tungsten (W). Mỗi kim loại đều có những tính chất vật lý đặc trưng quyết định đến ứng dụng của chúng trong đời sống và kỹ thuật.",
        "statements": [
            {
                "text": "Vàng (Au) là kim loại có tính dẻo cao nhất, có thể dát mỏng tới mức ánh sáng xuyên qua được nên dùng để dát vàng trang trí và làm vi mạch điện tử.",
                "answer": true,
                "explanation": "Đúng. Vàng đứng đầu về tính dẻo trong tất cả các kim loại, đồng thời chống oxi hóa tuyệt đối nên được dùng làm dây dẫn siêu mảnh trong chip điện tử."
            },
            {
                "text": "Nhôm (Al) và đồng (Cu) được dùng rộng rãi làm dây dẫn điện cao thế và dân dụng vì chúng dẫn điện tốt và giá thành hợp lý hơn bạc (Ag).",
                "answer": true,
                "explanation": "Đúng. Mặc dù Ag dẫn điện tốt nhất nhưng giá thành quá đắt; Cu dẫn điện tốt thứ hai và Al nhẹ, dẫn điện tốt nên là vật liệu làm dây điện chủ lực."
            },
            {
                "text": "Các kim loại kiềm (Li, Na, K) đều rất cứng và nặng nên thường được dùng làm vật liệu chịu lực trong xây dựng.",
                "answer": false,
                "explanation": "Sai. Kim loại kiềm có bán kính nguyên tử lớn, liên kết kim loại yếu nên rất mềm (có thể cắt dễ dàng bằng dao) và có khối lượng riêng rất nhỏ (Li, Na, K nhẹ hơn nước)."
            },
            {
                "text": "Chromium (Cr) là kim loại cứng nhất trong tất cả các kim loại (có thể rạch được thủy tinh), thường dùng để mạ bảo vệ các chi tiết máy chống mài mòn.",
                "answer": true,
                "explanation": "Đúng. Chromium có độ cứng đứng đầu bảng trong các kim loại (độ cứng 8,5 trên thang Mohs)."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Tiến hành thí nghiệm nghiên cứu sự ăn mòn điện hóa của sắt theo các bước sau:\n- Bước 1: Rót vào hai ống nghiệm (1) và (2) mỗi ống khoảng 3 mL dung dịch H₂SO₄ 1M.\n- Bước 2: Cho vào mỗi ống nghiệm một đinh sắt đã được đánh sạch bề mặt.\n- Bước 3: Nhỏ tiếp vào ống nghiệm (2) vài giọt dung dịch CuSO₄ 0,5M.",
        "statements": [
            {
                "text": "Ở bước 2, cả hai ống nghiệm đều có bọt khí không màu thoát ra trên bề mặt đinh sắt với tốc độ như nhau.",
                "answer": true,
                "explanation": "Đúng. Ở bước 2, cả hai ống đều chỉ xảy ra phản ứng hóa học: Fe + H₂SO₄ -> FeSO₄ + H₂↑ trong điều kiện giống nhau."
            },
            {
                "text": "Ở bước 3, trong ống nghiệm (2) xuất hiện lớp kim loại màu đỏ bám lên đinh sắt và tốc độ bọt khí H₂ thoát ra nhanh hơn hẳn so với ống nghiệm (1).",
                "answer": true,
                "explanation": "Đúng. Fe đẩy Cu ra khỏi CuSO₄ bám lên bề mặt đinh sắt tạo thành vô số pin điện hóa Fe-Cu, làm quá trình oxi hóa Fe (ăn mòn điện hóa) diễn ra nhanh hơn rất nhiều."
            },
            {
                "text": "Trong pin điện hóa hình thành ở ống nghiệm (2), đồng (Cu) đóng vai trò anode bị ăn mòn còn sắt (Fe) đóng vai trò cathode.",
                "answer": false,
                "explanation": "Sai. Fe có tính khử mạnh hơn Cu nên Fe đóng vai trò anode (cực âm) bị oxi hóa (ăn mòn), còn Cu đóng vai trò cathode (cực dương) là nơi ion H⁺ nhận electron thoát ra khí H₂."
            },
            {
                "text": "Thí nghiệm trên chứng minh rằng tốc độ ăn mòn điện hóa xảy ra nhanh hơn nhiều so với ăn mòn hóa học thông thường.",
                "answer": true,
                "explanation": "Đúng. Đây là thí nghiệm kinh điển trong SGK Hóa học 12 để so sánh tốc độ giữa ăn mòn hóa học (ống 1) và ăn mòn điện hóa (ống 2)."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Tái chế kim loại (đặc biệt là nhôm, sắt, đồng) là giải pháp chiến lược trong nền kinh tế tuần hoàn nhằm tiết kiệm tài nguyên khoáng sản và năng lượng.",
        "statements": [
            {
                "text": "Năng lượng tiêu tốn để sản xuất nhôm từ phế liệu tái chế chỉ bằng khoảng 5% so với sản xuất nhôm từ quặng bauxite bằng phương pháp điện phân nóng chảy.",
                "answer": true,
                "explanation": "Đúng. Điện phân nóng chảy Al₂O₃ tiêu tốn lượng điện năng khổng lồ, trong khi nấu chảy nhôm phế liệu chỉ cần nhiệt độ khoảng 660 °C, tiết kiệm tới 95% năng lượng."
            },
            {
                "text": "Trong quá trình tái chế sắt thép phế liệu bằng lò điện hồ quang, các tạp chất như C, Si, Mn được oxi hóa thành oxide để điều chỉnh hàm lượng theo đúng mác thép yêu cầu.",
                "answer": true,
                "explanation": "Đúng. Lò điện hồ quang nấu chảy thép phế liệu và dùng khí O₂ tinh luyện để loại bỏ bớt tạp chất."
            },
            {
                "text": "Tái chế kim loại giúp giảm đáng kể lượng khí thải nhà kính (CO₂) và chất thải rắn (bùn đỏ, xỉ lò) thải ra môi trường.",
                "answer": true,
                "explanation": "Đúng. Khai thác quặng và luyện kim nguyên sinh phát thải lượng lớn CO₂ và bùn đỏ gây ô nhiễm môi trường."
            },
            {
                "text": "Kim loại sau nhiều lần tái chế luôn bị biến đổi hoàn toàn bản chất nguyên tố hóa học nên chỉ dùng được một lần duy nhất.",
                "answer": false,
                "explanation": "Sai. Nguyên tử kim loại không bị biến đổi bản chất khi nấu chảy và tinh luyện lại; kim loại có thể tái chế gần như vô hạn lần mà vẫn giữ nguyên tính chất vật lý và hóa học."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Hợp kim là vật liệu kim loại có chứa một kim loại cơ bản và một số kim loại khác hoặc phi kim. Xét các tính chất và ứng dụng của hợp kim:",
        "statements": [
            {
                "text": "Hợp kim thường có độ cứng cao hơn và nhiệt độ nóng chảy thấp hơn so với các kim loại thành phần nguyên chất.",
                "answer": true,
                "explanation": "Đúng. Sự có mặt của nguyên tử nguyên tố lạ làm biến dạng mạng tinh thể kim loại, cản trở sự trượt của các lớp nguyên tử nên hợp kim cứng hơn và giòn hơn, đồng thời dễ nóng chảy hơn."
            },
            {
                "text": "Thép không gỉ (inox) là hợp kim của sắt với chromium, nickel và một lượng nhỏ carbon, có khả năng chống ăn mòn rất tốt.",
                "answer": true,
                "explanation": "Đúng. Chromium (thường trên 10,5%) tạo lớp màng oxide Cr₂O₃ siêu mỏng, bền vững bảo vệ bề mặt thép khỏi bị gỉ."
            },
            {
                "text": "Phương pháp thủy luyện thường được dùng để tách các kim loại kém hoạt động như Cu, Ag, Au từ quặng nghèo bằng cách hòa tan vào dung dịch thích hợp rồi dùng kim loại mạnh hơn đẩy ra.",
                "answer": true,
                "explanation": "Đúng. Ví dụ ngâm quặng đồng oxit nghèo trong dung dịch H₂SO₄ loãng tạo CuSO₄, sau đó dùng phế liệu Fe đẩy Cu ra khỏi dung dịch."
            },
            {
                "text": "Gang và thép đều là hợp kim của sắt và carbon, trong đó hàm lượng carbon trong thép cao hơn hàm lượng carbon trong gang.",
                "answer": false,
                "explanation": "Sai. Gang chứa từ 2% đến 5% khối lượng carbon (cứng và giòn hơn), còn thép chứa dưới 2% khối lượng carbon (dẻo và đàn hồi tốt hơn)."
            }
        ]
    }
];
