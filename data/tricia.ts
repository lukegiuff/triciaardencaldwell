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
  html: `
    <div class="space-y-6">
      <p class="text-lg leading-relaxed text-gray-700 font-medium">
        <strong class="text-gray-900">Tricia Arden Caldwell</strong> is a <em class="text-gradient">Métis bilingual composer, author, educator, and performer</em> whose work lives at the intersection of music, literature, and emotional truth.
      </p>
      
      <p class="leading-relaxed text-gray-700">
        An honours with distinction graduate of the <strong>Royal Conservatory of Music</strong> (Classical Voice, Piano, and Music Theory Level 10, 2005), <strong>University of Manitoba</strong> (BA, English Literature and Music, 2009) and <strong>Université Laval</strong> (MA, Music, 2022), Tricia's creative identity is rooted in classical training and a deep engagement with narrative, culture, and <em>erōs</em>—the conceptual and relational force that animates much of her work.
      </p>
      
      <blockquote class="border-l-4 border-gray-300 pl-6 py-4 bg-gray-50 rounded-r-lg my-8">
        <p class="text-lg italic text-gray-800 leading-relaxed">
          "In my compositions, I seek to build an acoustic world that turns the saddest stories into the sweetest songs."
        </p>
        <cite class="text-sm text-gray-600 not-italic">— Tricia Arden Caldwell</cite>
      </blockquote>
      
      <p class="leading-relaxed text-gray-700">
        Her compositions are intimate and emotionally charged, often transforming sorrow into sonic beauty. This guiding principle is evident in her full-length musicals <strong class="text-gray-900">WAKE UP</strong> (2023) and <em class="font-medium">soul crushing love</em> (2025), as well as in her original score for an upcoming television series.
      </p>
      
      <p class="leading-relaxed text-gray-700">
        A dynamic creator across genres and formats, Tricia is also the author of the musical children's book <em>What Would You Do If a Friend Laughed at You?</em> (2017) and creator of <em>Tunes for Tots</em> (2015). Her earlier poetic and conceptual works include contributions to <em>FAQ Collective</em> (2010), <em>Nolens Volens</em> (2009), and <em>The Manitoban</em> (2006).
      </p>
      
      <p class="leading-relaxed text-gray-700">
        She has presented her original work at conferences including the University of Regina's <strong>Trash Talkin' Pop Culture Conference</strong> (2009) and the <strong>Symposium on Manitoba Writing</strong> (2012), and continues to draw on language, narrative, and emotion in her musical storytelling.
      </p>
      
      <div class="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6 my-8">
        <h3 class="text-lg font-semibold text-amber-900 mb-3 flex items-center">
          <span class="mr-2">🏆</span> Recognition & Awards
        </h3>
        <p class="text-amber-800 leading-relaxed">
          Tricia's artistry has been recognized with numerous awards, including the <strong>Marjorie Hoole Scholarship for Creative Writing</strong> (2009), twice recipient of the <strong>George Taylor Memorial Prize for Literary Arts</strong> (2007, 2008), and creative writing grants from the <strong>Manitoba Arts Council</strong> (2008, 2009). She was also an invited artist and program creator for <strong>Art City</strong>, where she developed <em>Build-a-Book</em>, a unique literary workshop series for children.
        </p>
      </div>
      
      <p class="leading-relaxed text-gray-700">
        With over two decades of experience as a performer and music educator, Tricia brings a spirit of mentorship, collaboration, and care to her creative practice. Her stage work includes lead and supporting roles in <em>The Rocky Horror Show</em> (Janet, 2023), <em>Wake Up</em> (Vixen, 2023), <em>Big Fish</em> (Jenny, 2020), <em>The Fantasticks</em> (Luisa, 2006), <em>The Snow Queen</em> (Gerda, 2001), <em>Godspell</em> (Peggy, 2000), and many more.
      </p>
      
      <p class="text-lg leading-relaxed text-gray-800 font-medium border-t border-gray-200 pt-6 mt-8">
        Now focused full-time on composition, Tricia continues to explore new creative landscapes—blending <span class="text-gradient font-semibold">heart, history, and harmony</span> in every project she undertakes.
      </p>
    </div>
  `,
};

