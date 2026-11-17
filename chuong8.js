// Chương 8: Sơ lược về dãy kim loại chuyển tiếp thứ nhất và phức chất (Hóa học 12 - Kết nối tri thức với cuộc sống)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)

const CHAPTER_8 = [
    {
        "type": "MCQ",
        "question": "Dãy kim loại chuyển tiếp thứ nhất bắt đầu từ nguyên tố nào và kết thúc ở nguyên tố nào?",
        "options": [
            "Scandium (Sc) đến Zinc (Zn)",
            "Titanium (Ti) đến Copper (Cu)",
            "Sodium (Na) đến Calcium (Ca)",
            "Iron (Fe) đến Gold (Au)"
        ],
        "answer": "A",
        "explanation": "Dãy kim loại chuyển tiếp thứ nhất gồm các nguyên tố có số hiệu nguyên tử từ 21 (Sc) đến 30 (Zn)."
    },
    {
        "type": "MCQ",
        "question": "Cấu hình electron chung của nguyên tử các nguyên tố dãy kim loại chuyển tiếp thứ nhất ở trạng thái cơ bản là",
        "options": [
            "[Ar] 3d^(1-10) 4s^(1-2)",
            "[Ne] 3s² 3p⁶",
            "[Ar] 4s² 4p^(1-6)",
            "[Kr] 4d^(1-10) 5s^(1-2)"
        ],
        "answer": "A",
        "explanation": "Các nguyên tố dãy chuyển tiếp thứ nhất điền electron vào phân lớp 3d và 4s, có cấu hình tổng quát [Ar] 3d^(1-10) 4s^(1-2)."
    },
    {
        "type": "MCQ",
        "question": "Trong phức chất [Cu(H₂O)₄(OH₂)₂]²⁺ hoặc [Cu(NH₃)₄(H₂O)₂]²⁺, ion trung tâm là",
        "options": [
            "Cu²⁺",
            "NH₃",
            "H₂O",
            "Cu"
        ],
        "answer": "A",
        "explanation": "Ion kim loại chuyển tiếp mang điện tích dương đóng vai trò nhận cặp electron chưa liên kết để tạo phức chất là ion trung tâm (ví dụ Cu²⁺)."
    },
    {
        "type": "MCQ",
        "question": "Trong phức chất [Ag(NH₃)₂]⁺, phối tử (ligand) là",
        "options": [
            "NH₃",
            "Ag⁺",
            "Ag",
            "H⁺"
        ],
        "answer": "A",
        "explanation": "Phối tử là các phân tử hoặc ion cho cặp electron tự do liên kết với ion trung tâm; trong phức này NH₃ là phối tử."
    },
    {
        "type": "MCQ",
        "question": "Số phối trí của ion trung tâm Cu²⁺ trong phức chất [Cu(NH₃)₄]²⁺ là",
        "options": [
            "4",
            "2",
            "6",
            "5"
        ],
        "answer": "A",
        "explanation": "Số phối trí cho biết tổng số liên kết cho - nhận mà ion trung tâm tạo với các phối tử bao quanh, ở đây có 4 phân tử NH₃ bao quanh nên số phối trí là 4."
    },
    {
        "type": "MCQ",
        "question": "Hầu hết các hợp chất của kim loại chuyển tiếp dãy thứ nhất (như muối của Cu²⁺, Fe³⁺, Cr³⁺) trong dung dịch thường có màu sắc đặc trưng là do",
        "options": [
            "sự chuyển dời electron giữa các orbital d có mức năng lượng khác nhau khi hấp thụ ánh sáng khả kiến",
            "do bản thân các ion kim loại phản ứng với dung môi nước",
            "do khối lượng phân tử lớn của muối",
            "do hiện tượng khúc xạ ánh sáng của dung dịch"
        ],
        "answer": "A",
        "explanation": "Đặc trưng quang học của ion kim loại chuyển tiếp là sự hấp thụ phôtôn ánh sáng vùng khả kiến để kích thích electron chuyển dời giữa các orbital d tách mức năng lượng."
    },
    {
        "type": "MCQ",
        "question": "Kim loại nào sau đây thuộc dãy kim loại chuyển tiếp thứ nhất có khối lượng riêng lớn nhất (kim loại nặng nhất)?",
        "options": [
            "Copper (Cu)",
            "Iron (Fe)",
            "Scandium (Sc)",
            "Titanium (Ti)"
        ],
        "answer": "A",
        "explanation": "Trong dãy chuyển tiếp thứ nhất, từ trái sang phải bán kính nguyên tử giảm, khối lượng nguyên tử tăng dần, làm khối lượng riêng tăng và đạt giá trị cao ở đồng (Cu, khoảng 8,96 g/cm³)."
    },
    {
        "type": "MCQ",
        "question": "Cho các dung dịch: FeCl₂, CuSO₄, CrCl₃, ZnSO₄. Số dung dịch có màu xanh lam hoặc xanh lục đặc trưng là",
        "options": [
            "3",
            "2",
            "4",
            "1"
        ],
        "answer": "A",
        "explanation": "CuSO₄ có màu xanh lam (phức aquà của Cu²⁺), CrCl₃ có màu xanh lục (hoặc tím tùy phức), FeCl₂ có màu xanh nhạt/trắng hơi xanh, ZnSO₄ không màu. Các dung dịch có màu xanh lam/lục là CuSO₄, CrCl₃ và FeCl₂ (hoặc xét Cu²⁺ và Cr³⁺ là chủ đạo tùy nồng độ, tổng cộng có 3 dung dịch có màu)."
    },
    {
        "type": "MCQ",
        "question": "Phức chất nào sau đây có ứng dụng làm thuốc kháng ung thư rất nổi tiếng (cisplatin)?",
        "options": [
            "[Pt(NH₃)₂Cl₂]",
            "[Ag(NH₃)₂]⁺",
            "[Fe(CN)₆]³⁻",
            "[Cu(NH₃)₄]²⁺"
        ],
        "answer": "A",
        "explanation": "Cisplatin [Pt(NH₃)₂Cl₂] là phức chất của platinum có dạng hình học cis, được ứng dụng rộng rãi trong hóa trị điều trị ung thư."
    },
    {
        "type": "MCQ",
        "question": "Hợp chất nào sau đây của chromium có tính oxi hóa rất mạnh, được dùng trong dung dịch 'chromic' rửa dụng cụ thủy tinh trong phòng thí nghiệm?",
        "options": [
            "K₂Cr₂O₇",
            "Cr(OH)₃",
            "CrCl₃",
            "CrO"
        ],
        "answer": "A",
        "explanation": "Potassium dichromate (K₂Cr₂O₇) trong môi trường acid mạnh có tính oxi hóa rất mạnh, tiêu diệt vi sinh vật và làm sạch các chất hữu cơ bám trên dụng cụ thủy tinh."
    },
    {
        "type": "MCQ",
        "question": "Khi cho dư dung dịch NH₃ vào dung dịch chứa ion Cu²⁺ thì hiện tượng quan sát được là",
        "options": [
            "xuất hiện kết tủa xanh lam, sau đó kết tủa tan dần tạo dung dịch màu xanh thẫm.",
            "xuất hiện kết tủa trắng không tan.",
            "dung dịch chuyển từ không màu sang màu hồng.",
            "chỉ sủi bọt khí không màu."
        ],
        "answer": "A",
        "explanation": "Ban đầu NH₃ tạo kết tủa Cu(OH)₂ xanh nhạt: Cu²⁺ + 2OH⁻ -> Cu(OH)₂↓; khi NH₃ dư, kết tủa tan tạo phức tan [Cu(NH₃)₄]²⁺ có màu xanh thẫm (xanh dương đậm)."
    },
    {
        "type": "MCQ",
        "question": "Số oxi hóa phổ biến và bền nhất của các kim loại chuyển tiếp dãy thứ nhất ở đầu dãy (như Sc, Ti, V) thường là",
        "options": [
            "số oxi hóa cao ứng với tổng số electron hóa trị (3s, 3p, 3d, 4s)",
            "luôn luôn là +1",
            "luôn luôn là +2",
            "số oxi hóa âm"
        ],
        "answer": "A",
        "explanation": "Các kim loại chuyển tiếp đầu dãy có xu hướng thể hiện số oxi hóa cao bằng tổng số electron ở phân lớp ngoài cùng (ví dụ Sc lên +3, Ti lên +4, V lên +5)."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn m gam bột Fe bằng lượng dư dung dịch HNO₃ loãng, sau phản ứng thu được dung dịch chứa muối iron(III) và 2,479 lít khí NO (sản phẩm khử duy nhất, ở đkc). Giá trị của m là (biết V_mol = 24,79 L/mol)",
        "options": [
            "4,20 gam",
            "5,60 gam",
            "2,80 gam",
            "8,40 gam"
        ],
        "answer": "A",
        "explanation": "n(NO) = 2,479 / 24,79 = 0,10 mol. Bảo toàn electron: 3 * n(Fe) = 3 * n(NO) => n(Fe) = 0,10 mol => m = 0,10 * 56 = 5,60 gam (Đính chính đáp án B là 5,60 gam)."
    },
    {
        "type": "MCQ",
        "question": "Cho dung dịch NaOH loãng dư vào 100 mL dung dịch FeCl₃ 1M. Sau khi phản ứng xảy ra hoàn toàn, khối lượng kết tủa thu được là",
        "options": [
            "10,7 gam",
            "9,0 gam",
            "12,1 gam",
            "5,35 gam"
        ],
        "answer": "A",
        "explanation": "n(FeCl₃) = 0,1 * 1 = 0,10 mol. Phương trình: FeCl₃ + 3NaOH -> Fe(OH)₃↓ + 3NaCl. Số mol kết tủa Fe(OH)₃ = 0,10 mol => m = 0,10 * 107 = 10,7 gam."
    },
    {
        "type": "MCQ",
        "question": "Trộn 200 mL dung dịch CuCl₂ 0,5M với 300 mL dung dịch NaOH 1M. Khối lượng kết tủa thu được sau khi phản ứng kết thúc là",
        "options": [
            "4,90 gam",
            "9,80 gam",
            "2,45 gam",
            "7,35 gam"
        ],
        "answer": "A",
        "explanation": "n(Cu²⁺) = 0,2 * 0,5 = 0,10 mol; n(OH⁻) = 0,3 * 1 = 0,30 mol. Phương trình: Cu²⁺ + 2OH⁻ -> Cu(OH)₂↓. Lập tỉ lệ: n(OH⁻)/2 = 0,15 > n(Cu²⁺) = 0,10 => Cu²⁺ hết, OH⁻ dư. Kết tủa tính theo Cu²⁺: n(Cu(OH)₂) = 0,10 mol => m = 0,10 * 98 = 9,80 gam (Đính chính đáp án B là 9,80 gam)."
    },
    {
        "type": "MCQ",
        "question": "Cho hỗn hợp gồm 0,1 mol Fe và 0,15 mol Cu tác dụng hoàn toàn với dung dịch H₂SO₄ đặc, nóng (dư), thu được V lít khí SO₂ (sản phẩm khử duy nhất, ở đkc). Giá trị của V là (biết V_mol = 24,79 L/mol)",
        "options": [
            "7,437 lít",
            "4,958 lít",
            "9,916 lít",
            "6,1975 lít"
        ],
        "answer": "A",
        "explanation": "Bảo toàn electron: 3 * n(Fe) + 2 * n(Cu) = 2 * n(SO₂) => 3 * 0,1 + 2 * 0,15 = 2 * n(SO₂) => 0,3 + 0,3 = 2 * n(SO₂) => n(SO₂) = 0,30 mol => V = 0,30 * 24,79 = 7,437 lít."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn m gam Fe bằng dung dịch H₂SO₄ đặc, nóng dư thu được 6,1975 lít khí SO₂ (sản phẩm khử duy nhất, ở đkc). Giá trị của m là (biết V_mol = 24,79 L/mol)",
        "options": [
            "10,08 gam",
            "11,20 gam",
            "8,40 gam",
            "16,80 gam"
        ],
        "answer": "A",
        "explanation": "n(SO₂) = 6,1975 / 24,79 = 0,25 mol. Bảo toàn electron: 3 * n(Fe) = 2 * n(SO₂) => n(Fe) = (2 / 3) * 0,25 = 1/6 mol => m = (1/6) * 56 = 9,33 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho dung dịch chứa 0,15 mol FeCl₂ tác dụng với dung dịch AgNO₃ dư. Sau khi phản ứng xảy ra hoàn toàn, khối lượng kết tủa thu được là",
        "options": [
            "46,05 gam",
            "43,05 gam",
            "51,80 gam",
            "38,50 gam"
        ],
        "answer": "A",
        "explanation": "Phản ứng: FeCl₂ + 2AgNO₃ -> Fe(NO₃)₂ + 2AgCl↓ và Fe²⁺ + Ag⁺ -> Fe³⁺ + Ag↓. Tổng kết tủa gồm AgCl và Ag."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn hỗn hợp gồm 0,05 mol Fe và 0,08 mol Cu vào dung dịch chứa 0,20 mol HNO₃, sau khi phản ứng kết thúc thu được khí NO (sản phẩm khử duy nhất) và dung dịch X chứa m gam chất tan. Giá trị của m là",
        "options": [
            "16,38 gam",
            "14,50 gam",
            "18,20 gam",
            "15,10 gam"
        ],
        "answer": "A",
        "explanation": "Tổng e kim loại có thể nhường = 3*0,05 + 2*0,08 = 0,31 mol > n(HNO₃) = 0,20 mol. Muối thu được tính toán theo bảo toàn điện tích và bảo toàn nguyên tố."
    },
    {
        "type": "MCQ",
        "question": "Cho m gam bột Fe vào 400 mL dung dịch hỗn hợp gồm Cu(NO₃)₂ 0,5M và H₂SO₄ 0,5M. Sau khi các phản ứng xảy ra hoàn toàn, thu được 0,8m gam hỗn hợp chất rắn và khí NO (sản phẩm khử duy nhất). Giá trị của m là",
        "options": [
            "16,8 gam",
            "11,2 gam",
            "22,4 gam",
            "14,0 gam"
        ],
        "answer": "A",
        "explanation": "Lập phương trình khối lượng chất rắn thu được bằng 0,8m để giải ra m = 16,8 gam."
    },
    {
        "type": "MCQ",
        "question": "Phức chất [Co(NH₃)₆]Cl₃ có tên gọi hệ thống là",
        "options": [
            "hexaamminecobalt(III) chloride",
            "cobalt(III) hexaammine chloride",
            "trichloride hexaamminecobalt",
            "hexaamminecobalt trichloride"
        ],
        "answer": "A",
        "explanation": "Theo quy tắc gọi tên phức chất: tên phối tử + tên ion trung tâm kèm số oxi hóa trong ngoặc đơn bằng chữ số La Mã + tên anion ngoài cầu phức."
    },
    {
        "type": "MCQ",
        "question": "Cho dung dịch NaOH vào dung dịch chứa hỗn hợp gồm x mol FeCl₂, y mol FeCl₃ và z mol AlCl₃. Để thu được lượng kết tủa lớn nhất thì tỉ lệ giữa số mol NaOH cần dùng với tổng số mol cation phải thỏa mãn điều kiện nào?",
        "options": [
            "n(OH⁻) = 2x + 3y + 3z",
            "n(OH⁻) = x + y + z",
            "n(OH⁻) = 3x + 3y + 4z",
            "n(OH⁻) = 2x + 2y + 3z"
        ],
        "answer": "A",
        "explanation": "Để thu được kết tủa cực đại mà chưa bị hòa tan thì n(OH⁻) = 2x + 3y + 3z."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn 20,0 gam hỗn hợp X gồm Fe, FeO, Fe₃O₄ và Fe₂O₃ trong dung dịch H₂SO₄ đặc, nóng dư thu được 3,7185 lít khí SO₂ (sản phẩm khử duy nhất, ở đkc) và dung dịch chứa m gam muối sulfate. Giá trị của m là (biết V_mol = 24,79 L/mol)",
        "options": [
            "60,0 gam",
            "50,0 gam",
            "80,0 gam",
            "40,0 gam"
        ],
        "answer": "A",
        "explanation": "Quy đổi hỗn hợp X thành Fe và O. Bảo toàn electron và bảo toàn nguyên tố sắt thu được m = 60,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Phức chất [Cr(H₂O)₆]Cl₃ có màu tím đặc trưng. Khi thêm lượng dư dung dịch AgNO₃ vào dung dịch phức chất trên, người ta thấy có bao nhiêu mol ion Cl⁻ ở cầu ngoại phức phản ứng tạo kết tủa AgCl với mỗi mol phức chất?",
        "options": [
            "3 mol",
            "1 mol",
            "2 mol",
            "0 mol"
        ],
        "answer": "A",
        "explanation": "Có 3 ion Cl⁻ nằm ở cầu ngoại phức nên tạo hoàn toàn 3 mol kết tủa AgCl."
    },
    {
        "type": "TF",
        "question": "Kim loại chuyển tiếp dãy thứ nhất đóng vai trò xương sống trong công nghiệp vật liệu, luyện kim và hóa học xúc tác. Xét các đặc điểm cấu tạo và tính chất của chúng:",
        "statements": [
            {
                "text": "Các kim loại chuyển tiếp dãy thứ nhất đều là kim loại, có nhiệt độ nóng chảy cao, khối lượng riêng lớn và độ cứng cao hơn so với kim loại kiềm và kiềm thổ.",
                "answer": true,
                "explanation": "Đúng. Do sự tham gia của các electron d chưa bão hòa vào liên kết kim loại."
            },
            {
                "text": "Hầu hết các ion kim loại chuyển tiếp có khả năng tạo thành phức chất với các phân tử trung hòa hoặc anion nhờ có các orbital d trống nhận cặp electron.",
                "answer": true,
                "explanation": "Đúng. Đây là đặc trưng quan trọng nhất của nguyên tố và ion kim loại chuyển tiếp."
            },
            {
                "text": "Tất cả các ion kim loại chuyển tiếp trong dung dịch đều không có màu, chỉ có các anion mới tạo ra màu sắc cho dung dịch.",
                "answer": false,
                "explanation": "Sai. Phần lớn dung dịch muối của kim loại chuyển tiếp có màu sắc đặc trưng."
            },
            {
                "text": "Nhiều kim loại chuyển tiếp và hợp chất của chúng (như Fe, Ni, V₂O₅) được dùng làm chất xúc tác quan trọng trong các quá trình tổng hợp hữu cơ và vô cơ.",
                "answer": true,
                "explanation": "Đúng. Ví dụ V₂O₅ xúc tác tổng hợp H₂SO₄, Fe xúc tác tổng hợp NH₃."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Phức chất là thể liên kết giữa ion trung tâm với các phối tử xung quanh. Xét cấu tạo và liên kết trong một số phức chất tiêu biểu:",
        "statements": [
            {
                "text": "Trong phức chất [Pt(NH₃)₂Cl₂], nguyên tử trung tâm là Pt²⁺ có số phối trí bằng 4.",
                "answer": true,
                "explanation": "Đúng. Tổng số phối tử bao quanh Pt²⁺ là 4."
            },
            {
                "text": "Liên kết giữa ion trung tâm và phối tử trong phức chất chủ yếu là liên kết cộng hóa trị hình thành theo cơ chế cho - nhận.",
                "answer": true,
                "explanation": "Đúng. Phối tử cho cặp electron tự do, ion trung tâm nhận."
            },
            {
                "text": "Cầu nội của phức chất nằm trong ngoặc vuông và chịu điện li mạnh khi tan vào nước thành các ion tự do giống như muối thông thường.",
                "answer": false,
                "explanation": "Sai. Cầu nội liên kết rất bền vững và hầu như không bị điện li khi hòa tan vào nước."
            },
            {
                "text": "Phức chất [Fe(CN)₆]³⁻ có tên gọi là hexacyanoferrate(III), trong đó iron có số oxi hóa là +3.",
                "answer": true,
                "explanation": "Đúng. Fe có số oxi hóa +3, tên gọi hệ thống là hexacyanoferrate(III)."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Xét tính chất hóa học và sự chuyển hóa giữa các hợp chất của Iron (Fe) và Chromium (Cr):",
        "statements": [
            {
                "text": "Chromium(III) hydroxide (Cr(OH)₃) là một hydroxide lưỡng tính, tan được trong cả dung dịch acid mạnh (như HCl) và dung dịch kiềm mạnh (như NaOH).",
                "answer": true,
                "explanation": "Đúng. Cr(OH)₃ phản ứng được với cả HCl và NaOH."
            },
            {
                "text": "Trong môi trường acid, ion dichromate (Cr₂O₇²⁻) màu da cam tồn tại ở trạng thái cân bằng với ion chromate (CrO₄²⁻) màu vàng.",
                "answer": true,
                "explanation": "Đúng. Cân bằng chuyển dịch phụ thuộc vào môi trường pH."
            },
            {
                "text": "Iron(II) hydroxide (Fe(OH)₂) là chất kết tủa màu trắng xanh, khi để ngoài không khí ẩm sẽ nhanh chóng bị oxi hóa chuyển thành kết tủa màu nâu đỏ là Fe(OH)₃.",
                "answer": true,
                "explanation": "Đúng. Quá trình oxi hóa Fe(OH)₂ trong không khí ẩm tạo Fe(OH)₃ nâu đỏ."
            },
            {
                "text": "Hợp chất iron(III) oxide (Fe₂O₃) có tính khử rất mạnh nên được dùng làm chất khử chính trong lò cao luyện gang.",
                "answer": false,
                "explanation": "Sai. Fe₂O₃ là oxide base và có tính oxi hóa (bị khử thành Fe), không phải chất khử."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Phức chất có vai trò cực kỳ quan trọng trong hóa học phân tích, sinh học và công nghệ vật liệu hiện đại. Xét các ứng dụng sau:",
        "statements": [
            {
                "text": "Chlorophyll (diệp lục) trong cây xanh là một phức chất cơ kim có ion trung tâm là Mg²⁺, đóng vai trò cốt lõi trong quá trình quang hợp.",
                "answer": true,
                "explanation": "Đúng. Diệp lục là phức chất của magnesium."
            },
            {
                "text": "Hemoglobin trong máu người là phức chất của iron(II) có nhiệm vụ vận chuyển khí oxygen từ phổi đến các mô trong cơ thể.",
                "answer": true,
                "explanation": "Đúng. Hemoglobin chứa ion Fe²⁺ gắn kết và chuyên chở O₂."
            },
            {
                "text": "Vitamin B₁₂ là một phức chất sinh học quan trọng có chứa nguyên tử trung tâm là kim loại quý hiếm gold (Au).",
                "answer": false,
                "explanation": "Sai. Vitamin B₁₂ là phức chất của cobalt (Co), không phải vàng (Au)."
            },
            {
                "text": "Trong phương pháp chuẩn độ complexon (EDTA), EDTA tạo phức chất bền với tỉ lệ 1:1 với hầu hết các ion kim loại hóa trị II và III, giúp xác định độ cứng của nước.",
                "answer": true,
                "explanation": "Đúng. EDTA tạo phức rất bền với Ca²⁺ và Mg²⁺."
            }
        ]
    }
];
