// Chương 2: Carbohydrate (Hóa học 12 - Kết nối tri thức với cuộc sống)[span_0](start_span)[span_0](end_span)
// Tổng cộng: 24 câu trắc nghiệm (MCQ) + 4 câu đúng/sai (TF - 16 ý)[span_1](start_span)[span_1](end_span)

const CHAPTER_2 = [
    {
        "type": "MCQ",
        "question": "Chất nào sau đây thuộc loại monosaccharide?",
        "options": [
            "Saccharose",
            "Glucose",
            "Tinh bột",
            "Cellulose"
        ],
        "answer": "B",
        "explanation": "Glucose và fructose là các monosaccharide (đơn đường). Saccharose là disaccharide; tinh bột và cellulose là polysaccharide."
    },
    {
        "type": "MCQ",
        "question": "Công thức phân tử của glucose là",
        "options": [
            "C12H22O11",
            "C6H10O5",
            "C6H12O6",
            "CH2O"
        ],
        "answer": "C",
        "explanation": "Glucose là monosaccharide có công thức phân tử là C6H12O6."
    },
    {
        "type": "MCQ",
        "question": "Chất nào sau đây không có phản ứng tráng bạc?",
        "options": [
            "Glucose",
            "Fructose",
            "Saccharose",
            "Andehitacetic"
        ],
        "answer": "C",
        "explanation": "Saccharose không có nhóm chức -CHO tự do và trong môi trường kiềm không chuyển hóa thành glucose/fructose nên không có phản ứng tráng bạc. Fructose trong môi trường kiềm chuyển hóa thành glucose nên vẫn tráng bạc được."
    },
    {
        "type": "MCQ",
        "question": "Dung dịch chất nào sau đây hòa tan Cu(OH)2 ở điều kiện thường tạo dung dịch màu xanh lam?",
        "options": [
            "Ethane",
            "Glucose",
            "Diethyl ether",
            "Ethyl acetate"
        ],
        "answer": "B",
        "explanation": "Glucose có nhiều nhóm -OH liền kề nên tác dụng với Cu(OH)2 ở điều kiện thường tạo dung dịch phức chất màu xanh lam đặc trưng."
    },
    {
        "type": "MCQ",
        "question": "Tinh bột và cellulose đều thuộc loại",
        "options": [
            "monosaccharide",
            "disaccharide",
            "polysaccharide",
            "trisaccharide"
        ],
        "answer": "C",
        "explanation": "Tinh bột và cellulose là các polymer thiên nhiên thuộc loại polysaccharide có công thức chung (C6H10O5)n."
    },
    {
        "type": "MCQ",
        "question": "Khi thủy phân hoàn toàn tinh bột trong môi trường acid, sản phẩm cuối cùng thu được là",
        "options": [
            "fructose",
            "glucose",
            "saccharose",
            "galactose"
        ],
        "answer": "B",
        "explanation": "Tinh bột được cấu tạo từ các mắt nối a-glucose, nên khi thủy phân hoàn toàn trong môi trường acid sẽ thu được glucose."
    },
    {
        "type": "MCQ",
        "question": "Phát biểu nào sau đây đúng?",
        "options": [
            "Cellulose là chất rắn, màu trắng, tan tốt trong nước và ethanol.",
            "Dung dịch glucose tác dụng với Cu(OH)2 khi đun nóng tạo kết tủa đỏ gạch.",
            "Saccharose bị thủy phân trong môi trường kiềm đun nóng.",
            "Amylose trong tinh bột có cấu trúc mạch phân nhánh."
        ],
        "answer": "B",
        "explanation": "Glucose có nhóm -CHO nên khi đun nóng với Cu(OH)2 trong môi trường kiềm sẽ khử Cu(2+) thành Cu2O kết tủa đỏ gạch. (A sai vì cellulose không tan trong nước; C sai vì saccharose thủy phân trong môi trường acid; D sai vì amylose mạch không phân nhánh)."
    },
    {
        "type": "MCQ",
        "question": "Chất nào sau đây khi thủy phân tạo ra hai monosaccharide khác nhau là glucose và fructose?",
        "options": [
            "Tinh bột",
            "Cellulose",
            "Saccharose",
            "Maltose"
        ],
        "answer": "C",
        "explanation": "Saccharose là disaccharide cấu tạo từ 1 gốc a-glucose và 1 gốc b-fructose. Maltose thủy phân chỉ sinh ra glucose."
    },
    {
        "type": "MCQ",
        "question": "Để phân biệt hai dung dịch glucose và fructose, người ta có thể dùng phản ứng nào sau đây?",
        "options": [
            "Phản ứng với dung dịch AgNO3/NH3 đun nóng",
            "Phản ứng với Cu(OH)2 ở điều kiện thường",
            "Phản ứng với nước bromine (Br2)",
            "Phản ứng lên men rượu"
        ],
        "answer": "C",
        "explanation": "Glucose có nhóm -CHO làm mất màu nước bromine, trong khi fructose không có nhóm -CHO ở dạng mạch hở trong dung dịch nước bromine nên không làm mất màu Br2."
    },
    {
        "type": "MCQ",
        "question": "Số nhóm hydroxyl (-OH) tự do trong một phân tử a-glucose dạng mạch vòng (ở C số 1) là",
        "options": [
            "3",
            "4",
            "5",
            "6"
        ],
        "answer": "C",
        "explanation": "Glucose ở dạng mạch hở có 5 nhóm -OH (gồm 1 nhóm -OH semiacetal ở C1 và 4 nhóm -OH alcoholic ở C2,3,4,5,6). Khi đóng vòng, nhóm -OH ở C1 trở thành nhóm -OH glycoside, tổng số nhóm -OH vẫn là 5."
    },
    {
        "type": "MCQ",
        "question": "Công thức cấu tạo thu gọn của cellulose có thể viết là",
        "options": [
            "[C6H7O2(OH)3]n",
            "[C6H8O3(OH)2]n",
            "(C6H10O5)n",
            "C12H22O11"
        ],
        "answer": "A",
        "explanation": "Mỗi mắt xích C6H10O5 của cellulose có 3 nhóm -OH tự do, nên công thức cấu tạo thể hiện rõ số nhóm chức là [C6H7O2(OH)3]n."
    },
    {
        "type": "MCQ",
        "question": "Phát biểu nào sau đây về carbohydrate là không đúng?",
        "options": [
            "Glucose được gọi là đường nho do có nhiều trong quả nho chín.",
            "Tinh bột là lương thực thiết yếu của con người.",
            "Cellulose là nguyên liệu để sản xuất tơ nhân tạo và giấy viết.",
            "Fructose là chất khí, tan nhiều trong nước."
        ],
        "answer": "D",
        "explanation": "Fructose là chất rắn, dạng tinh thể không màu, vị ngọt hơn đường mía, tan rất nhiều trong nước, chứ không phải chất khí."
    },
    {
        "type": "MCQ",
        "question": "Lên men m gam glucose thành alcohol ethyl với hiệu suất 80%, thu được V lít khí CO2 (đkc). Hấp thụ hoàn toàn lượng CO2 này bằng dung dịch Ca(OH)2 dư thu được 20 gam kết tủa. Giá trị của m là",
        "options": [
            "18,0",
            "22,5",
            "14,4",
            "28,125"
        ],
        "answer": "B",
        "explanation": "n(CaCO3) = 20 / 100 = 0,2 mol => n(CO2) = 0,2 mol. Phương trình lên men: C6H12O6 -> 2C2H5OH + 2CO2. Số mol glucose lý thuyết = 0,2 / 2 = 0,1 mol. Vì hiệu suất H = 80%, số mol glucose thực tế cần dùng là m / 180 = 0,1 / 0,8 = 0,125 mol => m = 0,125 * 180 = 22,5 gam."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn m gam saccharose trong môi trường acid, trung hòa dung dịch sau phản ứng rồi cho tác dụng với lượng dư dung dịch AgNO3/NH3 đun nóng, thu được 21,6 gam Ag. Hiệu suất phản ứng thủy phân là 75%. Giá trị của m là",
        "options": [
            "17,1",
            "34,2",
            "22,8",
            "15,39"
        ],
        "answer": "A",
        "explanation": "n(Ag) = 21,6 / 108 = 0,2 mol. Mỗi glucose hoặc fructose tráng bạc tạo ra 2 Ag. Tổng số mol monosaccharide (glucose + fructose) = 0,2 / 2 = 0,1 mol. Do saccharose thủy phân sinh ra 1 glucose và 1 fructose nên số mol saccharose phản ứng = 0,1 / 2 = 0,05 mol. Vì hiệu suất 75%, số mol saccharose ban đầu m / 342 = 0,05 / 0,75 => m = 17,1 gam."
    },
    {
        "type": "MCQ",
        "question": "Cho cellulose phản ứng với lượng dư nitric acid (xúc tác H2SO4 đặc, đun nóng) thu được 26,73 kg cellulose trinitrate (hiệu suất phản ứng tính theo cellulose là 90%). Khối lượng cellulose đã dùng là",
        "options": [
            "24,3 kg",
            "16,2 kg",
            "30,0 kg",
            "21,6 kg"
        ],
        "answer": "B",
        "explanation": "M(C6H7O2(ONO2)3) = 297. n(cellulose trinitrate) = 26730 / 297 = 90 mol. Số mol cellulose lý thuyết cần dùng là 90 mol. Khối lượng cellulose thực tế = (90 * 162) / 0,9 = 16200 g = 16,2 kg."
    },
    {
        "type": "MCQ",
        "question": "Cho m gam glucose tác dụng hoàn toàn với dung dịch AgNO3/NH3 dư thu được 10,8 gam Ag. Nếu lên men hoàn toàn m gam glucose đó thành alcohol ethyl rồi cho khí CO2 sinh ra hấp thụ hoàn toàn vào dung dịch nước vôi trong dư thì khối lượng kết tủa thu được là",
        "options": [
            "5,0 gam",
            "10,0 gam",
            "20,0 gam",
            "15,0 gam"
        ],
        "answer": "B",
        "explanation": "n(Ag) = 10,8 / 108 = 0,1 mol. Mỗi glucose cho 2 Ag => n(glucose) = 0,05 mol. Khi lên men 0,05 mol glucose sinh ra 2*0,05 = 0,1 mol CO2. CO2 tác dụng với Ca(OH)2 dư tạo 0,1 mol CaCO3 => m(kết tủa) = 0,1 * 100 = 10,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn 32,4 gam tinh bột trong môi trường acid, thu được dung dịch X. Trung hòa acid trong X rồi cho toàn bộ lượng sản phẩm phản ứng tráng bạc hoàn toàn với dung dịch AgNO3/NH3 dư thì khối lượng Ag thu được là",
        "options": [
            "21,6 gam",
            "43,2 gam",
            "32,4 gam",
            "64,8 gam"
        ],
        "answer": "B",
        "explanation": "n(starch mắt xích C6H10O5) = 32,4 / 162 = 0,2 mol. Thủy phân hoàn toàn thu được 0,2 mol glucose. Mỗi glucose tráng bạc tạo ra 2 Ag => n(Ag) = 2 * 0,2 = 0,4 mol => m(Ag) = 0,4 * 108 = 43,2 gam."
    },
    {
        "type": "MCQ",
        "question": "Đốt cháy hoàn toàn m gam glucose cần dùng 0,6 mol O2, thu được CO2 và hơi nước. Giá trị của m là",
        "options": [
            "18,0",
            "19,8",
            "36,0",
            "21,6"
        ],
        "answer": "A",
        "explanation": "Phương trình đốt cháy glucose: C6H12O6 + 6O2 -> 6CO2 + 6H2O. Với n(O2) = 0,6 mol => n(glucose) = 0,1 mol => m = 0,1 * 180 = 18,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Hòa tan hoàn toàn m gam hỗn hợp X gồm glucose và fructose (tỉ lệ mol 1:1) vào nước được dung dịch Y. Cho Y tác dụng với lượng dư dung dịch AgNO3/NH3 đun nóng, thu được 43,2 gam Ag. Mặt khác, nếu cho m gam X tác dụng với dung dịch Br2 dư thì lượng Br2 phản ứng tối đa là",
        "options": [
            "16,0 gam",
            "32,0 gam",
            "48,0 gam",
            "24,0 gam"
        ],
        "answer": "A",
        "explanation": "n(Ag) = 43,2 / 108 = 0,4 mol. Cả glucose và fructose đều phản ứng với AgNO3/NH3 tạo 2 Ag => n(glucose) + n(fructose) = 0,2 mol. Vì tỉ lệ mol 1:1 nên mỗi chất có 0,1 mol. Chỉ có glucose phản ứng với Br2 theo tỉ lệ 1:1 => n(Br2) = 0,1 mol => m(Br2) = 0,1 * 160 = 16,0 gam."
    },
    {
        "type": "MCQ",
        "question": "Thực hiện phản ứng este hóa giữa acetic anhydride và cellulose để sản xuất cellulose triacetate [C6H7O2(OCOCH3)3]n. Để sản xuất 28,8 kg cellulose triacetate cần dùng tối thiểu khối lượng acetic anhydride [(CH3CO)2O] là (biết hiệu suất phản ứng đạt 80% tính theo anhydride)",
        "options": [
            "30,6 kg",
            "38,25 kg",
            "45,9 kg",
            "24,48 kg"
        ],
        "answer": "B",
        "explanation": "Phương trình: [C6H7O2(OH)3]n + 3n(CH3CO)2O -> [C6H7O2(OCOCH3)3]n + 3nCH3COOH. M(cellulose triacetate) = 288 => n = 28,8 / 288 = 0,1 kmol mắt xích. Số mol (CH3CO)2O lý thuyết = 0,3 kmol => m(lý thuyết) = 0,3 * 102 = 30,6 kg. Với hiệu suất 80%: m(thực tế) = 30,6 / 0,8 = 38,25 kg."
    },
    {
        "type": "MCQ",
        "question": "Cho sơ đồ chuyển hóa: Tinh bột -> Glucose -> Alcohol ethyl -> Acid acetic -> Ethyl acetate. Nếu dùng 1 tấn tinh bột (chứa 10% tạp chất trơ) để điều chế ethyl acetate với hiệu suất toàn bộ quá trình đạt 54% thì khối lượng ethyl acetate thu được là",
        "options": [
            "495 kg",
            "528 kg",
            "616 kg",
            "396 kg"
        ],
        "answer": "B",
        "explanation": "Khối lượng tinh bột nguyên chất = 900 kg. 1 mol mắt xích (C6H10O5) (M=162) sinh ra 2 mol CH3COOC2H5 (M=88). Khối lượng lý thuyết = (900 / 162) * 2 * 88 = 977,78 kg. Với hiệu suất chung 54%: m(thực tế) = 977,78 * 0,54 = 528 kg."
    },
    {
        "type": "MCQ",
        "question": "Hỗn hợp X gồm glucose, fructose và saccharose. Đốt cháy hoàn toàn m gam X cần dùng vừa đủ 0,42 mol O2, thu được CO2 và 6,3 gam H2O. Giá trị của m là",
        "options": [
            "11,34",
            "12,60",
            "10,80",
            "13,20"
        ],
        "answer": "A",
        "explanation": "Carbohydrate có công thức chung Cn(H2O)m nên khi đốt cháy: n(CO2) = n(O2) = 0,42 mol => m(CO2) = 0,42 * 44 = 18,48 gam. Bảo toàn khối lượng: m + m(O2) = m(CO2) + m(H2O) => m + 0,42 * 32 = 18,48 + 6,3 => m = 11,34 gam."
    },
    {
        "type": "MCQ",
        "question": "Thủy phân hoàn toàn 342 gam saccharose trong môi trường acid với hiệu suất 80% thu được dung dịch X. Cho toàn bộ dung dịch X tác dụng hoàn toàn với lượng dư dung dịch AgNO3/NH3 đun nóng thì khối lượng Ag thu được là",
        "options": [
            "345,6 gam",
            "432,0 gam",
            "172,8 gam",
            "216,0 gam"
        ],
        "answer": "A",
        "explanation": "n(saccharose) = 342 / 342 = 1 mol. Số mol saccharose phản ứng = 0,8 mol, tạo ra 0,8 mol glucose và 0,8 mol fructose. Tổng số mol Ag = 2*0,8 + 2*0,8 = 3,2 mol => m(Ag) = 3,2 * 108 = 345,6 gam."
    },
    {
        "type": "MCQ",
        "question": "Oxi hóa hoàn toàn m gam một carbohydrate X bằng CuO đun nóng, thu được hỗn hợp khí và hơi Y gồm CO2 và H2O. Dẫn toàn bộ Y đi qua bình đựng dung dịch Ca(OH)2 dư thấy khối lượng bình tăng 37,2 gam đồng thời xuất hiện 60,0 gam kết tủa. Công thức phân tử của X là",
        "options": [
            "C6H12O6",
            "C12H22O11",
            "C6H10O5",
            "C5H10O5"
        ],
        "answer": "A",
        "explanation": "n(CaCO3) = 60 / 100 = 0,6 mol => n(CO2) = 0,6 mol => m(CO2) = 26,4 gam. m(H2O) = 37,2 - 26,4 = 10,8 gam => n(H2O) = 0,6 mol. Tỉ lệ n(CO2) : n(H2O) = 1:1 (tỉ lệ C:H = 1:2), khớp với công thức C6H12O6."
    },
    {
        "type": "TF",
        "question": "Tiến hành thí nghiệm chứng minh tính chất hóa học của glucose theo các bước sau:\n- Bước 1: Cho vào ống nghiệm 1 mL dung dịch NaOH 10% và 1 mL dung dịch CuSO4 5%, lắc nhẹ để hòa tan kết tủa tạo Cu(OH)2.\n- Bước 2: Thêm tiếp vào ống nghiệm 2 mL dung dịch glucose 10%, lắc đều cho đến khi kết tủa tan hoàn toàn thu được dung dịch xanh lam.\n- Bước 3: Đun nóng nhẹ ống nghiệm trên ngọn lửa đèn cồn trong vài phút.",
        "statements": [
            {
                "text": "Ở bước 2, hiện tượng dung dịch chuyển sang màu xanh lam chứng minh glucose có chứa nhiều nhóm -OH liền kề trong phân tử.",
                "answer": true,
                "explanation": "Đúng. Phức chất giữa polyalcohol (nhiều nhóm -OH kề nhau) với Cu(OH)2 ở điều kiện thường luôn có màu xanh lam đặc trưng."
            },
            {
                "text": "Ở bước 3, khi đun nóng xuất hiện kết tủa màu đỏ gạch (Cu2O), chứng minh glucose có tính chất của một aldehyde (có nhóm -CHO).",
                "answer": true,
                "explanation": "Đúng. Nhóm -CHO của glucose khử ion Cu(2+) trong môi trường kiềm khi đun nóng tạo thành copper(I) oxide (Cu2O) kết tủa đỏ gạch."
            },
            {
                "text": "Nếu thay dung dịch glucose bằng dung dịch saccharose ở bước 2 thì không thể hòa tan được Cu(OH)2 ở điều kiện thường.",
                "answer": false,
                "explanation": "Sai. Saccharose cũng là polyalcohol có nhiều nhóm -OH liền kề (8 nhóm -OH), hoàn toàn hòa tan Cu(OH)2 ở điều kiện thường tạo dung dịch xanh lam."
            },
            {
                "text": "Trong môi trường kiềm và nhiệt độ cao ở bước 3, một phần glucose có thể bị chuyển hóa thành fructose.",
                "answer": true,
                "explanation": "Đúng. Trong môi trường kiềm, glucose và fructose nằm trong cân bằng hỗ biến thông qua trung gian enediol, nên có sự chuyển hóa lẫn nhau."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Saccharose và maltose là hai disaccharide phổ biến trong tự nhiên. Xét cấu tạo và tính chất của chúng:",
        "statements": [
            {
                "text": "Cả saccharose và maltose đều có khả năng tham gia phản ứng tráng bạc với dung dịch AgNO3/NH3.",
                "answer": false,
                "explanation": "Sai. Chỉ có maltose có nhóm -OH hemiacetal tự do (ở dạng vòng mở có nhóm -CHO) nên tham gia phản ứng tráng bạc; saccharose không còn nhóm -OH bán acetal tự do nên không tráng bạc."
            },
            {
                "text": "Khi thủy phân hoàn toàn mỗi chất trong môi trường acid đều thu được hỗn hợp gồm hai monosaccharide khác nhau.",
                "answer": false,
                "explanation": "Sai. Saccharose thủy phân sinh ra 2 monosaccharide khác nhau (glucose và fructose); còn maltose thủy phân chỉ sinh ra duy nhất một loại monosaccharide là glucose."
            },
            {
                "text": "Cả hai chất này đều là chất rắn, tinh thể không màu, vị ngọt và tan tốt trong nước.",
                "answer": true,
                "explanation": "Đúng. Đây là tính chất vật lý chung của các disaccharide đường mía và đường mạch nha."
            },
            {
                "text": "Trong phân tử saccharose, gốc a-glucose và gốc b-fructose liên kết với nhau qua nguyên tử oxygen ở C1 của glucose và C2 của fructose.",
                "answer": true,
                "explanation": "Đúng. Liên kết trong saccharose là liên kết a-1,2-glycoside giữa C1 của glucose và C2 của fructose."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Tinh bột và cellulose là hai polysaccharide quan trọng trong chương trình Hóa học 12. Xét các đặc điểm cấu tạo và tính chất của chúng:",
        "statements": [
            {
                "text": "Tinh bột được cấu tạo từ các mắt xích a-glucose, gồm hai thành phần là amylose (mạch không phân nhánh) và amylopectin (mạch phân nhánh).",
                "answer": true,
                "explanation": "Đúng. Amylose chiếm khoảng 20-30% cấu trúc xoắn lò xo, amylopectin chiếm 70-80% cấu trúc phân nhánh."
            },
            {
                "text": "Cellulose được cấu tạo từ các mắt xích b-glucose, có cấu trúc mạch thẳng không phân nhánh.",
                "answer": true,
                "explanation": "Đúng. Các mắt xích b-glucose nối với nhau qua liên kết b-1,4-glycoside tạo thành mạch dài không phân nhánh, có tính dai và bền vững về cơ học."
            },
            {
                "text": "Tinh bột và cellulose là đồng phân cấu tạo của nhau vì đều có chung công thức phân tử (C6H10O5)n.",
                "answer": false,
                "explanation": "Sai. Dù có chung công thức đơn giản (C6H10O5)n nhưng giá trị n của tinh bột và cellulose rất khác nhau (n của cellulose lớn hơn rất nhiều so với tinh bột), do đó chúng không phải là đồng phân của nhau mà là các polymer khác nhau."
            },
            {
                "text": "Tinh bột phản ứng với dung dịch iodine cho màu xanh tím đặc trưng, trong khi cellulose không có phản ứng màu này với iodine.",
                "answer": true,
                "explanation": "Đúng. Cấu trúc xoắn lò xo của amylose trong tinh bột hấp phụ iodine tạo hợp chất màu xanh tím; cellulose mạch thẳng không có cấu trúc này nên không cho màu xanh tím với iodine."
            }
        ]
    },
    {
        "type": "TF",
        "question": "Glucose đóng vai trò vô cùng quan trọng trong sinh học và y học. Xét các phát biểu về ứng dụng và tính chất sinh hóa của glucose:",
        "statements": [
            {
                "text": "Trong y học, glucose được gọi là 'đường huyết' và được dùng làm thuốc tăng lực truyền trực tiếp vào tĩnh mạch cho người bệnh suy nhược.",
                "answer": true,
                "explanation": "Đúng. Glucose là chất dinh dưỡng cơ thể hấp thụ trực tiếp không cần qua tiêu hóa, cung cấp năng lượng nhanh chóng cho tế bào."
            },
            {
                "text": "Trong công nghiệp, lượng lớn glucose được dùng để tráng gương, tráng ruột phích và sản xuất sorbitol.",
                "answer": true,
                "explanation": "Đúng. Phản ứng tráng bạc của glucose được ứng dụng rộng rãi để sản xuất gương soi và ruột phích nước."
            },
            {
                "text": "Quá trình quang hợp của cây xanh là nguồn cung cấp chính carbohydrate cho tự nhiên, giải phóng khí oxygen và hấp thụ khí carbon dioxide.",
                "answer": true,
                "explanation": "Đúng. Phương trình tổng quát quang hợp: 6nCO2 + 5nH2O -> (C6H10O5)n + 6nO2 dưới tác dụng của ánh sáng và diệp lục."
            },
            {
                "text": "Cơ thể người có thể tiêu hóa và hấp thụ được cellulose trực tiếp tương tự như tinh bột nhờ các enzyme trong dịch vị dạ dày.",
                "answer": false,
                "explanation": "Sai. Hệ tiêu hóa của con người không có enzyme cellulase để thủy phân liên kết b-1,4-glycoside của cellulose, nên con người không tiêu hóa được cellulose (dù động vật ăn cỏ thì tiêu hóa được nhờ vi sinh vật dạ cỏ)."
            }
        ]
    }
];
