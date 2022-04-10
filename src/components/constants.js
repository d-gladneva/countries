export const CHIPS_KEY = {
    BEACHES:"BEACHES",
    BREEZZOR_PASS: "BREEZZOR_PASS",
    IMPRESSION: "IMPRESSION",
    ROUTES:"ROUTES"
}

export const BUTTON_KEY = {
    MAP:"На карте",
    ALL_BEACHES: "Все пляжи страны",
}

export const chips = [
    {
        id: CHIPS_KEY.BEACHES,
        text: "Пляжи"
    },
    {
        id: CHIPS_KEY.BREEZZOR_PASS,
        text: "Breezzor Pass"
    },
    {
        id: CHIPS_KEY.IMPRESSION,
        text: "Впечатления"
    },
    {
        id: CHIPS_KEY.ROUTES,
        text: "Маршруты"
    }
]

export const PLACEHOLDER = {
    [CHIPS_KEY.BEACHES]:"Поиск по стране, региону, городу, название пляжа",
    [CHIPS_KEY.BREEZZOR_PASS]: "Поиск по стране, региону, городу, названию отеля",
    [CHIPS_KEY.IMPRESSION]: "Поиск по стране, региону, городу, названию впечатления",
    [CHIPS_KEY.ROUTES]:"Поиск по стране, региону, городу, названию маршрута"
}