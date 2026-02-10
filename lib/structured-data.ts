// JSON-LD Structured Data for SEO
export const conferenceStructuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Future-BME 2026 - International Conference on Business, Management, and Economics Engineering",
  "description": "2nd International Conference on Business, Management, and Economics Engineering - Forging the Future: Business, Management and Economics Engineering in the Age of Sustainability and Digital Transformation",
  "startDate": "2026-09-29",
  "endDate": "2026-10-01",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "Mövenpick Hotel Fruške Terme",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Fruške Terme",
      "addressLocality": "Novi Sad",
      "addressRegion": "Vojvodina",
      "postalCode": "21208",
      "addressCountry": "RS"
    }
  },
  "image": [
    "https://future-bme.ftn.uns.ac.rs/images/HeaderBME.jpg",
    "https://future-bme.ftn.uns.ac.rs/images/BMElogo.png"
  ],
  "organizer": {
    "@type": "Organization",
    "name": "Faculty of Technical Sciences, University of Novi Sad",
    "url": "https://www.ftn.uns.ac.rs"
  },
  "performer": {
    "@type": "PerformingGroup",
    "name": "International Researchers and Academics"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://future-bme.ftn.uns.ac.rs/registration",
    "price": "0",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "validFrom": "2025-11-01T00:00:00+01:00"
  },
  "url": "https://future-bme.ftn.uns.ac.rs"
};
