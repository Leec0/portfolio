export function getYearsPassed(from: Date) {
    const now = new Date();
    let years = now.getFullYear() - from.getFullYear();

    const datePassedThisYear =
        now.getMonth() > from.getMonth() ||
        (now.getMonth() === from.getMonth() && now.getDate() >= from.getDate());

    if (!datePassedThisYear) years--

    return years;
}