// Chương 5: Pin điện và điện phân (Hóa học 12 - Kết nối tri thức với cuộc sống)[span_2](start_span)[span_2](end_span)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)[span_3](start_span)[span_3](end_span)

const CHAPTER_5 = [
    {
        "type": "MCQ",
        "question": "Trong pin điện hóa Zn-Cu, ở cực âm (anode) xảy ra quá trình nào sau đây?",
        "options": [
            "Oxi hóa Zn thành Zn²⁺",
            "Khử Zn²⁺ thành Zn",
            "Oxi hóa Cu thành Cu²⁺",
            "Khử Cu²⁺ thành Cu"
        ],
        "answer": "A",
        "explanation": "Trong pin điện hóa, anode là cực âm - nơi xảy ra quá trình oxi hóa kim loại mạnh hơn: Zn -> Zn²⁺ + 2e."
    },
    {
        "type": "MCQ",
        "question": "Kí hiệu của cặp oxi hóa - khử ứng với quá trình khử Fe³⁺ + 1e ⇌ Fe²⁺ là",
        "options": [
            "Fe²⁺/Fe³⁺",
            "Fe³⁺/Fe²⁺",
            "Fe³⁺/Fe",
            "Fe²⁺/Fe"
        ],
        "answer": "B",
        "explanation": "Cặp oxi hóa - khử được viết theo quy ước: Dạng oxi hóa / Dạng khử, do đó kí hiệu đúng là Fe³⁺/Fe²⁺."
    },
    {
        "type": "MCQ",
        "question": "Giá trị thế điện cực chuẩn (E°) của cặp oxi hóa - khử nào sau đây được quy ước bằng 0,00 V ở điều kiện chuẩn?",
        "options": [
            "2H⁺/H₂",
            "Cu²⁺/Cu",
            "Zn²⁺/Zn",
            "Ag⁺/Ag"
        ],
        "answer": "A",
        "explanation": "Điện cực hydrogen chuẩn (2H⁺/H₂ ở nồng độ ion H⁺ = 1 M, áp suất khí H₂ = 1 bar, 25 °C) được quy ước có thế điện cực chuẩn E° = 0,00 V làm mốc đo các điện cực khác."
    },
    {
        "type": "MCQ",
        "question": "Khi điện phân dung dịch NaCl bão hòa với điện cực trơ, có màng ngăn xốp, sản phẩm thu được ở cathode (cực âm) là",
        "options": [
            "khí Cl₂",
            "khí O₂",
            "khí H₂ và dung dịch NaOH",
            "kim loại Na"
        ],
        "answer": "C",
        "explanation": "Tại cathode (cực âm), nước bị khử thay vì ion Na⁺: 2H₂O + 2e -> H₂↑ + 2OH⁻, tạo ra khí H₂ và dung dịch kiềm NaOH."
    },
    {
        "type": "MCQ",
        "question": "Kim loại nào sau đây chỉ có thể được điều chế bằng phương pháp điện phân nóng chảy?",
        "options": [
            "Cu",
            "Fe",
            "Ag",
            "Al"
        ],
        "answer": "D",
        "explanation": "Các kim loại hoạt động hóa học mạnh (từ Li đến Al trong dãy điện hóa) không thể khử ion của chúng bằng C, CO, H₂ hay điện phân dung dịch mà bắt buộc phải điện phân nóng chảy hợp chất của chúng (ví dụ điện phân nóng chảy Al₂O₃)."
    },
    {
        "type": "MCQ",
        "question": "Cho thế điện cực chuẩn của các cặp oxi hóa - khử: E°(Mg²⁺/Mg) = -2,356 V; E°(Zn²⁺/Zn) = -0,763 V; E°(Cu²⁺/Cu) = +0,340 V; E°(Ag⁺/Ag) = +0,799 V. Pin điện hóa nào sau đây có sức điện động chuẩn lớn nhất?",
        "options": [
            "Pin Zn-Cu",
            "Pin Mg-Cu",
            "Pin Mg-Ag",
            "Pin Zn-Ag"
        ],
        "answer": "C",
        "explanation": "Sức điện động chuẩn E°(pin) = E°(cathode) - E°(anode). Để E°(pin) lớn nhất thì chọn cặp có E° lớn nhất làm cathode (Ag⁺/Ag) và cặp có E° nhỏ nhất làm anode (Mg²⁺/Mg): E°(pin Mg-Ag) = 0,799 - (-2,356) = 3,155 V."
    },
    {
        "type": "MCQ",
        "question": "Cho biết E°(Fe²⁺/Fe) = -0,440 V và E°(Cu²⁺/Cu) = +0,340 V. Sức điện động chuẩn của pin điện hóa Fe-Cu là",
        "options": [
            "0,100 V",
            "0,780 V",
            "-0,780 V",
            "0,390 V"
        ],
        "answer": "B",
        "explanation": "E°(pin Fe-Cu) = E°(Cu²⁺/Cu) - E°(Fe²⁺/Fe) = 0,340 - (-0,440) = 0,780 V."
    },
    {
        "type": "MCQ",
        "question": "Trong quá trình hoạt động của pin điện hóa Zn-Cu, vai trò của cầu muối (chứa dung dịch KCl bão hòa) là",
        "options": [
            "dẫn electron trực tiếp từ điện cực Zn sang điện cực Cu",
            "trung hòa điện tích của hai dung dịch điện li và khép kín mạch điện",
            "ngăn cản sự chuyển dịch của các ion trong dung dịch",
            "cung cấp chất khử Zn²⁺ cho phản ứng ở cathode"
        ],
        "answer": "B",
        "explanation": "Electron chạy qua dây dẫn ở mạch ngoài, còn cầu muối cho phép các ion âm (Cl⁻) và ion dương (K⁺) di chuyển vào hai nửa pin để trung hòa điện tích dư thừa, giúp dòng điện duy trì liên tục."
    },
    {
        "type": "MCQ",
        "question": "Điện phân dung dịch CuSO₄ với điện cực trơ (graphite). Phương trình hóa học của phản ứng xảy ra trong bình điện phân là",
        "options": [
            "2CuSO₄ + 2H₂O -> 2Cu + O₂ + 2H₂SO₄",
            "CuSO₄ + H₂O -> Cu + H₂ + SO₂ + O₂",
            "2CuSO₄ -> 2Cu + 2SO₂ + O₂",
            "CuSO₄ + 2H₂O -> Cu(OH)₂ + H₂ + SO₂"
        ],
        "answer": "A",
        "explanation": "Tại cathode: Cu²⁺ + 2e -> Cu. Tại anode (trơ): H₂O bị oxi hóa (vì SO₄²⁻ không bị oxi hóa): 2H₂O -> O₂ + 4H⁺ + 4e. Cộng hai bán phản ứng được: 2CuSO₄ + 2H₂O -> 2Cu + O₂↑ + 2H₂SO₄."
    },
    {
        "type": "MCQ",
        "question": "Cho các cặp oxi hóa - khử và thế điện cực chuẩn tương ứng: E°(Al³⁺/Al) = -1,676 V; E°(Fe²⁺/Fe) = -0,440 V; E°(Ni²⁺/Ni) = -0,257 V; E°(Cu²⁺/Cu) = +0,340 V. Trong số các kim loại Al, Fe, Ni, Cu, có bao nhiêu kim loại khử được ion Ni²⁺ thành Ni ở điều kiện chuẩn?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "answer": "B",
        "explanation": "Kim loại khử được ion Ni²⁺ phải thuộc cặp có thế điện cực chuẩn nhỏ hơn E°(Ni²⁺/Ni) = -0,257 V. Đó là Al (-1,676 V) và Fe (-0,440 V). Vậy có 2 kim loại."
    },
    {
        "type": "MCQ",
        "question": "Trong phương pháp mạ điện (ví dụ mạ bạc lên một chiếc thìa bằng đồng), vật cần mạ (chiếc thìa đồng) được nối với cực nào của nguồn điện một chiều?",
        "options": [
            "Cực âm (cathode)",
            "Cực dương (anode)",
            "Cả hai cực đều được",
            "Không nối với nguồn điện"
        ],
        "answer": "A",
        "explanation": "Trong mạ điện, vật cần mạ luôn được gắn làm cathode (cực âm) để các cation kim loại mạ (như Ag⁺) di chuyển về nhận electron và bám thành lớp mỏng mịn lên bề mặt vật; kim loại dùng để mạ làm anode (cực dương) tan dần bù lại ion."
    },
    {
        "type": "MCQ",
        "question": "Khi điện phân dung dịch hỗn hợp gồm FeCl₃, CuCl₂ và HCl với điện cực trơ, thứ tự các ion bị khử tại cathode (từ đầu tiên đến cuối cùng) là",
        "options": [
            "Fe³⁺ -> Cu²⁺ -> H⁺ -> Fe²⁺",
            "Cu²⁺ -> Fe³⁺ -> H⁺ -> Fe²⁺",
            "Fe³⁺ -> Fe²⁺ -> Cu²⁺ -> H⁺",
            "H⁺ -> Cu²⁺ -> Fe³⁺ -> Fe²⁺"
        ],
        "answer": "A",
        "explanation": "Ion có tính oxi hóa càng mạnh (thế điện cực chuẩn E° càng lớn) sẽ bị khử trước tại cathode. Theo dãy điện hóa: E°(Fe³⁺/Fe²⁺) = +0,771 V > E°(Cu²⁺/Cu) = +0,340 V > E°(2H⁺/H₂) = 0,000 V > E°(Fe²⁺/Fe) = -0,440 V. Vậy thứ tự bị khử là Fe³⁺ -> Cu²⁺ -> H⁺ -> Fe²⁺."
    },
    {
        "type": "MCQ",
        "question": "Điện phân dung dịch CuSO₄ với điện cực trơ bằng dòng điện có cường độ I = 5 A trong thời gian t = 1930 giây. Khối lượng kim loại Cu bám trên cathode là (biết hằng số Faraday F = 96500 C/mol)",
        "options": [
            "3,20 gam",
            "6,40 gam",
            "1,60 gam",
            "4,80 gam"
        ],
        "answer": "A",
        "explanation": "Số mol electron trao đổi: n(e) = (I * t) / F = (5 * 1930) / 96500 = 0,1 mol. Tại cathode: Cu²⁺ + 2e -> Cu => n(Cu) = n(e) / 2 = 0,05 mol => m(Cu) = 0,05 * 64 = 3,20 gam."
    },
    {
        "type": "MCQ",
        "question": "Khi một pin điện hóa Zn-Cu hoạt động một thời gian, người ta thấy khối lượng thanh kẽm (anode) giảm đi 1,30 gam. Giả sử toàn bộ lượng đồng sinh ra đều bám hết vào thanh đồng (cathode), khối lượng thanh đồng tăng thêm là",
        "options": [
            "1,28 gam",
            "0,64 gam",
            "2,56 gam",
            "1,92 gam"
        ],
        "answer": "A",
        "explanation": "n(Zn tan) = 1,30 / 65 = 0,02 mol. Bảo toàn electron: n(Cu bám vào) = n(Zn tan) = 0,02 mol => m(Cu tăng) = 0,02 * 64 = 1,28 gam."
    },
    {
        "type": "MCQ",
        "question": "Điện phân 200 mL dung dịch AgNO₃ 0,2M với điện cực trơ trong thời gian t giây với cường độ dòng điện I = 2 A thì vừa hết ion Ag⁺. Giá trị của t là (F = 96500 C/mol)",
        "options": [
            "1930",
            "965",
            "3860",
            "2895"
        ],
        "answer": "A",
        "explanation": "n(Ag⁺) = 0,2 * 0,2 = 0,04 mol. Quá trình khử: Ag⁺ + 1e -> Ag => n(e) = n(Ag⁺) = 0,04 mol. Thời gian điện phân: t = (n(e) * F) / I = (0,04 * 96500) / 2 = 1930 giây."
    },
    {
        "type": "MCQ",
        "question": "Điện phân nóng chảy hoàn toàn 20,4 tấn Al₂O₃ (với điện cực bằng than chì) để sản xuất nhôm trong công nghiệp với hiệu suất quá trình đạt 90%. Khối lượng kim loại nhôm (Al) thu được là",
        "options": [
            "9,72 tấn",
            "10,80 tấn",
            "8,64 tấn",
            "12,00 tấn"
        ],
        "answer": "A",
        "explanation": "Phương trình: 2Al₂O₃ -> 4Al + 3O₂. M(Al₂O₃) = 102. Theo lý thuyết, 20,4 tấn Al₂O₃ (0,2 triệu mol) tạo ra 0,4 triệu mol Al = 0,4 * 27 = 10,8 tấn Al. Với hiệu suất 90%, khối lượng Al thực tế = 10,8 * 0,9 = 9,72 tấn."
    },
    {
        "type": "MCQ",
        "question": "Điện phân 500 mL dung dịch NaCl 1M với điện cực trơ, có màng ngăn xốp cho đến khi ở cathode thu được 1,2395 lít khí (đkc) thì dừng lại. Giả thiết thể tích dung dịch không đổi, pH của dung dịch sau điện phân là (biết 1 mol khí ở đkc có thể tích 24,79 lít)",
        "options": [
            "13,0",
            "13,3",
            "12,7",
            "1,0"
        ],
        "answer": "B",
        "explanation": "n(H₂) = 1,2395 / 24,79 = 0,05 mol. Tại cathode: 2H₂O + 2e -> H₂ + 2OH⁻ => n(OH⁻) = 2 * n(H₂) = 0,1 mol. Nồng độ [OH⁻] = 0,1 / 0,5 = 0,2 M => pOH = -log(0,2) ≈ 0,7 => pH = 14 - 0,7 = 13,3."
    },
    {
        "type": "MCQ",
        "question": "Cho sức điện động chuẩn của các pin điện hóa: E°(pin X-Y) = 1,10 V; E°(pin Y-Z) = 0,82 V; E°(pin Z-T) = 0,46 V (biết X, Y, Z, T là các kim loại có tính khử giảm dần theo thứ tự X > Y > Z > T). Sức điện động chuẩn của pin điện hóa X-T là",
        "options": [
            "2,38 V",
            "1,92 V",
            "1,56 V",
            "1,46 V"
        ],
        "answer": "A",
        "explanation": "Vì tính khử X > Y > Z > T nên thế điện cực chuẩn E°(X) < E°(Y) < E°(Z) < E°(T). Ta có: E°(pin X-T) = E°(T) - E°(X) = [E°(T) - E°(Z)] + [E°(Z) - E°(Y)] + [E°(Y) - E°(X)] = 0,46 + 0,82 + 1,10 = 2,38 V."
    },
    {
        "type": "MCQ",
        "question": "Điện phân dung dịch chứa đồng thời 0,1 mol CuSO₄ và 0,12 mol NaCl với điện cực trơ, có màng ngăn xốp bằng dòng điện có cường độ I = 5 A trong thời gian 3860 giây. Khối lượng dung dịch giảm sau quá trình điện phân là (F = 96500 C/mol)",
        "options": [
            "11,30 gam",
            "10,66 gam",
            "11,83 gam",
            "12,45 gam"
        ],
        "answer": "A",
        "explanation": "Tổng n(e) = (5 * 3860) / 96500 = 0,20 mol. Tại cathode: n(Cu²⁺) = 0,1 mol -> nhận vừa đủ 0,20 mol electron tạo 0,1 mol Cu (6,4 gam). Tại anode: 0,12 mol Cl⁻ bị oxi hóa hết trước tạo 0,06 mol Cl₂ (nhường 0,12 mol e); lượng electron còn lại (0,20 - 0,12 = 0,08 mol) do H₂O bị oxi hóa: 2H₂O -> O₂ + 4H⁺ + 4e => n(O₂) = 0,08 / 4 = 0,02 mol. Tổng khối lượng dung dịch giảm = m(Cu) + m(Cl₂) + m(O₂) = 6,4 + 0,06*71 + 0,02*32 = 6,4 + 4,26 + 0,64 = 11,30 gam."
    },
    {
        "type": "MCQ",
        "question": "Điện phân dung dịch CuSO₄ với điện cực trơ trong thời gian t giây thu được 0,03 mol khí ở anode. Nếu thời gian điện phân là 2t giây (với cường độ dòng điện không đổi) thì tổng số mol khí thu được ở cả hai điện cực là 0,11 mol. Số mol CuSO₄ ban đầu trong dung dịch là",
        "options": [
            "0,06 mol",
            "0,08 mol",
            "0,07 mol",
            "0,12 mol"
        ],
        "answer": "C",
        "explanation": "Ở thời gian t giây, anode chỉ có khí O₂ (0,03 mol) => n(e) ở thời gian t là 4 * 0,03 = 0,12 mol. Ở thời gian 2t giây, n(e) = 0,24 mol => n(O₂ ở anode) = 0,24 / 4 = 0,06 mol. Tổng số mol khí ở cả hai cực là 0,11 mol => tại cathode có khí H₂ thoát ra với số mol = 0,11 - 0,06 = 0,05 mol (chứng tỏ Cu²⁺ đã điện phân hết). Bảo toàn electron ở cathode: n(e) = 2*n(Cu²⁺) + 2*n(H₂) = 0,24 => 2*n(Cu²⁺) + 2*0,05 = 0,24 => n(Cu²⁺) = 0,07 mol."
    },
    {
        "type": "MCQ",
        "question": "Tiến hành điện phân dung dịch chứa m gam hỗn hợp CuSO₄ và NaCl (tỉ lệ mol tương ứng là 1 : 3) với điện cực trơ, màng ngăn xốp, cường độ dòng điện không đổi I = 2 A. Sau thời gian 9650 giây, thu được dung dịch X (chứa hai chất tan) có khối lượng giảm 10,47 gam so với dung dịch ban đầu. Giá trị của m là",
        "options": [
            "20,13 gam",
            "26,84 gam",
            "33,55 gam",
            "16,775 gam"
        ],
        "answer": "A",
        "explanation": "n(e) = (2 * 9650) / 96500 = 0,20 mol. Gọi n(CuSO₄) = x mol => n(NaCl) = 3x mol. Với x = 0,06 mol => n(CuSO₄) = 0,06 mol, n(NaCl) = 0,18 mol. Tại cathode: 0,06 mol Cu²⁺ nhận 0,12 mol e tạo 0,06 mol Cu (3,84 gam); 0,08 mol e còn lại khử H₂O tạo 0,04 mol H₂ (0,08 gam) và 0,08 mol OH⁻. Tại anode: 0,18 mol Cl⁻ nhường 0,18 mol e tạo 0,09 mol Cl₂ (6,39 gam); 0,02 mol e còn lại do H₂O nhường tạo 0,005 mol O₂ (0,16 gam). Tổng m(giảm) = 3,84 + 0,08 + 6,39 + 0,16 = 10,47 gam (khớp đề bài, dung dịch X chứa 2 chất tan là Na₂SO₄ và NaOH). Vậy m = 0,06*160 + 0,18*58,5 = 20,13 gam."
    },
    {
        "type": "MCQ",
        "question": "Một pin nhiên liệu hydrogen - oxygen hoạt động ở điều kiện chuẩn dựa trên phản ứng: 2H₂(g) + O₂(g) -> 2H₂O(l). Biết biến thiên năng lượng tự do Gibbs chuẩn của phản ứng tạo thành 1 mol H₂O(l) là ΔrG° = -237,13 kJ/mol và hằng số Faraday F = 96500 C/mol. Sức điện động chuẩn (E°pin) của pin nhiên liệu này là",
        "options": [
            "1,23 V",
            "2,46 V",
            "0,61 V",
            "1,10 V"
        ],
        "answer": "A",
        "explanation": "Áp dụng công thức nhiệt động điện hóa: ΔrG° = -n * F * E°(pin). Với 1 mol H₂O tạo thành (H₂ + 1/2 O₂ -> H₂O), số mol electron trao đổi n = 2. Thay số: -237130 = -2 * 96500 * E°(pin) => E°(pin) = 237130 / 193000 = 1,2286 V ≈ 1,23 V."
    },
    {
        "type": "MCQ",
        "question": "Nhúng một thanh kim loại R (hóa trị II) nặng 10 gam vào 200 mL dung dịch CuSO₄ 0,5M. Sau khi phản ứng xảy ra hoàn toàn, lấy thanh kim loại ra rửa nhẹ, làm khô và cân lại thấy khối lượng thanh kim loại là 10,8 gam (giả sử toàn bộ Cu sinh ra đều bám hết vào thanh R). Kim loại R là",
        "options": [
            "Fe",
            "Zn",
            "Mg",
            "Ni"
        ],
        "answer": "A",
        "explanation": "n(CuSO₄) = 0,2 * 0,5 = 0,1 mol. Phương trình: R + Cu²⁺ -> R²⁺ + Cu. Khối lượng thanh kim loại tăng = m(Cu bám) - m(R tan) = 0,1 * 64 - 0,1 * M(R) = 10,8 - 10 = 0,8 gam => 6,4 - 0,1*M(R) = 0,8 => 0,1*M(R) = 5,6 => M(R) = 56 (Fe)."
    },
    {
        "type": "MCQ",
        "question": "Điện phân nóng chảy Al₂O₃ với các điện cực làm bằng than chì (carbon). Khí thoát ra ở anode gồm hỗn hợp CO, CO₂ và O₂ có tỉ khối so với H₂ bằng 16,5. Biết lượng Al thu được ở cathode là 27,0 kg và tiêu hao hết 9,0 kg carbon ở anode. Thành phần phần trăm theo thể tích của khí O₂ trong hỗn hợp khí thoát ra ở anode là",
        "options": [
            "25,0%",
            "20,0%",
            "30,0%",
            "15,0%"
        ],
        "answer": "A",
        "explanation": "n(Al) = 27 / 27 = 1,0 kmol => n(e nhận ở cathode) = 3,0 kmol. n(C bị đốt ở anode) = 9,0 / 12 = 0,75 kmol. Gọi số mol CO, CO₂, O₂ lần lượt là x, y, z kmol. Bảo toàn C: x + y = 0,75. Bảo toàn e ở anode: 2x + 4y + 4z = 3,0 => 2(x + y) + 2y + 4z = 3,0 => 1,5 + 2y + 4z = 3,0 => y + 2z = 0,75. Khối lượng hỗn hợp khí = 28x + 44y + 32z = 28(x + y) + 16(y + 2z) = 28*0,75 + 16*0,75 = 33,0 kg. Phân tử khối trung bình khí = 16,5 * 2 = 33 => Tổng số mol khí = 33,0 / 33 = 1,0 kmol. Vì x + y = 0,75 nên z = 1,0 - 0,75 = 0,25 kmol => %V(O₂) = (0,25 / 1,0) * 100% = 25,0%."
    },
    {
        "type": "TF",
        "question": "Một nhóm học sinh lắp ráp pin điện hóa Zn-Cu ở điều kiện chuẩn gồm: thanh Zn nhúng trong dung dịch ZnSO₄ 1M, thanh Cu nhúng trong dung dịch CuSO₄ 1M, hai dung dịch được nối với nhau bằng cầu muối chứa KCl bão hòa và hai thanh kim loại nối với vôn kế có điện trở rất lớn. Biết E°(Zn²⁺/Zn) = -0,763 V và E°(Cu²⁺/Cu) = +0,340 V.",
        "statements": [
            {
                "text": "Số chỉ hiển thị trên vôn kế ở điều kiện chuẩn là 1,103 V.",
                "answer": true,
                "explanation": "Đúng. E°(pin) = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = 0,340 - (-0,763) = 1,103 V."
            },
            {
                "text": "Trong quá trình pin hoạt động, dòng electron di chuyển từ thanh đồng (Cu) qua dây dẫn sang thanh kẽm (Zn).",
                "answer": false,
                "explanation": "Sai. Thanh Zn là cực âm (anode) giải phóng electron nên dòng electron di chuyển từ thanh Zn qua dây dẫn sang thanh Cu (cathode)."
            },
            {
                "text": "Nồng độ ion Zn²⁺ trong cốc bên anode tăng dần, còn nồng độ ion Cu²⁺ trong cốc bên cathode giảm dần theo thời gian.",
                "answer": true,
                "explanation": "Đúng. Ở anode: Zn -> Zn²⁺ + 2e (tạo thêm Zn²⁺); ở cathode: Cu²⁺ + 2e -> Cu (tiêu thụ Cu²⁺)."
            },
            {
                "text": "Nếu rút cầu muối ra khỏi hai cốc dung dịch thì kim vôn kế lập tức chỉ về 0 V.",
                "answer": true,
                "explanation": "Đúng. Rút cầu muối làm mạch điện bị hở, sự trung hòa điện tích bị ngưng trệ nên pin ngừng hoạt động và hiệu điện thế bằng 0."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Pin nhiên liệu và ắc quy chì (hoặc pin Lithium-ion) là những nguồn điện hóa học quan trọng trong đời sống và công nghệ xanh hiện đại. Xét các phát biểu sau:",
        "statements": [
            {
                "text": "Ắc quy chì và pin Lithium-ion là các pin thứ cấp vì có thể nạp lại điện nhiều lần bằng dòng điện một chiều bên ngoài.",
                "answer": true,
                "explanation": "Đúng. Pin thứ cấp (pin sạc) có các phản ứng điện hóa thuận nghịch, cho phép tái tạo chất phản ứng khi nạp điện."
            },
            {
                "text": "Pin nhiên liệu hydrogen - oxygen hoạt động liên tục miễn là nhiên liệu (H₂) và chất oxi hóa (O₂) được cung cấp đều đặn từ bên ngoài.",
                "answer": true,
                "explanation": "Đúng. Khác với pin thông thường dự trữ sẵn hóa chất bên trong, pin nhiên liệu nhận nhiên liệu liên tục từ bình chứa bên ngoài."
            },
            {
                "text": "Ưu điểm nổi bật của pin nhiên liệu hydrogen là hiệu suất chuyển hóa năng lượng cao và sản phẩm thải ra chỉ là nước tinh khiết, không gây ô nhiễm môi trường.",
                "answer": true,
                "explanation": "Đúng. Phản ứng tổng cộng là 2H₂ + O₂ -> 2H₂O nên hoàn toàn không phát thải khí CO₂ hay khí độc hại."
            },
            {
                "text": "Pin con thỏ (pin kẽm - manganese) thuộc loại pin thứ cấp, có thể cắm trực tiếp vào ổ điện lưới để sạc lại sau khi dùng hết.",
                "answer": false,
                "explanation": "Sai. Pin kẽm - manganese là pin sơ cấp (dùng một lần), phản ứng bên trong không thuận nghịch nên không thể sạc lại và rất nguy hiểm nếu cố tình sạc."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Trong công nghiệp sản xuất nhôm từ quặng bauxite (thành phần chính là Al₂O₃.2H₂O), người ta tinh chế quặng thành Al₂O₃ khan rồi tiến hành điện phân nóng chảy hỗn hợp Al₂O₃ và cryolite (Na₃AlF₆) ở khoảng 950 °C.",
        "statements": [
            {
                "text": "Vai trò chính của cryolite là hạ nhiệt độ nóng chảy của Al₂O₃ từ khoảng 2050 °C xuống còn khoảng 950 °C, giúp tiết kiệm năng lượng.",
                "answer": true,
                "explanation": "Đúng. Ngoài việc hạ nhiệt độ nóng chảy, cryolite còn tăng độ dẫn điện của hỗn hợp nóng chảy và tạo lớp xỉ nổi lên trên bảo vệ nhôm lỏng khỏi bị oxi hóa bởi không khí."
            },
            {
                "text": "Nhôm kim loại lỏng có khối lượng riêng lớn hơn hỗn hợp chất điện li nóng chảy nên lắng xuống đáy bể điện phân.",
                "answer": true,
                "explanation": "Đúng. Nhôm lỏng chìm xuống đáy bể giúp dễ dàng tháo ra ngoài và ngăn không cho nhôm tiếp xúc trực tiếp với khí O₂."
            },
            {
                "text": "Do sử dụng điện cực dương (anode) bằng than chì ở nhiệt độ cao nên khí O₂ sinh ra đốt cháy dần điện cực anode thành CO và CO₂, do đó sau một thời gian phải hạ thấp hoặc thay thế cực dương.",
                "answer": true,
                "explanation": "Đúng. Ở 950 °C, O₂ mới sinh ra phản ứng mạnh với than chì tạo hỗn hợp CO và CO₂ làm tiêu hao dần điện cực anode."
            },
            {
                "text": "Có thể thay thế phương pháp điện phân nóng chảy Al₂O₃ bằng cách điện phân dung dịch AlCl₃ để tiết kiệm chi phí nhiệt năng.",
                "answer": false,
                "explanation": "Sai. Khi điện phân dung dịch AlCl₃, nước sẽ bị khử ở cathode thay vì ion Al³⁺ nên không thu được kim loại nhôm."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Điện phân có nhiều ứng dụng quan trọng trong công nghiệp hóa chất và luyện kim như sản xuất xút - chlorine, tinh luyện đồng và mạ điện. Xét các quy trình sau:",
        "statements": [
            {
                "text": "Trong công nghiệp sản xuất xút - chlorine bằng điện phân dung dịch NaCl bão hòa, nếu không có màng ngăn xốp thì khí Cl₂ sẽ phản ứng với dung dịch NaOH tạo thành nước Javel (chứa NaCl và NaClO).",
                "answer": true,
                "explanation": "Đúng. Phản ứng Cl₂ + 2NaOH -> NaCl + NaClO + H₂O xảy ra ngay ở nhiệt độ thường nếu không có màng ngăn tách riêng hai khoang điện cực."
            },
            {
                "text": "Để tinh luyện đồng thô (chứa tạp chất như Zn, Fe, Ag, Au) bằng phương pháp điện phân, người ta dùng tấm đồng thô làm cathode và tấm đồng tinh khiết làm anode nhúng trong dung dịch CuSO₄.",
                "answer": false,
                "explanation": "Sai. Phải dùng tấm đồng thô làm anode (cực dương) để đồng và các kim loại hoạt động hơn (Zn, Fe) tan vào dung dịch, còn tấm đồng tinh khiết làm cathode (cực âm) để ion Cu²⁺ bám vào tạo đồng 99,99%."
            },
            {
                "text": "Trong quá trình tinh luyện đồng bằng điện phân, các kim loại quý như Ag, Au không bị oxi hóa ở anode nên rơi xuống đáy bể tạo thành 'bùn anode' có giá trị kinh tế cao.",
                "answer": true,
                "explanation": "Đúng. Do E°(Ag⁺/Ag) và E°(Au³⁺/Au) lớn hơn nhiều so với E°(Cu²⁺/Cu) nên Ag và Au không tan ở anode mà lắng xuống đáy."
            },
            {
                "text": "Quá trình mạ điện giúp bảo vệ kim loại nền khỏi sự ăn mòn của môi trường đồng thời tăng tính thẩm mỹ cho sản phẩm.",
                "answer": true,
                "explanation": "Đúng. Ví dụ mạ chromium, mạ kẽm, mạ vàng/bạc lên chi tiết máy và đồ trang sức."
            }
        ]
    }
];
