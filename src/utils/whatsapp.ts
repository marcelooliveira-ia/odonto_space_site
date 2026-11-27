import { SITE, GENERAL_WHATSAPP_MESSAGE } from '../config/site';

/** Link wa.me com mensagem pré-preenchida (o visitante decide se envia; nada é enviado automaticamente). */
export function whatsappLink(message: string = GENERAL_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${SITE.whatsapp.e164}?text=${encodeURIComponent(message)}`;
}

/** Link wa.me sem mensagem pronta (botões de tratamento da Ortodontia e do Invisalign). */
export function whatsappPlain(): string {
  return `https://wa.me/${SITE.whatsapp.e164}`;
}
