// Chương 7: Nguyên tố nhóm IA và nhóm IIA (Hóa học 12 - Kết nối tri thức với cuộc sống)[span_1](start_span)[span_1](end_span)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)[span_2](start_span)[span_2](end_span)

const CHAPTER_7 = [
    {
        "type": "MCQ",
        "question": "Cấu hình electron lớp ngoài cùng của nguyên tử các kim loại nhóm IA (kim loại kiềm) ở trạng thái cơ bản là",
        "options": [
            "ns¹",
            "ns²",
            "ns²np¹",
            "ns²np²"
        ],
        "answer": "A",
        "explanation": "Các kim loại nhóm IA (Li, Na, K, Rb, Cs) có 1 electron hóa trị ở phân lớp s ngoài cùng nên cấu hình electron lớp ngoài cùng là ns¹."
    },
    {
        "type": "MCQ",
        "question": "Trong công nghiệp, kim loại sodium (Na) được điều chế bằng phương pháp nào sau đây?",
        "options": [
            "Điện phân nóng chảy NaCl",
            "Điện phân dung dịch NaCl có màng ngăn",
            "Dùng khí CO khử Na₂O ở nhiệt độ cao",
            "Dùng kim loại K đẩy Na ra khỏi dung dịch NaCl"
        ],
        "answer": "A",
        "explanation": "Kim loại kiềm có tính khử rất mạnh nên trong công nghiệp phải điều chế bằng phương pháp điện phân nóng chảy muối halide (như NaCl) hoặc hydroxide của chúng."
    },
    {
        "type": "MCQ",
        "question": "Hợp chất nào sau đây có tên thường gọi là baking soda (thuốc muối), được dùng làm bột nở trong chế biến thực phẩm và thuốc giảm đau dạ dày do thừa acid?",
        "options": [
            "Na₂CO₃",
            "NaHCO₃",
            "NaOH",
            "Na₂SO₄"
        ],
        "answer": "B",
        "explanation": "Sodium hydrogencarbonate (NaHCO₃) là baking soda, dễ bị nhiệt phân giải phóng khí CO₂ làm xốp bánh và có tính kiềm yếu giúp trung hòa bớt HCl dư trong dạ dày."
    },
    {
        "type": "MCQ",
        "question": "Thành phần chính của đá vôi, đá phấn và đá hoa là",
        "options": [
            "CaCO₃",
            "CaO",
            "Ca(OH)₂",
            "CaSO₄.2H₂O"
        ],
        "answer": "A",
        "explanation": "Calcium carbonate (CaCO₃) là thành phần chính của các loại đá vôi, đá phấn, đá hoa và vỏ các loài sò, ốc, san hô."
    },
    {
        "type": "MCQ",
        "question": "Nước cứng là nước chứa nhiều hai ion nào sau đây?",
        "options": [
            "Ca²⁺ và Mg²⁺",
            "Na⁺ và K⁺",
            "Fe²⁺ và Fe³⁺",
            "Al³⁺ và Zn²⁺"
        ],
        "answer": "A",
        "explanation": "Theo định nghĩa, nước cứng là nước có chứa nồng độ cao các cation Ca²⁺ và Mg²⁺."
    },
    {
        "type": "MCQ",
        "question": "Khi đốt nóng hợp chất của kim loại kiềm và kiềm thổ trên ngọn lửa đèn khí không màu, ngọn lửa sẽ có màu đặc trưng. Cặp kim loại và màu ngọn lửa nào sau đây không đúng?",
        "options": [
            "Sodium (Na) - màu vàng",
            "Potassium (K) - màu tím nhạt",
            "Calcium (Ca) - màu đỏ cam",
            "Barium (Ba) - màu đỏ thẫm"
        ],
        "answer": "D",
        "explanation": "Hợp chất của Barium (Ba) cháy cho ngọn lửa màu lục (xanh lục); màu đỏ thẫm (đỏ son) là đặc trưng của Lithium (Li) hoặc Strontium (Sr)."
    },
    {
        "type": "MCQ",
        "question": "Để bảo quản kim loại sodium (Na) trong phòng thí nghiệm, người ta thường ngâm chìm mẫu Na trong chất lỏng nào sau đây?",
        "options": [
            "Dầu hỏa khan",
            "Nước cất",
            "Ethanol nguyên chất",
            "Dung dịch HCl loãng"
        ],
        "answer": "A",
        "explanation": "Na phản ứng mãnh liệt với nước, ethanol và dung dịch acid, đồng thời dễ bị oxi hóa bởi O₂ và hơi ẩm không khí. Dầu hỏa khan trơ với Na và nhẹ hơn Na nên giúp cách ly hoàn toàn Na khỏi không khí và hơi nước."
    },
    {
        "type": "MCQ",
        "question": "Nước cứng tạm thời chứa các muối hydrogencarbonate của Ca²⁺ và Mg²⁺. Chất nào sau đây có thể dùng để làm mềm nước cứng tạm thời bằng phương pháp kết tủa?",
        "options": [
            "Na₂CO₃",
            "NaCl",
            "HCl",
            "CaCl₂"
        ],
        "answer": "A",
        "explanation": "Ion CO₃²⁻ của Na₂CO₃ kết hợp với Ca²⁺ và Mg²⁺ tạo kết tủa CaCO₃ và MgCO₃ tách ra khỏi nước, làm mất tính cứng của nước (dùng được cho cả nước cứng tạm thời và vĩnh cửu)."
    },
    {
        "type": "MCQ",
        "question": "Trong dãy các kim loại nhóm IIA từ Be đến Ba, tính chất nào sau đây biến đổi theo chiều tăng dần?",
        "options": [
            "Tính khử của kim loại",
            "Độ âm điện của nguyên tử",
            "Năng lượng ion hóa thứ nhất",
            "Nhiệt độ nóng chảy của đơn chất"
        ],
        "answer": "A",
        "explanation": "Từ Be đến Ba, số lớp electron tăng nhanh làm bán kính nguyên tử tăng, lực hút của hạt nhân với electron hóa trị giảm nên tính khử của kim loại tăng dần."
    },
    {
        "type": "MCQ",
        "question": "Chất nào sau đây vừa tác dụng được với dung dịch HCl, vừa tác dụng được với dung dịch NaOH?",
        "options": [
            "NaHCO₃",
            "Na₂CO₃",
            "CaCO₃",
            "BaSO₄"
        ],
        "answer": "A",
        "explanation": "Ion HCO₃⁻ có tính chất lưỡng tính: HCO₃⁻ + H⁺ -> CO₂↑ + H₂O và HCO₃⁻ + OH⁻ -> CO₃²⁻ + H₂O."
    },
    {
        "type": "MCQ",
        "question": "Thạch cao nung được dùng để nặn tượng, đúc khuôn và bó bột khi gãy xương có công thức hóa học là",
        "options": [
            "CaSO₄.2H₂O",
            "CaSO₄.H₂O (hoặc CaSO₄.0,5H₂O)",
            "CaSO₄",
            "CaCO₃"
        ],
        "answer": "B",
        "explanation": "Thạch cao sống là CaSO₄.2H₂O; khi nung ở khoảng 160 °C mất bớt nước tạo thạch cao nung CaSO₄.H₂O (hoặc CaSO₄.0,5H₂O), khi nhào với nước sẽ đông cứng nhanh và nở thể tích nhẹ."
    },
    {
        "type": "MCQ",
        "question": "Quá trình Solvay sản xuất soda (Na₂CO₃) trong công nghiệp sử dụng nguồn nguyên liệu chính giá rẻ nào sau đây?",
        "options": [
            "Muối ăn (NaCl), đá vôi (CaCO₃) và ammonia (NH₃)",
            "Quặng bauxite, than cốc và xút ăn da",
            "Thạch cao sống, lưu huỳnh và khí chlorine",
            "Muối potassium chloride, acid sulfuric và vôi sống"
        ],
        "answer": "A",
        "explanation": "Phương pháp Solvay dùng dung dịch NaCl bão hòa, khí NH₃ và khí CO₂ (thu được từ nhiệt phân đá vôi CaCO₃) để kết tinh NaHCO₃ ít tan, sau đó nhiệt phân NaHCO₃ thu được Na₂CO₃ (NH₃ được tuần hoàn tái sử dụng)."
    },
    {
        "type": "MCQ",
        "question": "Cho 4,6 gam kim loại Na tác dụng hoàn toàn với nước dư thu được V lít khí H₂ ở điều kiện chuẩn (25 °C, 1 bar). Giá trị của V là (biết 1 mol khí ở đkc có thể tích 24,79 lít)",
        "options": [
            "2,479 lít",
            "4,958 lít",
            "1,2395 lít",
            "3,7185 lít"
        ],
        "answer": "A",
        "explanation": "n(Na) = 4,6 / 23 = 0,20 mol. Phương trình: 2Na + 2H₂O -> 2NaOH + H₂↑ => n(H₂) = 0,5 * n(Na) = 0,10 mol => V(H₂) = 0,10 * 24,79 = 2,479 lít."
    },
    {
        "type": "MCQ",
        "question": "Hấp thụ hoàn toàn 3,7185 lít khí CO₂ (đkc) vào 200 mL dung dịch Ca(OH)₂ 1M. Sau khi phản ứng xảy ra hoàn toàn, khối lượng kết tủa thu được là (biết V_mol = 24,79 L/mol)",
        "options": [
            "15,0 gam",
            "20,0 gam",
            "10,0 gam",
            "25,0 gam"
        ],
        "answer": "A",
        "explanation": "n(CO₂) = 3,7185 / 24,79 = 0,15 mol; n(Ca(OH)₂) = 0,2 * 1 = 0,20 mol => n(OH⁻) = 0,40 mol. Tỉ lệ T = n(OH⁻) / n(CO₂) = 0,40 / 0,15 = 2,67 > 2 => OH⁻ dư, CO₂ phản ứng hết tạo muối trung hòa CaCO₃: n(CaCO₃) = n(CO₂) = 0,15 mol => m = 0,15 * 100 = 15,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Nhiệt phân hoàn toàn 25,2 gam NaHCO₃ thu được chất rắn X, khí CO₂ và hơi nước. Khối lượng chất rắn X thu được là",
        "options": [
            "15,9 gam",
            "10,6 gam",
            "21,2 gam",
            "12,6 gam"
        ],
        "answer": "A",
        "explanation": "n(NaHCO₃) = 25,2 / 84 = 0,30 mol. Phương trình: 2NaHCO₃ (t°) -> Na₂CO₃ + CO₂↑ + H₂O↑ => n(Na₂CO₃) = 0,30 / 2 = 0,15 mol => m(Na₂CO₃) = 0,15 * 106 = 15,9 gam."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 6,0 gam hỗn hợp gồm Na và K vào nước dư thu được 2,479 lít khí H₂ (đkc) và dung dịch X. Cô cạn dung dịch X thu được m gam chất rắn khan. Giá trị của m là (biết V_mol = 24,79 L/mol)",
        "options": [
            "9,40",
            "7,70",
            "11,10",
            "8,55"
        ],
        "answer": "A",
        "explanation": "n(H₂) = 2,479 / 24,79 = 0,10 mol. Phương trình tổng quát: 2M + 2H₂O -> 2MOH + H₂↑ => n(OH⁻ trong bazơ) = 2 * n(H₂) = 0,20 mol. Khối lượng chất rắn khan = m(kim loại) + m(OH⁻) = 6,0 + 0,20 * 17 = 6,0 + 3,4 = 9,40 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 200 mL dung dịch gồm Na₂CO₃ 0,5M và NaHCO₃ 1M tác dụng với dung dịch Ba(OH)₂ dư. Sau khi phản ứng xảy ra hoàn toàn, khối lượng kết tủa thu được là",
        "options": [
            "59,1 gam",
            "39,4 gam",
            "19,7 gam",
            "49,25 gam"
        ],
        "answer": "A",
        "explanation": "n(Na₂CO₃) = 0,2 * 0,5 = 0,10 mol; n(NaHCO₃) = 0,2 * 1 = 0,20 mol. Khi cho Ba(OH)₂ dư vào: HCO₃⁻ + OH⁻ -> CO₃²⁻ + H₂O. Tổng số mol ion CO₃²⁻ = 0,10 + 0,20 = 0,30 mol. Kết tủa BaCO₃ = 0,30 * 197 = 59,1 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 8,5 gam hỗn hợp gồm hai kim loại kiềm thuộc hai chu kì liên tiếp nhau trong bảng tuần hoàn tác dụng hết với nước dư thu được 3,7185 lít khí H₂ (đkc). Hai kim loại kiềm đó là (biết V_mol = 24,79 L/mol)",
        "options": [
            "Li và Na",
            "Na và K",
            "K và Rb",
            "Rb và Cs"
        ],
        "answer": "B",
        "explanation": "n(H₂) = 3,7185 / 24,79 = 0,15 mol => n(kim loại kiềm) = 2 * n(H₂) = 0,30 mol. Nguyên tử khối trung bình M_tb = 8,5 / 0,30 = 28,33. Hai kim loại kiềm liên tiếp có M_tb = 28,33 là Na (23) và K (39)."
    },
    {
        "type": "MCQ",
        "question": "Hấp thụ hoàn toàn 6,1975 lít khí CO₂ (đkc) vào 200 mL dung dịch chứa đồng thời NaOH 1M và Ba(OH)₂ 0,5M. Sau khi phản ứng kết thúc, khối lượng kết tủa thu được là (biết V_mol = 24,79 L/mol)",
        "options": [
            "19,70 gam",
            "29,55 gam",
            "9,85 gam",
            "39,40 gam"
        ],
        "answer": "A",
        "explanation": "n(CO₂) = 6,1975 / 24,79 = 0,25 mol. n(NaOH) = 0,20 mol; n(Ba(OH)₂) = 0,10 mol => Tổng n(OH⁻) = 0,20 + 2*0,10 = 0,40 mol; n(Ba²⁺) = 0,10 mol. Vì 1 < n(OH⁻)/n(CO₂) = 1,6 < 2 nên tạo cả CO₃²⁻ và HCO₃⁻: n(CO₃²⁻) = n(OH⁻) - n(CO₂) = 0,40 - 0,25 = 0,15 mol. So sánh n(Ba²⁺) = 0,10 mol < n(CO₃²⁻) = 0,15 mol => Kết tủa tính theo Ba²⁺: m(BaCO₃) = 0,10 * 197 = 19,70 gam."
    },
    {
        "type": "MCQ",
        "question": "Nhỏ từ từ đến hết 150 mL dung dịch HCl 1M vào 100 mL dung dịch chứa đồng thời Na₂CO₃ 1M và NaHCO₃ 0,5M, khuấy đều. Thể tích khí CO₂ thoát ra ở điều kiện chuẩn (25 °C, 1 bar) là (biết V_mol = 24,79 L/mol)",
        "options": [
            "1,2395 lít",
            "2,4790 lít",
            "3,7185 lít",
            "1,85925 lít"
        ],
        "answer": "A",
        "explanation": "n(H⁺) = 0,15 mol; n(CO₃²⁻) = 0,10 mol; n(HCO₃⁻) = 0,05 mol. Khi nhỏ từ từ H⁺ vào hỗn hợp muối carbonate: Giai đoạn 1: H⁺ + CO₃²⁻ -> HCO₃⁻ (0,10 mol CO₃²⁻ tiêu tốn 0,10 mol H⁺, còn dư 0,05 mol H⁺). Giai đoạn 2: H⁺ + HCO₃⁻ -> CO₂↑ + H₂O (0,05 mol H⁺ dư phản ứng với 0,05 mol HCO₃⁻ sinh ra đúng 0,05 mol CO₂). Vậy V(CO₂) = 0,05 * 24,79 = 1,2395 lít."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 14,2 gam hỗn hợp X gồm MgCO₃ và CaCO₃ bằng dung dịch HCl dư thu được 3,7185 lít khí CO₂ (đkc). Nếu nung nóng 14,2 gam X đến khối lượng không đổi thì thu được chất rắn có khối lượng là (biết V_mol = 24,79 L/mol)",
        "options": [
            "7,60 gam",
            "9,80 gam",
            "6,60 gam",
            "8,40 gam"
        ],
        "answer": "A",
        "explanation": "n(CO₂ khi tác dụng HCl) = 3,7185 / 24,79 = 0,15 mol => Tổng số mol hai muối carbonate = 0,15 mol. Khi nhiệt phân hoàn toàn hỗn hợp muối carbonate trên, lượng CO₂ thoát ra cũng đúng bằng 0,15 mol. Áp dụng bảo toàn khối lượng: m(rắn) = m(hỗn hợp muối) - m(CO₂) = 14,2 - 0,15 * 44 = 14,2 - 6,6 = 7,60 gam."
    },
    {
        "type": "MCQ",
        "question": "Một mẫu nước cứng chứa các ion: Ca²⁺ (0,02 mol), Mg²⁺ (0,03 mol), HCO₃⁻ (0,04 mol) và Cl⁻ (x mol). Để làm mềm hoàn toàn mẫu nước cứng trên cần dùng vừa đủ V mL dung dịch Na₂CO₃ 0,5M. Giá trị của x và V lần lượt là",
        "options": [
            "0,06 và 100",
            "0,06 và 50",
            "0,04 và 100",
            "0,10 và 100"
        ],
        "answer": "A",
        "explanation": "Bảo toàn điện tích trong mẫu nước: 2*n(Ca²⁺) + 2*n(Mg²⁺) = n(HCO₃⁻) + n(Cl⁻) => 2*0,02 + 2*0,03 = 0,04 + x => 0,10 = 0,04 + x => x = 0,06 mol. Để kết tủa hết Ca²⁺ và Mg²⁺ cần n(CO₃²⁻) = n(Ca²⁺) + n(Mg²⁺) = 0,02 + 0,03 = 0,05 mol => V(Na₂CO₃ 0,5M) = 0,05 / 0,5 = 0,10 lít = 100 mL."
    },
    {
        "type": "MCQ",
        "question": "Cho m gam hỗn hợp gồm Na, Ba và Na₂O tác dụng hoàn toàn với nước dư thu được 2,479 lít khí H₂ (đkc) và dung dịch X. Sục từ từ khí CO₂ vào dung dịch X, thu được đồ thị biểu diễn sự phụ thuộc của số mol kết tủa BaCO₃ theo số mol CO₂ như sau: khi n(CO₂) = 0,10 mol thì kết tủa đạt cực đại, khi n(CO₂) = 0,35 mol thì kết tủa bắt đầu tan hết. Giá trị của m là (biết V_mol = 24,79 L/mol)",
        "options": [
            "18,35",
            "21,50",
            "19,90",
            "16,75"
        ],
        "answer": "A",
        "explanation": "Khi n(CO₂) = 0,10 mol thì kết tủa đạt cực đại => n(Ba²⁺) = n(Ba) = 0,10 mol. Khi kết tủa tan hết tại n(CO₂) = 0,35 mol thì toàn bộ OH⁻ ban đầu đã chuyển hết thành HCO₃⁻: n(OH⁻) = n(CO₂ max) = 0,35 mol. Bảo toàn điện tích trong dung dịch X: n(Na⁺) + 2*n(Ba²⁺) = n(OH⁻) => n(Na⁺) = 0,35 - 2*0,10 = 0,15 mol. Quy đổi hỗn hợp ban đầu thành Na (0,15 mol), Ba (0,10 mol) và O (y mol). n(H₂) = 0,10 mol. Bảo toàn electron: n(Na) + 2*n(Ba) = 2*n(H₂) + 2y => 0,15 + 0,20 = 0,20 + 2y => y = 0,075 mol. Vậy m = 0,15*23 + 0,10*137 + 0,075*16 = 3,45 + 13,70 + 1,20 = 18,35 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho 13,7 gam kim loại Ba vào 200 mL dung dịch gồm CuSO₄ 0,3M và Al₂(SO₄)₃ 0,2M. Sau khi các phản ứng xảy ra hoàn toàn, thu được m gam kết tủa. Giá trị của m là",
        "options": [
            "31,26",
            "29,18",
            "33,34",
            "27,10"
        ],
        "answer": "A",
        "explanation": "n(Ba) = 13,7 / 137 = 0,10 mol => Ba + 2H₂O -> Ba(OH)₂ + H₂↑, thu được 0,10 mol Ba²⁺ và 0,20 mol OH⁻. Trong dung dịch có: n(Cu²⁺) = 0,06 mol; n(Al³⁺) = 0,08 mol; n(SO₄²⁻) = 0,06 + 3*0,08 = 0,30 mol. Vì n(Ba²⁺) = 0,10 < n(SO₄²⁻) = 0,30 nên tạo 0,10 mol BaSO₄ (23,30 gam). Lượng OH⁻ (0,20 mol) phản ứng hết với 0,06 mol Cu²⁺ tạo 0,06 mol Cu(OH)₂ (5,88 gam, tiêu tốn 0,12 mol OH⁻); lượng OH⁻ còn lại (0,08 mol) phản ứng với Al³⁺ tạo 0,08 / 3 mol Al(OH)₃ (2,08 gam). Tổng m(kết tủa) = 23,30 + 5,88 + 2,08 = 31,26 gam."
    },
    {
        "type": "TF",
        "question": "Nước cứng gây ra nhiều tác hại trong đời sống và sản xuất như làm đóng cặn nồi hơi gây tốn nhiên liệu và nguy cơ nổ, làm giảm tác dụng giặt rửa của xà phòng và làm mất hương vị thực phẩm. Xét các phương pháp xử lý nước cứng:",
        "statements": [
            {
                "text": "Có thể làm mềm nước cứng tạm thời bằng cách đun sôi nước để các muối Ca(HCO₃)₂ và Mg(HCO₃)₂ bị nhiệt phân thành kết tủa CaCO₃ và MgCO₃.",
                "answer": true,
                "explanation": "Đúng. Phương trình: Ca(HCO₃)₂ (t°) -> CaCO₃↓ + CO₂↑ + H₂O. Lọc bỏ cặn kết tủa sẽ thu được nước mềm."
            },
            {
                "text": "Nước cứng vĩnh cửu chứa các ion Ca²⁺, Mg²⁺ và các anion Cl⁻, SO₄²⁻ nên không thể làm mềm bằng cách đun sôi thông thường.",
                "answer": true,
                "explanation": "Đúng. Các muối CaCl₂, MgCl₂, CaSO₄, MgSO₄ bền với nhiệt, không bị phân hủy khi đun sôi ở 100 °C."
            },
            {
                "text": "Dùng dung dịch Ca(OH)₂ với lượng vừa đủ có thể làm mềm được cả nước cứng tạm thời và nước cứng vĩnh cửu.",
                "answer": false,
                "explanation": "Sai. Ca(OH)₂ vừa đủ chỉ làm mềm được nước cứng tạm thời (Ca(HCO₃)₂ + Ca(OH)₂ -> 2CaCO₃↓ + 2H₂O), không làm mềm được nước cứng vĩnh cửu vì còn đưa thêm ion Ca²⁺ vào dung dịch."
            },
            {
                "text": "Phương pháp trao đổi ion (dùng nhựa trao đổi cation) có thể làm mềm được tất cả các loại nước cứng bằng cách thay thế ion Ca²⁺, Mg²⁺ bằng ion Na⁺ hoặc H⁺.",
                "answer": true,
                "explanation": "Đúng. Khi cho nước cứng đi qua cột nhựa trao đổi ion, các ion Ca²⁺ và Mg²⁺ bị giữ lại trên hạt nhựa và giải phóng ra các ion Na⁺ (hoặc H⁺) không gây cứng nước."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Cho các hợp chất phổ biến của kim loại nhóm IA gồm: sodium hydroxide (NaOH), sodium carbonate (Na₂CO₃) và sodium hydrogencarbonate (NaHCO₃).",
        "statements": [
            {
                "text": "Dung dịch Na₂CO₃ (soda) có môi trường kiềm do ion CO₃²⁻ bị thủy phân trong nước tạo ra ion OH⁻.",
                "answer": true,
                "explanation": "Đúng. Phương trình thủy phân: CO₃²⁻ + H₂O ⇌ HCO₃⁻ + OH⁻ làm pH của dung dịch lớn hơn 7, giúp tẩy sạch vết dầu mỡ."
            },
            {
                "text": "Có thể phân biệt hai dung dịch Na₂CO₃ và NaHCO₃ bằng cách nhỏ từ từ dung dịch CaCl₂ vào từng mẫu thử ở nhiệt độ thường.",
                "answer": true,
                "explanation": "Đúng. Dung dịch Na₂CO₃ phản ứng với CaCl₂ tạo kết tủa trắng CaCO₃ ngay ở nhiệt độ thường, còn dung dịch NaHCO₃ không tạo kết tủa ở điều kiện thường."
            },
            {
                "text": "NaOH rắn có tính hút ẩm mạnh, dễ chảy rữa và hấp thụ khí CO₂ trong không khí nên phải được bảo quản trong lọ đậy kín.",
                "answer": true,
                "explanation": "Đúng. Nếu để hở ngoài không khí, NaOH hút ẩm và phản ứng với CO₂ chuyển dần thành Na₂CO₃."
            },
            {
                "text": "Tất cả các muối carbonate trung hòa của kim loại kiềm (như Na₂CO₃, K₂CO₃) đều dễ bị nhiệt phân hủy ở nhiệt độ ngọn lửa đèn cồn.",
                "answer": false,
                "explanation": "Sai. Muối carbonate trung hòa của kim loại kiềm rất bền với nhiệt, không bị nhiệt phân hủy ở nhiệt độ thông thường (khác với muối carbonate của kim loại kiềm thổ như CaCO₃, MgCO₃)."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Trong tự nhiên, sự tạo thành thạch nhũ trong các hang động đá vôi và sự xâm thực của nước mưa vào núi đá vôi là những hiện tượng địa chất kỳ thú gắn liền với cân bằng hóa học của calcium carbonate.",
        "statements": [
            {
                "text": "Nước mưa có hòa tan khí CO₂ trong không khí sẽ hòa tan dần đá vôi (CaCO₃) tạo thành dung dịch muối tan Ca(HCO₃)₂ gây ra hiện tượng xâm thực.",
                "answer": true,
                "explanation": "Đúng. Phương trình thuận: CaCO₃ + CO₂ + H₂O ⇌ Ca(HCO₃)₂ làm xói mòn núi đá vôi theo thời gian."
            },
            {
                "text": "Khi nước chứa Ca(HCO₃)₂ nhỏ giọt từ trần hang động xuống, gặp điều kiện nhiệt độ thay đổi và giảm áp suất CO₂, phản ứng diễn ra theo chiều nghịch tạo thành CaCO₃ kết tinh lại thành thạch nhũ.",
                "answer": true,
                "explanation": "Đúng. Cân bằng dịch chuyển theo chiều nghịch: Ca(HCO₃)₂ -> CaCO₃↓ + CO₂↑ + H₂O, hình thành măng đá và nhũ đá."
            },
            {
                "text": "Vôi sống (CaO) được sản xuất bằng cách nung đá vôi ở nhiệt độ khoảng 900 - 1000 °C; phản ứng này là phản ứng tỏa nhiệt mạnh.",
                "answer": false,
                "explanation": "Sai. Phản ứng nhiệt phân đá vôi (CaCO₃ -> CaO + CO₂) là phản ứng thu nhiệt mạnh (ΔrH°₂₉₈ > 0), cần cung cấp nhiệt liên tục từ nhiên liệu."
            },
            {
                "text": "Vôi tôi (Ca(OH)₂) được sử dụng rộng rãi trong nông nghiệp để khử chua đất trồng trọt và sát trùng chuồng trại.",
                "answer": true,
                "explanation": "Đúng. Tính base của Ca(OH)₂ giúp trung hòa các acid hữu cơ và vô cơ gây chua đất, đồng thời nâng pH để diệt khuẩn."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Xét quy luật biến đổi độ tan trong nước của các muối sulfate (MSO₄) và hydroxide (M(OH)₂) của các kim loại nhóm IIA (Mg, Ca, Sr, Ba) ở 20 °C:",
        "statements": [
            {
                "text": "Độ tan của các hydroxide M(OH)₂ tăng dần từ Mg(OH)₂ đến Ba(OH)₂, do đó tính base của dung dịch tương ứng cũng tăng dần.",
                "answer": true,
                "explanation": "Đúng. Mg(OH)₂ hầu như không tan, Ca(OH)₂ ít tan, Sr(OH)₂ và Ba(OH)₂ tan tốt tạo dung dịch kiềm mạnh."
            },
            {
                "text": "Độ tan của các muối sulfate MSO₄ giảm dần từ MgSO₄ đến BaSO₄; trong đó BaSO₄ hầu như không tan trong nước và các acid loãng.",
                "answer": true,
                "explanation": "Đúng. MgSO₄ tan tốt, CaSO₄ ít tan, SrSO₄ và BaSO₄ kết tủa trắng bền vững."
            },
            {
                "text": "Thuốc thử đặc trưng thường dùng để nhận biết ion Ba²⁺ trong dung dịch là dung dịch chứa ion SO₄²⁻ (như H₂SO₄ loãng hoặc Na₂SO₄) do tạo kết tủa trắng không tan trong acid.",
                "answer": true,
                "explanation": "Đúng. Ba²⁺ + SO₄²⁻ -> BaSO₄↓ (trắng, không tan trong HCl hay HNO₃ loãng)."
            },
            {
                "text": "Tất cả các kim loại nhóm IIA (từ Be đến Ba) đều phản ứng mãnh liệt với nước ngay ở điều kiện thường.",
                "answer": false,
                "explanation": "Sai. Beryllium (Be) không phản ứng với nước ở mọi nhiệt độ; Magnesium (Mg) hầu như không phản ứng với nước lạnh mà chỉ phản ứng chậm với nước nóng; chỉ có Ca, Sr, Ba phản ứng mạnh với nước ở nhiệt độ thường."
            }
        ]
    }
];
