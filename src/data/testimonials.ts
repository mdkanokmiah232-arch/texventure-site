// =============================================================================
// TexVenture Testimonials
// ⚠️  CONTENT-TODO: All testimonials below are PLACEHOLDER content.
//     Replace with real client testimonials before launch.
// =============================================================================

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientAvatar?: string;
  quote: string;
  rating: number; // 1-5
  productCategory: string;
  location: string;
  // CONTENT-TODO: Verify all testimonials with real clients before publishing
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    clientName: "Marcus Chen",
    clientRole: "Founder",
    clientCompany: "StreetVault Apparel",
    // CONTENT-TODO: Replace with actual client photo
    clientAvatar: "/images/testimonials/marcus-chen.jpg",
    // CONTENT-TODO: Replace with actual testimonial from Marcus Chen
    quote:
      "TexVenture made our first production run incredibly smooth. We ordered 200 hoodies and 150 tees for our launch drop — the quality was exactly what we wanted, and everything arrived on time. The low MOQ option was a game-changer for us as a startup.",
    rating: 5,
    productCategory: "Knit Wear",
    location: "Los Angeles, CA",
  },
  {
    id: "testimonial-2",
    clientName: "Sarah Lindström",
    clientRole: "Creative Director",
    clientCompany: "Nordic Basics",
    // CONTENT-TODO: Replace with actual client photo
    clientAvatar: "/images/testimonials/sarah-lindstrom.jpg",
    // CONTENT-TODO: Replace with actual testimonial from Sarah Lindström
    quote:
      "We needed a manufacturer that could handle organic cotton basics with GOTS certification. TexVenture connected us with the perfect factory, and the entire process — from fabric sourcing to final QC — was handled professionally.",
    rating: 5,
    productCategory: "Knit Wear",
    location: "Stockholm, Sweden",
  },
  {
    id: "testimonial-3",
    clientName: "Jake Morrison",
    clientRole: "Owner",
    clientCompany: "Ironwork Denim Co.",
    // CONTENT-TODO: Replace with actual client photo
    clientAvatar: "/images/testimonials/jake-morrison.jpg",
    // CONTENT-TODO: Replace with actual testimonial from Jake Morrison
    quote:
      "Finding a denim manufacturer that could do custom washes at our volume was tough until we found TexVenture. They sourced the right factory, handled sampling, and delivered jeans that our customers love. Already planning our next order.",
    rating: 5,
    productCategory: "Denim",
    location: "Austin, TX",
  },
  {
    id: "testimonial-4",
    clientName: "Priya Sharma",
    clientRole: "Head of Product",
    clientCompany: "MoveFit Athletics",
    // CONTENT-TODO: Replace with actual client photo
    clientAvatar: "/images/testimonials/priya-sharma.jpg",
    // CONTENT-TODO: Replace with actual testimonial from Priya Sharma
    quote:
      "We were looking for activewear manufacturers that could do sublimation prints with moisture-wicking fabric. TexVenture found us a factory that delivered exactly what we needed — compression leggings and sports bras that compete with big brands.",
    rating: 4,
    productCategory: "Active Wear",
    location: "Mumbai, India",
  },
  {
    id: "testimonial-5",
    clientName: "Tom Williams",
    clientRole: "Brand Manager",
    clientCompany: "Union Workwear",
    // CONTENT-TODO: Replace with actual client photo
    clientAvatar: "/images/testimonials/tom-williams.jpg",
    // CONTENT-TODO: Replace with actual testimonial from Tom Williams
    quote:
      "We needed 500 hi-vis vests and 300 cargo pants for a construction client. TexVenture managed the entire order — from fabric sourcing to shipping — and the quality passed every inspection. Professional service from start to finish.",
    rating: 5,
    productCategory: "Work Wear",
    location: "London, UK",
  },
  {
    id: "testimonial-6",
    clientName: "Aiko Tanaka",
    clientRole: "Founder",
    clientCompany: "Loop Knit Studio",
    // CONTENT-TODO: Replace with actual client photo
    clientAvatar: "/images/testimonials/aiko-tanaka.jpg",
    // CONTENT-TODO: Replace with actual testimonial from Aiko Tanaka
    quote:
      "As a small brand in Tokyo, sourcing from Bangladesh felt daunting. TexVenture handled everything remotely — samples, photos, video calls with the factory — and delivered beautiful seamless knitwear that exceeded our expectations.",
    rating: 5,
    productCategory: "Circular Knit",
    location: "Tokyo, Japan",
  },
];
