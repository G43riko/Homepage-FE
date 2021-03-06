export function getImageTemplate(type: "avatar"): string {
    const getType = (): string => {
        switch (type) {
            case "avatar": return "127x180";
        }
    };

    return `https://dummyimage.com/${getType()}/000/fff`;
}
