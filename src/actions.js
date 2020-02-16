
export const CAMBIAR_TARJETA = 'CAMBIAR_TARJETA';
/*
 * action creators
 */
export function cambiarNumeroTarjeta(valor_enviado) {
  return { type: CAMBIAR_TARJETA, valor_enviado }
}
