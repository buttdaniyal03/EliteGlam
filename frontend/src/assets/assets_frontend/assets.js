import about_image from "./about_image.jpg";
import appointment_img from "./appointment_img.png";
import arrow_icon from "./arrow_icon.svg";
import doc1 from "./assets_dr/doc1.jpeg";
import doc4 from "./assets_dr/doc10.jpeg";
import doc5 from "./assets_dr/doc11.jpeg";
import doc6 from "./assets_dr/doc12.jpeg";
import doc7 from "./assets_dr/doc13.jpeg";
import doc8 from "./assets_dr/doc14.jpeg";
import doc9 from "./assets_dr/doc15.jpeg";
import doc10 from "./assets_dr/doc2.jpeg";
import doc11 from "./assets_dr/doc3.jpeg";
import doc12 from "./assets_dr/doc4.jpeg";
import doc13 from "./assets_dr/doc5.jpeg";
import doc14 from "./assets_dr/doc6.jpeg";
import doc15 from "./assets_dr/doc7.jpeg";
import doc2 from "./assets_dr/doc8.jpeg";
import doc3 from "./assets_dr/doc9.jpeg";
import prod1 from "./assets_products/prod1.webp";
import prod10 from "./assets_products/prod10.webp";
import prod11 from "./assets_products/prod11.webp";
import prod12 from "./assets_products/prod12.webp";
import prod13 from "./assets_products/prod13.webp";
import prod14 from "./assets_products/prod14.jpg";
import prod15 from "./assets_products/prod15.webp";
import prod2 from "./assets_products/prod2.webp";
import prod3 from "./assets_products/prod3.webp";
import prod4 from "./assets_products/prod4.webp";
import prod5 from "./assets_products/prod5.webp";
import prod6 from "./assets_products/prod6.webp";
import prod7 from "./assets_products/prod7.webp";
import prod8 from "./assets_products/prod8.webp";
import prod9 from "./assets_products/prod9.webp";
import product_logo from "./assets_products/product_logo.jpg";
import keshav from "./assets_review/keshav.jpg";
import nixon from "./assets_review/nixon.jpg";
import partner_1 from "./assets_review/partner_1.svg";
import partner_2 from "./assets_review/partner_2.svg";
import partner_3 from "./assets_review/partner_3.svg";
import partner_4 from "./assets_review/partner_4.svg";
import vinod from "./assets_review/vinod.jpg";
import chats_icon from "./chats_icon.svg";
import clinic1 from "./clinicData/clinic1.jpg";
import clinic2 from "./clinicData/clinic2.jpg";
import clinic3 from "./clinicData/clinic3.jpg";
import clinic4 from "./clinicData/clinic4.jpg";
import clinic5 from "./clinicData/clinic5.jpg";
import clinicLogo from "./clinicLogo.svg";
import contact_image from "./contact_image.jpg";
import cross_icon from "./cross_icon.png";
import dropdown_icon from "./dropdown_icon.svg";
import header_img from "./header_img.jpg";
import header_img2 from "./header_img2.jpg";
import header_img3 from "./header_img3.jfif";
import header_img4 from "./header_img4.jpg";
import info_icon from "./info_icon.svg";
import logo from "./logo.svg";
import menu_icon from "./menu_icon.svg";
import profile_pic from "./profile_pic.png";
import razorpay_logo from "./razorpay_logo.png";
import salonLogo from "./salonLogo.svg";
import salon1 from "./salonsData/salon1.jfif";
import salon2 from "./salonsData/salon2.jfif";
import salon3 from "./salonsData/salon3.jfif";
import service1 from "./salonsData/service1.jfif";
import service2 from "./salonsData/service2.jfif";
import service3 from "./salonsData/service3.jfif";
import stripe_logo from "./stripe_logo.png";
import upload_icon from "./upload_icon.png";
import verified_icon from "./verified_icon.svg";

export const assets = {
  clinic1,
  clinic2,
  clinic3,
  clinic4,
  clinic5,
  salon1,
  salon2,
  salon3,
  service1,
  service2,
  service3,
  clinicLogo,
  product_logo,
  salonLogo,
  partner_1,
  partner_2,
  partner_3,
  partner_4,
  keshav,
  nixon,
  vinod,
  appointment_img,
  header_img,
  header_img2,
  header_img3,
  header_img4,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "salon",
    image: salonLogo,
  },
  {
    speciality: "dermatologist",
    image: clinicLogo,
  },
  {
    speciality: "Products",
    image: product_logo,
  },
];

