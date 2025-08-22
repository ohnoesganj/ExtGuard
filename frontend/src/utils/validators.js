export const validateExtension = (ext) => {
  if (!ext) return "확장자를 입력하세요.";
  if (ext.length > 20) return "확장자는 최대 20자리까지 가능합니다.";
  if (!/^[a-zA-Z0-9]+$/.test(ext)) return "영문, 숫자만 입력 가능합니다.";
  return null;
};
