import React from 'react'

const Sentense = () => {
    const Sentense_word =[
        {
            "english": "Hello",
            "hindi": "नमस्ते (Namaste)"
        },
        {
            "english": "How are you?",
            "hindi": "आप कैसे हैं? (Aap kaise hain?)"
        },
        {
            "english": "What is your name?",
            "hindi": "आपका नाम क्या है? (Aapka naam kya hai?)"
        },
        {
            "english": "Where are you from?",
            "hindi": "आप कहाँ से हैं? (Aap kahan se hain?)"
        },
        {
            "english": "I am fine, thank you.",
            "hindi": "मैं ठीक हूँ, धन्यवाद। (Main theek hoon, dhanyavaad.)"
        },
        {
            "english": "Nice to meet you.",
            "hindi": "आपसे मिलकर खुशी हुई। (Aapse milkar khushi hui.)"
        },
        {
            "english": "Excuse me.",
            "hindi": "माफ़ कीजिये। (Maaf kijiye.)"
        },
        {
            "english": "Thank you.",
            "hindi": "धन्यवाद। (Dhanyavaad.)"
        },
        {
            "english": "You're welcome.",
            "hindi": "स्वागतम्। (Svaagatam.)"
        },
        {
            "english": "Yes",
            "hindi": "हाँ (Haan)"
        },
        {
            "english": "No",
            "hindi": "नहीं (Nahin)"
        },
        {
            "english": "Please.",
            "hindi": "कृपया। (Kripaya.)"
        },
        {
            "english": "I don't understand.",
            "hindi": "मुझे समझ नहीं आया। (Mujhe samajh nahin aaya.)"
        },
        {
            "english": "Can you help me?",
            "hindi": "क्या आप मेरी मदद कर सकते हैं? (Kya aap meri madad kar sakte hain?)"
        },
        {
            "english": "Where is the bathroom?",
            "hindi": "शौचालय कहाँ है? (Shauchalay kahan hai.)"
        },
        {
            "english": "I love you.",
            "hindi": "मैं तुमसे प्यार करता/करती हूँ। (Main tumse pyaar karta/karti hoon.)"
        },
        {
            "english": "I miss you.",
            "hindi": "मुझे तुम्हारी याद आती है। (Mujhe tumhari yaad aati hai.)"
        },
        {
            "english": "How much does it cost?",
            "hindi": "यह कितने का है? (Yah kitne ka hai.)"
        },
        {
            "english": "What time is it?",
            "hindi": "कितने बजे हैं? (Kitne baje hain.)"
        },
        {
            "english": "Where is the nearest bank?",
            "hindi": "सबसे नजदीकी बैंक कहाँ है? (Sabse nazdeeki bank kahan hai.)"
        },
        {
            "english": "I am hungry.",
            "hindi": "मुझे भूख लगी है। (Mujhe bhook lagi hai.)"
        },
        {
            "english": "I am thirsty.",
            "hindi": "मुझे प्यास लगी है। (Mujhe pyaas lagi hai.)"
        },
        {
            "english": "Can I have the menu, please?",
            "hindi": "कृपया मेन्यू देने का स्वाध्याय कर सकते हैं? (Kripaya menu dene ka swaadhyaay kar sakte hain?)"
        },
        {
            "english": "I would like a coffee.",
            "hindi": "मुझे एक कॉफ़ी चाहिए। (Mujhe ek coffee chahiye.)"
        },
        {
            "english": "Where is the nearest hospital?",
            "hindi": "सबसे नजदीकी अस्पताल कहाँ है? (Sabse nazdeeki aspatal kahan hai.)"
        },
        {
            "english": "How can I get to the airport?",
            "hindi": "मैं हवाई अड्डे कैसे पहुँच सकता/सकती हूँ? (Main hawai adda kaise pahunch sakta/sakti hoon.)"
        },
        {
            "english": "What is your profession?",
            "hindi": "आपका पेशा क्या है? (Aapka pesha kya hai.)"
        },
        {
            "english": "Can you repeat that, please?",
            "hindi": "क्या आप उसे दोहरा सकते हैं? (Kya aap use dohara sakte hain?)"
        },
        {
            "english": "Where can I buy a ticket?",
            "hindi": "मैं कहाँ से टिकट ख़रीद सकता/सकती हूँ? (Main kahan se ticket khareed sakta/sakti hoon.)"
        },
        {
            "english": "What is your phone number?",
            "hindi": "आपका फ़ोन नंबर क्या है? (Aapka phone number kya hai.)"
        },
        {
            "english": "How old are you?",
            "hindi": "आपकी उम्र कितनी है? (Aapki umr kitni hai.)"
        },
        {
            "english": "Where is the nearest restaurant?",
            "hindi": "सबसे नजदीकी रेस्टोरेंट कहाँ है? (Sabse nazdeeki restaurant kahan hai.)"
        },
        {
            "english": "What is the weather like today?",
            "hindi": "आज का मौसम कैसा है? (Aaj ka mausam kaisa hai.)"
        },
        {
            "english": "Can you speak slower, please?",
            "hindi": "क्या आप धीमे आवाज़ में बोल सकते हैं? (Kya aap dheeme aawaz mein bol sakte hain.)"
        },
        {
            "english": "How far is it?",
            "hindi": "यह कितनी दूर है? (Yah kitni door hai.)"
        },
        {
            "english": "Can you recommend a good hotel?",
            "hindi": "क्या आप एक अच्छा होटल सुझा सकते हैं? (Kya aap ek achha hotel sujha sakte hain.)"
        },
        {
            "english": "I have a reservation.",
            "hindi": "मेरी बुकिंग है। (Meri booking hai.)"
        },
        {
            "english": "What is the Wi-Fi password?",
            "hindi": "वाई-फ़ाई का पासवर्ड क्या है? (Wi-Fi ka password kya hai.)"
        },
        {
            "english": "Can I have the bill, please?",
            "hindi": "कृपया बिल देने का स्वाध्याय कर सकते हैं? (Kripaya bill dene ka swaadhyaay kar sakte hain.)"
        },
        {
            "english": "I need a doctor.",
            "hindi": "मुझे एक डॉक्टर की ज़रूरत है। (Mujhe ek doctor ki zarurat hai.)"
        },
        {
            "english": "How long will it take?",
            "hindi": "यह कितना समय लगेगा? (Yah kitna samay lagega.)"
        },
        {
            "english": "Can you recommend a good restaurant?",
            "hindi": "क्या आप एक अच्छा रेस्टोरेंट सुझा सकते हैं? (Kya aap ek achha restaurant sujha sakte hain.)"
        },
        {
            "english": "Where can I find an ATM?",
            "hindi": "मैं ATM कहाँ ढूँढ सकता/सकती हूँ? (Main ATM kahan dhoondh sakta/sakti hoon.)"
        },
        {
            "english": "Do you accept credit cards?",
            "hindi": "क्या आप क्रेडिट कार्ड स्वीकार करते हैं? (Kya aap credit card sveekar karte hain.)"
        },
        {
            "english": "How can I get to the train station?",
            "hindi": "मैं रेलवे स्टेशन कैसे पहुँच सकता/सकती हूँ? (Main railway station kaise pahunch sakta/sakti hoon.)"
        },
        {
            "english": "I don't have any cash.",
            "hindi": "मेरे पास कोई नकदी नहीं है। (Mere paas koi nakad nahi hai.)"
        },
        {
            "english": "Can you speak English?",
            "hindi": "क्या आप अंग्रेज़ी बोल सकते हैं? (Kya aap angrezi bol sakte hain.)"
        },
        {
            "english": "Can you show me on the map?",
            "hindi": "क्या आप मुझे मानचित्र पर दिखा सकते हैं? (Kya aap mujhe manchitra par dikhha sakte hain.)"
        },
        {
            "english": "What is the nearest subway station?",
            "hindi": "सबसे नजदीकी मेट्रो स्टेशन कौनसा है? (Sabse nazdeeki metro station kaunsa hai.)"
        },
        {
            "english": "I need help.",
            "hindi": "मुझे मदद की ज़रूरत है। (Mujhe madad ki zarurat hai.)"
        },
        {
            "english": "Can you recommend a good book?",
            "hindi": "क्या आप एक अच्छी किताब सुझा सकते हैं? (Kya aap ek achhi kitaab sujha sakte hain.)"
        },
        {
            "english": "I am tired.",
            "hindi": "मैं थक गया/गई हूँ। (Main thak gaya/gayi hoon.)"
        },
        {
            "english": "I am happy.",
            "hindi": "मैं खुश हूँ। (Main khush hoon.)"
        },
        {
            "english": "I am sad.",
            "hindi": "मैं उदास हूँ। (Main udaas hoon.)"
        },
        {
            "english": "What do you like to do?",
            "hindi": "आपको क्या करना पसंद है? (Aapko kya karna pasand hai.)"
        },
        {
            "english": "What is your favorite food?",
            "hindi": "आपका पसंदीदा खाना क्या है? (Aapka pasandida khana kya hai.)"
        },
        {
            "english": "What is your favorite color?",
            "hindi": "आपका पसंदीदा रंग क्या है? (Aapka pasandida rang kya hai.)"
        },
        {
            "english": "Can I take a picture?",
            "hindi": "क्या मैं एक तस्वीर ले सकता/सकती हूँ? (Kya main ek tasveer le sakta/sakti hoon.)"
        },
        {
            "english": "It was nice talking to you.",
            "hindi": "आपसे बात करके अच्छा लगा। (Aapse baat karke achha laga.)"
        },
        {
            "english": "Goodbye.",
            "hindi": "अलविदा। (Alvida.)"
        }
    ]
    
  return (
    <div className="sentences">
    <h1 className="heading">TO DAY SENTENCES</h1>
    <ul>
        { Sentense_word.map((item)=>(
            <li key={item.english} style={{margin:"10px",fontSize:"30px"}}>{item.english} - {item.hindi}</li>
        ))

        }
    </ul>
   </div>
  )
}

export default Sentense