// app/utils/validarCpf.ts

export const validarCPF = (cpf: string): boolean => {
  const cleanCPF = cpf.replace(/[^\d]/g, '');
  if (cleanCPF.length !== 11 || /^(\d)\1+$/.test(cleanCPF)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cleanCPF[i]) * (10 - i);
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cleanCPF[9])) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cleanCPF[i]) * (11 - i);
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cleanCPF[10])) return false;

  return true;
};
