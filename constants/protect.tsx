type ImagesType = {
    src: string;
    width: number;
    height: number;
    alt: string;
};

const images: ImagesType[] = [
    {
        src: "/images/content/spaceship.png",
        width: 446,
        height: 273,
        alt: "Spaceship",
    },
    {
        src: "/images/content/planets/planet-9.png",
        width: 32,
        height: 32,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-11.png",
        width: 114,
        height: 107,
        alt: "Planet",
    },
    {
        src: "/images/content/planets/planet-9.png",
        width: 20,
        height: 20,
        alt: "Planet",
    },
];

const protect: Array<string> = [
    "Effortlessly sync your service manuals, product details, or support scripts. HappyBots turns vast information into accessible, instant customer support.",
    "Choose a bot that fits your brand or customize it to your heart's content. Personalize the conversation flow to ensure a unique user experience.",
    "Integrate HappyBots with your site in few clicks. It's easy to embed, enhancing your customersupport without disrupting your existing setup."
];

export { images, protect };