export const reviews = [{}];

export const clinicData = [
  {
    clinicId: "clinic1",
    clinicName: "Richmond Dermatology Center",
    clinicAddress: "17th Cross, Richmond Circle, Ring Road, Lahore",
    dermatologists: [
      {
        _id: "doc1",
        name: "Dr. Fatima Khan",
        image: doc1,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 Years",
        about:
          "Dr. Fatima Khan focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 50,
      },
      {
        _id: "doc2",
        name: "Dr. Ayesha Malik",
        image: doc2,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "3 Years",
        about:
          "Dr. Ayesha Malik focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 60,
      },
    ],
  },
  {
    clinicId: "clinic2",
    clinicName: "City Skin Clinic",
    clinicAddress: "27th Cross, Richmond Circle, Ring Road, Karachi",
    dermatologists: [
      {
        _id: "doc3",
        name: "Dr. Zohaib Ahmed",
        image: doc3,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "1 Year",
        about:
          "Dr. Zohaib Ahmed focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 30,
      },
      {
        _id: "doc4",
        name: "Dr. Ali Raza",
        image: doc4,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "2 Years",
        about:
          "Dr. Ali Raza focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 40,
      },
    ],
  },
  {
    clinicId: "clinic3",
    clinicName: "SkinCare and Wellness Clinic",
    clinicAddress: "37th Cross, Richmond Circle, Ring Road, Islamabad",
    dermatologists: [
      {
        _id: "doc5",
        name: "Dr. Qasim Shah",
        image: doc5,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 Years",
        about:
          "Dr. Qasim Shah focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 50,
      },
      {
        _id: "doc6",
        name: "Dr. Farhan Iqbal",
        image: doc6,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 Years",
        about:
          "Dr. Farhan Iqbal focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 50,
      },
    ],
  },
  {
    clinicId: "clinic4",
    clinicName: "DermaCare Specialists",
    clinicAddress: "47th Cross, Richmond Circle, Ring Road, Faisalabad",
    dermatologists: [
      {
        _id: "doc7",
        name: "Dr. Bilal Ahmed",
        image: doc7,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 Years",
        about:
          "Dr. Bilal Ahmed focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 50,
      },
      {
        _id: "doc8",
        name: "Dr. Umair Qazi",
        image: doc8,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "3 Years",
        about:
          "Dr. Umair Qazi focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 60,
      },
    ],
  },
  {
    clinicId: "clinic5",
    clinicName: "Pure Skin Clinic",
    clinicAddress: "57th Cross, Richmond Circle, Ring Road, Multan",
    dermatologists: [
      {
        _id: "doc9",
        name: "Dr. Farah Siddiqui",
        image: doc9,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "1 Year",
        about:
          "Dr. Farah Siddiqui focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 30,
      },
      {
        _id: "doc10",
        name: "Dr. Sana Tariq",
        image: doc10,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "2 Years",
        about:
          "Dr. Sana Tariq focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 40,
      },
    ],
  },
  {
    clinicId: "clinic6",
    clinicName: "Glow Dermatology",
    clinicAddress: "67th Cross, Richmond Circle, Ring Road, Peshawar",
    dermatologists: [
      {
        _id: "doc11",
        name: "Dr. Attiya Malik",
        image: doc11,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 Years",
        about:
          "Dr. Attiya Malik focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 50,
      },
      {
        _id: "doc12",
        name: "Dr. Neha Hussain",
        image: doc12,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 Years",
        about:
          "Dr. Neha Hussain focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 50,
      },
    ],
  },
  {
    clinicId: "clinic7",
    clinicName: "Elite Derma Center",
    clinicAddress: "77th Cross, Richmond Circle, Ring Road, Quetta",
    dermatologists: [
      {
        _id: "doc13",
        name: "Dr. Faiza Khan",
        image: doc13,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 Years",
        about:
          "Dr. Faiza Khan focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 50,
      },
      {
        _id: "doc14",
        name: "Dr. Sara Noor",
        image: doc14,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "3 Years",
        about:
          "Dr. Sara Noor focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 60,
      },
    ],
  },
  {
    clinicId: "clinic8",
    clinicName: "Skin Solutions",
    clinicAddress: "87th Cross, Richmond Circle, Ring Road, Rawalpindi",
    dermatologists: [
      {
        _id: "doc15",
        name: "Dr. Hamza Ali",
        image: doc15,
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "1 Year",
        about:
          "Dr. Hamza Ali focuses on preventive medicine, early diagnosis, and effective treatment.",
        fees: 30,
      },
    ],
  },
];

