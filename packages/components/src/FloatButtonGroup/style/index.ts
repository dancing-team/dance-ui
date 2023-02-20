export const commonStyle = {
  ulStyle: 'fixed cursor-pointer w-14 p-0 m-0 overflow-hidden',
  liStyle: 'relative list-none w-14 h-14 bg-white flex justify-center items-center after:content-[""] after:absolute after:bottom-0 after:block after:h-[1px] after:w-14 after:bg-[linear-gradient(270deg,white,#eeeeee,#eeeeee,white)] after:last-of-type:hidden',
  aStyle: 'w-full h-full flex justify-center items-center no-underline text-black text-xs hover:no-underline hover:text-black',
  shadowStyle: 'shadow-xl',
}
export const platformStyles = {
  defaultUl: 'rounded-lg',
  defaultLi: 'hover:bg-[linear-gradient(135deg,white,#eeeeee)]',
  defaultA: '',
  JingDongUl: 'rounded-none',
  JingDongLi: 'hover:bg-[#e1251b] hover:text-white transition-all',
  JingDongA: 'hover:text-white ',
  TaoBaoUl: 'rounded-lg',
  TaoBaoLi: 'hover:bg-[linear-gradient(145deg,#ff9000,#ff5000)]',
  TaoBaoA: 'text-[#666] hover:text-white',
}