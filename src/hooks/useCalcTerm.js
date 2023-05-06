export const useCalcTerm = (publishedAt) => {
  const date = new Date(publishedAt); // Date 객체 생성
  const now = new Date(); // 현재 시간을 나타내는 Date 객체 생성
  const diff = now - date;
  const term = diff / 1000;

  if (term < 60) return `${Math.floor(term)}초 전`;
  else if (term < 60 * 60) return `${Math.floor(term / 60)}분 전`;
  else if (term < 60 * 60 * 24) return `${Math.floor(term / (60 * 60))}시간 전`;
  else if (term < 60 * 60 * 24 * 7) return `${Math.floor(term / (60 * 60 * 24))}일 전`;
  else if (term < 60 * 60 * 24 * 7 * 4) return `${Math.floor(term / (60 * 60 * 24 * 7))}주 전`;
  else if (term < 60 * 60 * 24 * 7 * 4 * 12) return `${Math.floor(term / (60 * 60 * 24 * 7 * 4))}개월 전`;
  return `${Math.floor(term / (60 * 60 * 24 * 7 * 4 * 12))}년 전`;
};
