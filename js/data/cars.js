const cars = [
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "ford-explorer-2019",
    slug: "ford-explorer-2019",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: false,
    discountPercent: 0,
    condition: "Used",
    year: 2019,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Ford Explorer 2019",
    make: "Ford",
    model: "Explorer",
    bodyType: "SUV",

    rating: 4,
    reviews: 8,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: 48000, // assumed market price
    salePrice: 45000, // assumed offer price

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/ford/ford (1).jpg",
      "/assets/images/ford/ford (2).jpg",
      "/assets/images/ford/ford (3).jpg",
      "/assets/images/ford/ford (4).jpg",
      "/assets/images/ford/ford (5).jpg",
      "/assets/images/ford/ford (6).jpg",
      "/assets/images/ford/ford (7).jpg",
      "/assets/images/ford/ford (8).jpg",
      "/assets/images/ford/ford (9).jpg",
      "/assets/images/ford/ford (10).jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "68,000 miles",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "FEX2019",
      vin: "1FM5K8D85KGB12345", // placeholder VIN
      year: 2019,
      mileage: "68,000 miles",
      transmission: "Automatic",
      engineSize: "2.3L EcoBoost",
      driveType: "AWD",
      cylinders: 4,
      fuelType: "Petrol",
      doors: 5,
      color: "White",
      seats: 5,
      cityMPG: 20,
      highwayMPG: 27,
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Well-maintained Ford Explorer 2019 with a powerful yet efficient engine. Spacious interior with seating for five, smooth automatic transmission, and excellent safety features. Ideal for families and long drives.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Parking sensors",
        "Rear view camera",
      ],
      exterior: ["Alloy wheels", "Fog lamps", "Roof rails", "LED tail lamps"],
      interior: [
        "Leather seats",
        "Touchscreen infotainment",
        "Cruise control",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Keyless entry",
        "Push start",
        "Power steering",
        "Dual-zone climate control",
      ],
    },
  },

  // {
  //   /* =========================
  //    IDENTIFICATION
  // ========================== */
  //   id: "hyundai-elantra-2020",
  //   slug: "hyundai-elantra-2020",

  //   /* =========================
  //    BADGES / FLAGS
  // ========================== */
  //   featured: false,
  //   discountPercent: 0,
  //   condition: "Used",
  //   year: 2020,

  //   /* =========================
  //    BASIC DISPLAY INFO (Listing)
  // ========================== */
  //   title: "Hyundai Elantra 2020",
  //   make: "Hyundai",
  //   model: "Elantra",
  //   bodyType: "Sedan",

  //   rating: 4,
  //   reviews: 6,

  //   /* =========================
  //    PRICING
  // ========================== */
  //   currency: "AED",
  //   price: 28000, // market price
  //   salePrice: 25500, // offer price

  //   /* =========================
  //    LOCATION (Details page)
  // ========================== */
  //   location: {
  //     city: "Dubai",
  //     state: "Dubai",
  //     country: "United Arab Emirates",
  //     address: "Al Aweer Auto Market, Dubai",
  //   },

  //   /* =========================
  //    MEDIA
  // ========================== */
  //   images: [
  //     "/assets/images/hyundai/h (1).jpg",
  //     "/assets/images/hyundai/h (2).jpg",
  //     "/assets/images/hyundai/h (3).jpg",
  //   ],

  //   /* =========================
  //    QUICK SPECS (Listing cards)
  // ========================== */
  //   quickSpecs: {
  //     fuel: "Petrol",
  //     mileage: "46,000 miles",
  //     transmission: "Automatic",
  //   },

  //   /* =========================
  //    FULL OVERVIEW (Details page)
  // ========================== */
  //   overview: {
  //     stockNumber: "HYE2020",
  //     vin: "KMHD84LF6LU123456", // placeholder VIN
  //     year: 2020,
  //     mileage: "46,000 miles",
  //     transmission: "Automatic",
  //     engineSize: "2.0L",
  //     driveType: "FWD",
  //     cylinders: 4,
  //     fuelType: "Petrol",
  //     doors: 4,
  //     color: "Silver",
  //     seats: 5,
  //     cityMPG: 26,
  //     highwayMPG: 35,
  //   },

  //   /* =========================
  //    DESCRIPTION (Details page)
  // ========================== */
  //   description:
  //     "Fuel-efficient Hyundai Elantra 2020 with modern features and comfortable seating. Smooth automatic transmission, reliable petrol engine, and excellent mileage make it ideal for daily commuting and city driving.",

  //   /* =========================
  //    FEATURES (Details page)
  // ========================== */
  //   features: {
  //     safety: [
  //       "Front airbags",
  //       "ABS",
  //       "Rear view camera",
  //       "Electronic stability control",
  //     ],
  //     exterior: ["Body-colored mirrors", "Halogen headlamps", "Steel wheels"],
  //     interior: [
  //       "Fabric seats",
  //       "Touchscreen infotainment",
  //       "Bluetooth connectivity",
  //       "Multi-function steering wheel",
  //     ],
  //     convenience: [
  //       "Fuel-efficient engine",
  //       "Power steering",
  //       "Keyless entry",
  //       "Steering mounted controls",
  //     ],
  //   },
  // },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "mazda-3-2019",
    slug: "mazda-3-2019",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: false,
    discountPercent: 0,
    condition: "Used",
    year: 2019,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Mazda 3 2019",
    make: "Mazda",
    model: "3",
    bodyType: "Sedan",

    rating: 4,
    reviews: 7,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: 42000, // estimated market price
    salePrice: 40000, // estimated offer price

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/mazda/m (1).jpg",
      "/assets/images/mazda/m (2).jpg",
      "/assets/images/mazda/m (3).jpg",
      "/assets/images/mazda/m (4).jpg",
      "/assets/images/mazda/m (5).jpg",
      "/assets/images/mazda/m (6).jpg",
      "/assets/images/mazda/m (7).jpg",
      "/assets/images/mazda/m (8).jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "120,000 km",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "MZ32019",
      vin: "JM1BPBLM8K1134567", // placeholder VIN
      year: 2019,
      mileage: "120,000 km",
      transmission: "Automatic",
      engineSize: "2.5L",
      driveType: "FWD",
      cylinders: 4,
      fuelType: "Petrol",
      doors: 4,
      color: "Red",
      seats: 5,
      cityMPG: 26,
      highwayMPG: 35,
      specs: "GCC Specs",
      steeringSide: "LHD",
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Stylish and reliable Mazda 3 2019 with sporty performance and premium interior feel. Smooth automatic transmission, strong petrol engine, and excellent driving dynamics make it a great compact sedan for daily use.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Parking sensors",
        "Rear view camera",
      ],
      exterior: ["Alloy wheels", "LED headlights", "Body-colored mirrors"],
      interior: [
        "Leather-wrapped steering",
        "Touchscreen infotainment",
        "Bluetooth connectivity",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Push start",
        "Keyless entry",
        "Power steering",
        "Cruise control",
      ],
    },
  },

  // {
  //   /* =========================
  //    IDENTIFICATION
  // ========================== */
  //   id: "lexus-is-350-2021",
  //   slug: "lexus-is-350-2021",

  //   /* =========================
  //    BADGES / FLAGS
  // ========================== */
  //   featured: true,
  //   discountPercent: 5,
  //   condition: "Used",
  //   year: 2021,

  //   /* =========================
  //    BASIC DISPLAY INFO (Listing)
  // ========================== */
  //   title: "Lexus IS 350 2021",
  //   make: "Lexus",
  //   model: "IS 350",
  //   bodyType: "Sedan",

  //   rating: 5,
  //   reviews: 10,

  //   /* =========================
  //    PRICING
  // ========================== */
  //   currency: "AED",
  //   price: 110000, // market price
  //   salePrice: 105000, // offer price

  //   /* =========================
  //    LOCATION (Details page)
  // ========================== */
  //   location: {
  //     city: "Dubai",
  //     state: "Dubai",
  //     country: "United Arab Emirates",
  //     address: "Al Aweer Auto Market, Dubai",
  //   },

  //   /* =========================
  //    MEDIA
  // ========================== */
  //   images: [
  //     "/assets/images/lexus/lexus (1).jpg",
  //     "/assets/images/lexus/lexus (2).jpg",
  //     "/assets/images/lexus/lexus (3).jpg",
  //     "/assets/images/lexus/lexus (4).jpg",
  //     "/assets/images/lexus/lexus (5).jpg",
  //     "/assets/images/lexus/lexus (6).jpg",
  //     "/assets/images/lexus/lexus (7).jpg",
  //     "/assets/images/lexus/lexus (8).jpg",
  //   ],

  //   /* =========================
  //    QUICK SPECS (Listing cards)
  // ========================== */
  //   quickSpecs: {
  //     fuel: "Petrol",
  //     mileage: "85,000 km",
  //     transmission: "Automatic",
  //   },

  //   /* =========================
  //    FULL OVERVIEW (Details page)
  // ========================== */
  //   overview: {
  //     stockNumber: "LIS35021",
  //     vin: "JTHBZ1D26M5012345", // placeholder VIN
  //     year: 2021,
  //     mileage: "85,000 km",
  //     transmission: "Automatic",
  //     engineSize: "3.5L V6",
  //     driveType: "RWD",
  //     cylinders: 6,
  //     fuelType: "Petrol",
  //     doors: 4,
  //     color: "Black",
  //     seats: 5,
  //     cityMPG: 19,
  //     highwayMPG: 26,
  //     specs: "GCC Specs",
  //     steeringSide: "LHD",
  //   },

  //   /* =========================
  //    DESCRIPTION (Details page)
  // ========================== */
  //   description:
  //     "Powerful and luxurious Lexus IS 350 2021 featuring a 3.5L V6 engine with exceptional performance. Premium interior, smooth automatic transmission, and renowned Lexus reliability make it an excellent choice for enthusiasts and daily drivers alike.",

  //   /* =========================
  //    FEATURES (Details page)
  // ========================== */
  //   features: {
  //     safety: [
  //       "Front & side airbags",
  //       "ABS",
  //       "Traction control",
  //       "Parking sensors",
  //       "Rear view camera",
  //     ],
  //     exterior: [
  //       "Alloy wheels",
  //       "LED headlights",
  //       "Sunroof",
  //       "Body-colored mirrors",
  //     ],
  //     interior: [
  //       "Leather seats",
  //       "Touchscreen infotainment",
  //       "Dual-zone climate control",
  //       "Multi-function steering wheel",
  //     ],
  //     convenience: [
  //       "Keyless entry",
  //       "Push start",
  //       "Power steering",
  //       "Cruise control",
  //     ],
  //   },
  // },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "nissan-sentra-2022",
    slug: "nissan-sentra-2022",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: false,
    discountPercent: 0,
    condition: "Used",
    year: 2022,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Nissan Sentra 2022",
    make: "Nissan",
    model: "Sentra",
    bodyType: "Sedan",

    rating: 4,
    reviews: 5,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: 42000, // market price
    salePrice: 40000, // offer price

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/nissan/nissan (1).jpg",
      "/assets/images/nissan/nissan (2).jpg",
      "/assets/images/nissan/nissan (3).jpg",
      "/assets/images/nissan/nissan (4).jpg",
      "/assets/images/nissan/nissan (5).jpg",
      "/assets/images/nissan/nissan (6).jpg",
      "/assets/images/nissan/nissan (7).jpg",
      "/assets/images/nissan/nissan (8).jpg",
      "/assets/images/nissan/nissan (9).jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "23,000 miles",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "NS2022",
      vin: "3N1AB8CV6NY123456", // placeholder VIN
      year: 2022,
      mileage: "23,000 miles",
      transmission: "Automatic",
      engineSize: "2.0L",
      driveType: "FWD",
      cylinders: 4,
      fuelType: "Petrol",
      doors: 4,
      color: "Grey",
      seats: 5,
      cityMPG: 29,
      highwayMPG: 39,
      specs: "GCC Specs",
      steeringSide: "LHD",
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Practical and efficient Nissan Sentra 2022 with low mileage and modern styling. Smooth automatic transmission, excellent fuel efficiency, and comfortable interior make it an ideal compact sedan for daily commuting and city driving.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Parking sensors",
        "Rear view camera",
      ],
      exterior: ["Alloy wheels", "LED headlights", "Body-colored mirrors"],
      interior: [
        "Fabric seats",
        "Touchscreen infotainment",
        "Bluetooth connectivity",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Keyless entry",
        "Push start",
        "Power steering",
        "Cruise control",
      ],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "porsche-cayenne-s-2015",
    slug: "porsche-cayenne-s-2015",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: true,
    discountPercent: 8,
    condition: "Used",
    year: 2015,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Porsche Cayenne S 2015",
    make: "Porsche",
    model: "Cayenne S",
    bodyType: "SUV",

    rating: 5,
    reviews: 9,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: 72000, // market price
    salePrice: 70000, // offer price

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/porsche/porsche (1).jpg",
      "/assets/images/porsche/porsche (2).jpg",
      "/assets/images/porsche/porsche (3).jpg",
      "/assets/images/porsche/porsche (11).jpg",
      "/assets/images/porsche/porsche (14).jpg",
      "/assets/images/porsche/porsche (4).jpg",
      "/assets/images/porsche/porsche (5).jpg",
      "/assets/images/porsche/porsche (6).jpg",
      "/assets/images/porsche/porsche (8).jpg",
      "/assets/images/porsche/porsche (9).jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "92,000 miles",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "PCS2015",
      vin: "WP1AB2A20FLA12345", // placeholder VIN
      year: 2015,
      mileage: "92,000 miles",
      transmission: "Automatic",
      engineSize: "4.8L V8",
      driveType: "AWD",
      cylinders: 8,
      fuelType: "Petrol",
      doors: 5,
      color: "White",
      seats: 5,
      cityMPG: 14,
      highwayMPG: 21,
      specs: "GCC Specs",
      steeringSide: "LHD",
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Luxury Porsche Cayenne S 2015 combining powerful V8 performance with premium comfort. Well-maintained SUV featuring smooth automatic transmission, all-wheel drive, and a refined interior—ideal for both city driving and long-distance journeys.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Parking sensors",
        "Rear view camera",
      ],
      exterior: [
        "Alloy wheels",
        "LED headlights",
        "Panoramic sunroof",
        "Power tailgate",
      ],
      interior: [
        "Leather seats",
        "Touchscreen infotainment",
        "Dual-zone climate control",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Keyless entry",
        "Push start",
        "Power steering",
        "Cruise control",
      ],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "dodge-challenger-2021",
    slug: "dodge-challenger-2021",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: true,
    discountPercent: 6,
    condition: "Used",
    year: 2021,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Dodge Challenger 2021",
    make: "Dodge",
    model: "Challenger",
    bodyType: "Coupe",

    rating: 5,
    reviews: 11,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: 67000, // market price
    salePrice: 65000, // offer price

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/dodge/dodge (1).jpg",
      "/assets/images/dodge/dodge (2).jpg",
      "/assets/images/dodge/dodge (3).jpg",
      "/assets/images/dodge/dodge (4).jpg",
      "/assets/images/dodge/dodge (5).jpg",
      "/assets/images/dodge/dodge (6).jpg",
      "/assets/images/dodge/dodge (7).jpg",
      "/assets/images/dodge/dodge (8).jpg",
      "/assets/images/dodge/dodge (9).jpg",
      "/assets/images/dodge/dodge (10).jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "78,000 miles",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "DC2021",
      vin: "2C3CDZAG7MH123456", // placeholder VIN
      year: 2021,
      mileage: "78,000 miles",
      transmission: "Automatic",
      engineSize: "3.6L V6",
      driveType: "2WD",
      cylinders: 6,
      fuelType: "Petrol",
      doors: 2,
      color: "Black",
      seats: 5,
      cityMPG: 19,
      highwayMPG: 30,
      specs: "GCC Specs",
      steeringSide: "LHD",
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Bold and powerful Dodge Challenger 2021 showcasing classic American muscle car styling. Strong petrol engine, smooth automatic transmission, and a comfortable interior make it perfect for enthusiasts who want performance with everyday usability.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Parking sensors",
        "Rear view camera",
      ],
      exterior: [
        "Alloy wheels",
        "LED headlights",
        "Dual exhaust",
        "Sport body kit",
      ],
      interior: [
        "Leather seats",
        "Touchscreen infotainment",
        "Dual-zone climate control",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Keyless entry",
        "Push start",
        "Power steering",
        "Cruise control",
      ],
    },
  },
  // {
  //   /* =========================
  //    IDENTIFICATION
  // ========================== */
  //   id: "nissan-armada-2020",
  //   slug: "nissan-armada-2020",

  //   /* =========================
  //    BADGES / FLAGS
  // ========================== */
  //   featured: true,
  //   discountPercent: 7,
  //   condition: "Used",
  //   year: 2020,

  //   /* =========================
  //    BASIC DISPLAY INFO (Listing)
  // ========================== */
  //   title: "Nissan Armada 2020",
  //   make: "Nissan",
  //   model: "Armada",
  //   bodyType: "SUV",

  //   rating: 4,
  //   reviews: 9,

  //   /* =========================
  //    PRICING
  // ========================== */
  //   currency: "AED",
  //   price: 62000, // market price
  //   salePrice: 58000, // offer price

  //   /* =========================
  //    LOCATION (Details page)
  // ========================== */
  //   location: {
  //     city: "Dubai",
  //     state: "Dubai",
  //     country: "United Arab Emirates",
  //     address: "Al Aweer Auto Market, Dubai",
  //   },

  //   /* =========================
  //    MEDIA
  // ========================== */
  //   images: [
  //     "/assets/images/nissann/nissann (1).jpg",
  //     "/assets/images/nissann/nissann (2).jpg",
  //     "/assets/images/nissann/nissann (3).jpg",
  //     "/assets/images/nissann/nissann (4).jpg",
  //     "/assets/images/nissann/nissann (5).jpg",
  //     "/assets/images/nissann/nissann (6).jpg",
  //     "/assets/images/nissann/nissann (7).jpg",
  //     "/assets/images/nissann/nissann (8).jpg",
  //     "/assets/images/nissann/nissann (9).jpg",
  //     "/assets/images/nissann/nissann (10).jpg",
  //     "/assets/images/nissann/nissann (11).jpg",
  //   ],

  //   /* =========================
  //    QUICK SPECS (Listing cards)
  // ========================== */
  //   quickSpecs: {
  //     fuel: "Petrol",
  //     mileage: "88,000 miles",
  //     transmission: "Automatic",
  //   },

  //   /* =========================
  //    FULL OVERVIEW (Details page)
  // ========================== */
  //   overview: {
  //     stockNumber: "NA2020",
  //     vin: "JN8AY2NC8L9123456", // placeholder VIN
  //     year: 2020,
  //     mileage: "88,000 miles",
  //     transmission: "Automatic",
  //     engineSize: "5.6L V8",
  //     driveType: "RWD",
  //     cylinders: 8,
  //     fuelType: "Petrol",
  //     doors: 5,
  //     color: "Black",
  //     seats: 7,
  //     cityMPG: 14,
  //     highwayMPG: 19,
  //     specs: "GCC Specs",
  //     steeringSide: "LHD",
  //   },

  //   /* =========================
  //    DESCRIPTION (Details page)
  // ========================== */
  //   description:
  //     "Powerful and spacious Nissan Armada 2020 offering full-size SUV luxury and performance. Equipped with a strong V8 engine, smooth automatic transmission, and seating for seven, making it ideal for families and long-distance travel.",

  //   /* =========================
  //    FEATURES (Details page)
  // ========================== */
  //   features: {
  //     safety: [
  //       "Front & side airbags",
  //       "ABS",
  //       "Traction control",
  //       "Parking sensors",
  //       "Rear view camera",
  //     ],
  //     exterior: [
  //       "Alloy wheels",
  //       "LED headlights",
  //       "Roof rails",
  //       "Power tailgate",
  //     ],
  //     interior: [
  //       "Leather seats",
  //       "Touchscreen infotainment",
  //       "Tri-zone climate control",
  //       "Multi-function steering wheel",
  //     ],
  //     convenience: [
  //       "Keyless entry",
  //       "Push start",
  //       "Power steering",
  //       "Cruise control",
  //     ],
  //   },
  // },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "ford-explorer-2018",
    slug: "ford-explorer-2018",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: false,
    discountPercent: 0,
    condition: "Used",
    year:"2019" ,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Ford Explorer 2019",
    make: "Ford",
    model: "Explorer",
    bodyType: "SUV",

    rating: 4,
    reviews: 7,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: 57000, // market price
    salePrice: 55000, // offer price

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/fords/ford (1).jpg",
      "/assets/images/fords/ford (2).jpg",
      "/assets/images/fords/ford (3).jpg",
      "/assets/images/fords/ford (4).jpg",
      "/assets/images/fords/ford (5).jpg",
      "/assets/images/fords/ford (6).jpg",
      "/assets/images/fords/ford (7).jpg",
      "/assets/images/fords/ford (8).jpg",
      "/assets/images/fords/ford (9).jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "120,000 miles",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "FE2018",
      vin: "1FM5K7D87JGB12345", // placeholder VIN
      year: 2018,
      mileage: "120,000 miles",
      transmission: "Automatic",
      engineSize: "3.5L V6",
      driveType: "FWD",
      cylinders: 6,
      fuelType: "Petrol",
      doors: 5,
      color: "Silver",
      seats: 5,
      cityMPG: 17,
      highwayMPG: 24,
      specs: "GCC Specs",
      steeringSide: "LHD",
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Reliable Ford Explorer 2018 offering comfort, space, and versatility. Smooth automatic transmission, strong V6 engine, and a practical interior make it an excellent mid-size SUV for families and everyday use.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Rear view camera",
      ],
      exterior: ["Alloy wheels", "Roof rails", "Halogen headlights"],
      interior: [
        "Fabric seats",
        "Touchscreen infotainment",
        "Multi-function steering wheel",
      ],
      convenience: ["Power steering", "Cruise control", "Keyless entry"],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "range-rover-evoque-ingenium-2021",
    slug: "range-rover-evoque-ingenium-2021",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: true,
    discountPercent: 0,
    condition: "Used",
    year: 2021,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Range Rover Evoque Ingenium 2021",
    make: "Land Rover",
    model: "Range Rover Evoque Ingenium",
    bodyType: "SUV",

    rating: 5,
    reviews: 8,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: "122000", // not provided
    salePrice: "120000", // not provided

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/range/1.jpg",
      "/assets/images/range/2.jpg",
      "/assets/images/range/3.jpg",
      "/assets/images/range/4.jpg",
      "/assets/images/range/5.jpg",
      "/assets/images/range/6.jpg",
      "/assets/images/range/7.jpg",
      "/assets/images/range/8.jpg",
      "/assets/images/range/9.jpg",
      "/assets/images/range/10.jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "64,421 miles",
      transmission: "9-speed Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "RRE2021",
      vin: "SALZJ2FX1NH167442",
      year: 2021,
      mileage: "64,421 miles",
      transmission: "9-speed Automatic",
      engineSize: "2.0L Ingenium Turbo I4",
      driveType: "AWD",
      cylinders: 4,
      fuelType: "Petrol",
      doors: 5,
      color: "White",
      seats: 5,
      cityMPG: 20,
      highwayMPG: 27,
      specs: "US Specs",
      steeringSide: "LHD",
      performance: {
        zeroToHundred: "7.6s",
        topSpeed: "230 km/h",
        horsepower: "246–247 HP",
      },
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Premium Range Rover Evoque Ingenium 2021 featuring a 2.0L turbocharged Ingenium engine with AWD. Offers sporty performance with paddle shifters and sport mode, combined with luxury interior comfort and advanced driving technology.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Lane assist",
        "Rear view camera",
      ],
      exterior: [
        "Alloy wheels",
        "LED headlights",
        "Panoramic sunroof",
        "Power tailgate",
      ],
      interior: [
        "Leather seats",
        "Digital cockpit",
        "Touchscreen infotainment",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Paddle shifters",
        "Sport driving mode",
        "Keyless entry",
        "Push start",
      ],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "hyundai-sonata-sport-2018",
    slug: "hyundai-sonata-sport-2018",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: false,
    discountPercent: 0,
    condition: "Used",
    year: 2018,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Hyundai Sonata Sport 2.4L 2018",
    make: "Hyundai",
    model: "Sonata Sport 2.4L",
    bodyType: "Sedan",

    rating: 4,
    reviews: 6,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: "37000", // not provided
    salePrice: "35000", // not provided

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/sonata/1.jpg",
      "/assets/images/sonata/2.jpg",
      "/assets/images/sonata/3.jpg",
      "/assets/images/sonata/4.jpg",
      "/assets/images/sonata/5.jpg",
      "/assets/images/sonata/6.jpg",
      "/assets/images/sonata/7.jpg",
      "/assets/images/sonata/8.jpg",
      "/assets/images/sonata/9.jpg",
      "/assets/images/sonata/10.jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
    ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "70,574 miles",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "HSS2019",
      vin: "5NPE34AF6KH814716",
      year: 2019,
      mileage: "70,574 miles",
      transmission: "Automatic",
      engineSize: "2.4L",
      driveType: "FWD",
      cylinders: 4,
      fuelType: "Petrol",
      doors: 4,
      color: "White",
      seats: 5,
      cityMPG: 25,
      highwayMPG: 35,
      specs: "US Specs",
      steeringSide: "LHD",
      performance: {
        horsepower: "185 HP",
      },
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Sporty and comfortable Hyundai Sonata Sport 2.4L 2019 featuring a reliable petrol engine and smooth automatic transmission. Well-suited for daily commuting, offering balanced performance, spacious seating, and modern styling.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Rear view camera",
      ],
      exterior: ["Sport alloy wheels", "Fog lights", "Body-colored mirrors"],
      interior: [
        "Fabric seats",
        "Touchscreen infotainment",
        "Multi-function steering wheel",
      ],
      convenience: ["Power steering", "Cruise control", "Keyless entry"],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "mercedes-benz-300ce-24-1992",
    slug: "mercedes-benz-300ce-24-1992",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: true,
    discountPercent: 0,
    condition: "Used",
    year: 1992,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Mercedes-Benz 300CE-24 1992",
    make: "Mercedes-Benz",
    model: "300CE-24",
    bodyType: "Coupe",

    rating: 5,
    reviews: 4,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: "62000", // not provided
    salePrice: "60000", // not provided

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Classic Car Collection, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/benz/1.jpg",
      "/assets/images/benz/2.jpg",
      "/assets/images/benz/3.jpg",
      "/assets/images/benz/4.jpg",
      "/assets/images/benz/5.jpg",
      "/assets/images/benz/6.jpg",
      "/assets/images/benz/7.jpg",
      "/assets/images/benz/8.jpg",
      "/assets/images/benz/9.jpg",
      "/assets/images/benz/10.jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "59,087 km",
      transmission: "Manual / Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "MB300CE24",
      vin: "WDB1240511B535797",
      year: 1980,
      mileage: "59,087 km",
      transmission: "Manual / Automatic",
      engineSize: "3.0L Inline-6",
      driveType: "RWD",
      cylinders: 6,
      fuelType: "Petrol",
      doors: 2,
      color: "Classic Silver",
      seats: 4,
      cityMPG: null,
      highwayMPG: null,
      specs: "US Classic",
      steeringSide: "LHD",
      performance: {
        horsepower: "217 HP",
      },
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Classic Mercedes-Benz 300CE-24 from 1980, powered by a 3.0L inline-6 engine with rear-wheel drive. A rare and collectible coupe known for its timeless design, solid engineering, and smooth driving experience—ideal for classic car enthusiasts and collectors.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: ["Classic reinforced body structure", "Disc brakes"],
      exterior: [
        "Classic alloy wheels",
        "Chrome detailing",
        "Timeless coupe design",
      ],
      interior: [
        "Classic upholstery",
        "Analog instrument cluster",
        "Wood trim accents",
      ],
      convenience: [
        "Smooth inline-6 engine",
        "Rear-wheel drive dynamics",
        "Collector-grade classic",
      ],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "chevrolet-silverado-custom-2022",
    slug: "chevrolet-silverado-custom-2022",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: true,
    discountPercent: 0,
    condition: "Used",
    year: 2022,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Chevrolet Silverado Custom 2022",
    make: "Chevrolet",
    model: "Silverado Custom",
    bodyType: "Pickup Truck",

    rating: 4,
    reviews: 6,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: "102000", // not provided
    salePrice: "100000", // not provided

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/silverado/1.jpg",
      "/assets/images/silverado/2.jpg",
      "/assets/images/silverado/3.jpg",
      "/assets/images/silverado/4.jpg",
      "/assets/images/silverado/5.jpg",
      "/assets/images/silverado/6.jpg",
      "/assets/images/silverado/7.jpg",
      "/assets/images/silverado/8.jpg",
      "/assets/images/silverado/9.jpg",
      "/assets/images/silverado/10.jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "71,487 miles",
      transmission: "8-speed Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "CS2022",
      vin: "1GCRDBEK7NZ646222",
      year: 2022,
      mileage: "71,487 miles",
      transmission: "8-speed Automatic",
      engineSize: "2.7L TurboMax",
      driveType: "RWD",
      cylinders: 4,
      fuelType: "Petrol",
      doors: 4,
      color: "Black",
      seats: 5,
      cityMPG: 19,
      highwayMPG: 22,
      specs: "US Specs",
      steeringSide: "LHD",
      performance: {
        horsepower: "310 HP",
        towingCapacity: "9,600 lbs",
      },
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Powerful and capable Chevrolet Silverado Custom 2022 equipped with a 2.7L TurboMax engine. Designed for both work and comfort, featuring tow/haul mode, strong towing capability, and a spacious cabin—ideal for heavy-duty tasks and daily driving.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Rear view camera",
      ],
      exterior: [
        "20-inch alloy wheels",
        "LED headlights",
        "Tow hooks",
        "Side steps",
      ],
      interior: [
        "Cloth seats",
        "Touchscreen infotainment",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Tow/Haul mode",
        "Power steering",
        "Cruise control",
        "Large cargo bed",
      ],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "nissan-patrol-nismo-2022",
    slug: "nissan-patrol-nismo-2022",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: true,
    discountPercent: 0,
    condition: "Used",
    year: 2022,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Nissan Patrol NISMO 5.6L V8 2022",
    make: "Nissan",
    model: "Patrol NISMO",
    bodyType: "SUV",

    rating: 5,
    reviews: 12,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: "122000", // not provided
    salePrice: 120000, // not provided

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Al Aweer Auto Market, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/nismo/1.jpg",
      "/assets/images/nismo/2.jpg",
      "/assets/images/nismo/3.jpg",
      "/assets/images/nismo/4.jpg",
      "/assets/images/nismo/5.jpg",
      "/assets/images/nismo/6.jpg",
      "/assets/images/nismo/7.jpg",
      "/assets/images/nismo/8.jpg",
      "/assets/images/nismo/9.jpg",
      "/assets/images/nismo/10.jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "64,174 miles",
      transmission: "7-speed Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "NPN2022",
      vin: "JN8AY2DA1N9391615",
      year: 2022,
      mileage: "64,174 miles",
      transmission: "7-speed Automatic",
      engineSize: "5.6L V8",
      driveType: "AWD",
      cylinders: 8,
      fuelType: "Petrol",
      doors: 5,
      color: "White",
      seats: 7,
      cityMPG: 13,
      highwayMPG: 18,
      specs: "US Specs",
      steeringSide: "LHD",
      performance: {
        horsepower: "428 HP",
        torque: "560 Nm",
      },
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "High-performance Nissan Patrol NISMO 2022 powered by a 5.6L V8 engine delivering 428 HP. Featuring AWD, NISMO-tuned Bilstein suspension, aggressive styling, and a luxurious seven-seat interior—built for power, comfort, and prestige.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: [
        "Front & side airbags",
        "ABS",
        "Traction control",
        "Parking sensors",
        "360-degree camera",
      ],
      exterior: [
        "22-inch NISMO alloy wheels",
        "NISMO body kit",
        "LED headlights",
        "Roof rails",
      ],
      interior: [
        "Leather seats",
        "NISMO interior accents",
        "Touchscreen infotainment",
        "Multi-function steering wheel",
      ],
      convenience: [
        "NISMO Bilstein suspension",
        "Keyless entry",
        "Push start",
        "Cruise control",
      ],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "toyota-mark-ii-grande-1995",
    slug: "toyota-mark-ii-grande-1995",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: false,
    discountPercent: 0,
    condition: "Used",
    year: 1995,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Toyota Mark II Grande TwinCam24 1995",
    make: "Toyota",
    model: "Mark II Grande TwinCam24",
    bodyType: "Sedan",

    rating: 4,
    reviews: 5,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: "32000", // not provided
    salePrice: "30000", // not provided

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "JDM Classic Collection, Dubai",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/mark/1.jpg",
      "/assets/images/mark/2.jpg",
      "/assets/images/mark/3.jpg",
      "/assets/images/mark/4.jpg",
      "/assets/images/mark/5.jpg",
      "/assets/images/mark/6.jpg",
      "/assets/images/mark/7.jpg",
      "/assets/images/mark/8.jpg",
      "/assets/images/mark/9.jpg",
      "/assets/images/mark/10.jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "54,000 km",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "TMG2000",
      vin: "CX813289437",
      year: 2000,
      mileage: "54,000 km",
      transmission: "Automatic",
      engineSize: "1G-FE 2.0L Inline-6",
      driveType: "RWD",
      cylinders: 6,
      fuelType: "Petrol",
      doors: 4,
      color: "Classic White",
      seats: 5,
      cityMPG: null,
      highwayMPG: null,
      specs: "Japanese Specs",
      steeringSide: "RHD",
      performance: {
        horsepower: "N/A",
      },
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Classic JDM Toyota Mark II Grande TwinCam24 from the year 2000, powered by the legendary 1G-FE 2.0L inline-6 engine with rear-wheel drive. Known for its smooth performance, comfort-focused Grande trim, and timeless Japanese sedan design—ideal for JDM enthusiasts and collectors.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: ["Classic reinforced body structure", "Disc brakes"],
      exterior: [
        "Original JDM alloy wheels",
        "Chrome trim accents",
        "Timeless sedan styling",
      ],
      interior: [
        "Classic fabric upholstery",
        "Wood trim accents",
        "Analog instrument cluster",
      ],
      convenience: [
        "Smooth inline-6 engine",
        "Rear-wheel drive dynamics",
        "Collector-grade JDM classic",
      ],
    },
  },
  {
    /* =========================
     IDENTIFICATION
  ========================== */
    id: "nissan-sentra-2016",
    slug: "nissan-sentra-2016",

    /* =========================
     BADGES / FLAGS
  ========================== */
    featured: false,
    discountPercent: 0,
    condition: "Used",
    year: 2016,

    /* =========================
     BASIC DISPLAY INFO (Listing)
  ========================== */
    title: "Nissan Sentra 2016",
    make: "Nissan",
    model: "Sentra",
    bodyType: "Sedan",

    rating: 4,
    reviews: 4,

    /* =========================
     PRICING
  ========================== */
    currency: "AED",
    price: 42000, // market price
    salePrice: 40000, // offer price

    /* =========================
     LOCATION (Details page)
  ========================== */
    location: {
      city: "Dubai",
      state: "Dubai",
      country: "United Arab Emirates",
      address: "Dubai Used Cars Market",
    },

    /* =========================
     MEDIA
  ========================== */
    images: [
      "/assets/images/sentra-2016/sentra 2016 (1).jpg",
      "/assets/images/sentra-2016/sentra 2016 (2).jpg",
      "/assets/images/sentra-2016/sentra 2016 (3).jpg",
      "/assets/images/sentra-2016/sentra 2016 (4).jpg",
      "/assets/images/sentra-2016/sentra 2016 (5).jpg",
      "/assets/images/sentra-2016/sentra 2016 (6).jpg",
      "/assets/images/sentra-2016/sentra 2016 (7).jpg",
      "/assets/images/sentra-2016/sentra 2016 (8).jpg",
      "/assets/images/sentra-2016/sentra 2016 (9).jpg",
      "/assets/images/sentra-2016/sentra 2016 (10).jpg",
    ],

    /* =========================
     QUICK SPECS (Listing cards)
  ========================== */
    quickSpecs: {
      fuel: "Petrol",
      mileage: "100,000 km",
      transmission: "Automatic",
    },

    /* =========================
     FULL OVERVIEW (Details page)
  ========================== */
    overview: {
      stockNumber: "NS2016",
      vin: null,
      year: 2016,
      mileage: "100,000 km",
      transmission: "Automatic",
      engineSize: "1.8L",
      driveType: "FWD",
      cylinders: 4,
      fuelType: "Petrol",
      doors: 4,
      color: "Silver",
      seats: 5,
      cityMPG: 29,
      highwayMPG: 37,
      specs: "GCC Specs",
      steeringSide: "LHD",
      performance: {
        horsepower: "130 HP",
      },
    },

    /* =========================
     DESCRIPTION (Details page)
  ========================== */
    description:
      "Affordable and reliable Nissan Sentra 2016, ideal for city driving and daily commuting. Fuel-efficient petrol engine, smooth automatic transmission, and comfortable seating make it a practical choice for budget-conscious buyers.",

    /* =========================
     FEATURES (Details page)
  ========================== */
    features: {
      safety: ["Front airbags", "ABS", "Rear view camera"],
      exterior: ["Body-colored mirrors", "Halogen headlights"],
      interior: [
        "Fabric seats",
        "Bluetooth connectivity",
        "Multi-function steering wheel",
      ],
      convenience: [
        "Power steering",
        "Automatic transmission",
        "Fuel-efficient engine",
      ],
    },
  },
];

export default cars;
