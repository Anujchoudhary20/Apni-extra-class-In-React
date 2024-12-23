import React from "react";

const Vocabulary = () => {
  const vocabulary_words = [
    
    
    {
      word: "Compassion",
      meaning: "दया",
    },
    {
      word: "Benevolent",
      meaning: "दयालु",
    },
    {
      word: "Arrogant",
      meaning: "अभिमानी",
    },
    {
      word: "Eloquent",
      meaning: "वाक्पटु",
    },
    {
      word: "Diligent",
      meaning: "परिश्रमी",
    },
    {
      word: "Obsolete",
      meaning: "पुराना",
    },
    {
      word: "Plethora",
      meaning: "प्रचुरता",
    },
    {
      word: "Sagacious",
      meaning: "बुद्धिमान",
    },
    {
      word: "Vivacious",
      meaning: "चंचल",
    },
    {
      word: "Impeccable",
      meaning: "निर्दोष",
    },
    {
      word: "Indignant",
      meaning: "क्रोधित",
    },
    {
      word: "Transient",
      meaning: "अस्थायी",
    },
    {
      word: "Inundate",
      meaning: "डुबो देना",
    },
    {
      word: "Perplex",
      meaning: "उलझन में डालना",
    },
    {
      word: "Pristine",
      meaning: "शुद्ध",
    },
    {
      word: "Reverence",
      meaning: "सम्मान",
    },
    {
      word: "Ambiguous",
      meaning: "अस्पष्ट",
    },
    {
      word: "Candid",
      meaning: "स्पष्टवादी",
    },
    {
      word: "Frivolous",
      meaning: "तुच्छ",
    },
    {
      word: "Nostalgia",
      meaning: "स्मरण",
    },
    {
      word: "Resilient",
      meaning: "लचीला",
    },
    {
      word: "Taciturn",
      meaning: "अल्पभाषी",
    },
    {
      word: "Venerate",
      meaning: "पूजना",
    },
    {
      word: "Zealous",
      meaning: "उत्साही",
    },
    {
      word: "Abate",
      meaning: "घटाना",
    },
    {
      word: "Alleviate",
      meaning: "कम करना",
    },
    {
      word: "Bolster",
      meaning: "समर्थन करना",
    },
    
    {
      word: "Defer",
      meaning: "विलंब करना",
    },
    {
      word: "Eclectic",
      meaning: "विविध",
    },
    {
      word: "Fathom",
      meaning: "समझना",
    },
    {
      word: "Gregarious",
      meaning: "मिलनसार",
    },
    {
      word: "Haughty",
      meaning: "घमंडी",
    },
    {
      word: "Jubilant",
      meaning: "आनंदित",
    },
    {
      word: "Kinship",
      meaning: "निकटता",
    },
    {
      word: "Lucid",
      meaning: "स्पष्ट",
    },
    {
      word: "Mundane",
      meaning: "साधारण",
    },
    {
      word: "Nurture",
      meaning: "पोषण करना",
    },
    {
      word: "Ostentatious",
      meaning: "दिखावटी",
    },
    {
      word: "Placid",
      meaning: "शांत",
    },
    {
      word: "Quaint",
      meaning: "अजीब",
    },
    {
      word: "Reclusive",
      meaning: "एकांतप्रिय",
    },
    {
      word: "Scrutiny",
      meaning: "जांच",
    },
    {
      word: "Tenacious",
      meaning: "दृढ़",
    },
    {
      word: "Ubiquitous",
      meaning: "सर्वव्यापी",
    },
    {
      word: "Whimsical",
      meaning: "सनकी",
    },
    {
      word: "Yearn",
      meaning: "तड़पना",
    },
    {
      word: "Zenith",
      meaning: "शिखर",
    },

    {
      word: "Curiosity",
      meaning: "उत्सुकता",
    },
    {
      word: "Pounce",
      meaning: "झपटना",
    },
    {
      word: "Overture",
      meaning: "हाव-भाव",
    },
    {
      word: "Drought",
      meaning: "सुखा",
    },
    {
      word: "Inundation",
      meaning: "बाढ़",
    },
    {
      word: "Gambol",
      meaning: "मौज मस्ती",
    },
    {
      word: "Pilgrim",
      meaning: "तीर्थयात्री",
    },
    {
      word: "Imposter",
      meaning: "बहरूपिया",
    },
    {
      word: "Solitary",
      meaning: "अकेला",
    },
    {
      word: "Starvation",
      meaning: "भुखमरी",
    },
    {
      word: "Thrifty",
      meaning: "कंजूस",
    },
    {
      word: "Daring",
      meaning: "साहसी",
    },
    {
      word: "Detect",
      meaning: "पता लगाना",
    },
    {
      word: "Absurd",
      meaning: "बेतुका",
    },
    {
      word: "Diligent",
      meaning: "मेहनती",
    },
    {
      word: "Conquest",
      meaning: "विजय",
    },
    {
      word: "Lunatic",
      meaning: "पागल",
    },
    {
      word: "Furious",
      meaning: "भयंकर",
    },
    {
      word: "Nimble",
      meaning: "फुर्तीला",
    },
    {
      word: "Awkward",
      meaning: "बेढंगा",
    },
    {
      word: "Precise",
      meaning: "सटीक",
    },
    {
      word: "Firm",
      meaning: "मजबूत",
    },
    {
      word: "Dejection",
      meaning: "निराशा",
    },
    {
      word: "Consent",
      meaning: "सहमती",
    },
    {
      word: "Blissful",
      meaning: "अति प्रसन्न",
    },
    {
      word: "Superstition",
      meaning: "अन्धविश्वास",
    },
    {
      word: "Fictional",
      meaning: "काल्पनिक",
    },
    {
      word: "Discrimination",
      meaning: "भेदभाव",
    },
    {
      word: "Conventional",
      meaning: "पारंपरिक",
    },
    {
      word: "Desperation",
      meaning: "बेचैनी",
    },
    {
      word: "Fascinated",
      meaning: "आकर्षित",
    },
    {
      word: "Ruinous",
      meaning: "वेनाश्कारी",
    },
    {
      word: "Genuine",
      meaning: "वास्तविक",
    },
    {
      word: "Gloomy",
      meaning: "निराशाजनक",
    },
    {
      word: "Prudent",
      meaning: "समझदार",
    },
    {
      word: "Novice",
      meaning: "नौसिखिया",
    },
    {
      word: "Veteran",
      meaning: "अनुभवी",
    },
    {
      word: "Winsome",
      meaning: "मनोहर",
    },
    {
      word: "Luminous",
      meaning: "चमकीला",
    },
    {
      word: "Veneration",
      meaning: "श्रधा, आदर",
    },
    {
      word: "Haphazard",
      meaning: "अस्त-व्यस्त",
    },
    {
      word: "Manifestation",
      meaning: "अभिव्यक्ति",
    },
    {
      word: "Pervasiveness",
      meaning: "विस्तार, व्यापकता",
    },
    {
      word: "Desecration",
      meaning: "पवित्रता का हनन",
    },
    {
      word: "Anticipate",
      meaning: "पूर्वानुमान करना",
    },
    {
      word: "Contemplate",
      meaning: "विचार करना",
    },
    {
      word: "Vacillate",
      meaning: "डगमगाना",
    },
    {
      word: "Unpretentious",
      meaning: "सरल, दिखावा नहीं करने वाला",
    },
    {
      word: "Megalomaniac",
      meaning: "अहंकारी, घमंडी",
    },
  ];

  return (
    <div className="vocab">
      <h1 className="heading1">TO DAY VOCABULARY</h1>
      <div className="section1">
        <p>
          Aaj ke session mein hum vocabulary seekhenge. Iss page mein humne 250+
          vocabulary words likh diye hain jo aapki English seekhne mein madad
          karenge. Hum yeh maante hain ki ek majboot vocabulary banana kisi bhi
          bhasha ko sikhne ka ek mahatvapurna pehlu hai. Yeh aapke communication
          skills ko nahi badhata hai balki aapki khud ko prabhavit roop se vyakt
          karne ki aatmavishwas ko bhi badhata hai. Aur bhi aage badhne ke liye,
          hum roz is list ko naye 150+ shabdon ke saath update karenge. Toh bane
          rahiye aur seekhte rahiye!
        </p>
      </div>
      <ul className="vocabulary">
        {vocabulary_words.map((item) => (
          <li key={item.meaning}>
            {" "}
            {item.word} - {item.meaning}
          </li>
        ))}
      </ul>
      {/* <div class="section1"><P>
        Here's the translated version in <br/>
        "Today, it is hoped that you have read everything on this page and tried to learn something. For today, that's all. <br/> Thanks."
        </P></div> */}
    </div>
  );
};

export default Vocabulary;
