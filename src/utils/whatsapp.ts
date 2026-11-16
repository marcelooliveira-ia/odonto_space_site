import { SITE, GENERAL_WHATSAPP_MESSAGE } from '../config/site';

/** Monta o link wa.me com mensagem contextualizada. */
export function whatsappLink(message: string = GENERAL_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${SITE.whatsapp.e164}?text=${encodeURIComponent(message)}`;
}
