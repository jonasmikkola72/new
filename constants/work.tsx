import { ImageType } from "../types";

type ItemsType = {
    title: string;
    color: string;
    image: any;
    content: any;
};

const items: ItemsType[] = [
    {
        title: "Import data",
        color: "#1F3D8B",
        image: {
            src: "/images/content/build-your-colony.png",
            width: 450,
            height: 450,
            alt: "Build your character",
        },
        content: (
            <>
                <p>
                Get started by integrating your knowledge base. Whether it's through an API or a direct upload, you can feed HappyBots a wide variety of documents, such as product catalogs or service manuals. Alternatively, provide your website URL, and HappyBots will autonomously crawl your site, compiling all the necessary information to serve as its knowledge base.
                </p>
            </>
        ),
    },
    {
        title: "Personalize",
        color: "#1F3D8B",
        image: {
            src: "/images/content/details-pic-2.png",
            width: 450,
            height: 450,
            alt: "Battle enemies",
        },
        content: (
            <>
                <p>
                Choose from a range of pre-designed bot personas or create your own to better match your brand's style. Customize the dialogue, set the tone of responses, and select a visual theme that aligns with your website's design to provide a coherent and branded user experience.


                </p>
            </>
        ),
    },
    {
        title: "Install",
        color: "#1F3D8B",
        image: {
            src: "/images/content/details-pic-3.png",
            width: 450,
            height: 450,
            alt: "Build your colony",
        },
        content: (
            <>
                <p>
                Embedding HappyBots onto your site is hassle-free. With a few lines of code, you can place the chat widget directly onto your web pages. This widget is the portal through which users will interact with HappyBots, offering them immediate assistance and support.
                </p>
            </>
        ),
    },
    {
        title: "Connect",
        color: "#1F3D8B",
        image: {
            src: "/images/content/characters/image-8.png",
            width: 450,
            height: 450,
            alt: "Rank up!",
        },
        content: (
            <>
                <p>
                Integrate HappyBots with your existing ecosystem. Whether it's Slack for internal communication, WhatsApp for customer outreach, or Zapier to connect various apps, HappyBots is designed to work seamlessly within your operational toolkit, enhancing your workflow and customer interactions.
                </p>
            </>
        ),
    }
];

export { items };
