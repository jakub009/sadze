export const EMAILJS_PUBLIC_KEY = "OV80ajZayM28mKJWo";
export const EMAILJS_SERVICE_ID = "service_tllq6zo";
export const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";

export const EMAILJS_IS_CONFIGURED =
  !EMAILJS_PUBLIC_KEY.startsWith("YOUR_") &&
  !EMAILJS_SERVICE_ID.startsWith("YOUR_") &&
  !EMAILJS_TEMPLATE_ID.startsWith("YOUR_");
