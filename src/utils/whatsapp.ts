export const generateWhatsAppLink = (
  phoneNumber: string,
  message: string
): string => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const generateProductMessage = (
  title: string,
  price: string,
  description: string
): string => {
  return `Halo, saya ingin membeli ${title} — ${price}.\nDeskripsi: ${description}`;
};

export const generateSystemMessage = (
  title: string,
  description: string
): string => {
  return `Halo, saya ingin demo untuk ${title}.\nKebutuhan: ${description}`;
};

export const generateContactMessage = (): string => {
  return `Halo Ridho, saya ingin berdiskusi tentang project/collaboration.`;
};
