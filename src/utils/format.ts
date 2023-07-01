interface FormatAmountDTO {
  lang: 'pt-br' | 'en-us';
  currency: 'BRL' | 'USD' | 'EUR';
  amount: number;
}

export function formatAmount({ lang, currency, amount }: FormatAmountDTO) {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency
  }).format(amount);
}