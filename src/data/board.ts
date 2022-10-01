export interface BoardMember {
    name: string;
    title: string;
    email: string;
    description?: string;
    phone?: string
    username?: string;
    image?: string;
}

export const boardData : BoardMember[] = [
    {
        title: "Puheenjohtaja",
        name: "Meri Hiipakka",
        email: "puheenjohtaja@as.fi",
        phone: "+358 451239772",
        username: "Merisku",
        description: "Johtaa hallitusta ja sitä kautta koko killan toimintaa.\nOta yhteyttä puheenjohtajaan, jos asiasi koskee kiltaa tai et tiedä keneen ottaa yhteyttä."
    },
    {
        title: "Varapuheenjohtaja",
        name: "Aino Valkama",
        email: "varapuheenjohtaja@as.fi",
        phone: "+358 445100902",
        username: "kuningasaino",
        description: "Avustaa puheenjohtajaa ja hoitaa sihteerin tehtäviä. Vastaa pöytäkirjojen tekemisestä hallituksen ja killan kokouksista sekä kiltaa koskevan materiaalin arkistoinnista huolehtimisesta."
    },
    {
        title: "Rahastonhoitaja",
        name: "Lucas Käldström",
        email: "rahastonhoitaja@as.fi",
        phone: "+358 458911847",
        username: "luxask",
        description: "Huolehtii killan raha-asioista, kuten laskujen maksamisesta ja kirjanpidosta.\nOta yhteyttä rahastonhoitajaan raha-asioissa."
    },
    {
        title: "Viestintämestari",
        name: "Meri Hildén",
        email: "viestintamestari@as.fi",
        phone: "+358 505390911",
        username: "merinomainen",
        description: "Vastaa jäsenistön tiedottamisesta lähettämällä tiedotteita ja ylläpitämällä kalenteria. Viestintämestari pitää ajan tasalla myös killan sähköpostilistoja ja nettisivujen sisältöä.\nOta yhteyttä viestintämestariin halutessasi tiedottaa killisteille jotakin."
    },
    {
        title: "Fuksikapteeni",
        name: "Joonas Törmälä",
        email: "fuksikapteeni@as.fi",
        phone: "+358 405690098",
        username: "miljoonas",
        description: "Vastaa killan fuksikasvatuksesta ja -toiminnasta. Järjestää fuksitapahtumia killan, korkeakoulun sekä yliopiston muiden fuksikapteenien kanssa. Toimii esimerkkinä ja tukena fukseille. Työskentelee yhteistyössä ISOpomon kanssa."
    },
    {
        title: "Fuksikapteeni",
        name: "Arttu Pahta",
        email: "fuksikapteeni@as.fi",
        phone: "+358 400581499",
        username: "arupto",
        description: "Vastaa killan fuksikasvatuksesta ja -toiminnasta. Järjestää fuksitapahtumia killan, korkeakoulun sekä yliopiston muiden fuksikapteenien kanssa. Toimii esimerkkinä ja tukena fukseille. Työskentelee yhteistyössä ISOpomon kanssa."
    },
    {
        title: "Master and International Student Captain",
        name: "Oskari Helosuo",
        email: "misc@as.fi",
        phone: "+358 404126758",
        username: "helosuo",
        description: "Vastaa killan kansainvälisten ja maisteriopiskelijoiden fuksikasvatuksesta ja -toiminnasta. Työskentelee yhteistyössä fuksikapteenien ja ISOpomon kanssa. Ota yhteyttä MISC:iin jos asiasi koskee kansainvälistä toimintaa."
    },
    {
        title: "ISOpomo",
        name: "Leevi Hormaluoma",
        email: "isopomo@as.fi",
        phone: "+358 400366690",
        username: "leevihormaluoma",
        description: "Organisoi ISOhenkilöiden rekryämisen, koulutuksen ja yleisen toiminnan. Työskentelee yhteistyössä fuksikapteenien kanssa."
    },
    {
        title: "Isäntä",
        name: "Kiira Metsoila",
        email: "ie@as.fi",
        phone: "+358 451373142",
        username: "Kiiraiitu",
        description: "Järjestää yhdessä Emännän kanssa kiltalaisille mitä moninaisimpia tapahtumia ja huolehtii elintarvikkeiden välittämisestä killistien vatsalaukkuihin. Organisoi huvitoimikunnan toimintaa ja kehittää killan tapahtumakulttuuria.\nOta yhteyttä IE:hen, jos asiasi koskee killan tapahtumia."
    },
    {
        title: "Emäntä",
        name: "Jimi Oksman",
        email: "ie@as.fi",
        phone: "+358 451240250",
        username: "jimboksman",
        description: "Järjestää yhdessä Isännän kanssa kiltalaisille mitä moninaisimpia tapahtumia ja huolehtii elintarvikkeiden välittämisestä killistien vatsalaukkuihin. Organisoi huvitoimikunnan toimintaa ja kehittää killan tapahtumakulttuuria.\nOta yhteyttä IE:hen, jos asiasi koskee killan tapahtumia."
    },
    {
        title: "Opintomestari",
        name: "Pinja Mäkeläinen",
        email: "opintomestari@as.fi",
        phone: "+358 451295527",
        username: "Pinjaatti",
        description: "Ylläpitää yhteyttä koulun henkilökuntaan, pitää itsensä tietoisena tutkinto-ohjelmassa tapahtuvista muutoksista ja vastaa kiltalaisten edunvalvonnasta. Johtaa killan opintotoimikuntaa.\nOpintomestariin voi ottaa yhteyttä opintoihin liittyvissä asioissa."
    },
    {
        title: "Yrityssuhdevastaava",
        name: "Roope Järvinen",
        email: "yrityssuhdevastaava@as.fi",
        phone: "+358 403584060",
        username: "roopej",
        description: "Vastaa killan suhteista yrityksiin ja excursioiden järjestämisestä. Organisoi killan mainosmyyntiä sekä kehittää killan mainetta ja kunniaa yritysten silmissä. Johtaa killan yrityssuhdetoimikuntaa. \nOta yhteyttä yrityssuhdemestariin, jos asiasi liittyy yrityssuhteisiin."
    },
    {
        title: "Kulttuurimestari",
        name: "Juha Lehto",
        email: "kulttuurimestari@as.fi",
        phone: "+358 451105095",
        username: "juhaab",
        description: "Pitää yllä killan vanhoja ulkosuhteita sekä luo uusia. Johtaa kulttuuritoimikuntaa ja järjestää sen jäsenten kanssa killale kulttuuritapahtumia. Tykkää pitää yhteyttä moneen eri tahoon ja hengailla myös muun kuin violetin väristen ihmisten kanssa.\nOta yhteyttä kulttuurimestariin, jos asiasi liittyy kulttuuriasioihin."
    }
]