export const dermatologist = [
  {
    _id: "doc1",
    clinicName: "Aesthetic Clinic Islamabad",
    clinicImg: clinic1,
    Services: "Dermatology, cosmetic procedures, laser treatments.",
    name: "Dr. Fatima Khan",
    image: doc1,
    speciality: "Dermatologist",
    degree: "MBBS, FCPS (Dermatology)",
    experience: "15 Years",
    about:
      "Dr. Fatima Khan is dedicated to providing excellent care in dermatology, with a focus on skin diseases and cosmetic treatments.",
    fees: 300,
    address: "F-8 Markaz, Islamabad.",
  },
  {
    _id: "doc2",
    clinicName: "PIMS Hospital",
    clinicImg: clinic2,
    Services: "Dermatology, skin care treatments.",
    name: "Dr. Ayesha Hamid",
    image: doc2,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "8 Years",
    about:
      "Dr. Ayesha Hamid specializes in treating a variety of skin conditions and offers personalized skincare advice.",
    fees: 250,
    address: "G-10, PIMS Hospital, Islamabad.",
  },
  {
    _id: "doc3",
    clinicName: "Skin Care Clinic",
    clinicImg: clinic3,
    Services: "Acne treatment, skin rejuvenation.",
    name: "Dr. Zohaib Khan",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, FCPS (Dermatology)",
    experience: "6 Years",
    about:
      "Dr. Zohaib Khan is committed to offering the latest treatments for skin health and beauty.",
    fees: 200,
    address: "G-11, Islamabad.",
  },
  {
    _id: "doc4",
    clinicName: "Max Healthcare",
    clinicImg: clinic4,
    Services: "Cosmetic dermatology, laser treatments.",
    name: "Dr. Ali Raza",
    image: doc4,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "10 Years",
    about:
      "Dr. Ali Raza provides comprehensive dermatology services and focuses on cosmetic skin procedures.",
    fees: 350,
    address: "Bahria Town, Rawalpindi.",
  },
  {
    _id: "doc5",
    clinicName: "Lahore Skin Clinic",
    clinicImg: clinic5,
    Services: "Skin surgeries, cosmetic procedures.",
    name: "Dr. Qasim Shah",
    image: doc5,
    speciality: "Dermatologist",
    degree: "MBBS, FCPS (Dermatology)",
    experience: "12 Years",
    about:
      "Dr. Qasim Shah specializes in advanced cosmetic dermatology and skin surgeries.",
    fees: 300,
    address: "Kahuta Road, Rawalpindi.",
  },
  {
    _id: "doc6",
    clinicName: "Skin Care Centre",
    clinicImg: clinic2,
    Services: "Dermatology, skincare consultations.",
    name: "Dr. Farhan Iqbal",
    image: doc6,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "5 Years",
    about:
      "Dr. Farhan Iqbal offers comprehensive skin care solutions and specializes in acne and pigmentation.",
    fees: 250,
    address: "F-10, Islamabad.",
  },
  {
    _id: "doc7",
    clinicName: "Skin Aesthetic Clinic",
    clinicImg: clinic4,
    Services: "Skin treatments, cosmetic dermatology.",
    name: "Dr. Bilal Ahmed",
    image: doc7,
    speciality: "Dermatologist",
    degree: "MBBS, FCPS (Dermatology)",
    experience: "7 Years",
    about:
      "Dr. Bilal Ahmed is dedicated to helping patients achieve healthy, beautiful skin through personalized care.",
    fees: 300,
    address: "Islamabad, Near Quaid-e-Azam University.",
  },
  {
    _id: "doc8",
    clinicName: "Aesthetic Derma Clinic",
    clinicImg: clinic3,
    Services: "Dermatology, laser therapy.",
    name: "Dr. Umair Qazi",
    image: doc8,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "4 Years",
    about:
      "Dr. Umair Qazi specializes in both medical and aesthetic dermatology.",
    fees: 250,
    address: "Bahria Town, Islamabad.",
  },
  // {
  //   _id: "doc9",
  //   clinicName: "KARACHI Medical Centre",
  //   clinicImg: clinic1,
  //   Services: "Acne treatment, skin surgery.",
  //   name: "Dr. Farah Siddiqui",
  //   image: doc9,
  //   speciality: "Dermatologist",
  //   degree: "MBBS, FCPS (Dermatology)",
  //   experience: "3 Years",
  //   about:
  //     "Dr. Farah Siddiqui provides state-of-the-art treatments for various skin conditions.",
  //   fees: 200,
  //   address: "F-10, Islamabad.",
  // },
  // {
  //   _id: "doc10",
  //   clinicName: "Islamabad Skin Care Clinic",
  //   clinicImg: clinic1,
  //   Services: "Skin consultations, cosmetic procedures.",
  //   name: "Dr. Sana Tariq",
  //   image: doc10,
  //   speciality: "Dermatologist",
  //   degree: "MBBS, MD (Dermatology)",
  //   experience: "8 Years",
  //   about:
  //     "Dr. Sana Tariq focuses on providing the highest level of dermatological care and cosmetic treatments.",
  //   fees: 300,
  //   address: "B-17, Islamabad.",
  // },
  // {
  //   _id: "doc11",
  //   clinicName: "Aesthetic Skin Care",
  //   clinicImg: clinic1,
  //   Services: "Cosmetic dermatology, skin treatments.",
  //   name: "Dr. Attiya Malik",
  //   image: doc11,
  //   speciality: "Dermatologist",
  //   degree: "MBBS, FCPS (Dermatology)",
  //   experience: "10 Years",
  //   about:
  //     "Dr. Attiya Malik specializes in advanced skin treatments and aesthetic procedures.",
  //   fees: 350,
  //   address: "Bahria Town, Rawalpindi.",
  // },
  // {
  //   _id: "doc12",
  //   clinicName: "Healthy Skin Clinic",
  //   clinicImg: clinic1,
  //   Services: "Dermatology, skin care advice.",
  //   name: "Dr. Neha Hussain",
  //   image: doc12,
  //   speciality: "Dermatologist",
  //   degree: "MBBS, MD (Dermatology)",
  //   experience: "5 Years",
  //   about:
  //     "Dr. Neha Hussain offers personalized skin care and effective treatments for various skin conditions.",
  //   fees: 250,
  //   address: "F-8, Islamabad.",
  // },
  // {
  //   _id: "doc13",
  //   clinicName: "Skin and Hair Clinic",
  //   clinicImg: clinic1,
  //   Services: "Dermatology, hair treatments.",
  //   name: "Dr. Faiza Khan",
  //   image: doc13,
  //   speciality: "Dermatologist",
  //   degree: "MBBS, FCPS (Dermatology)",
  //   experience: "6 Years",
  //   about:
  //     "Dr. Faiza Khan provides comprehensive dermatological care focusing on skin and hair issues.",
  //   fees: 300,
  //   address: "G-11, Rawalpindi.",
  // },
  // {
  //   _id: "doc14",
  //   clinicName: "Allied Hospital",
  //   clinicImg: clinic1,
  //   Services: "Cosmetic dermatology, skin surgeries.",
  //   name: "Dr. Sara Noor",
  //   image: doc14,
  //   speciality: "Dermatologist",
  //   degree: "MBBS, MD (Dermatology)",
  //   experience: "7 Years",
  //   about:
  //     "Dr. Sara Noor specializes in both medical and aesthetic dermatology.",
  //   fees: 250,
  //   address: "Mouza Sanghri, Rawalpindi.",
  // },
  // {
  //   _id: "doc15",
  //   clinicName: "Classic Skin Care Clinic",
  //   clinicImg: clinic1,
  //   Services: "Skin consultations, acne treatments.",
  //   name: "Dr. Hamza Ali",
  //   image: doc15,
  //   speciality: "Dermatologist",
  //   degree: "MBBS, FCPS (Dermatology)",
  //   experience: "4 Years",
  //   about:
  //     "Dr. Hamza Ali is dedicated to delivering high-quality dermatological care.",
  //   fees: 200,
  //   address: "D-12, Islamabad.",
  // },
];

