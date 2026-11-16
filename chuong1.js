// Chương 1: Ester – Lipid (Hóa học 12 - Kết nối tri thức với cuộc sống)[span_0](start_span)[span_0](end_span)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)[span_1](start_span)[span_1](end_span)

const CHAPTER_1 = [
    {
        "type": "MCQ",
        "question": "Chất nào sau đây thuộc loại ester no, đơn chức, mạch hở?",
        "options": [
            "CH3COOCH3",
            "CH2=CHCOOCH3",
            "CH3COOH",
            "(CH3COO)2C2H4"
        ],
        "answer": "A",
        "explanation": "CH3COOCH3 (methyl acetate) có công thức phân tử C3H6O2 (CnH2nO2), là ester no, đơn chức, mạch hở. B là ester không no (có nối đôi C=C); C là carboxylic acid; D là ester hai chức."
    },
    {
        "type": "MCQ",
        "question": "Tên gọi của ester CH3COOC2H5 là",
        "options": [
            "methyl acetate",
            "ethyl acetate",
            "ethyl formate",
            "methyl propionate"
        ],
        "answer": "B",
        "explanation": "Gốc R' là C2H5- (ethyl) và gốc acid là CH3COO- (acetate), nên tên gọi là ethyl acetate."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân ester X trong dung dịch NaOH thu được CH3COONa và CH3OH. Công thức cấu tạo của X là",
        "options": [
            "CH3COOC2H5",
            "HCOOCH3",
            "CH3COOCH3",
            "C2H5COOCH3"
        ],
        "answer": "C",
        "explanation": "Phương trình phản ứng: CH3COOCH3 + NaOH (t°) -> CH3COONa + CH3OH. Do đó X là CH3COOCH3."
    },
    {
        "type": "MCQ",
        "question": "Chất béo là triester của acid béo với",
        "options": [
            "ethylene glycol",
            "glycerol",
            "ethanol",
            "methanol"
        ],
        "answer": "B",
        "explanation": "Theo định nghĩa, chất béo (triglyceride) là triester của glycerol (C3H5(OH)3) với các acid béo."
    },
    {
        "type": "MCQ",
        "question": "Công thức của tristearin là",
        "options": [
            "(C15H31COO)3C3H5",
            "(C17H33COO)3C3H5",
            "(C17H35COO)3C3H5",
            "(C17H31COO)3C3H5"
        ],
        "answer": "C",
        "explanation": "Tristearin được tạo từ stearic acid (C17H35COOH) và glycerol, có công thức (C17H35COO)3C3H5. A là tripalmitin, B là triolein, D là trilinolein."
    },
    {
        "type": "MCQ",
        "question": "Số đồng phân cấu tạo ester ứng với công thức phân tử C4H8O2 là",
        "options": [
            "2",
            "3",
            "4",
            "5"
        ],
        "answer": "C",
        "explanation": "Có 4 đồng phân cấu tạo ester của C4H8O2 gồm: HCOOCH2CH2CH3, HCOOCH(CH3)2, CH3COOC2H5 và C2H5COOCH3."
    },
    {
        "type": "MCQ",
        "question": "Ester nào sau đây khi thủy phân trong dung dịch NaOH dư thu được sản phẩm có khả năng tham gia phản ứng tráng bạc?",
        "options": [
            "CH3COOCH3",
            "HCOOC2H5",
            "CH3COOC2H5",
            "C2H5COOCH3"
        ],
        "answer": "B",
        "explanation": "HCOOC2H5 + NaOH -> HCOONa + C2H5OH. Muối HCOONa có nhóm chức -CHO nên tham gia phản ứng tráng bạc."
    },
    {
        "type": "MCQ",
        "question": "Sắp xếp các chất sau theo chiều nhiệt độ sôi tăng dần: (1) CH3COOH, (2) HCOOCH3, (3) C2H5OH.",
        "options": [
            "(2) < (3) < (1)",
            "(1) < (2) < (3)",
            "(2) < (1) < (3)",
            "(3) < (2) < (1)"
        ],
        "answer": "A",
        "explanation": "HCOOCH3 không có liên kết hydrogen liên phân tử nên nhiệt độ sôi thấp nhất. C2H5OH và CH3COOH đều có liên kết hydrogen, nhưng liên kết hydrogen của acid bền hơn alcohol nên nhiệt độ sôi tăng dần: (2) < (3) < (1)."
    },
    {
        "type": "MCQ",
        "question": "Để chuyển hóa hoàn toàn chất béo lỏng thành chất béo rắn trong công nghiệp, người ta thực hiện phản ứng nào sau đây?",
        "options": [
            "Thủy phân trong môi trường acid",
            "Xà phòng hóa bằng dung dịch NaOH",
            "Hydrogen hóa (xúc tác Ni, t°)",
            "Đề hydrogen hóa ở nhiệt độ cao"
        ],
        "answer": "C",
        "explanation": "Chất béo lỏng chứa các gốc acid béo không no. Khi cộng H2 (xúc tác Ni, t°), liên kết đôi C=C bị bão hòa tạo thành chất béo no ở trạng thái rắn (bơ nhân tạo)."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân ester X mạch hở có công thức phân tử C4H6O2 trong dung dịch NaOH thu được muối Y và aldehyde Z. Công thức cấu tạo của X là",
        "options": [
            "CH2=CHCOOCH3",
            "HCOOCH=CHCH3",
            "HCOOC(CH3)=CH2",
            "CH3COOCH2CH=CH2"
        ],
        "answer": "B",
        "explanation": "HCOOCH=CHCH3 + NaOH -> HCOONa + CH3CH2CHO (propanal - là aldehyde). Đáp án A tạo alcohol CH3OH; đáp án C tạo ketone CH3COCH3; đáp án D không đúng công thức C4H6O2."
    },
    {
        "type": "MCQ",
        "question": "Ester có mùi chuối chín (isoamyl acetate) được điều chế từ cặp chất nào sau đây (xúc tác H2SO4 đặc, đun nóng)?",
        "options": [
            "CH3COOH và (CH3)2CHCH2CH2OH",
            "HCOOH và (CH3)2CHCH2CH2OH",
            "CH3COOH và (CH3)2CHCH2OH",
            "C2H5COOH và (CH3)2CHCH2OH"
        ],
        "answer": "A",
        "explanation": "Isoamyl acetate có công thức CH3COOCH2CH2CH(CH3)2, được tổng hợp từ acetic acid (CH3COOH) và isoamyl alcohol ((CH3)2CHCH2CH2OH)."
    },
    {
        "type": "MCQ",
        "question": "Chất giặt rửa tổng hợp có ưu điểm nào sau đây so với xà phòng?",
        "options": [
            "Dễ bị phân hủy sinh học bởi vi sinh vật hơn xà phòng",
            "Có thể dùng để giặt rửa cả trong nước cứng (nước chứa nhiều ion Ca2+, Mg2+)",
            "Được sản xuất hoàn toàn từ dầu thực vật và mỡ động vật tự nhiên",
            "Không gây ô nhiễm môi trường nước khi thải ra sông hồ"
        ],
        "answer": "B",
        "explanation": "Muối calcium và magnesium của chất giặt rửa tổng hợp (như sodium alkylbenzenesulfonate) tan tốt trong nước nên không tạo kết tủa như xà phòng khi gặp nước cứng."
    },
    {
        "type": "MCQ",
        "question": "Đun nóng 8,8 gam ethyl acetate với 200 mL dung dịch NaOH 0,2M. Sau khi phản ứng xảy ra hoàn toàn, cô cạn dung dịch thu được chất rắn khan có khối lượng là",
        "options": [
            "3,28 gam",
            "8,20 gam",
            "10,40 gam",
            "4,10 gam"
        ],
        "answer": "A",
        "explanation": "n(CH3COOC2H5) = 8,8 / 88 = 0,1 mol; n(NaOH) = 0,2 * 0,2 = 0,04 mol. Vì NaOH hết (0,04 < 0,1) nên lượng ester dư sẽ bay hơi khi cô cạn. Chất rắn khan chỉ gồm CH3COONa: m = 0,04 * 82 = 3,28 gam."
    },
    {
        "type": "MCQ",
        "question": "Xà phòng hóa hoàn toàn 17,24 gam chất béo cần vừa đủ 0,06 mol NaOH. Cô cạn dung dịch sau phản ứng thu được khối lượng xà phòng là",
        "options": [
            "17,80 gam",
            "18,24 gam",
            "16,68 gam",
            "18,38 gam"
        ],
        "answer": "A",
        "explanation": "n(glycerol) = 1/3 n(NaOH) = 0,02 mol. Áp dụng định luật bảo toàn khối lượng: m(chất béo) + m(NaOH) = m(xà phòng) + m(glycerol) => 17,24 + 0,06*40 = m(xà phòng) + 0,02*92 => m(xà phòng) = 17,80 gam."
    },
    {
        "type": "MCQ",
        "question": "Đun nóng 12 gam acetic acid với 13,8 gam ethanol (xúc tác H2SO4 đặc) thu được 11 gam ester. Hiệu suất của phản ứng ester hóa là",
        "options": [
            "50,0%",
            "62,5%",
            "75,0%",
            "80,0%"
        ],
        "answer": "B",
        "explanation": "n(CH3COOH) = 12/60 = 0,2 mol; n(C2H5OH) = 13,8/46 = 0,3 mol. Hiệu suất tính theo chất thiếu là CH3COOH (0,2 mol). n(ester thực tế) = 11/88 = 0,125 mol. H = (0,125 / 0,2) * 100% = 62,5%."
    },
    {
        "type": "MCQ",
        "question": "Ester X có công thức phân tử C8H8O2. Cho X tác dụng với dung dịch NaOH dư, đun nóng, thu được dung dịch chứa hai muối. Số công thức cấu tạo thỏa mãn tính chất trên của X là",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "answer": "B",
        "explanation": "X tác dụng với NaOH tạo 2 muối nên X là ester của phenol. Các đồng phân cấu tạo gồm: HCOOC6H4CH3 (3 vị trí o, m, p) và CH3COOC6H5 (1 đồng phân). Tổng cộng có 4 công thức cấu tạo."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn 0,1 mol ester E (mạch hở, chỉ chứa một loại nhóm chức) cần vừa đủ 100 mL dung dịch NaOH 2M, thu được một alcohol và 16,4 gam một muối duy nhất. Công thức cấu tạo của E là",
        "options": [
            "(CH3COO)2C2H4",
            "CH2(COOCH3)2",
            "(COOCH3)2",
            "(CH3COO)3C3H5"
        ],
        "answer": "A",
        "explanation": "n(NaOH) / n(E) = 0,2 / 0,1 = 2 => E là ester 2 chức. Vì thu được 1 muối duy nhất nên muối là đơn chức (0,2 mol). M(muối) = 16,4 / 0,2 = 82 (CH3COONa). Vậy E tạo từ CH3COOH và alcohol 2 chức C2H4(OH)2: (CH3COO)2C2H4."
    },
    {
        "type": "MCQ",
        "question": "Đốt cháy hoàn toàn m gam hỗn hợp X gồm hai ester no, đơn chức, mạch hở cần dùng vừa đủ 0,14 mol khí O2, thu được 6,16 gam CO2. Giá trị của m là",
        "options": [
            "3,72",
            "4,20",
            "3,48",
            "4,08"
        ],
        "answer": "B",
        "explanation": "n(CO2) = 6,16 / 44 = 0,14 mol. Vì ester no, đơn chức, mạch hở nên n(H2O) = n(CO2) = 0,14 mol. Bảo toàn nguyên tố O: 2*n(ester) + 2*n(O2) = 2*n(CO2) + n(H2O) => 2*n(ester) + 2*0,14 = 2*0,14 + 0,14 => n(ester) = 0,07 mol. Khối lượng m = m(C) + m(H) + m(O) = 0,14*12 + 0,14*2 + 0,07*32 = 4,20 gam."
    },
    {
        "type": "MCQ",
        "question": "Hỗn hợp X gồm hai ester đơn chức mạch hở là đồng phân cấu tạo của nhau. Hóa hơi hoàn toàn 4,4 gam X thu được thể tích hơi bằng thể tích của 1,6 gam khí oxygen ở cùng điều kiện nhiệt độ và áp suất. Mặt khác, cho 4,4 gam X tác dụng vừa đủ với 50 mL dung dịch NaOH 1M thu được hỗn hợp hai muối. Công thức cấu tạo của hai ester trong X là",
        "options": [
            "HCOOC3H7 và CH3COOC2H5",
            "CH3COOC2H5 và C2H5COOCH3",
            "HCOOC2H5 và CH3COOCH3",
            "HCOOCH(CH3)2 và HCOOCH2CH2CH3"
        ],
        "answer": "B",
        "explanation": "n(X) = n(O2) = 1,6 / 32 = 0,05 mol => M(X) = 4,4 / 0,05 = 88 (C4H8O2). X tác dụng với NaOH tạo hai muối nên hai ester phải có gốc acid khác nhau. Đáp án B gồm CH3COOC2H5 (muối CH3COONa) và C2H5COOCH3 (muối C2H5COONa). Đáp án D cùng gốc HCOO- nên chỉ tạo 1 muối."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn m gam triglyceride X trong dung dịch NaOH dư, thu được 9,2 gam glycerol và hỗn hợp gồm 30,4 gam sodium oleate và 55,6 gam sodium palmitate. Công thức phân tử của X là",
        "options": [
            "C53H100O6",
            "C55H104O6",
            "C53H98O6",
            "C55H102O6"
        ],
        "answer": "A",
        "explanation": "n(glycerol) = 9,2 / 92 = 0,1 mol. n(C17H33COONa) = 30,4 / 304 = 0,1 mol; n(C15H31COONa) = 55,6 / 278 = 0,2 mol. Vậy X tạo từ 1 gốc oleate (C17H33COO-) và 2 gốc palmitate (C15H31COO-). Tổng số C = 18 + 16*2 + 3 = 53; tổng số H = 33 + 31*2 + 5 = 100 => Công thức phân tử của X là C53H100O6."
    },
    {
        "type": "MCQ",
        "question": "Cho 0,1 mol ester X (C9H10O2) tác dụng vừa đủ với 200 mL dung dịch NaOH 1M, đun nóng thu được dung dịch Y chứa hai muối (trong đó có một muối của carboxylic acid đơn chức) và không thu được alcohol. Số công thức cấu tạo của X thỏa mãn là",
        "options": [
            "4",
            "6",
            "7",
            "9"
        ],
        "answer": "C",
        "explanation": "n(NaOH)/n(X) = 2 và không tạo alcohol => X là ester của phenol. Các cấu tạo thỏa mãn: HCOOC6H4-C2H5 (3 đồng phân o, m, p); CH3COOC6H4CH3 (3 đồng phân o, m, p); C2H5COOC6H5 (1 đồng phân). Xét nhóm 1 gốc thế trên vòng: 3 + 3 + 1 = 7 đồng phân."
    },
    {
        "type": "MCQ",
        "question": "Ester hai chức, mạch hở X có công thức phân tử C6H8O4. Đun nóng X với dung dịch NaOH dư thu được một muối của carboxylic acid Y và hỗn hợp hai alcohol Z, T (MZ < MT). Phát biểu nào sau đây sai?",
        "options": [
            "Acid Y có mạch carbon không phân nhánh",
            "Alcohol Z là methanol",
            "Alcohol T có khả năng hòa tan Cu(OH)2 tạo dung dịch xanh lam",
            "Chất X không có đồng phân hình học"
        ],
        "answer": "C",
        "explanation": "C6H8O4 có k = 3 (gồm 2 nhóm -COO- và 1 liên kết đôi C=C). Tạo 1 muối và 2 alcohol đơn chức nên X có cấu tạo CH3-OOC-CH=CH-COO-C2H5. Vậy Y là HOOC-CH=CH-COOH (không nhánh), Z là CH3OH, T là C2H5OH. C2H5OH là alcohol đơn chức nên không hòa tan được Cu(OH)2 => C sai."
    },
    {
        "type": "MCQ",
        "question": "Thực hiện phản ứng xà phòng hóa hoàn toàn 100 gam một loại chất béo có chỉ số acid bằng 7 cần dùng vừa đủ 14,2 gam NaOH. Khối lượng glycerol thu được sau phản ứng là",
        "options": [
            "10,50 gam",
            "10,35 gam",
            "11,04 gam",
            "9,20 gam"
        ],
        "answer": "A",
        "explanation": "Chỉ số acid = 7 nghĩa là 1 gam chất béo cần 7 mg KOH để trung hòa acid béo tự do. Với 100 gam chất béo: n(KOH trung hòa acid tự do) = (100 * 0,007) / 56 = 0,0125 mol = n(acid béo tự do). Tổng n(NaOH phản ứng) = 14,2 / 40 = 0,355 mol. Số mol NaOH phản ứng với triester = 0,355 - 0,0125 = 0,3425 mol => n(glycerol) = 0,3425 / 3 ≈ 0,11417 mol => m(glycerol) = 0,11417 * 92 = 10,50 gam."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn ester X mạch hở (C7H10O4) trong dung dịch NaOH dư thu được muối của carboxylic acid Y và hai chất hữu cơ Z, T. Biết Z phản ứng với Na tạo H2, còn T tham gia phản ứng tráng bạc và có cùng số nguyên tử carbon với Y. Công thức cấu tạo của X là",
        "options": [
            "CH3OOC-CH2-COOCH=CH-CH3",
            "C2H5OOC-COOCH=CH-CH3",
            "CH3OOC-COOCH=CH-C2H5",
            "HCOOCH2-CH2-COOCH=CH-CH3"
        ],
        "answer": "A",
        "explanation": "C7H10O4 có k = 3 (2 nhóm -COO- và 1 nối đôi C=C). Sản phẩm gồm muối Y, alcohol Z (tác dụng với Na) và aldehyde T (tráng bạc). T và Y có cùng số nguyên tử C: với đáp án A, Y là CH2(COONa)2 (3C), Z là CH3OH (1C) và T là CH3CH2CHO (3C). Cả Y và T đều có 3 carbon, thỏa mãn đề bài."
    },
    {
        "type": "TF",
        "question": "Tiến hành thí nghiệm điều chế ethyl acetate trong phòng thí nghiệm theo các bước sau:\n- Bước 1: Cho 2 mL ethanol, 2 mL acetic acid nguyên chất và vài giọt dung dịch H2SO4 đặc vào ống nghiệm khô, lắc đều.\n- Bước 2: Đun cách thủy ống nghiệm trong nồi nước nóng (khoảng 65 - 70 °C) trong 5 - 6 phút.\n- Bước 3: Làm lạnh rồi rót thêm vào ống nghiệm 2 mL dung dịch NaCl bão hòa.",
        "statements": [
            {
                "text": "Dung dịch H2SO4 đặc vừa đóng vai trò làm chất xúc tác, vừa có tác dụng hút nước để chuyển dịch cân bằng theo chiều thuận.",
                "answer": true,
                "explanation": "Đúng. Phản ứng ester hóa là phản ứng thuận nghịch, H2SO4 đặc hút nước làm giảm nồng độ sản phẩm H2O, giúp tăng hiệu suất tạo ester."
            },
            {
                "text": "Ở bước 2, việc đun cách thủy giúp kiểm soát nhiệt độ ổn định, tránh làm sôi trào hỗn hợp và hạn chế phản ứng phụ.",
                "answer": true,
                "explanation": "Đúng. Đun cách thủy ở 65 - 70 °C giúp ester bay hơi từ từ và tránh hiện tượng H2SO4 đặc oxi hóa các chất hữu cơ nếu đun trực tiếp ở nhiệt độ quá cao."
            },
            {
                "text": "Ở bước 3, dung dịch NaCl bão hòa được thêm vào nhằm mục đích trung hòa hết lượng acid dư còn lại trong ống nghiệm.",
                "answer": false,
                "explanation": "Sai. Dung dịch NaCl bão hòa là muối trung tính không trung hòa acid; mục đích chính là làm tăng khối lượng riêng của lớp chất lỏng phía dưới và giảm độ tan của ethyl acetate, giúp ester tách lớp nổi lên trên dễ dàng hơn."
            },
            {
                "text": "Sau bước 3, chất lỏng trong ống nghiệm tách thành hai lớp, lớp phía trên có mùi thơm đặc trưng của ethyl acetate.",
                "answer": true,
                "explanation": "Đúng. Ethyl acetate nhẹ hơn nước (D ≈ 0,90 g/cm³) và hầu như không tan trong dung dịch NaCl bão hòa nên nổi lên thành lớp phía trên."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Cho chất béo X (triglyceride) có công thức cấu tạo thu gọn là (C17H33COO)(C15H31COO)(C17H35COO)C3H5.",
        "statements": [
            {
                "text": "Trong một phân tử chất béo X có chứa tổng cộng 4 liên kết pi (π).",
                "answer": true,
                "explanation": "Đúng. Phân tử X có 3 liên kết pi trong 3 nhóm -COO- và 1 liên kết pi trong gốc oleate (C17H33-), tổng cộng là 4 liên kết pi."
            },
            {
                "text": "Ở điều kiện thường, chất béo X tồn tại ở trạng thái rắn và không tan trong nước.",
                "answer": false,
                "explanation": "Sai. Chất béo X chứa gốc acid béo không no (oleate) nên thường tồn tại ở trạng thái lỏng ở điều kiện thường (dầu thực vật)."
            },
            {
                "text": "Thủy phân hoàn toàn 1 mol X trong dung dịch KOH dư thu được tối đa 3 loại muối khác nhau.",
                "answer": true,
                "explanation": "Đúng. X tạo bởi 3 gốc acid béo khác nhau nên khi xà phòng hóa thu được 3 muối: C17H33COOK, C15H31COOK và C17H35COOK."
            },
            {
                "text": "Hydrogen hóa hoàn toàn 1 mol X (xúc tác Ni, t°) cần dùng vừa đủ 1 mol khí H2, thu được chất béo no có phân tử khối bằng 862.",
                "answer": true,
                "explanation": "Đúng. X có 1 nối đôi C=C nên cộng tối đa 1 mol H2 tạo sản phẩm (C15H31COO)(C17H35COO)2C3H5 có công thức phân tử C55H106O6 => M = 55*12 + 106 + 6*16 = 862."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Cho hợp chất hữu cơ đa chức X có công thức phân tử C7H12O4. Thực hiện sơ đồ chuyển hóa sau (theo đúng tỉ lệ mol):\n(1) X + 2NaOH (t°) → X1 + X2 + X3\n(2) X1 + H2SO4 → Y1 + Na2SO4\n(3) X2 + H2SO4 → Y2 + Na2SO4\nBiết X3 là alcohol bậc I, Y1 là carboxylic acid đơn chức no, Y2 là hợp chất tạp chức.",
        "statements": [
            {
                "text": "Trong phân tử X có hai nhóm chức ester khác loại.",
                "answer": true,
                "explanation": "Đúng. X có độ bất bão hòa k = 2, phản ứng với 2 mol NaOH tạo 2 muối (X1, X2) và 1 alcohol (X3). Do Y2 tạp chức nên X phải chứa 1 nhóm ester của alcohol thông thường và 1 nhóm ester của hydroxy acid."
            },
            {
                "text": "Chất Y2 vừa có khả năng tác dụng với Na, vừa tác dụng được với dung dịch NaHCO3.",
                "answer": true,
                "explanation": "Đúng. Y2 là hydroxy acid (ví dụ HO-CH2-COOH hoặc HO-C2H4-COOH), chứa cả nhóm -OH (tác dụng với Na) và nhóm -COOH (tác dụng với Na và NaHCO3)."
            },
            {
                "text": "Nếu X3 là ethanol (C2H5OH) và Y1 là acetic acid (CH3COOH) thì Y2 là 3-hydroxypropanoic acid.",
                "answer": true,
                "explanation": "Đúng. Tổng số C của X là 7. Trừ đi 2C của CH3COOH và 2C của C2H5OH thì Y2 còn lại 3C. Vì X3 là alcohol bậc I nên cấu tạo X là CH3COO-CH2-CH2-COOC2H5 => Y2 là HO-CH2-CH2-COOH (3-hydroxypropanoic acid)."
            },
            {
                "text": "Có tất cả 4 công thức cấu tạo của X thỏa mãn điều kiện bài toán (với X3 là ethanol).",
                "answer": false,
                "explanation": "Sai. Nếu X3 cố định là ethanol (2C), tổng số C của Y1 và Y2 là 5C. Các cặp (Y1, Y2) tương ứng là: (1C, 4C - có 3 đồng phân cấu tạo không phân nhánh/nhánh bậc I), (2C, 3C - có 2 đồng phân là 2-hydroxy và 3-hydroxypropanoic acid), (3C, 2C - có 1 đồng phân). Tổng cộng có tới 6 công thức cấu tạo thỏa mãn."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Xà phòng và chất giặt rửa đều có khả năng làm sạch vết bẩn dầu mỡ bám trên vải sợi. Xét các đặc điểm cấu tạo và tính chất của chúng:",
        "statements": [
            {
                "text": "Phân tử xà phòng và chất giặt rửa đều gồm hai phần: một đầu ưa nước gắn với một đuôi dài kị nước.",
                "answer": true,
                "explanation": "Đúng. Đầu ưa nước là các nhóm ion như -COO-Na+ (xà phòng) hoặc -OSO3-Na+, -SO3-Na+ (chất giặt rửa tổng hợp); đuôi kị nước là gốc hydrocarbon mạch dài."
            },
            {
                "text": "Khi giặt rửa, đầu ưa nước sẽ quay vào trong vết dầu mỡ để hòa tan vết bẩn, còn đuôi kị nước hướng ra ngoài phân tử nước.",
                "answer": false,
                "explanation": "Sai. Ngược lại: đuôi kị nước (gốc hydrocarbon) thâm nhập và hòa tan vào vết dầu mỡ, còn đầu ưa nước hướng ra ngoài tương tác với nước để kéo vết bẩn tách khỏi bề mặt vải."
            },
            {
                "text": "Sodium palmitate và sodium stearate là thành phần chính của xà phòng rắn.",
                "answer": true,
                "explanation": "Đúng. Muối sodium của các acid béo no mạch dài thường tạo thành xà phòng bánh (dạng rắn), trong khi muối potassium tạo xà phòng mềm/lỏng."
            },
            {
                "text": "Chất giặt rửa tổng hợp chứa gốc hydrocarbon phân nhánh dễ bị vi sinh vật phân hủy hơn loại có mạch không phân nhánh.",
                "answer": false,
                "explanation": "Sai. Chất giặt rửa có gốc hydrocarbon mạch không phân nhánh thân thiện với môi trường và dễ bị vi sinh vật phân hủy sinh học hơn nhiều so với loại mạch phân nhánh."
            }
        ]
    }
];
