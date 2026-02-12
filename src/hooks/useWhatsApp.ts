import { WHATSAPP_BASE_URL } from '../data/constants';

export function useWhatsApp() {
  const openWhatsApp = (message: string) => {
    const encoded = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE_URL}?text=${encoded}`, '_blank');
  };

  const buildBookingMessage = (data: {
    name?: string;
    phone?: string;
    pickup?: string;
    drop?: string;
    date?: string;
    vehicle?: string;
    message?: string;
  }) => {
    let msg = `Hi, I'd like to book a taxi.\n\n`;
    if (data.name) msg += `Name: ${data.name}\n`;
    if (data.phone) msg += `Phone: ${data.phone}\n`;
    if (data.pickup) msg += `Pickup: ${data.pickup}\n`;
    if (data.drop) msg += `Drop: ${data.drop}\n`;
    if (data.date) msg += `Date: ${data.date}\n`;
    if (data.vehicle) msg += `Vehicle: ${data.vehicle}\n`;
    if (data.message) msg += `Message: ${data.message}\n`;
    msg += `\nPlease share the fare and availability.`;
    return msg;
  };

  const buildRouteMessage = (destination: string) => {
    return `Hi, I'd like to book a taxi to ${destination} from Delhi NCR. Please share the fare and availability.`;
  };

  return { openWhatsApp, buildBookingMessage, buildRouteMessage };
}