export const wakeUp: {
  title: string;
  synopsis: string;
  gallery: string[];
  video: { youtubeId?: string; fallbackSrc?: string; poster?: string; title: string; credit?: string };
  cast: { role: string; performer: string; category?: string }[];
  credits: { label: string; value: string }[];
  songs: { title: string; characters: string; act?: string }[];
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
    "wakeup/BeaverBrothers.jpg",
    "wakeup/Haresinging.jpg",
  ],
  video: {
    youtubeId: "Y8s0yfk3BXY",
    fallbackSrc: "",
    poster: "wakeup/WAKEUP.3.jpg",
    title: "Remember Me (excerpt) - WAKE UP",
    credit: "Musical Arrangements by Jean-Philippe Côté",
  },
  cast: [
    { role: "Lisa", performer: "Emma Russell-Parent", category: "main" },
    { role: "Narrator", performer: "J.P. Chartier", category: "main" },
    { role: "Mama Wolf", performer: "Nathalie Peron", category: "main" },
    { role: "Hare", performer: "Philippe Girard", category: "main" },
    { role: "Ruth", performer: "Manon Valiquette", category: "main" },
    { role: "Ashley", performer: "Anna Tudor", category: "main" },
    { role: "Andrew", performer: "James Russell-Parent", category: "main" },
    { role: "Eva", performer: "Soledad Celis Godin", category: "main" },
    { role: "Elijah", performer: "Josef Asselin", category: "main" },
    { role: "Isabel", performer: "Anne-Sophie Melançon", category: "main" },
    { role: "Ivy", performer: "Niamh Kinsella Frenette", category: "main" },
    { role: "Vixen", performer: "Tricia Arden Caldwell", category: "main" },
    { role: "Jessica", performer: "Marie Lebossé-Gautron", category: "main" },
    { role: "Jennifer", performer: "Andreea Tudor", category: "main" },
    { role: "Gavia", performer: "Cassandra Lindsay Allard", category: "main" },
    { role: "Justin", performer: "Julian Dawson", category: "main" },
    { role: "Fester", performer: "Edwin-Lain Martineau", category: "main" },
    { role: "Al", performer: "Tony Pelletier", category: "main" },
    { role: "Cain", performer: "Michael Bourguignon", category: "main" },
    { role: "Choir Director", performer: "Jeanne L.G.", category: "choir" },
    { role: "Soloist", performer: "Claudine Forest", category: "soloist" },
    { role: "Soloist", performer: "Sofia Buijs", category: "soloist" },
    { role: "Soloist", performer: "Emma Boardman Hughes", category: "soloist" },
    { role: "Choir Member", performer: "Marie-Claude Talbot", category: "choir" },
    { role: "Choir Member", performer: "Michelle Olaïzola", category: "choir" },
    { role: "Choir Member", performer: "Andrée-Anne Paradis", category: "choir" },
    { role: "Choir Member", performer: "Debbie Frazao Pacheco", category: "choir" },
    { role: "Choir Member", performer: "Nathalie Gagné", category: "choir" },
    { role: "Choir Member", performer: "Léonore Afif", category: "choir" },
    { role: "Choir Member", performer: "Fiona Donnelly-Rheaume", category: "choir" },
  ],
  credits: [
    { label: "Producer", value: "J.P. Chartier" },
    { label: "Director", value: "Anne Payer" },
    { label: "Vocal Director", value: "Tricia Arden Caldwell" },
    { label: "Stage Manager", value: "Jean Russell" },
    { label: "Musical Arrangements", value: "Jean-Philippe Côté" },
  ],
  songs: [
    { title: "Wake Up Call", characters: "Lisa, Ruth, Vixen, Narrator, & Company", act: "ACT I" },
    { title: "Hear My Cry", characters: "Lisa, Ruth, Vixen, & Company" },
    { title: "Carry Home", characters: "Mama Wolf, Lisa, & Vixen" },
    { title: "I Wanna Be Here", characters: "Hare, Ruth, Lisa, & The Levelers" },
    { title: "You Can Stay", characters: "Vixen, Jessica, Jennifer, Mama Wolf" },
    { title: "How It Feels to Die", characters: "Gavia, Lisa, & Hare" },
    { title: "All My Best Friends Are Sellouts", characters: "Justin, Hare, & Company" },
    { title: "Diddly Dah", characters: "The Beaver Brothers & Lisa" },
    { title: "Sacrificial Lamb", characters: "Vixen, Lisa, Jessica, Jennifer, & Company" },
    { title: "Back of Her Grave (Interlude)", characters: "Narrator, Mama Wolf, & Company", act: "ACT II" },
    { title: "Under the Weather (Lullaby)", characters: "Hare & Ruth" },
    { title: "Unto the Depths", characters: "Gavia & Company" },
    { title: "Pure Amour", characters: "Fester & Justin" },
    { title: "Be Free", characters: "Vixen" },
    { title: "Love Remembers", characters: "Hare, Lisa, & Company" },
    { title: "Remember Me", characters: "Mama Wolf, Vixen, Hare, Lisa, & Company" },
    { title: "Father I Never Knew", characters: "Lisa" },
    { title: "The Offering", characters: "Narrator & Company" },
  ],
};

