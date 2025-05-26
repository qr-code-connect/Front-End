// /app/validation/addressUtils.ts

export const formatarCep = (cep: string) => {
  const numeros = cep.replace(/\D/g, '');
  if (numeros.length <= 5) {
    return numeros;
  }
  return numeros.substring(0, 5) + '-' + numeros.substring(5, 8);
};

export const formatarCidade = (cidade: string) => {
  return cidade
    .toLowerCase()
    .split(' ')
    .filter(Boolean)
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(' ');
};

// Funções de validação exemplo (só ilustração, adapte conforme seu validarCep etc)
export const validarCep = (cep: string) => {
  const regex = /^\d{5}-\d{3}$/;
  const valido = regex.test(cep);
  return {
    valido,
    erro: valido ? '' : 'CEP inválido',
  };
};

export const validarTexto = (texto: string, label: string) => {
  const valido = texto.trim().length >= 3;
  return {
    valido,
    erro: valido ? '' : `Digite um ${label} válido`,
  };
};

export const validarNumero = (numero: string) => {
  const valido = /^\d+$/.test(numero);
  return {
    valido,
    erro: valido ? '' : 'Número inválido',
  };
};
