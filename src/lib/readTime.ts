export function getReadTime(text: string): number {
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / 50);
}