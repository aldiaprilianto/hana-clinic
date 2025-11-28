// Comprehensive treatment data for Hana Clinic

export const skinAestheticTreatments = [
  {
    id: 'botox-injections',
    name: 'Botox Injections',
    category: 'skin-aesthetic',
    shortDescription: 'Reduce wrinkles and fine lines with FDA-approved botulinum toxin treatments',
    description: 'Botox injections are one of the most popular non-surgical cosmetic treatments worldwide. Using purified botulinum toxin, this treatment temporarily relaxes facial muscles that cause wrinkles, resulting in smoother, younger-looking skin.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    benefits: [
      'Reduces appearance of fine lines and wrinkles',
      'Prevents new wrinkles from forming',
      'Non-surgical with minimal downtime',
      'Results visible within 3-7 days',
      'Effects last 3-6 months',
      'Safe and FDA-approved'
    ],
    procedure: [
      'Consultation to assess treatment areas',
      'Cleansing and marking injection points',
      'Precise injections using ultra-fine needles',
      'Post-treatment care instructions'
    ],
    duration: '15-30 minutes',
    recovery: 'Minimal to none, resume normal activities immediately',
    results: 'Visible within 3-7 days, peak results at 2 weeks'
  },
  {
    id: 'lipolytic-injections',
    name: 'Lipolytic Injections',
    category: 'skin-aesthetic',
    shortDescription: 'Dissolve stubborn fat deposits with deoxycholic acid treatments',
    description: 'Lipolytic injections use deoxycholic acid to break down and absorb dietary fat. This treatment is ideal for reducing moderate to severe fat beneath the chin (submental fullness) and other small areas of stubborn fat.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Non-surgical fat reduction',
      'Targets stubborn fat deposits',
      'Permanent fat cell destruction',
      'Improved facial contour',
      'Minimal downtime',
      'Natural-looking results'
    ],
    procedure: [
      'Detailed consultation and assessment',
      'Marking treatment areas',
      'Multiple small injections in targeted area',
      'Post-treatment monitoring'
    ],
    duration: '20-30 minutes per session',
    recovery: '3-7 days of mild swelling',
    results: 'Visible after 2-4 sessions, spaced 4-6 weeks apart'
  },
  {
    id: 'contouring-injections',
    name: 'Contouring Injections',
    category: 'skin-aesthetic',
    shortDescription: 'Sculpt and define facial features for enhanced beauty',
    description: 'Facial contouring injections use advanced techniques to reshape and define facial features. This treatment can enhance cheekbones, define the jawline, slim the face, and create more balanced, harmonious facial proportions.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Enhanced facial definition',
      'Non-surgical face sculpting',
      'Customizable to your features',
      'Immediate visible results',
      'Minimal downtime',
      'Long-lasting effects'
    ],
    procedure: [
      'Comprehensive facial analysis',
      'Treatment plan customization',
      'Strategic injection placement',
      'Immediate result assessment'
    ],
    duration: '30-45 minutes',
    recovery: 'Minimal, possible mild swelling for 1-3 days',
    results: 'Immediate, with final results after swelling subsides'
  },
  {
    id: 'filler-injections',
    name: 'Filler Injections',
    category: 'skin-aesthetic',
    shortDescription: 'Restore volume and smooth wrinkles with hyaluronic acid fillers',
    description: 'Dermal fillers are injectable treatments that restore lost volume, smooth lines, soften creases, and enhance facial contours. Using premium hyaluronic acid-based products, we can achieve natural, beautiful results.',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2071&auto=format&fit=crop',
    benefits: [
      'Instant volume restoration',
      'Smooths deep lines and wrinkles',
      'Enhances lips and cheeks',
      'Natural-looking results',
      'Minimal downtime',
      'Results last 6-18 months'
    ],
    procedure: [
      'Consultation and facial assessment',
      'Topical numbing if needed',
      'Precise filler injection',
      'Gentle massage and shaping'
    ],
    duration: '30-60 minutes',
    recovery: 'Minimal, possible bruising for 3-7 days',
    results: 'Immediate, with optimal results in 2 weeks'
  },
  {
    id: 'filler-dissolving',
    name: 'Filler Dissolving Injection',
    category: 'skin-aesthetic',
    shortDescription: 'Safely reverse unwanted filler results with hyaluronidase',
    description: 'Filler dissolving injections use hyaluronidase enzyme to safely and quickly break down hyaluronic acid fillers. This treatment is ideal for correcting overfilled areas, asymmetry, or complications from previous filler treatments.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
    benefits: [
      'Quick filler reversal',
      'Safe and effective',
      'Corrects overfilled areas',
      'Resolves complications',
      'Minimal discomfort',
      'Fast results'
    ],
    procedure: [
      'Assessment of filler to be dissolved',
      'Hyaluronidase injection',
      'Monitoring of dissolution',
      'Follow-up if needed'
    ],
    duration: '15-30 minutes',
    recovery: 'Minimal, possible swelling for 1-2 days',
    results: 'Visible within hours, complete in 24-48 hours'
  },
  {
    id: 'transfer-treatment',
    name: 'Transfer from Other Clinic',
    category: 'skin-aesthetic',
    shortDescription: 'Continue your aesthetic journey with expert care and assessment',
    description: 'We welcome patients transferring from other clinics. Our experienced team will assess your previous treatments, address any concerns, and create a personalized plan to help you achieve your aesthetic goals safely and effectively.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Expert assessment of previous work',
      'Personalized treatment continuation',
      'Address complications if any',
      'Professional guidance',
      'Comprehensive care plan',
      'Safe treatment protocols'
    ],
    procedure: [
      'Detailed consultation and history review',
      'Assessment of previous treatments',
      'Treatment plan development',
      'Ongoing care and monitoring'
    ],
    duration: 'Varies by treatment',
    recovery: 'Depends on chosen treatment',
    results: 'Customized to individual needs'
  },
  {
    id: 'thread-lifting',
    name: 'Thread Lifting',
    category: 'skin-aesthetic',
    shortDescription: 'Non-surgical facelift using dissolvable PDO threads',
    description: 'Thread lifting is a minimally invasive procedure that uses dissolvable PDO (polydioxanone) threads to lift and tighten sagging skin. This treatment provides immediate lifting effects while stimulating natural collagen production for long-term improvement.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Immediate lifting effect',
      'Stimulates collagen production',
      'Non-surgical facelift alternative',
      'Minimal downtime',
      'Natural-looking results',
      'Effects last 12-18 months'
    ],
    procedure: [
      'Facial analysis and marking',
      'Local anesthesia application',
      'Thread insertion using fine needles',
      'Gentle adjustment for optimal lift'
    ],
    duration: '45-90 minutes',
    recovery: '3-7 days, avoid strenuous activity',
    results: 'Immediate lift, continued improvement over 3 months'
  },
  {
    id: 'lift-anti-aging',
    name: 'Lift & Anti-Aging',
    category: 'skin-aesthetic',
    shortDescription: 'Comprehensive anti-aging treatments for youthful, lifted skin',
    description: 'Our comprehensive lift and anti-aging program combines multiple advanced treatments including Ultherapy, Thermage, and premium injectables to address all signs of aging. Customized protocols deliver dramatic, natural-looking rejuvenation.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Multi-dimensional rejuvenation',
      'Addresses multiple aging signs',
      'Customized treatment protocols',
      'Long-lasting results',
      'Non-surgical approach',
      'Natural, youthful appearance'
    ],
    procedure: [
      'Comprehensive aging assessment',
      'Customized treatment plan creation',
      'Combination therapy application',
      'Regular progress monitoring'
    ],
    duration: 'Varies by treatment combination',
    recovery: 'Minimal to moderate depending on treatments',
    results: 'Progressive improvement over 3-6 months'
  },
  {
    id: 'skinboosters',
    name: 'Skinboosters',
    category: 'skin-aesthetic',
    shortDescription: 'Deep skin hydration for radiant, glowing complexion',
    description: 'Skinboosters are injectable hyaluronic acid treatments that deeply hydrate the skin from within. Unlike fillers, skinboosters improve overall skin quality, texture, and radiance by delivering intense hydration to the dermal layer.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=2075&auto=format&fit=crop',
    benefits: [
      'Deep skin hydration',
      'Improved skin texture',
      'Enhanced radiance and glow',
      'Reduces fine lines',
      'Minimal downtime',
      'Results last 6-9 months'
    ],
    procedure: [
      'Skin assessment and cleansing',
      'Topical numbing application',
      'Multiple micro-injections',
      'Post-treatment skincare'
    ],
    duration: '30-45 minutes',
    recovery: 'Minimal, possible tiny bumps for 1-2 days',
    results: 'Visible after 2-3 sessions, optimal at 4 weeks'
  },
  {
    id: 'laser-toning',
    name: 'Skin Laser Toning',
    category: 'skin-aesthetic',
    shortDescription: 'Advanced laser treatment for even skin tone and texture',
    description: 'Laser toning uses advanced Q-switched laser technology to treat pigmentation, improve skin tone, reduce pore size, and enhance overall skin quality. This gentle yet effective treatment requires no downtime.',
    image: 'https://images.unsplash.com/photo-1610633389918-7d5b0c9b7e3a?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Reduces pigmentation and dark spots',
      'Evens skin tone',
      'Minimizes pore appearance',
      'Improves skin texture',
      'No downtime',
      'Suitable for all skin types'
    ],
    procedure: [
      'Skin cleansing and preparation',
      'Protective eyewear application',
      'Laser treatment application',
      'Soothing post-treatment care'
    ],
    duration: '20-30 minutes',
    recovery: 'None, mild redness for 1-2 hours',
    results: 'Gradual improvement over 4-6 sessions'
  },
  {
    id: 'tattoo-removal',
    name: 'Tattoo Removal',
    category: 'skin-aesthetic',
    shortDescription: 'Safe, effective laser tattoo removal with minimal scarring',
    description: 'Our advanced laser tattoo removal uses Q-switched laser technology to safely and effectively break down tattoo ink particles. The treatment works on all colors and can significantly fade or completely remove unwanted tattoos.',
    image: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2073&auto=format&fit=crop',
    benefits: [
      'Effective on all ink colors',
      'Minimal scarring risk',
      'Safe for all skin types',
      'Progressive fading',
      'FDA-approved technology',
      'Customized treatment plans'
    ],
    procedure: [
      'Tattoo assessment and test patch',
      'Numbing cream application',
      'Laser treatment session',
      'Post-treatment wound care'
    ],
    duration: '15-60 minutes depending on size',
    recovery: '7-14 days between sessions',
    results: 'Gradual fading over 6-12 sessions'
  },
  {
    id: 'acne-scar-treatment',
    name: 'Acne & Scar Treatments',
    category: 'skin-aesthetic',
    shortDescription: 'Comprehensive solutions for acne and scar reduction',
    description: 'Our acne and scar treatment program combines multiple modalities including laser therapy, chemical peels, microneedling, and specialized skincare to effectively treat active acne and reduce the appearance of acne scars.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=2073&auto=format&fit=crop',
    benefits: [
      'Treats active acne',
      'Reduces scar appearance',
      'Improves skin texture',
      'Minimizes pore size',
      'Prevents future breakouts',
      'Customized treatment protocols'
    ],
    procedure: [
      'Comprehensive skin analysis',
      'Customized treatment plan',
      'Combination therapy sessions',
      'Home care regimen'
    ],
    duration: '30-60 minutes per session',
    recovery: 'Varies by treatment type',
    results: 'Progressive improvement over 3-6 months'
  },
  {
    id: 'stem-cell-therapy',
    name: 'Stem-cell Growth Factor Therapy',
    category: 'skin-aesthetic',
    shortDescription: 'Regenerative treatment for skin rejuvenation and healing',
    description: 'Stem-cell growth factor therapy harnesses the power of growth factors to stimulate skin regeneration, improve texture, reduce fine lines, and enhance overall skin quality. This cutting-edge treatment promotes natural healing and rejuvenation.',
    image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=2082&auto=format&fit=crop',
    benefits: [
      'Stimulates skin regeneration',
      'Improves skin texture and tone',
      'Reduces fine lines and wrinkles',
      'Enhances natural healing',
      'Long-lasting rejuvenation',
      'Minimal side effects'
    ],
    procedure: [
      'Skin preparation and cleansing',
      'Growth factor application',
      'Microneedling or injection delivery',
      'Post-treatment care protocol'
    ],
    duration: '60-90 minutes',
    recovery: '2-3 days of mild redness',
    results: 'Progressive improvement over 2-3 months'
  },
  {
    id: 'facial-skincare',
    name: 'Facial & Skincare Treatments',
    category: 'skin-aesthetic',
    shortDescription: 'Luxurious facial treatments for healthy, glowing skin',
    description: 'Our comprehensive facial and skincare treatments combine Korean beauty techniques with medical-grade products. From deep cleansing to intensive hydration, each treatment is customized to your skin type and concerns.',
    image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&w=2071&auto=format&fit=crop',
    benefits: [
      'Deep cleansing and exfoliation',
      'Intensive hydration',
      'Improved skin texture',
      'Enhanced radiance',
      'Relaxing experience',
      'Customized to skin type'
    ],
    procedure: [
      'Skin analysis and consultation',
      'Deep cleansing and exfoliation',
      'Treatment mask application',
      'Massage and moisturization'
    ],
    duration: '60-90 minutes',
    recovery: 'None',
    results: 'Immediate glow, cumulative with regular treatments'
  },
  {
    id: 'iv-drips',
    name: 'IV Drips',
    category: 'skin-aesthetic',
    shortDescription: 'Vitamin infusion therapy for beauty and wellness from within',
    description: 'IV drip therapy delivers vitamins, minerals, and antioxidants directly into your bloodstream for maximum absorption. Our beauty-focused formulations promote skin radiance, boost energy, and support overall wellness.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop',
    benefits: [
      'Maximum nutrient absorption',
      'Skin brightening and glow',
      'Boosted energy levels',
      'Enhanced immune function',
      'Detoxification support',
      'Customized formulations'
    ],
    procedure: [
      'Health assessment and consultation',
      'IV line insertion',
      'Vitamin infusion (30-45 minutes)',
      'Post-treatment monitoring'
    ],
    duration: '45-60 minutes',
    recovery: 'None',
    results: 'Immediate energy boost, skin glow within days'
  },
  {
    id: 'body-contouring',
    name: 'Face & Body Contouring/Slimming',
    category: 'skin-aesthetic',
    shortDescription: 'Non-invasive body sculpting for your ideal silhouette',
    description: 'Our body contouring treatments use advanced technologies including cryolipolysis, radiofrequency, and ultrasound to reduce stubborn fat, tighten skin, and sculpt your body without surgery or downtime.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop',
    benefits: [
      'Non-surgical fat reduction',
      'Skin tightening',
      'Cellulite reduction',
      'Body sculpting',
      'No downtime',
      'Long-lasting results'
    ],
    procedure: [
      'Body assessment and measurements',
      'Treatment area preparation',
      'Technology application',
      'Post-treatment massage'
    ],
    duration: '45-90 minutes per area',
    recovery: 'None to minimal',
    results: 'Visible after 2-3 sessions, optimal at 3 months'
  },
  {
    id: 'spot-removal',
    name: 'Spot Removal/Small Surgery',
    category: 'skin-aesthetic',
    shortDescription: 'Safe removal of skin lesions, moles, and unwanted spots',
    description: 'Professional removal of benign skin lesions, moles, skin tags, and other unwanted spots using advanced techniques including laser, electrocautery, and minor surgical excision. All procedures performed by experienced medical professionals.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Safe, professional removal',
      'Minimal scarring',
      'Quick procedure',
      'Immediate results',
      'Pathology testing available',
      'Expert medical care'
    ],
    procedure: [
      'Lesion assessment',
      'Local anesthesia',
      'Removal procedure',
      'Wound care and follow-up'
    ],
    duration: '15-30 minutes',
    recovery: '7-14 days healing',
    results: 'Immediate removal, healing complete in 2-4 weeks'
  },
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    category: 'skin-aesthetic',
    shortDescription: 'Permanent hair reduction for smooth, hair-free skin',
    description: 'Advanced laser hair removal technology safely and effectively reduces unwanted hair on face and body. Our medical-grade lasers work on all skin types and provide long-lasting, smooth results.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
    benefits: [
      'Permanent hair reduction',
      'Safe for all skin types',
      'Treats large areas quickly',
      'Smooth, hair-free skin',
      'No ingrown hairs',
      'Cost-effective long-term'
    ],
    procedure: [
      'Shaving treatment area',
      'Cooling gel application',
      'Laser treatment',
      'Post-treatment soothing care'
    ],
    duration: '15-60 minutes depending on area',
    recovery: 'None, mild redness for few hours',
    results: '6-8 sessions for optimal results'
  },
  {
    id: 'hair-growth',
    name: 'Hair Growth Treatments',
    category: 'skin-aesthetic',
    shortDescription: 'Advanced therapies to combat hair loss and promote growth',
    description: 'Comprehensive hair growth treatments including PRP therapy, mesotherapy, and low-level laser therapy to stimulate hair follicles, reduce hair loss, and promote thicker, healthier hair growth.',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop',
    benefits: [
      'Stimulates hair follicles',
      'Reduces hair loss',
      'Promotes new growth',
      'Thicker, healthier hair',
      'Non-surgical treatment',
      'Suitable for men and women'
    ],
    procedure: [
      'Scalp analysis',
      'Treatment preparation',
      'PRP/mesotherapy injection or laser therapy',
      'Post-treatment care instructions'
    ],
    duration: '30-60 minutes',
    recovery: 'Minimal, can resume normal activities',
    results: 'Visible improvement after 3-6 months'
  },
  {
    id: 'pigmentation-treatment',
    name: 'Pigmentation & Age Spot Treatment',
    category: 'skin-aesthetic',
    shortDescription: 'Advanced treatments for even, radiant skin tone',
    description: 'Specialized treatments targeting hyperpigmentation, age spots, melasma, and uneven skin tone using combination of laser therapy, chemical peels, and medical-grade skincare for clear, radiant complexion.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=2076&auto=format&fit=crop',
    benefits: [
      'Reduces dark spots and pigmentation',
      'Evens skin tone',
      'Brightens complexion',
      'Prevents future pigmentation',
      'Minimal downtime',
      'Long-lasting results'
    ],
    procedure: [
      'Skin analysis and assessment',
      'Customized treatment protocol',
      'Laser or chemical peel application',
      'Home care regimen'
    ],
    duration: '30-60 minutes',
    recovery: 'Varies by treatment, typically minimal',
    results: 'Progressive lightening over 4-8 weeks'
  }
];

