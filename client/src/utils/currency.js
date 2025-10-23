export function formatCurrency(value, locale = "en-US", currency = "USD") {
    try {
        return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 2 })
            .format(Number(value) || 0);
    } catch {
        return `$${Number(value || 0).toFixed(2)}`;
    }
}
