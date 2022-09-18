interface Official {
    name: string;
    title: string;
    image?: string;
    leader?: boolean;
}

interface Committee {
    name: string;
    members: Official[];
}

export const officialsData : Committee[] = [
    {
        name: "Fuksitoimikunta",
        members: [
            { name: "Etunimi Sukunimi", title: "Fuksikapteeni", leader: true },
            { name: "Etunimi Sukunimi", title: "Fuksikapteeni", leader: true },
            { name: "Etunimi Sukunimi", title: "Tosi ISOpomo" },
            { name: "Etunimi Sukunimi", title: "SuurFuksikapteeni" },
            { name: "Pitkäetunimi Pitkäsukunimi", title: "Tosi-ISO" },
            { name: "Etunimi", title: "Senior Master's and International Student Captain" },
            { name: "Etunimi", title: "Tosi-ISO" },
            { name: "Etunimi", title: "Tosi-ISO" },
            { name: "Etunimi", title: "Tosi-ISO" },
        ]
    }
]