export const scl: {
  title: string;
  dates: string[];
  venue: string;
  ticketUrl: string;
  synopsis: string;
  cast: { role: string; performer: string; image?: string }[];
  credits: { label: string; value: string }[];
  gallery: string[];
  songs: { title: string; characters: string }[];
} = {
  title: "soul crushing love",
  dates: [
    "September 18",
    "September 19",
    "September 20",
    "September 26",
    "September 27",
  ],
  venue: "Le petit théâtre de Québec",
  ticketUrl: "https://lepointdevente.com/billets/soulcrushinglove",
  synopsis:
    `In West Gate, Manitoba, behind old money-locked gates, a gunshot shatters a family.\nAgainst a backdrop of simmering tensions, secrets, and psychosocial dysfunctions, a\nmurder rocks the King family, revealing their shattered facade.\n\nCorey King, a respected lawyer, and his wife May, owner of soul crushing love, navigate\ncomplex relationships with their daughters Molly and Maggie. Corey's abuse and affairs\nstrain bonds, while May grapples with her constant search for identity.\n\nAs Molly rebels against her predetermined future and Maggie seeks recognition, the\nfamily confronts the tangled web of events leading up to the murder, uncovering hidden\ntruths and unsettling revelations along the way.`,
  cast: [
    { role: "May King", performer: "Élisabeth Lavoie", image: "scl/May.jpg" },
    { role: "Maggie King", performer: "Emma Russell-Parent", image: "scl/Maggie.jpg" },
    { role: "Molly King", performer: "Sofia Buijs" },
    { role: "Corey King", performer: "Julian Dawson", image: "scl/Corey.jpeg" },
    { role: "Brett King", performer: "Jérémy Levesque", image: "scl/Brett.jpg" },
    { role: "Désirée Beauregard", performer: "Marine Boulianne", image: "scl/Désirée.jpg" },
    { role: "Angélie Aubé", performer: "Camille Paré" },
    { role: "Ophélie (Fée) Leduc & Maid #2", performer: "Laurie Tremblay", image: "scl/Fée.jpg" },
    { role: "Noémie (Nomie) Rousseau", performer: "Coralie Vigneault", image: "scl/Nomie.jpg" },
    { role: "Charlie Tremblay", performer: "Anne Payer", image: "scl/Charlie.jpg" },
    { role: "Gigi Jolicoeur", performer: "Gigi Mitchell", image: "scl/Gigi.png" },
    { role: "Mattéo (Matt) Marcoux", performer: "Gabriel Sénéchal", image: "scl/Matt.jpeg" },
    { role: "Daniel Silver (né Sylvain)", performer: "Dominic Cardinal", image: "scl/Daniel.jpg" },
    { role: "Kelsey Penner", performer: "Tania Chamberland-Garcia" },
    { role: "Kennedy Friesen", performer: "Anne-Virginie Bérubé" },
    { role: "Émilie (Milly) Laforest", performer: "Alicia Savard", image: "scl/Milly.jpg" },
    { role: "Corey (C-Jay) King Junior", performer: "Claire Smith" },
    { role: "Young Molly King", performer: "Niamh Kinsella Frenette", image: "scl/YoungMolly.jpg" },
    { role: "Young Maggie King", performer: "Aurelia Kinsella Frenette", image: "scl/YoungMaggie.jpeg" },
    { role: "Dancer & Maid #1", performer: "Amanda Kusler" },
    { role: "Dean & Client", performer: "Jérémie Garneau" },
    { role: "Fanny White", performer: "Émilie Evans" },
    { role: "Client & Guard", performer: "Renaud Boulanger Levesque" },
  ],
  credits: [
    { label: "Creator, Producer, & Vocal Director", value: "Tricia Arden Caldwell" },
    { label: "Musical Arranger", value: "Frédérick Desroches" },
    { label: "Director & Set Design", value: "Nathalie Peron" },
    { label: "Costume & Set Decor", value: "Tricia Arden Caldwell" },
    { label: "Choreographer", value: "Amanda Kusler" },
    { label: "Stage Manager & HR", value: "Jean Russell" },
    { label: "Artistic Director", value: "Julian Dawson" },
    { label: "Make-up Artists", value: "Sofia Buijs & Sophie Demers" },
  ],
  gallery: [
    "scl/behindscenes/soulcrushinglove1.jpg",
    "scl/behindscenes/soulcrushinglove2.jpg",
    "scl/behindscenes/soulcrushinglove3.jpg",
    "scl/behindscenes/soulcrushinglove4.jpg",
    "scl/behindscenes/soulcrushinglove5.jpg",
    "scl/behindscenes/soulcrushinglove6.jpg",
    "scl/behindscenes/soulcrushinglove7.jpg",
    "scl/behindscenes/soulcrushinglove8.jpg",
  ],
  songs: [
    { title: "soul crushing love (family portrait)", characters: "Désirée, Gigi, Angélie, May, Molly, Maggie, Corey, Brett, All" },
    { title: "super smiles inside my head", characters: "Young Molly" },
    { title: "crush me harder", characters: "Molly, Corey, May, Maggie" },
    { title: "i rule the school (cool)", characters: "Maggie, Molly, Milly, Fanny" },
    { title: "so", characters: "Brett" },
    { title: "you know wanna be May King", characters: "May, Brett, Ensemble" },
    { title: "soul crushing love (play with me)", characters: "Désirée" },
    { title: "dance, dance, gone", characters: "Désirée, Ensemble" },
    { title: "fuck you", characters: "Angélie, Charlie, Fée, Nomie" },
    { title: "super smiles inside my head reprise", characters: "Young Molly" },
    { title: "my exile (& i love you)", characters: "Corey Jay" },
    { title: "haze", characters: "Maggie, Corey Jay, Milly, Fanny" },
    { title: "sacrifice", characters: "Molly" },
    { title: "morning song", characters: "Molly, Désirée" },
    { title: "realign", characters: "May, Young Maggie, Young Molly, Corey" },
    { title: "high", characters: "Brett, May" },
    { title: "two ladies are better than one bitch", characters: "Corey King, Maid #1, Maid #2" },
    { title: "realign interlude", characters: "May" },
    { title: "crooked Kings", characters: "Gigi, Matt, Daniel, Angélie, Charlie, Gaby, Fée, Nomie, Ensemble" },
    { title: "dance, dance, gone reprise", characters: "Maggie" },
    { title: "soul crushing love (all my life)", characters: "May, Molly, Maggie, All" },
  ],
};

export const miscMusic: { title: string; blurb: string; samples: AudioSample[] } = {
  title: "Miscellaneous Music",
  blurb: "Children’s, Christmas, and more. Audio samples coming soon.",
  samples: [
    // { title: "Sample Title", src: "music/sample-1.mp3" },
  ],
};
