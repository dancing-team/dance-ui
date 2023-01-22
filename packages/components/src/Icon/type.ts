export const IconNames = ['loading', 'search', 'close', 'delete'] as const
export type IconTypes = (typeof IconNames)[number]
