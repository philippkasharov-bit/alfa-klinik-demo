// Shared number formatting (ru-RU). Non-breaking spaces keep "12 700 ₽" on one line.
const NBSP = '\u00A0';

/** 12700 → "12 700" */
export const formatNumber = (n: number) => n.toLocaleString('ru-RU').replace(/\s/g, NBSP);

/** 12700 → "12 700 ₽" */
export const formatRub = (n: number) => `${formatNumber(n)}${NBSP}₽`;