export const dentalTreatments = [
  {
    id: 'dental-aesthetic',
    name: 'Aesthetic Dentistry',
    category: 'dental',
    shortDescription: 'Transform your smile with cosmetic dental treatments',
    description: 'Aesthetic dentistry focuses on improving the appearance of your teeth, gums, and smile. From teeth whitening to veneers, we offer comprehensive cosmetic solutions to give you the confident, beautiful smile you deserve.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop',
    benefits: [
      'Brighter, whiter smile',
      'Improved tooth shape and alignment',
      'Enhanced confidence',
      'Natural-looking results',
      'Long-lasting improvements',
      'Customized treatment plans'
    ],
    procedure: [
      'Comprehensive smile analysis',
      'Digital smile design',
      'Treatment plan presentation',
      'Cosmetic procedure execution'
    ],
    duration: 'Varies by treatment',
    recovery: 'Minimal to none',
    results: 'Immediate transformation'
  },
  {
    id: 'endodontic',
    name: 'Endodontic Treatment',
    category: 'dental',
    shortDescription: 'Root canal therapy to save and preserve your natural teeth',
    description: 'Endodontic treatment, commonly known as root canal therapy, treats the inside of the tooth when the pulp becomes inflamed or infected. Our advanced techniques ensure comfortable, effective treatment to save your natural tooth.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Saves natural tooth',
      'Eliminates pain and infection',
      'Prevents further complications',
      'Modern, comfortable techniques',
      'High success rate',
      'Preserves natural bite'
    ],
    procedure: [
      'Diagnosis and X-ray',
      'Local anesthesia',
      'Pulp removal and cleaning',
      'Filling and sealing',
      'Crown placement if needed'
    ],
    duration: '60-90 minutes',
    recovery: 'Mild discomfort for 2-3 days',
    results: 'Pain relief and tooth preservation'
  },
  {
    id: 'bedah-mulut',
    name: 'Bedah Mulut (Oral Surgery)',
    category: 'dental',
    shortDescription: 'Expert oral surgery for complex dental conditions',
    description: 'Oral surgery encompasses various surgical procedures including wisdom tooth extraction, dental implant placement, jaw surgery, and treatment of oral pathology. Our experienced surgeons use advanced techniques for optimal outcomes.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop',
    benefits: [
      'Expert surgical care',
      'Advanced techniques',
      'Minimal discomfort',
      'Faster healing',
      'Comprehensive aftercare',
      'Problem resolution'
    ],
    procedure: [
      'Thorough examination and imaging',
      'Treatment planning',
      'Anesthesia administration',
      'Surgical procedure',
      'Post-operative care instructions'
    ],
    duration: '30-120 minutes depending on complexity',
    recovery: '3-7 days',
    results: 'Problem resolution and improved oral health'
  },
  {
    id: 'dental-consultation',
    name: 'Dental Consultation',
    category: 'dental',
    shortDescription: 'Comprehensive dental examination and treatment planning',
    description: 'Our dental consultation includes a thorough examination of your teeth, gums, and oral health. We discuss your concerns, perform necessary diagnostics, and create a personalized treatment plan tailored to your needs.',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981960afdd?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Comprehensive oral health assessment',
      'Early problem detection',
      'Personalized treatment planning',
      'Professional advice',
      'X-ray diagnostics if needed',
      'No-pressure environment'
    ],
    procedure: [
      'Medical history review',
      'Visual examination',
      'Diagnostic imaging if needed',
      'Discussion of findings',
      'Treatment plan presentation'
    ],
    duration: '30-45 minutes',
    recovery: 'None',
    results: 'Clear understanding of oral health status'
  },
  {
    id: 'scaling',
    name: 'Scaling (Teeth Cleaning)',
    category: 'dental',
    shortDescription: 'Professional teeth cleaning for optimal oral health',
    description: 'Dental scaling is a professional cleaning procedure that removes plaque, tartar, and stains from your teeth. Regular scaling prevents gum disease, cavities, and maintains fresh breath and healthy gums.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2074&auto=format&fit=crop',
    benefits: [
      'Removes plaque and tartar',
      'Prevents gum disease',
      'Fresher breath',
      'Brighter smile',
      'Prevents cavities',
      'Maintains oral health'
    ],
    procedure: [
      'Oral examination',
      'Ultrasonic scaling',
      'Manual scaling if needed',
      'Polishing',
      'Fluoride treatment (optional)'
    ],
    duration: '30-60 minutes',
    recovery: 'None',
    results: 'Clean, fresh teeth and healthy gums'
  },
  {
    id: 'tambal-gigi',
    name: 'Tambal Gigi (Dental Filling)',
    category: 'dental',
    shortDescription: 'Restore damaged teeth with modern filling materials',
    description: 'Dental fillings restore teeth damaged by decay or trauma. We use high-quality, tooth-colored composite materials that blend naturally with your teeth while providing strong, durable restoration.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Stops decay progression',
      'Restores tooth function',
      'Natural appearance',
      'Durable materials',
      'Quick procedure',
      'Pain relief'
    ],
    procedure: [
      'Examination and X-ray',
      'Local anesthesia',
      'Decay removal',
      'Filling placement',
      'Shaping and polishing'
    ],
    duration: '30-60 minutes',
    recovery: 'None to minimal sensitivity',
    results: 'Restored tooth function and appearance'
  },
  {
    id: 'orthodontic',
    name: 'Orthodontic Treatment',
    category: 'dental',
    shortDescription: 'Straighten teeth and correct bite with braces or aligners',
    description: 'Orthodontic treatment corrects misaligned teeth and jaws using braces, clear aligners, or other appliances. Achieve a straighter, healthier smile with our modern orthodontic solutions.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop',
    benefits: [
      'Straighter teeth',
      'Improved bite function',
      'Enhanced facial aesthetics',
      'Easier cleaning',
      'Boosted confidence',
      'Multiple treatment options'
    ],
    procedure: [
      'Comprehensive orthodontic assessment',
      'Treatment planning and imaging',
      'Appliance placement',
      'Regular adjustment appointments',
      'Retention phase'
    ],
    duration: '12-24 months average',
    recovery: 'Adjustment period of few days',
    results: 'Beautifully aligned teeth and improved bite'
  },
  {
    id: 'dental-others',
    name: 'Other Dental Services',
    category: 'dental',
    shortDescription: 'Comprehensive dental care for all your oral health needs',
    description: 'We offer a wide range of additional dental services including emergency care, sports mouthguards, TMJ treatment, and more. Whatever your dental needs, our experienced team is here to help.',
    image: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=2070&auto=format&fit=crop',
    benefits: [
      'Comprehensive care',
      'Emergency services available',
      'Specialized treatments',
      'Experienced team',
      'Modern equipment',
      'Patient-centered approach'
    ],
    procedure: [
      'Consultation and assessment',
      'Customized treatment approach',
      'Professional care delivery',
      'Follow-up as needed'
    ],
    duration: 'Varies by service',
    recovery: 'Depends on treatment',
    results: 'Improved oral health and comfort'
  },
  {
    id: 'pedodontic',
    name: 'Pedodontic (Children\'s Dentistry)',
    category: 'dental',
    shortDescription: 'Gentle, specialized dental care for children',
    description: 'Pediatric dentistry focuses on the oral health of children from infancy through adolescence. Our gentle, patient approach helps children develop healthy dental habits and positive attitudes toward dental care.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop',
    benefits: [
      'Child-friendly environment',
      'Preventive care focus',
      'Gentle techniques',
      'Education for parents and children',
      'Early problem detection',
      'Positive dental experiences'
    ],
    procedure: [
      'Gentle examination',
      'Age-appropriate cleaning',
      'Fluoride treatment',
      'Sealants if needed',
      'Parent education'
    ],
    duration: '30-45 minutes',
    recovery: 'None',
    results: 'Healthy teeth and positive dental attitude'
  },
  {
    id: 'dental-products',
    name: 'Dental Products',
    category: 'dental',
    shortDescription: 'Professional-grade dental care products for home use',
    description: 'We offer a curated selection of professional-grade dental care products including toothbrushes, toothpaste, mouthwash, and specialized oral care items to maintain your oral health at home.',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=2080&auto=format&fit=crop',
    benefits: [
      'Professional-grade quality',
      'Dentist-recommended',
      'Effective oral care',
      'Specialized solutions',
      'Expert guidance',
      'Convenient purchase'
    ],
    procedure: [
      'Consultation on oral care needs',
      'Product recommendations',
      'Usage instructions',
      'Ongoing support'
    ],
    duration: 'N/A',
    recovery: 'N/A',
    results: 'Improved home oral care routine'
  },
  {
    id: 'prosthodontic',
    name: 'Prosthodontic (Dental Prosthetics)',
    category: 'dental',
    shortDescription: 'Replace missing teeth with crowns, bridges, and dentures',
    description: 'Prosthodontics specializes in replacing missing teeth and restoring oral function with crowns, bridges, dentures, and dental implants. Regain your smile, confidence, and ability to eat comfortably.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2074&auto=format&fit=crop',
    benefits: [
      'Restores missing teeth',
      'Improves chewing function',
      'Enhances appearance',
      'Natural-looking results',
      'Durable solutions',
      'Customized fit'
    ],
    procedure: [
      'Comprehensive assessment',
      'Treatment planning',
      'Tooth preparation or impressions',
      'Prosthetic fabrication',
      'Fitting and adjustment'
    ],
    duration: 'Multiple appointments over weeks',
    recovery: 'Adjustment period varies',
    results: 'Restored smile and function'
  },
  {
    id: 'rontgen',
    name: 'Rontgen (Dental X-Ray)',
    category: 'dental',
    shortDescription: 'Advanced dental imaging for accurate diagnosis',
    description: 'Dental X-rays are essential diagnostic tools that help us detect problems not visible during regular examination. We use modern digital X-ray technology with minimal radiation exposure for safe, accurate imaging.',
    image: 'https://images.unsplash.com/photo-1629909615957-be38b9e8f3b5?q=80&w=2071&auto=format&fit=crop',
    benefits: [
      'Accurate diagnosis',
      'Early problem detection',
      'Treatment planning aid',
      'Minimal radiation exposure',
      'Digital technology',
      'Immediate results'
    ],
    procedure: [
      'Positioning and protection',
      'X-ray capture',
      'Image review',
      'Diagnosis discussion'
    ],
    duration: '5-15 minutes',
    recovery: 'None',
    results: 'Clear diagnostic images for treatment planning'
  }
];

// Helper function to get treatment by ID
export const getTreatmentById = (id) => {
  const allTreatments = [...skinAestheticTreatments, ...dentalTreatments];
  return allTreatments.find(treatment => treatment.id === id);
};

// Helper function to get treatments by category
export const getTreatmentsByCategory = (category) => {
  if (category === 'skin-aesthetic') {
    return skinAestheticTreatments;
  } else if (category === 'dental') {
    return dentalTreatments;
  }
  return [];
};
