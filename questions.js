const QUESTION_BANK = [
    // --- DẠNG 1: TRẮC NGHIỆM (MCQ) ---
    {
        type: "MCQ",
        question: "Chất nào sau đây thuộc loại ester?",
        options: ["CH3COOH", "CH3COOC2H5", "C2H5OH", "HCHO"],
        answer: "B",
        explanation: "CH3COOC2H5 (ethyl acetate) có nhóm chức -COO- nên là ester."
    },
    {
        type: "MCQ",
        question: "Thủy phân ester CH3COOCH3 trong dung dịch NaOH đun nóng thu được muối nào?",
        options: ["HCOONa", "CH3COONa", "C2H5COONa", "CH3ONa"],
        answer: "B",
        explanation: "Phản ứng xà phòng hóa tạo ra muối sodium acetate (CH3COONa) và methanol (CH3OH)."
    },

    // --- DẠNG 2: ĐÚNG / SAI (TF - MỖI CÂU CÓ 4 Ý) ---
    {
        type: "TF",
        question: "Cho các phát biểu sau về chất béo và lipid:",
        statements: [
            { text: "Chất béo là triester của glycerol với các acid béo.", answer: true, explanation: "Đúng theo định nghĩa cơ bản trong sách giáo khoa." },
            { text: "Chất béo nhẹ hơn nước và tan tốt trong nước.", answer: false, explanation: "Sai vì chất béo không tan trong nước." },
            { text: "Dầu thực vật chứa nhiều gốc acid béo không no nên ở trạng thái lỏng.", answer: true, explanation: "Đúng, liên kết đôi làm phân tử khó xếp khít nên ở thể lỏng." },
            { text: "Phản ứng thủy phân chất béo trong môi trường kiềm là phản ứng thuận nghịch.", answer: false, explanation: "Sai, trong môi trường kiềm phản ứng xảy ra một chiều (xà phòng hóa)." }
        ]
    }
];
