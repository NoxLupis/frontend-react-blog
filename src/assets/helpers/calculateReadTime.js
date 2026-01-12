export function calculateReadTime(text, wordsPerMinute = 333) {
    if (!text) return 0;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
}