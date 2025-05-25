export function getReadTime(text: string | undefined): number {
    if (!text) return 0;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 50);
}