export const productsData = [
  {
    id: "prod1",
    name: "Hydrating Facial Cream",
    image: prod1, // Ensure this path is correct
    description:
      "A nourishing cream that provides intense hydration for dry skin.",
    price: 400, // Approx. PKR
    features: [
      "100% safe to use",
      "100% cruelty free",
      "All skin types",
      "Natural products",
      "Moisturizing formula",
      "Best skincare product",
    ],
    instructions:
      "Use once or twice daily. Apply over the face and neck avoiding the eye area. Allow to absorb fully.",
    contents: "50 ML tube",
  },
  {
    id: "prod2",
    name: "Acne Treatment Gel",
    image: prod2, // Ensure this path is correct
    description: "Effective treatment for acne-prone skin, reduces breakouts.",
    price: 300, // Approx. PKR
    features: [
      "Fast-acting formula",
      "Non-comedogenic",
      "Suitable for all skin types",
    ],
    instructions:
      "Apply a small amount directly to affected areas. Use twice a day for best results.",
    contents: "30 ML tube",
  },
  {
    id: "prod3",
    name: "Brightening Vitamin C Serum",
    image: prod3, // Ensure this path is correct
    description: "A potent serum that brightens skin and reduces dark spots.",
    price: 750, // Approx. PKR
    features: [
      "Rich in antioxidants",
      "Boosts collagen production",
      "Brightens skin tone",
    ],
    instructions:
      "Apply a few drops to clean skin, morning and night. Gently massage until fully absorbed.",
    contents: "30 ML bottle",
  },
  {
    id: "prod4",
    name: "Soothing Aloe Vera Gel",
    image: prod4, // Ensure this path is correct
    description:
      "Calming gel for sunburns and irritation, great for all skin types.",
    price: 200, // Approx. PKR
    features: [
      "100% natural aloe vera",
      "Soothes irritation",
      "Hydrates and refreshes skin",
    ],
    instructions:
      "Apply generously to affected areas as needed. Can be used daily.",
    contents: "200 ML tube",
  },
  {
    id: "prod5",
    name: "Exfoliating Scrub",
    image: prod5, // Ensure this path is correct
    description:
      "Gentle scrub that removes dead skin cells for a radiant complexion.",
    price: 450, // Approx. PKR
    features: [
      "Natural exfoliants",
      "Removes impurities",
      "Revitalizes skin texture",
    ],
    instructions:
      "Use 1-2 times a week. Apply to damp skin, gently massage, then rinse thoroughly.",
    contents: "100 GM jar",
  },
  {
    id: "prod6",
    name: "Retinol Anti-Aging Serum",
    image: prod6, // Ensure this path is correct
    description:
      "Powerful serum that minimizes fine lines and improves texture.",
    price: 2500, // Approx. PKR
    features: [
      "Reduces wrinkles",
      "Promotes skin renewal",
      "Suitable for all skin types",
    ],
    instructions:
      "Apply a small amount to clean skin in the evening. Use sunscreen during the day.",
    contents: "30 ML bottle",
  },
  {
    id: "prod7",
    name: "Oil Control Moisturizer",
    image: prod7, // Ensure this path is correct
    description:
      "Lightweight moisturizer that hydrates while controlling excess oil.",
    price: 600, // Approx. PKR
    features: [
      "Controls shine",
      "Non-greasy formula",
      "Hydrates skin without clogging pores",
    ],
    instructions:
      "Apply to face and neck after cleansing. Use daily for best results.",
    contents: "50 ML jar",
  },
  {
    id: "prod8",
    name: "Gentle Foaming Cleanser",
    image: prod8, // Ensure this path is correct
    description:
      "A gentle foaming cleanser that removes impurities without drying.",
    price: 500, // Approx. PKR
    features: ["Deep cleanses", "Hydrates skin", "pH balanced formula"],
    instructions:
      "Apply a small amount to wet face, massage gently, and rinse off with water.",
    contents: "100 ML bottle",
  },
  {
    id: "prod9",
    name: "Sunscreen SPF 50",
    image: prod9, // Ensure this path is correct
    description:
      "Broad spectrum sunscreen that protects against harmful UV rays.",
    price: 900, // Approx. PKR
    features: [
      "Water-resistant",
      "Non-greasy finish",
      "Suitable for all skin types",
    ],
    instructions:
      "Apply generously to face and neck before sun exposure. Reapply every two hours.",
    contents: "50 ML tube",
  },
  {
    id: "prod10",
    name: "Calming Face Mask",
    image: prod10, // Ensure this path is correct
    description: "A soothing mask that calms redness and irritation.",
    price: 350, // Approx. PKR
    features: [
      "Hydrating formula",
      "Reduces redness",
      "Suitable for sensitive skin",
    ],
    instructions:
      "Apply to clean face, leave on for 15 minutes, and rinse with lukewarm water.",
    contents: "100 GM jar",
  },
  {
    id: "prod11",
    name: "Pore Minimizer Serum",
    image: prod11, // Ensure this path is correct
    description: "Reduces the appearance of pores and refines skin texture.",
    price: 1400, // Approx. PKR
    features: ["Minimizes pores", "Smooths skin texture", "Non-comedogenic"],
    instructions:
      "Apply to clean skin before moisturizer. Use morning and night for best results.",
    contents: "30 ML bottle",
  },
  {
    id: "prod12",
    name: "Nourishing Night Cream",
    image: prod12, // Ensure this path is correct
    description: "Rich night cream that repairs and hydrates skin overnight.",
    price: 1200, // Approx. PKR
    features: [
      "Intensive hydration",
      "Repairs skin overnight",
      "Rich in antioxidants",
    ],
    instructions: "Apply to clean skin before bedtime, focusing on dry areas.",
    contents: "50 ML jar",
  },
  {
    id: "prod13",
    name: "Gentle Eye Cream",
    image: prod13, // Ensure this path is correct
    description: "Hydrating cream that targets dark circles and puffiness.",
    price: 800, // Approx. PKR
    features: [
      "Lightweight formula",
      "Targets dark circles",
      "Moisturizes delicate eye area",
    ],
    instructions:
      "Dab a small amount around the eye area gently with your fingertip.",
    contents: "15 ML tube",
  },
  {
    id: "prod14",
    name: "Firming Neck Cream",
    image: prod14, // Ensure this path is correct
    description:
      "Specially formulated cream to firm and tighten the neck area.",
    price: 1100, // Approx. PKR
    features: [
      "Improves skin elasticity",
      "Hydrates and firms",
      "Targets fine lines",
    ],
    instructions: "Apply to neck area in upward strokes, morning and night.",
    contents: "50 ML jar",
  },
  {
    id: "prod15",
    name: "Acne Spot Treatment",
    image: prod15, // Ensure this path is correct
    description:
      "Targeted treatment that reduces redness and swelling of pimples.",
    price: 250, // Approx. PKR
    features: [
      "Quick action formula",
      "Reduces inflammation",
      "Safe for all skin types",
    ],
    instructions: "Apply directly to blemishes as needed. Use twice daily.",
    contents: "20 ML tube",
  },
];

