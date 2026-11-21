// Báo cáo gốc, tháng 11/2026. Mỗi phép thử có mẫu số riêng.
export const mainSlideCount = 18;
export const researchData = {
  project: {
    school: "THPT Chuyên Thăng Long · Đà Lạt",
    competition: "Cuộc thi khoa học kỹ thuật cấp cơ sở",
    year: "Năm học 2026–2027",
  },
  dataset: {
    total: 68,
    development: 50,
    holdout: 18,
    rated: 12,
    transcripts: 6,
    miniValidation: 3,
  },
  alignment: {
    image: 58,
    audioAssisted: 4,
    usable: 62,
    notEligible: 6,
    unreliable: 5,
    noAudio: 1,
  },
  asr: [
    { model: "small.en", wer: 5.02, selected: true },
    { model: "distil-large-v3", wer: 8.69, selected: false },
    { model: "large-v3-turbo", wer: 8.81, selected: false },
  ],
  scoring: {
    loocv: [
      { criterion: "Độ trôi chảy", mae: 0.4204 },
      { criterion: "Phát âm", mae: 0.4912 },
      { criterion: "Ngữ điệu", mae: 0.5881 },
    ],
    p25: [
      {
        criterion: "Độ trôi chảy",
        mae: 0.5133,
        sameBand: "2/3",
        withinOne: "3/3",
      },
      { criterion: "Phát âm", mae: 0.436, sameBand: "2/3", withinOne: "3/3" },
      { criterion: "Ngữ điệu", mae: 0.7027, sameBand: "1/3", withinOne: "2/3" },
    ],
  },
  followUp: {
    additionalRated: 10,
    fullEvaluation: "Đang thực hiện",
    holdoutEvaluation: "Chưa có kết quả kiểm định cuối",
  },
} as const;
export const decimal = (value: number, digits = 2) =>
  value.toFixed(digits).replace(".", ",");
