function replace(s) {
  const letters = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let res = '';
  for (let i = 0; i < s.length; i++) {
    res += letters.includes(s[i]) ? '!' : s[i];
  }
  return res;
}