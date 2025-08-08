export type Social = { youtube: string; instagram: string; facebook: string; spotify: string };
export type AudioSample = { title: string; src?: string };

export const site: { title: string; description: string; social: Social } = {
  title: "Tricia Arden Caldwell",
  description: "Official site of composer and creator Tricia Arden Caldwell.",
  social: {
    youtube: "#",
    instagram: "#",
    facebook: "#",
    spotify: "#",
  },
};

export const about: { image: string; html: string } = {
  image: "bio/C0A4BB18-2906-4342-8409-D9E0F70F2CBB.jpeg",
  html: `<p>Full biography coming soon.</p>`,
};

export const wakeUp: {
  title: string;
  synopsis: string;
  gallery: string[];
  video: { youtubeId?: string; fallbackSrc?: string; poster?: string; title: string; credit?: string };
} = {
  title: "WAKE UP — The Musical",
  synopsis:
    `In the wake of her mother’s death, Lisa embarks on a quest in the forest, where she meets several uniquely Canadian animals that will guide her out of the forest and back home. WAKE UP is a coming-of-age story for a young adult audience that plays with concepts of logic and literary absurdity.\n\nHare drives the journey forward, pulling Lisa into the forest’s strange rhythms. Ruth, his grounded wife, encourages reflection and emotional honesty. Vixen, the fox, disrupts Lisa’s path, forcing her to confront fear, doubt, and desire.\n\nThe solemn, eclectic, yet triumphant songs evoke the melodies of our natural Canadian heritage while playing on the tender idea that you are never quite alone when walking in the dark.`,
  gallery: [
    "wakeup/WAKEUP.1.jpg",
    "wakeup/WAKEUP.2.jpg",
    "wakeup/WAKEUP.3.jpg",
    "wakeup/WAKEUP.4.jpg",
    "wakeup/WAKEUP.5.jpg",
    "wakeup/WAKEUP.12.jpg",
    "wakeup/WAKEUP.14.jpg",
  ],
  video: {
    youtubeId: "",
    fallbackSrc: "",
    poster: "wakeup/WAKEUP.3.jpg",
    title: "Remember Me (excerpt) - WAKE UP",
    credit: "Musical Arrangements by Jean-Philippe Côté",
  },
};

export const scl: {
  title: string;
  dates: string[];
  ticketUrl: string;
  synopsis: string;
  cast: { role: string; performer: string; image?: string }[];
  credits: { label: string; value: string }[];
} = {
  title: "Soul Crushing Love",
  dates: [
    "September 18",
    "September 19",
    "September 20",
    "September 26",
    "September 27",
  ],
  ticketUrl: "https://example.com/tickets",
  synopsis:
    `In West Gate, Manitoba, behind old money-locked gates, a gunshot shatters a family.\nAgainst a backdrop of simmering tensions, secrets, and psychosocial dysfunctions, a\nmurder rocks the King family, revealing their shattered facade.\n\nCorey King, a respected lawyer, and his wife May, owner of soul crushing love, navigate\ncomplex relationships with their daughters Molly and Maggie. Corey's abuse and affairs\nstrain bonds, while May grapples with her constant search for identity.\n\nAs Molly rebels against her predetermined future and Maggie seeks recognition, the\nfamily confronts the tangled web of events leading up to the murder, uncovering hidden\ntruths and unsettling revelations along the way.`,
  cast: [
    { role: "May King", performer: "Élisabeth Lavoie", image: "scl/May.jpg" },
    { role: "Maggie King", performer: "Emma Russell-Parent", image: "scl/Maggie.jpg" },
    { role: "Molly King", performer: "Sofia Buijs" },
    { role: "Corey King", performer: "Julian Dawson", image: "scl/Corey.JPG" },
    { role: "Brett King", performer: "Jérémy Levesque", image: "scl/Brett.jpg" },
    { role: "Désirée Beauregard", performer: "Marine Boulianne", image: "scl/Désirée.jpg" },
    { role: "Angélie Aubé", performer: "Camille Paré" },
    { role: "Ophélie (Fée) Leduc & Maid #2", performer: "Laurie Tremblay", image: "scl/Fée.jpg" },
    { role: "Noémie (Nomie) Rousseau", performer: "Coralie Vigneault", image: "scl/Nomie.jpg" },
    { role: "Charlie Tremblay", performer: "Anne Payer", image: "scl/Charlie.jpg" },
    { role: "Gigi Jolicoeur", performer: "Gigi Mitchell", image: "scl/Gigi.jpg" },
    { role: "Mattéo (Matt) Marcoux", performer: "Gabriel Sénéchal", image: "scl/Matt.JPG" },
    { role: "Daniel Silver (né Sylvain)", performer: "Dominic Cardinal", image: "scl/Daniel.jpg" },
    { role: "Kelsey Penner", performer: "Tania Chamberland-Garcia" },
    { role: "Kennedy Friesen", performer: "Anne-Virginie Bérubé" },
    { role: "Émilie (Milly) Laforest", performer: "Alicia Savard", image: "scl/Milly.jpg" },
    { role: "Corey (C-Jay) King Junior", performer: "Claire Smith" },
    { role: "Young Molly King", performer: "Niamh Kinsella Frenette", image: "scl/YoungMolly.jpg" },
    { role: "Young Maggie King", performer: "Aurelia Kinsella Frenette", image: "scl/YoungMaggie.JPG" },
    { role: "Dancer & Maid #1", performer: "Amanda Kusler" },
    { role: "Dean & Client", performer: "Jérémie Garneau" },
    { role: "Fanny White", performer: "Émilie Evans" },
    { role: "Client & Guard", performer: "Renaud Boulanger Levesque" },
  ],
  credits: [
    { label: "Creator, Producer, & Vocal Director", value: "Tricia Arden Caldwell" },
    { label: "Director", value: "Nathalie Peron" },
    { label: "Choreographer", value: "Amanda Kusler" },
    { label: "Stage Manager & HR", value: "Jean Russell" },
    { label: "Artistic Director", value: "Julian Dawson" },
    { label: "Set & Costume Design", value: "Tricia Arden Caldwell" },
    { label: "Make-up Artists", value: "Sofia Buijs & Sophie Demers" },
  ],
};

export const miscMusic: { title: string; blurb: string; samples: AudioSample[] } = {
  title: "Miscellaneous Music",
  blurb: "Children’s, Christmas, and more. Audio samples coming soon.",
  samples: [
    // { title: "Sample Title", src: "music/sample-1.mp3" },
  ],
};
