import { v4 as uuidv4 } from 'uuid';

const data = [
    {
        name: "Beaver Creek",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Daylight",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Keep Going",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Nightfall",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Reflection",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Under the City Stars",
        cover:
            "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Water Fountain",
        cover:
            require("./music/Alec-Benjamin-waterFountain.jpg"),
        artist: "Alec Benjamin",
        audio: require("./music/Alec-Benjamin-waterFountain.mp3"),
        color: ["#91A6BF", "#D9906E"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Yellow",
        cover:
            require("./music/Coldplay-Yellow.jpeg"),
        artist: "Coldplay",
        audio: require("./music/Coldplay-Yellow.mp3"),
        color: ["#C98C38", "#BB7629"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Another Love",
        cover:
            require("./music/TomOdell-AnotherLove.jpg"),
        artist: "Tom Odell",
        audio: require("./music/TomOdell-AnotherLove.mp3"),
        color: ["#0A5D82", "#4548E2"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Paradise",
        cover:
            require("./music/coldplay-paradise.jpg"),
        artist: "Coldplay",
        audio: require("./music/coldplay-paradise.mp3"),
        color: ["#FDF843", "#C958C2"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Let Her Go",
        cover:
            require("./music/passenger.jpg"),
        artist: "Passenger",
        audio: require("./music/passenger.mp3"),
        color: ["#E2E4E2", "#6F6F76"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Counting Stars",
        cover:
            require("./music/counting-stars.jpeg"),
        artist: "One Republic",
        audio: require("./music/counting-stars.mp3"),
        color: ["#C1483A","#7C94A0"],
        id: uuidv4(),
        active: false,
    },
    {
        name: "Believer",
        cover:
            require("./music/believer-imagine.jpeg"),
        artist: "Imagine",
        audio: require("./music/believer-imagine.mp3"),
        color: ["#DD4B44", "#E1B415"],
        id: uuidv4(),
        active: false,
    },
    //ADD MORE HERE
];

export default data