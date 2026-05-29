export const hostelResults = [
  {
    id: "HOSTEL-NBH-00052",
    name: "Nest Boys Hostel",
    gender: "Male" as const,
    city: "Kochi, Kerala",
    college: "Jain University",
    roomTypes: ["Double Sharing", "Triple Sharing", "Four Sharing"],
    image: "/images/boys_room.png",
    price: "₹5,800",
    rating: 5.0,
    reviewsCount: 1000,
    amenities: ["Hot Water", "Attached Bathroom", "WIFI", "House Keeping Service", "Individual Wardrobe", "CCTV Camera", "Drinking Water", "Laundry", "Student/Parent Portal", "Medical Assistance", "Warden Supervision", "Mess Hall", "Study Hall", "Individual Study Table", "Power Backup", "Washing Machine", "24/7 Security"],
    mapCoords: { x: 45, y: 70 },
    description: "Nest Hostel by Ivy Living, affiliated with Jain University, offers accommodation exclusively for male students of Jain University. Situated just 4 km from the campus, the hostel ensures convenient travel with dedicated university bus services. Laundry facilities are available through third-party providers upon request. Food services are optional, with complimentary breakfast and lunch/dinner available as required. All discipline rules, entry timings, and attendance guidelines strictly follow Jain University regulations, ensuring a structured, safe, and supportive living environment for students.\nStudents and parents have access to a dedicated portal for attendance tracking, leave requests, help and support, and other essential services.",
    detailedRoomTypes: [
      { name: "Twin Share AC", price: "₹2,25,000", frequency: "Per Annum", slotsLeft: 0 },
      { name: "Four Share", price: "₹1,26,500", frequency: "Per Annum", slotsLeft: 23 },
      { name: "Twin Share AC - Premium", price: "₹2,78,000", frequency: "Per Annum", slotsLeft: 2 },
      { name: "Triple Share AC - Premium", price: "₹2,17,500", frequency: "Per Annum", slotsLeft: 5 },
      { name: "Triple Share", price: "₹1,43,000", frequency: "Per Annum", slotsLeft: 12 },
      { name: "Five Share AC", price: "₹1,32,000", frequency: "Per Annum", slotsLeft: 4 },
      { name: "Six Share AC", price: "₹1,21,000", frequency: "Per Annum", slotsLeft: 8 },
    ],
    contact: {
      phones: ["9071659090", "7012071178"],
      email: "jainhostels@ivyliving.in",
      address: "Ivy Living boys hostel, Near cars 24 showroom, Block panchayat road, Kuzhikkattumoola, Kakkanad, Kerala 682021"
    },
    gallery: [
      "/images/boys_room.png",
      "/images/lifestyle_1.png",
      "/images/lifestyle_2.png",
      "/images/lifestyle_3.png",
      "/images/lifestyle_4.png",
      "/images/vit_vellore.png",
      "/images/kochi.png"
    ]
  },
  {
    id: "HOSTEL-BLR-0001",
    name: "Hail Mary Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Main Campus",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/girls_room.png",
    price: "₹6,200",
    rating: 4.6,
    reviewsCount: 342,
    amenities: ["Wifi", "AC", "Food"],
    mapCoords: { x: 120, y: 35 },
    description: "Premium and safe accommodation designed specifically for female students. Enjoy high-quality amenities, strong security, and a supportive community atmosphere.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹12,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹6,200", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-BLR-0002",
    name: "St Catherine Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Airport Road Campus",
    roomTypes: ["Twin Share AC", "Single Sharing"],
    image: "/images/girls_room.png",
    price: "₹7,000",
    rating: 4.8,
    reviewsCount: 412,
    amenities: ["Wifi", "AC", "Food"],
    mapCoords: { x: 140, y: 45 },
    description: "A secure and vibrant community for girls located close to the Airport Road campus. Fully furnished rooms and excellent food services.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹14,000", frequency: "Per Month" },
      { name: "Twin Share AC", price: "₹7,000", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-KTM-0001",
    name: "Kottayam Scholar Hostel",
    gender: "Male" as const,
    city: "Kottayam, Kerala",
    college: "Mahatma Gandhi University area",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/boys_room.png",
    price: "₹5,200",
    rating: 4.3,
    reviewsCount: 156,
    amenities: ["Wifi"],
    mapCoords: { x: 60, y: 90 },
    description: "Budget-friendly stay for scholars looking for a peaceful environment to focus on their studies.",
    detailedRoomTypes: [
      { name: "Double Sharing", price: "₹6,500", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹5,200", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-TVM-0001",
    name: "Trivandrum Academic Residence",
    gender: "Female" as const,
    city: "Trivandrum, Kerala",
    college: "University district",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/girls_room.png",
    price: "₹6,400",
    rating: 4.7,
    reviewsCount: 220,
    amenities: ["Wifi", "Food"],
    mapCoords: { x: 80, y: 95 },
    description: "Centrally located academic residence providing a safe and disciplined environment for female students.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹9,500", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹6,400", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-CAL-0001",
    name: "Calicut Verified Stay",
    gender: "Male" as const,
    city: "Calicut, Kerala",
    college: "Calicut educational corridor",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/boys_room.png",
    price: "₹5,500",
    rating: 4.4,
    reviewsCount: 95,
    amenities: ["Wifi"],
    mapCoords: { x: 30, y: 55 },
    description: "Verified living spaces tailored for male students focused on academic success in the Calicut corridor.",
    detailedRoomTypes: [
      { name: "Double Sharing", price: "₹6,500", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹5,500", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-BLR-0003",
    name: "North Bangalore Student Residence",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Reva University / Several Colleges",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/boys_room.png",
    price: "₹8,500",
    rating: 4.8,
    reviewsCount: 512,
    amenities: ["Wifi", "AC", "Single Room", "Food"],
    mapCoords: { x: 110, y: 25 },
    description: "Premium student residence offering top-tier amenities including AC, high-speed WiFi, and nutritious meals.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹15,000", frequency: "Per Month" },
      { name: "Double Sharing AC", price: "₹8,500", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-BLR-0004",
    name: "Premium Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Main Campus",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/girls_room.png",
    price: "₹7,200",
    rating: 4.9,
    reviewsCount: 890,
    amenities: ["Wifi", "AC", "Food"],
    mapCoords: { x: 125, y: 30 },
    description: "The highest-rated girls hostel with premium facilities, rigorous security, and exceptional cleanliness.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹14,500", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹7,200", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-BLR-0005",
    name: "Bangalore Academic Stay",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University - Airport Road Campus",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/lifestyle_1.png",
    price: "₹6,500",
    rating: 4.7,
    reviewsCount: 231,
    amenities: ["Wifi", "Single Room"],
    mapCoords: { x: 130, y: 40 },
    description: "Ideal academic stay close to the campus, minimizing commute times and maximizing productivity.",
    detailedRoomTypes: [
      { name: "Double Sharing", price: "₹8,000", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹6,500", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-BLR-0006",
    name: "Parent-Approved Girls Hostel",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Kristu Jayanti University",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/lifestyle_2.png",
    price: "₹6,800",
    rating: 4.6,
    reviewsCount: 450,
    amenities: ["Wifi", "Food"],
    mapCoords: { x: 118, y: 38 },
    description: "Designed for trust, safety, and clarity, this hostel is highly recommended by parents.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹12,500", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹6,800", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-BLR-0007",
    name: "Christ College Executive Stay",
    gender: "Male" as const,
    city: "Bangalore, Karnataka",
    college: "Christ University",
    roomTypes: ["Single Sharing", "Double Sharing AC"],
    image: "/images/christ_university.png",
    price: "₹9,200",
    rating: 4.9,
    reviewsCount: 620,
    amenities: ["Wifi", "AC", "Single Room", "Food"],
    mapCoords: { x: 95, y: 55 },
    description: "Executive level stay for students demanding the best in comfort and convenience near Christ University.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹18,000", frequency: "Per Month" },
      { name: "Double Sharing AC", price: "₹9,200", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-BLR-0008",
    name: "Jain University Elite Residence",
    gender: "Female" as const,
    city: "Bangalore, Karnataka",
    college: "Jain University",
    roomTypes: ["Single Sharing", "Double Sharing AC"],
    image: "/images/jain_university.png",
    price: "₹8,900",
    rating: 4.8,
    reviewsCount: 390,
    amenities: ["Wifi", "AC", "Food"],
    mapCoords: { x: 105, y: 60 },
    description: "Elite residence providing modern amenities, gym access, and 24/7 security for female students.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹16,500", frequency: "Per Month" },
      { name: "Double Sharing AC", price: "₹8,900", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-VEL-0001",
    name: "VIT Vellore Campus Linked Stay",
    gender: "Male" as const,
    city: "Vellore, Tamil Nadu",
    college: "VIT Vellore",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/vit_vellore.png",
    price: "₹7,500",
    rating: 4.7,
    reviewsCount: 180,
    amenities: ["Wifi", "Single Room"],
    mapCoords: { x: 160, y: 50 },
    description: "Spacious rooms with study desks and warden care directly linked to the VIT Vellore ecosystem.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹14,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹7,500", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-KOC-0001",
    name: "Kochi Marine Drive Student Housing",
    gender: "Female" as const,
    city: "Kochi, Kerala",
    college: "Cochin University of Science and Technology",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/kochi.png",
    price: "₹6,900",
    rating: 4.6,
    reviewsCount: 215,
    amenities: ["Wifi", "Food"],
    mapCoords: { x: 40, y: 75 },
    description: "Scenic views, a quiet study environment, and healthy meals make this a premier choice in Kochi.",
    detailedRoomTypes: [
      { name: "Double Sharing", price: "₹8,500", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹6,900", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-DEL-0001",
    name: "Delhi University Scholars Home",
    gender: "Male" as const,
    city: "Delhi NCR",
    college: "Delhi University",
    roomTypes: ["Single Sharing", "Double Sharing"],
    image: "/images/delhi_university.png",
    price: "₹8,100",
    rating: 4.8,
    reviewsCount: 540,
    amenities: ["Wifi", "AC"],
    mapCoords: { x: 10, y: 15 },
    description: "Academic focused living near North Campus with robust infrastructure.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹15,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹8,100", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-KTM-0002",
    name: "Kottayam Garden Residence",
    gender: "Female" as const,
    city: "Kottayam, Kerala",
    college: "Mahatma Gandhi University area",
    roomTypes: ["Double Sharing", "Triple Sharing"],
    image: "/images/kottayam.png",
    price: "₹6,200",
    rating: 4.7,
    reviewsCount: 112,
    amenities: ["Wifi", "Food"],
    mapCoords: { x: 55, y: 85 },
    description: "Peaceful atmosphere surrounded by nature, featuring dedicated transport to the university.",
    detailedRoomTypes: [
      { name: "Double Sharing", price: "₹8,000", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹6,200", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0001",
    name: "HooLiv Heights",
    gender: "Female" as const,
    city: "Pune, Maharashtra",
    college: "EON IT Park & Colleges near Kharadi",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/girls_room.png",
    price: "₹18,000",
    rating: 4.8,
    reviewsCount: 220,
    amenities: ["Wifi", "AC", "Food", "Single Room"],
    mapCoords: { x: 85, y: 40 },
    description: "Luxury living near EON IT Park, catering to students and interns demanding high-end amenities.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹30,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹22,000", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹18,000", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0002",
    name: "HooLiv Cornerstone",
    gender: "Male" as const,
    city: "Pune, Maharashtra",
    college: "Symbiosis & Wadgaonsheri educational cluster",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/boys_room.png",
    price: "₹10,000",
    rating: 4.6,
    reviewsCount: 195,
    amenities: ["Wifi", "Food"],
    mapCoords: { x: 90, y: 45 },
    description: "A strong foundation for academic pursuits in the Symbiosis cluster.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹18,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹12,500", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹10,000", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0003",
    name: "HooLiv Social",
    gender: "Female" as const,
    city: "Pune, Maharashtra",
    college: "Hinjewadi IT & Engineering Colleges",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/lifestyle_3.png",
    price: "₹8,000",
    rating: 4.7,
    reviewsCount: 310,
    amenities: ["Wifi", "AC", "Food"],
    mapCoords: { x: 20, y: 50 },
    description: "Vibrant community living tailored for engineering students in Hinjewadi.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹16,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹11,000", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹8,000", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0004",
    name: "HooLiv Nova",
    gender: "Male" as const,
    city: "Pune, Maharashtra",
    college: "Sinhagad Institute Ambegaon",
    roomTypes: ["Single Sharing", "Triple Sharing"],
    image: "/images/boys_room.png",
    price: "₹5,500",
    rating: 4.4,
    reviewsCount: 88,
    amenities: ["Wifi"],
    mapCoords: { x: 45, y: 80 },
    description: "Affordable and practical accommodation near Sinhagad Institute.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹10,000", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹5,500", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0005",
    name: "HooLiv Grace",
    gender: "Female" as const,
    city: "Pune, Maharashtra",
    college: "Sinhagad Institute Vadgaon Budruk",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/girls_room.png",
    price: "₹6,000",
    rating: 4.5,
    reviewsCount: 142,
    amenities: ["Wifi", "Food"],
    mapCoords: { x: 40, y: 78 },
    description: "Graceful and secure living arrangements for female students at Sinhagad.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹12,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹8,500", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹6,000", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0006",
    name: "HooLiv Oscar",
    gender: "Male" as const,
    city: "Pune, Maharashtra",
    college: "Balewadi & Baner Higher Education",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/lifestyle_4.png",
    price: "₹19,500",
    rating: 4.9,
    reviewsCount: 410,
    amenities: ["Wifi", "AC", "Single Room", "Food"],
    mapCoords: { x: 30, y: 35 },
    description: "Award-winning facilities and service in the premium Balewadi area.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹35,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹25,000", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹19,500", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0007",
    name: "HooLiv Titan",
    gender: "Male" as const,
    city: "Pune, Maharashtra",
    college: "Sinhagad Vadgaon Campus district",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/boys_room.png",
    price: "₹3,999",
    rating: 4.3,
    reviewsCount: 560,
    amenities: ["Wifi"],
    mapCoords: { x: 42, y: 82 },
    description: "The most economical choice providing all basic necessities without compromise on safety.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹8,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹5,500", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹3,999", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0008",
    name: "HooLiv Arcadia",
    gender: "Female" as const,
    city: "Pune, Maharashtra",
    college: "Symbiosis Viman Nagar / Sanjay Park",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/girls_room.png",
    price: "₹11,999",
    rating: 4.8,
    reviewsCount: 305,
    amenities: ["Wifi", "AC", "Food", "Single Room"],
    mapCoords: { x: 95, y: 38 },
    description: "An idyllic setting for focused studies and comfortable living in Viman Nagar.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹22,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹16,500", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹11,999", frequency: "Per Month" }
    ]
  },
  {
    id: "HOSTEL-PUN-0009",
    name: "HooLiv Ariana",
    gender: "Female" as const,
    city: "Pune, Maharashtra",
    college: "Moze College / Balewadi Highway Campus",
    roomTypes: ["Single Sharing", "Double Sharing", "Triple Sharing"],
    image: "/images/lifestyle_1.png",
    price: "₹12,000",
    rating: 4.7,
    reviewsCount: 275,
    amenities: ["Wifi", "AC", "Food"],
    mapCoords: { x: 32, y: 38 },
    description: "Elegant living spaces prioritizing convenience and modern lifestyle needs.",
    detailedRoomTypes: [
      { name: "Single Sharing", price: "₹21,000", frequency: "Per Month" },
      { name: "Double Sharing", price: "₹15,000", frequency: "Per Month" },
      { name: "Triple Sharing", price: "₹12,000", frequency: "Per Month" }
    ]
  }
];
