export function formatDate(
    date,
    { locale = "nl-NL", variant = "long" } = {}
) {

    const parsedDate = new Date(date);

    const optionsMap = {
        long: {
            year: "numeric",
            month: "long",
            day: "numeric",
        },
        short: {
            weekday: "short",
            month: "long",
            day: "numeric",
        },
    };

    const options = optionsMap[variant] ?? optionsMap.long;

    return parsedDate.toLocaleDateString(locale, options);
}