export const salons = [
  {
    salonId: "salon1",
    salonName: "Elite Glam Salon",
    salonAddress: "123 Beauty Lane, Downtown, Lahore",
    contactNumber: "+92 123 456 7890",
    email: "info@eliteglam.com",
    openingHours: "9:00 AM - 8:00 PM",
    rating: 4.8,
    services: [
      {
        serviceId: "service1",
        serviceName: "Pedicure",
        description: "Relaxing and thorough pedicure",
        price: 1000, // price in local currency
        duration: "30 mins",
        image: service1,
      },

      {
        serviceId: "service2",
        serviceName: "Manicure",
        description: "Classic manicure for soft and beautiful hands",
        price: 1500,
        duration: "45 mins",
        image: service2,
      },
      {
        serviceId: "service3",
        serviceName: "Facial",
        description: "Deep cleansing and rejuvenating facial",
        price: 2500,
        duration: "60 mins",
        image: service3,
      },
    ],
    stylists: [
      {
        stylistId: "stylist1",
        name: "Maria Khan",
        specialty: "Hair Stylist",
        experience: "5 years",
        profileImage: "/assets/stylist1.png",
        rating: 4.9,
      },
      {
        stylistId: "stylist2",
        name: "Sara Ali",
        specialty: "Skin Specialist",
        experience: "3 years",
        profileImage: "/assets/stylist2.png",
        rating: 4.7,
      },
    ],
    deals: [
      {
        dealId: "deal1",
        title: "50% off on Facial",
        description: "Get a facial at half the price",
        discount: 50,
        validTill: "2024-12-31",
      },
      {
        dealId: "deal2",
        title: "Haircut & Styling Combo",
        description: "Save on a combo of haircut and styling",
        discount: 20,
        validTill: "2024-11-30",
      },
    ],
    reviews: [
      {
        reviewId: "review1",
        customerName: "Ahmed Raza",
        rating: 5,
        comment: "Excellent service and friendly staff!",
        date: "2024-11-01",
      },
      {
        reviewId: "review2",
        customerName: "Sana Farooq",
        rating: 4,
        comment: "Loved the ambiance and the facial service.",
        date: "2024-10-25",
      },
    ],
    images: salon1,
  },
  {
    salonId: "salon2",
    salonName: "Glamour Hub",
    salonAddress: "45 Fashion Street, Main Market, Karachi",
    contactNumber: "+92 987 654 3210",
    email: "contact@glamourhub.com",
    openingHours: "10:00 AM - 9:00 PM",
    rating: 4.5,
    services: [
      {
        serviceId: "service4",
        serviceName: "Hair Color",
        description: "Premium hair coloring services",
        price: 3000,
        duration: "90 mins",
        image: service3,
      },
      {
        serviceId: "service5",
        serviceName: "Pedicure",
        description: "Relaxing and thorough pedicure",
        price: 1800,
        duration: "60 mins",
        image: service1,
      },
    ],
    stylists: [
      {
        stylistId: "stylist3",
        name: "Ali Raza",
        specialty: "Hair Color Specialist",
        experience: "7 years",
        profileImage: "/assets/stylist3.png",
        rating: 4.6,
      },
    ],
    deals: [
      {
        dealId: "deal3",
        title: "20% off on Pedicure",
        description: "Enjoy a relaxing pedicure at a discounted price",
        discount: 20,
        validTill: "2024-12-15",
      },
    ],
    reviews: [
      {
        reviewId: "review3",
        customerName: "Zara Ahmed",
        rating: 5,
        comment: "My go-to salon for hair color!",
        date: "2024-11-02",
      },
    ],
    images: salon2,
  },
  {
    salonId: "salon3",
    salonName: "Glamour Hub",
    salonAddress: "45 Fashion Street, Main Market, Karachi",
    contactNumber: "+92 987 654 3210",
    email: "contact@glamourhub.com",
    openingHours: "10:00 AM - 9:00 PM",
    rating: 4.5,
    services: [
      {
        serviceId: "service5",
        serviceName: "Head Massage",
        description: "Deep Clinsing with Head Massage",
        price: 3000,
        duration: "90 mins",
        image: service3,
      },
      {
        serviceId: "service6",
        serviceName: "Pedicure",
        description: "Relaxing and thorough pedicure",
        price: 1800,
        duration: "60 mins",
        image: service1,
      },
    ],
    stylists: [
      {
        stylistId: "stylist3",
        name: "Ali Raza",
        specialty: "Hair Color Specialist",
        experience: "7 years",
        profileImage: "/assets/stylist3.png",
        rating: 4.6,
      },
    ],
    deals: [
      {
        dealId: "deal3",
        title: "20% off on Pedicure",
        description: "Enjoy a relaxing pedicure at a discounted price",
        discount: 20,
        validTill: "2024-12-15",
      },
    ],
    reviews: [
      {
        reviewId: "review3",
        customerName: "Zara Ahmed",
        rating: 5,
        comment: "My go-to salon for hair color!",
        date: "2024-11-02",
      },
    ],
    images: salon3,
  },
];
