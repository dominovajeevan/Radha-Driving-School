export interface BusinessStatus {
  isOpen: boolean;
  text: string;
  nextChangeText: string;
}

export const BUSINESS_NAME_EN = "RADHA DRIVING SCHOOL";
export const BUSINESS_NAME_TA = "ராதா டிரைவிங் ஸ்கூல்";
export const LOCATION_SHORT = "Adyar, Chennai";
export const FULL_ADDRESS = "No 114/1, Near Adyar Signal, L B Road, Adyar, Chennai-600020, Tamil Nadu";
export const LANDMARK = "Near Adyar Signal";
export const PHONE_NUMBER = "08971340225";
export const DISPLAY_PHONE = "08971340225";
export const TEL_LINK = "tel:08971340225";
export const WHATSAPP_LINK = "https://wa.me/918971340225";
export const ESTABLISHED_YEAR = "1998";
export const YEARS_EXPERIENCE = "28+";
export const RATING_VALUE = "4.8";
export const REVIEWS_COUNT = "2,606";

export function getBusinessStatus(): BusinessStatus {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const timeInMinutes = hours * 60 + minutes;

  // Timings: Mon-Sat 6:00 AM - 8:00 PM (360 - 1200 mins), Sun 9:00 AM - 12:00 PM (540 - 720 mins)
  let openTime = 6 * 60;
  let closeTime = 20 * 60;

  if (day === 0) { // Sunday
    openTime = 9 * 60;
    closeTime = 12 * 60;
  }

  if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
    const closeHoursStr = closeTime === 12 * 60 ? "12:00 PM" : "8:00 PM";
    return {
      isOpen: true,
      text: "Open Now",
      nextChangeText: `Open until ${closeHoursStr}`
    };
  } else if (timeInMinutes < openTime) {
    const openHoursStr = day === 0 ? "9:00 AM" : "6:00 AM";
    return {
      isOpen: false,
      text: "Closed Now",
      nextChangeText: `Opens today at ${openHoursStr}`
    };
  } else {
    const nextOpenStr = day === 6 ? "Sunday at 9:00 AM" : "tomorrow at 6:00 AM";
    return {
      isOpen: false,
      text: "Closed Now",
      nextChangeText: `Opens ${nextOpenStr}`
    };
  }
}

export const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/search/?api=1&query=RADHA+DRIVING+SCHOOL+No+114%2F1+Near+Adyar+Signal+L+B+Road+Adyar+Chennai+600020";
export const MAPS_EMBED_URL = "https://maps.google.com/maps?q=Radha+Driving+School+Adyar+Signal+L+B+Road+Chennai&t=&z=16&ie=UTF8&iwloc=&output=embed";

