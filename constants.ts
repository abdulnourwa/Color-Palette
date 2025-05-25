
import { PalettesData, UIStrings } from './types';

export const PALETTES_DATA: PalettesData = {
    'deep-blue': {
        nameKey: "paletteBtnDeepBlue",
        colors: [
            { name: 'Primary Dark', hex: '#003B5C', textClass: '' }, { name: 'Primary Medium', hex: '#005A8C', textClass: '' },
            { name: 'Accent Blue', hex: '#008CBE', textClass: '' }, { name: 'Light Blue/Gray', hex: '#D5E3E8', textClass: 'light-text' },
            { name: 'Pure White', hex: '#FFFFFF', textClass: 'light-text' }
        ],
        vars: { 
            'p': '#003B5C', 's': '#005A8C', 'a': '#008CBE', 
            'l': '#D5E3E8', 'c': '#FFFFFF', // c is often a card bg or distinct section
            'tp': '#FFFFFF', 'ts': '#FFFFFF', 'ta': '#FFFFFF', 
            'tl': '#003B5C', 'tc': '#003B5C', // text on light, text on contrast
            'header-gradient': 'linear-gradient(135deg, #005A8C 0%, #008CBE 100%)' 
        },
        description: {
            en: { title: "Deep Blues: Professional & Trustworthy", pros: ["Evokes trust, stability, and professionalism.", "High contrast, excellent for readability.", "Timeless and widely accepted in corporate/medical fields."], cons: ["Can feel very formal or conservative if not balanced.", "Darker shades might reduce perceived brightness if overused in large areas."] },
            ar: { title: "الأزرق الداكن: احترافي وجدير بالثقة", pros: ["يثير الثقة والاستقرار والاحترافية.", "تباين عالٍ، ممتاز للقراءة.", "كلاسيكي ومقبول على نطاق واسع في المجالات المؤسسية/الطبية."], cons: ["قد يبدو رسميًا جدًا أو محافظًا إذا لم يتم موازنته.", "الظلال الداكنة قد تقلل من السطوع المتصور إذا أُفرط في استخدامها في مساحات كبيرة."] }
        }
    },
    'teal': {
        nameKey: "paletteBtnTeal",
        colors: [
            { name: 'Deep Teal', hex: '#008080', textClass: '' }, { name: 'Medium Teal', hex: '#00B2A9', textClass: '' },
            { name: 'Light Aqua Teal', hex: '#4ED4D4', textClass: 'light-text' }, { name: 'Very Light Cyan', hex: '#E0FFFF', textClass: 'light-text' },
            { name: 'Dark Slate/Neutral', hex: '#2C3E50', textClass: '' }
        ],
        vars: { 
            'p': '#008080', 's': '#00B2A9', 'a': '#4ED4D4', 
            'l': '#E0FFFF', 'c': '#2C3E50', // c is dark slate, good for dark theme cards or accents
            'tp': '#FFFFFF', 'ts': '#FFFFFF', 'ta': '#2C3E50', // text on accent (light aqua) is dark slate
            'tl': '#008080', 'tc': '#FFFFFF', // text on light (cyan), text on contrast (dark slate)
            'header-gradient': 'linear-gradient(135deg, #00B2A9 0%, #4ED4D4 100%)' 
        },
        description: {
            en: { title: "Lively Teals: Modern & Refreshing", pros: ["Feels modern, fresh, and innovative.", "Associated with clarity, healing, and calmness.", "Versatile for both professional and approachable branding."], cons: ["Some shades can be very bright; require careful application.", "Ensuring text contrast on mid-tones needs attention."] },
            ar: { title: "الأخضر المائي الحيوي: عصري ومنعش", pros: ["يشعر بالحداثة والانتعاش والابتكار.", "مرتبط بالوضوح والشفاء والهدوء.", "متعدد الاستخدامات للعلامات التجارية الاحترافية والودودة."], cons: ["بعض الظلال قد تكون ساطعة جدًا وتحتاج إلى تطبيق دقيق.", "ضمان تباين النص على الدرجات اللونية المتوسطة يتطلب انتباهًا."] }
        }
    },
    'sky-blue': {
        nameKey: "paletteBtnSkyBlue",
        colors: [
            { name: 'Light Sky Blue', hex: '#A1C8E1', textClass: 'light-text' }, { name: 'Medium Sky Blue', hex: '#75B3E0', textClass: '' },
            { name: 'Very Light Blue', hex: '#E3F2FD', textClass: 'light-text' }, { name: 'Almost White Blue Tint', hex: '#F6F9FC', textClass: 'light-text' },
            { name: 'Deep Trusty Blue', hex: '#0C4DA2', textClass: '' }
        ],
        vars: { 
            'p': '#0C4DA2', 's': '#75B3E0', 'a': '#A1C8E1', 
            'l': '#F6F9FC', 'c': '#E3F2FD', // c is very light blue, good for light theme cards
            'tp': '#FFFFFF', 'ts': '#FFFFFF', 'ta': '#0C4DA2', // text on accent (light sky blue) is deep blue
            'tl': '#0C4DA2', 'tc': '#0C4DA2', // text on light (almost white), text on contrast (very light blue)
            'header-gradient': 'linear-gradient(135deg, #75B3E0 0%, #A1C8E1 100%)' 
        },
        description: {
            en: { title: "Soothing Sky Blues: Calm & Trusty", pros: ["Very calming, clean, and reassuring.", "Excellent for healthcare, promoting serenity.", "Light and airy feel, can make interfaces look spacious."], cons: ["Might lack strong visual punch for CTAs if not paired with a strong primary.", "Too many light shades can reduce overall contrast if not managed."] },
            ar: { title: "الأزرق السماوي المهدئ: هادئ وجدير بالثقة", pros: ["مهدئ للغاية، نظيف، ومطمئن.", "ممتاز للرعاية الصحية، يعزز السكينة.", "شعور خفيف ومتجدد الهواء، يمكن أن يجعل الواجهات تبدو واسعة."], cons: ["قد يفتقر إلى قوة بصرية قوية للدعوات إلى العمل إذا لم يقترن بلون أساسي قوي.", "الكثرة من الظلال الفاتحة يمكن أن تقلل التباين العام إذا لم تُدر بعناية."] }
        }
    }
};

