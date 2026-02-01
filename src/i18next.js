import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({

    resources: {
      en: {
        translations: {
          "TitleOfWebsite": "Casa Vital",
          "SubTitleOfWebsite": "Apartments hotel",
          "videoLink": "Video",
          "MenuToggleBtn": "Menu ",
          "OurServicesNav": "Services",
          "OurRoomsNav": "Rooms",
          "GalleryNav": "Gallery",
          "AboutUsNav": "About",
          "ContactUsNav": "Contact Us",
          "OurServices": "Our Services",

          "specialprices": "Special Prices!",

          "SendMessage1": "Send us a message NOW,", 
          "SendMessage2": "We'll contact you as soon as possible.", 

          "Send a Message": "Send a Message",
          "buttonTextSendMsgFirst": "Send a Message",
          "buttonTextSendMsg": "Send a Message",
          "buttonTextIsSending": "Is sending...",
          "buttonTextFailed": "Failed, Try again",
          "buttonTextMsgSent": "Message just sent",

          "OurServicesH1": "Airport Pick up & Drop off",
          "OurServicesH2": "Apartments Hotel",
          "OurServicesH3": "Laundry",
          "OurServicesH4": "Private companies",
          "OurServicesH5": "Location",
          "OurServicesH6": "Travel agencies and tour guides",

          "OurServicesP1": "We offer airport pick up and drop off service and private transportation around the counrty to our customers upon customer's request.",
          "OurServicesP2": "We offer a variety of modern apartments and rooms ranging from one night to monthly accommodation which is also a great solution for a long stays. Free parking for the hotel customers.",
          "OurServicesP3": "We offer a laundry service to our customers 24/7 upon customer's request.",
          "OurServicesP4": "We collaborate with private companies from around the world and provide accommodation solutions for the company's workers when they stay in Israel.",
          "OurServicesP5": "Casa Vital is located in the center of Rehovot city, close to train station and a variety of other transportations options.",
          "OurServicesP6": "We collaborate with travel agencies and tour guides and provide them great accommodation solutions.",

          "RoomsHeadSingle": "Double room",
          "RoomsHeadDeluxe": "Studio room",
          "RoomsHeadLuxury": "Family room",

          "RoomInfo1": "This room is designed with an emphasis on comfort for our customers who come for business travels or short stays.",
          "RoomInfo2": "This room / apartment designed with an emphasis on comfort for our customers who come for business travels, short stays and also long stays.",
          "RoomInfo3": "This room / apartment designed with an emphasis on comfort for our customers who come for business travels, short stays and also long stays.",

          "RoomInfo1Li1": "Comfortable double bed",
          "RoomInfo1Li2": "Bed linen and towels service",
          "RoomInfo1Li3": "Kitchen",
          "RoomInfo1Li4": "Mini bar / fridge",
          "RoomInfo1Li5": "Bathroom",
          "RoomInfo1Li6": "Desk",
          "RoomInfo1Li7": "TV",
          "RoomInfo1Li8": "Air-Conditioner",
          "RoomInfo1Li9": "WiFi Access",

          "AboutInfo1": "We are Casa Vital,",
          "AboutInfo2": "Apartments hotel in Rehovot city since 2008. We offer variety of rooms and small apartments from 1 night stay to monthly stay.",
          "AboutInfo3": "We are located in the center of the city and close to the Science Park high-tech center ,the Weizman Institute and the Faculty of Agriculture. We are also close to city mall, street stores, restaurants and coffee places.",
          "AboutInfo4": "Free Parking for the hotel guests.",
          "AboutInfo5": "For more information, you can contact us by phone (also WhatsApp), Email or send a message by the contact form and we'll contact you as soon as possible.",

          "FooterRight1": "Casa Vital",
          "FooterRight2": "Apartments Hotel in Rehovot city.",
          "FooterRight3": "",

          "FooterCenter": "Around the Web",

          "FooterLeft1": "Site Map",
          "FooterLeft2": "Our Services",
          "FooterLeft3": "Our Rooms",
          "FooterLeft4": "Gallery",
          "FooterLeft5": "About Us",
          "FooterLeft6": "Contact Us",

          "AccessibilityP": "Accessibility adjustments have been made on this site for people with disabilities"
        }
      },
      עברית: {
        translations: {
          "TitleOfWebsite": "הבית של ויטל",
          "SubTitleOfWebsite": "מלון דירות",
          "videoLink": "וידאו",
          "specialprices": "!מחיר מיוחד",
          "exploreHeader": "עברית",
          "welcomeDescription": "ברוכים הבאים",
          "clickMe": "תלחץ עכשיו",
          "aboutMe": "אודות",
          "buttonClicked": "כפתור נלחץ",
          "MenuToggleBtn": "תפריט ",
          "OurServicesNav": "השירותים שלנו",
          "OurRoomsNav": "חדרים",
          "GalleryNav": "גלריה",
          "AboutUsNav": "עלינו",
          "ContactUsNav": "יצירת קשר",
          "OurServices": "השירותים שלנו",
        
          "SendMessage1": ",שילחו הודעה עכשיו", 
          "SendMessage2": ".ניצור איתכם קשר בהקדם האפשרי", 
          
          "buttonTextSendMsgFirst": "שלח",
          "buttonTextSendMsg": "שלח",
          "buttonTextIsSending": "...שולח",
          "buttonTextFailed": "שגיאה, לחצ/י שוב",
          "buttonTextMsgSent": ".נשלח בהצלחה",
        
          "OurServicesH1": "איסוף והחזרה משדה התעופה",
          "OurServicesH2": "מלון דירות",
          "OurServicesH3": "כביסה",
          "OurServicesH4": "חברות פרטיות",
          "OurServicesH5": "מיקום",
          "OurServicesH6": "סוכנויות ומדריכי טיולים",
        
          "OurServicesP1": " אנו מציעים שירות איסוף והסעה משדה התעופה ושירותי הסעות ברחבי ישראל ללקוחותינו ",
          "OurServicesP2": "אנו מציעים מגוון דירות וחדרים מודרניים הנעים בין לילה אחד ללינה חודשית המהווה גם פיתרון נהדר לשהייה ממושכת. חניון ללקוחות המלון ללא תשלום.",
          "OurServicesP3": "אנו מציעים שירות כביסה ללקוחותינו על פי בקשת הלקוח",
          "OurServicesP4": "אנו משתפים פעולה עם חברות פרטיות מרחבי העולם ומספקים פתרונות אירוח, מגורים ודיור לעובדי החברה בעת שהותם בישראל",
          "OurServicesP5": "קאסה ויטל ממוקם במרכז העיר רחובות, קרוב לתחנת רכבת, שוק, קניון ותחנה מרכזית",
          "OurServicesP6": "אנו משתפים פעולה עם סוכנויות נסיעות ומדריכי טיולים ומספקים להם פתרונות לינה מעולים.",
          
          "RoomsHeadSingle": "חדר זוגי",
          "RoomsHeadDeluxe": "חדר סטודיו",
          "RoomsHeadLuxury": "חדר משפחתי",
        
          "RoomInfo1": "חדר זה תוכנן עם דגש על נוחות ללקוחותינו המגיעים לנסיעות עסקים או לשהות קצרה.",
          "RoomInfo2": "חדר / דירה מעוצבים עם דגש על נוחות ללקוחותינו המגיעים לנסיעות עסקים, שהיות קצרות וגם שהיות ארוכות.",
          "RoomInfo3": "חדר / דירה מעוצבים עם דגש על נוחות ללקוחותינו המגיעים לנסיעות עסקים, שהיות קצרות וגם שהיות ארוכות",
        
          "RoomInfo1Li1": "מיטה זוגית",
          "RoomInfo1Li2": "שירות מצעים ומגבות",
          "RoomInfo1Li3": "מטבח", 
          "RoomInfo1Li4": "מקרר / מיני בר",
          "RoomInfo1Li5": "חדר אמבטיה",
          "RoomInfo1Li6": "שולחן עבודה",
          "RoomInfo1Li7": "טלוויזיה",
          "RoomInfo1Li8": "מזגן",
          "RoomInfo1Li9": "גישה לאינטרנט אלחוטי",
        
          "AboutInfo1": "אנחנו הבית של ויטל,",
          "AboutInfo2": "מלון דירות בעיר רחובות מאז 2008. אנו מציעים מגוון חדרים ודירות סטודיו משהייה של לילה אחד ועד שהייה חודשית.",
          "AboutInfo3": " אנו ממוקמים במרכז העיר וקרובים למרכז ההיי-טק פארק המדע, .מכון ויצמן והפקולטה לחקלאות. אנחנו גם קרובים לקניון, לשוק העירוני, חנויות רחוב, מסעדות, בתי קפה וסופרמרקט.",
          "AboutInfo4": "חניון ללא תשלום ללקוחות המלון.",
          "AboutInfo5": "למידע נוסף, ניתן ליצור איתנו קשר בטלפון (גם בוואטסאפ), במייל או לשלוח הודעה בטופס יצירת הקשר ואנחנו ניצור איתכם קשר בהקדם האפשרי.",
        
          "FooterRight1": "קאסה ויטל",
          "FooterRight2": ".מלון דירות בעיר רחובות",
          "FooterRight3": "מסגרות, תמונות, מראות ממוסגרות, ציורי שמן, קנבס, אבסטרקט, רסטורציה",
        
          "FooterCenter": "תעקבו אחרינו",
        
          "FooterLeft1": "מפת אתר",
          "FooterLeft2": "השירותים שלנו",
          "FooterLeft3": "חדרים",
          "FooterLeft4": "גלריה",
          "FooterLeft5": "עלינו",
          "FooterLeft6": "יצירת קשר",
        
          "AccessibilityP": ".באתר זה בוצעו התאמות נגישות עבור אנשים עם מוגבלויות"
        }
      }
    },
    fallbackLng: "עברית",
    debug: false,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;