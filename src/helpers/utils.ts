export function chooseTypeWeather(num: number): string {
    let type: string = 'sunny'

    if (num >= 0 && num <= 19) type = "sunny"
    if (num >= 20 && num <= 29) type = "fog"
    if (num >= 30 && num <= 39) type = "wind"
    if (num >= 40 && num <= 49) type = "fog"
    if (num >= 50 && num <= 59) type = "rain"
    if (num >= 60 && num <= 69) type = "rain"
    if (num >= 70 && num <= 79) type = "rain"
    if (num >= 80 && num <= 99) type = "rain"

    return type
} 