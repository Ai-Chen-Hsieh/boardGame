import image  from "../assets/demo_img.jpg"

const list = {
    "name": "Game",
    "price": 100,
    "images": {
        "medium": `${image}`
    },
    "players": "1-4",
}

const generateDummyList = Array.from({ length: 10 }, (_, index) => ({ ...list, id: index }));

export { generateDummyList } 