export const UI_STRINGS: UIStrings = {
    pageTitle: { en: "Choosing the Best Color Palette", ar: "اختيار أفضل لوحة ألوان" },
    pageByline: { en: "for our Next Dental App, by Abdulnour", ar: "لتطبيقنا القادم لطب الأسنان، بواسطة عبد النور" },
    pageSubtitle: { en: "A deep dive into how distinct color palettes perform across various brand applications, focusing on a modern, professional appeal, versatility, and user experience.", ar: "تحليل معمق لأداء لوحات الألوان المختلفة عبر تطبيقات العلامة التجارية المتنوعة، مع التركيز على الجاذبية الحديثة والاحترافية والتنوع وتجربة المستخدم." },
    paletteBtnDeepBlue: { en: "Professional Deep Blues", ar: "الأزرق الداكن الاحترافي" },
    paletteBtnTeal: { en: "Lively Teals", ar: "الأخضر المائي المفعم بالحيوية" },
    paletteBtnSkyBlue: { en: "Soothing Sky Blues", ar: "الأزرق السماوي المريح" },
    paletteBtnSelectPrefix: { en: "Select Palette:", ar: "اختر لوحة:"},
    themeBtnDark: { en: " Dark Mode", ar: " الوضع الداكن" },
    themeBtnLight: { en: " Light Mode", ar: " الوضع الفاتح" },
    cmykBtnSimulate: { en: " Simulate CMYK", ar: " محاكاة CMYK" },
    cmykBtnRgb: { en: " RGB View", ar: " عرض RGB" },
    langBtnArabic: { en: "Switch to Arabic", ar: "التحويل إلى العربية" },
    langBtnEnglish: { en: "Switch to English", ar: "التحويل إلى الإنجليزية" },
    
    controlsToggleButton: { en: "Toggle Palettes", ar: "تبديل اللوحات" },
    controlsToggleButtonShow: { en: "Show Palettes", ar: "إظهار اللوحات" },
    controlsToggleButtonHide: { en: "Hide Palettes", ar: "إخفاء اللوحات" },
    
    controlsBarToggleHide: { en: "Hide Toolbar", ar: "إخفاء شريط الأدوات" },
    controlsBarToggleShow: { en: "View Toolbar", ar: "عرض شريط الأدوات" },
    
    headerToggleShow: { en: "Show Header", ar: "إظهار الرأسية"},
    headerToggleHide: { en: "Hide Header", ar: "إخفاء الرأسية"},

    backToTop: { en: "Back to Top", ar: "العودة للأعلى" },
    copiedFeedback: { en: "Copied!", ar: "تم النسخ!" },
    spotlightView: { en: "View in Spotlight", ar: "عرض في دائرة الضوء"},
    spotlightClose: { en: "Close Spotlight", ar: "إغلاق دائرة الضوء"},


    useCasePaletteTitle: { en: "Color Palette & Codes", ar: "لوحة الألوان والأكواد" },
    useCaseWebsiteTitle: { en: "Website Showcase", ar: "عرض الموقع الإلكتروني" },
    navSolutions: { en: "Solutions", ar: "الحلول" },
    navForStudents: { en: "For Students", ar: "للطلاب" },
    navProTools: { en: "Pro Tools", ar: "أدوات احترافية" },
    navSupport: { en: "Support", ar: "الدعم" },
    navDropdown: { en: "More", ar: "المزيد" },
    navDropdownItem1: { en: "Blog", ar: "المدونة" },
    navDropdownItem2: { en: "About Us", ar: "من نحن" },
    heroTitle: { en: "Precision in Dental Excellence", ar: "الدقة في تميز طب الأسنان" },
    heroSubtitle: { en: "Superior supplies and innovative solutions for dental professionals & students globally.", ar: "لوازم فائقة وحلول مبتكرة لأخصائيي وطلاب طب الأسنان عالميًا." },
    heroCta: { en: "Explore Catalog", ar: "استكشف الكتالوج" },
    feature1Title: { en: "Premium Quality", ar: "جودة فائقة" },
    feature1Desc: { en: "Curated materials for lasting performance and reliability in every procedure.", ar: "مواد مختارة بعناية لأداء موثوق وطويل الأمد في كل إجراء." },
    feature2Title: { en: "Innovative Solutions", ar: "حلول مبتكرة" },
    feature2Desc: { en: "Access cutting-edge tools and technologies for modern dental practices.", ar: "الوصول إلى أحدث الأدوات والتقنيات لممارسات طب الأسنان الحديثة." },
    feature3Title: { en: "Student Focused", ar: "تركيز على الطلاب" },
    feature3Desc: { en: "Tailored kits, fair pricing, and dedicated support for your academic journey.", ar: "مجموعات مخصصة، أسعار عادلة، ودعم مخصص لرحلتك الأكاديمية." },
    useCaseWebAppTitle: { en: "Web App Interface (DişYol Insights)", ar: "واجهة تطبيق الويب (DişYol Insights)" },
    webAppHeader: { en: "Management Dashboard", ar: "لوحة التحكم الإدارية" },
    webAppBtnAdd: { en: "Add University", ar: "إضافة جامعة" },
    webAppCard1Label: { en: "Total Universities", ar: "إجمالي الجامعات" },
    webAppCard2Label: { en: "Active Orders", ar: "الطلبات النشطة" },
    webAppCard3Label: { en: "Items Needing Reorder", ar: "عناصر تحتاج إعادة طلب" },
    webAppSetting1: { en: "System Configuration", ar: "إعدادات النظام" },
    webAppSetting2: { en: "User Management", ar: "إدارة المستخدمين" },
    webAppTableTitle: { en: "Recent Activity", ar: "النشاط الأخير"},
    webAppTableHeader1: {en: "User", ar: "المستخدم"},
    webAppTableHeader2: {en: "Action", ar: "الإجراء"},
    webAppTableHeader3: {en: "Date", ar: "التاريخ"},
    webAppTableData1: {en: "Dr. A. Yilmaz", ar: "د. أ. يلماز"},
    webAppTableData1Action: {en: "Added new order", ar: "إضافة طلب جديد"},
    webAppTableData2: {en: "Admin User", ar: "مدير النظام"},
    webAppTableData2Action: {en: "Updated stock levels", ar: "تحديث مستويات المخزون"},
    webAppTableData3: {en: "System", ar: "النظام"},
    webAppTableData3Action: {en: "Generated report", ar: "إنشاء تقرير"},
    useCaseMobileTitle: { en: "Mobile Companion App", ar: "التطبيق المصاحب للجوال" },
    mobileAppName: { en: "DişYol Go", ar: "DişYol Go" },
    mobileCard1Title: { en: "Quick Order: Alginate", ar: "طلب سريع: ألجينات" },
    mobileCard1Text: { en: "Reorder Fast Set - 5 units.", ar: "إعادة طلب مجموعة سريعة - 5 وحدات." },
    mobileCard2Title: { en: "New Product List!", ar: "قائمة منتجات جديدة!" },
    mobileCard2Text: { en: "İstanbul Uni - Prosthetics Y1 available.", ar: "جامعة اسطنبول - التركيبات السنة الأولى متوفرة." },
    mobileCard3Title: { en: "Shipment Update", ar: "تحديث الشحنة" },
    mobileCard3Text: { en: "Order DY-007 is out for delivery.", ar: "الطلب DY-007 قيد التوصيل." },
    mobileModalTitle: { en: "Confirm Action", ar: "تأكيد الإجراء" },
    mobileModalText: { en: "Are you sure you want to log out?", ar: "هل أنت متأكد أنك تريد تسجيل الخروج؟" },
    mobileModalConfirm: { en: "Confirm", ar: "تأكيد" },
    mobileModalCancel: { en: "Cancel", ar: "إلغاء" },
    mobileShowModalBtn: { en: "Show Modal", ar: "عرض النافذة"},
    useCaseBizCardTitle: { en: "Professional Business Card", ar: "بطاقة عمل احترافية" },
    bizCardName: { en: "Dr. Zeynep Kaya", ar: "د. زينب كايا" },
    bizCardJobTitle: { en: "Clinical Product Advisor", ar: "مستشارة منتجات سريرية" },
    bizCardBackMessage: { en: "Your partner in dental excellence.", ar: "شريكك في التميز في طب الأسنان." },
    bizCardFlipCTA: { en: "Click to flip", ar: "انقر للقلب" },
    useCaseSocialAdTitle: { en: "Marketing Social Media Ad", ar: "إعلان تسويقي لوسائل التواصل" },
    socialAdCaption: { en: "Back to uni? 🎓 DişYol has your success covered! Explore our tailored student kits. #DentalLife #StudentDentist #DişYolSupplies", ar: "هل عدت إلى الجامعة؟ 🎓 ديشيول تغطي نجاحك! استكشف مجموعات الطلاب المخصصة لدينا. #حياة_الأسنان #طالب_أسنان #لوازم_ديشيول" },
    socialAdLink: { en: "Shop Kits", ar: "تسوق الأطقم" },
    socialAdStoryPreview: { en: "Story Preview", ar: "معاينة القصة" },
    socialAdFocusBtnStory: { en: "Focus on Story", ar: "التركيز على القصة" },
    socialAdFocusBtnPost: { en: "Focus on Post", ar: "التركيز على المنشور" },
    useCasePackageTitle: { en: "Product Packaging", ar: "تغليف المنتج" },
    packageProductName: { en: "Endodontic Rotary Files", ar: "ملفات دوارة لعلاج الجذور" },
    packageProductDesc: { en: "FlexiTech NiTi Alloy - Assorted Pack (6 Files)", ar: "سبيكة فليكسيتك NiTi - عبوة متنوعة (6 ملفات)" },
    packageFeature1: { en: "ISO Sizes: 15-40", ar: "مقاسات ISO: 15-40" },
    packageFeature2: { en: "Taper: .04 & .06", ar: "التدريج: .04 و .06" },
    packageFeature3: { en: "Enhanced Flexibility", ar: "مرونة معززة" },
    packageFooter: { en: "PROFESSIONAL USE ONLY", ar: "للاستخدام المهني فقط" },
    useCaseShippingBoxTitle: { en: "Modern Shipping Box", ar: "صندوق شحن عصري" },
    shippingBoxText: { en: "DişYol Dental Supplies", ar: "لوازم ديشيول لطب الأسنان" },
    shippingLabelText: { en: "TO:\nCustomer Name\n123 Dental Ave.\nCity, State 12345", ar: "إلى:\nاسم العميل\n123 شارع الأسنان\nالمدينة، الولاية 12345" },
    paletteDescTitle: { en: "Palette Overview", ar: "نظرة عامة على اللوحة" },
    paletteDescPros: { en: "Pros:", ar: "الإيجابيات:" },
    paletteDescCons: { en: "Cons:", ar: "السلبيات:" },
    mobileNavHome: { en: "Home", ar: "الرئيسية" },
    mobileNavProducts: { en: "Products", ar: "المنتجات" },
    mobileNavScan: { en: "Scan", ar: "مسح" },
    mobileNavProfile: { en: "Profile", ar: "الملف الشخصي" },

    useCaseEmailTitle: { en: "Email Newsletter", ar: "نشرة بريدية" },
    emailSubject: { en: "Fresh Insights & Offers from DişYol!", ar: "أحدث الرؤى والعروض من ديشيول!" },
    emailGreeting: { en: "Hello Dental Professional,", ar: "مرحباً أيها المحترف في طب الأسنان،" },
    emailBody: { en: "Discover our latest innovations and exclusive deals designed to elevate your practice. Click below to learn more and shop now.", ar: "اكتشف أحدث ابتكاراتنا وعروضنا الحصرية المصممة للارتقاء بممارستك. انقر أدناه لمعرفة المزيد والتسوق الآن." },
    emailCta: { en: "Explore Now", ar: "استكشف الآن" },
    emailFooter: { en: "© 2024 DişYol Dental Supplies. All rights reserved.", ar: "© 2024 لوازم ديشيول لطب الأسنان. جميع الحقوق محفوظة." },

    useCasePresentationTitle: { en: "Presentation Slides", ar: "شرائح العرض التقديمي" },
    slideTitle: { en: "Advancing Dental Care", ar: "تطوير رعاية الأسنان" },
    slideSubtitle: { en: "Innovations by DişYol", ar: "ابتكارات من ديشيول" },
    slidePoint1: { en: "Cutting-Edge Materials", ar: "مواد متطورة" },
    slidePoint2: { en: "Student Support Programs", ar: "برامج دعم الطلاب" },
    slidePoint3: { en: "Sustainable Practices", ar: "ممارسات مستدامة" },

    useCaseDataVizTitle: { en: "Data Visualization", ar: "تصور البيانات" },
    chartTitle: { en: "Growth Q1-Q3", ar: "النمو الربع الأول - الثالث" },
    chartLabel1: { en: "Q1", ar: "الربع1" },
    chartLabel2: { en: "Q2", ar: "الربع2" },
    chartLabel3: { en: "Q3", ar: "الربع3" },

    useCaseLoginTitle: { en: "Login Screen", ar: "شاشة تسجيل الدخول" },
    loginWelcome: { en: "Welcome Back!", ar: "مرحباً بعودتك!" },
    loginEmailLabel: { en: "Email Address", ar: "البريد الإلكتروني" },
    loginPasswordLabel: { en: "Password", ar: "كلمة المرور" },
    loginButton: { en: "Login", ar: "تسجيل الدخول" },
    loginForgotPassword: { en: "Forgot password?", ar: "هل نسيت كلمة المرور؟" },
    loginSignupPrompt: { en: "Don't have an account?", ar: "ليس لديك حساب؟" },
    loginSignupLink: { en: "Sign Up", ar: "إنشاء حساب" },
    
    useCaseInvoiceTitle: { en: "Invoice Example", ar: "مثال فاتورة" },
    invoiceTitle: { en: "INVOICE", ar: "فاتورة" },
    invoiceFrom: { en: "FROM:", ar: "من:" },
    invoiceBillTo: { en: "BILL TO:", ar: "فاتورة إلى:" },
    invoiceCompanyName: { en: "DişYol Dental Supplies", ar: "لوازم ديشيول لطب الأسنان" },
    invoiceCompanyAddress: { en: "123 Dental Avenue, ToothCity, TC 54321", ar: "123 شارع الأسنان، مدينة الأسنان، TC 54321" },
    invoiceCompanyContact: { en: "contact@disyol.com.tr | +90 212 555 1234", ar: "contact@disyol.com.tr | +90 212 555 1234" },
    invoiceClientName: { en: "Happy Smiles Clinic", ar: "عيادة ابتسامات سعيدة" },
    invoiceClientAddress: { en: "456 Prophy Place, MolarTown, MT 67890", ar: "456 مكان بروفي، مدينة الأضراس، MT 67890" },
    invoiceNumberLabel: { en: "Invoice No:", ar: "رقم الفاتورة:" },
    invoiceDateLabel: { en: "Date:", ar: "التاريخ:" },
    invoiceDueDateLabel: { en: "Due Date:", ar: "تاريخ الاستحقاق:" },
    invoiceItemDesc: { en: "Item Description", ar: "وصف الصنف" },
    invoiceItemQty: { en: "Qty", ar: "الكمية" },
    invoiceItemUnitPrice: { en: "Unit Price", ar: "سعر الوحدة" },
    invoiceItemTotal: { en: "Total", ar: "المجموع" },
    invoiceItem1Desc: { en: "Prophylaxis Paste (Mint, 200g)", ar: "معجون وقاية (نعناع، 200جم)" },
    invoiceItem2Desc: { en: "Disposable Mirrors (Box of 100)", ar: "مرايا للاستعمال مرة واحدة (علبة 100)" },
    invoiceItem3Desc: { en: "Student Dental Kit - Basic", ar: "طقم أسنان للطلاب - أساسي" },
    invoiceSubtotal: { en: "Subtotal:", ar: "المجموع الفرعي:" },
    invoiceTax: { en: "Tax (18%):", ar: "الضريبة (18%):" },
    invoiceGrandTotal: { en: "GRAND TOTAL:", ar: "المجموع الكلي:" },
    invoiceNotes: { en: "Notes:", ar: "ملاحظات:" },
    invoicePaymentTerms: { en: "Payment due within 30 days. Thank you for your business!", ar: "الدفع مستحق خلال 30 يومًا. شكراً لتعاملكم معنا!" },

    useCaseLogoTitle: { en: "Logo Application", ar: "تطبيق الشعار" },
    logoVariation1: { en: "Primary on Light", ar: "الأساسي على فاتح" },
    logoVariation2: { en: "Accent on Dark", ar: "المميز على داكن" },
    logoVariation3: { en: "Monochromatic (Primary)", ar: "أحادي اللون (أساسي)" },
    logoVariation4: { en: "Full Color with Tagline", ar: "بالألوان الكاملة مع شعار" },
    logoTagline: { en: "Dental Excellence. Simplified.", ar: "تميز طب الأسنان. مبسط." }
};