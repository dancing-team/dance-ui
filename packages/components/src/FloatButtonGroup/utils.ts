import { ReactNode } from "react";

// 寻找传入元素最近的有滚动条的父元素（类型问题）
export function findScrollDom(startElement: HTMLElement) {
    let scrollTarget = startElement;
    while(true) {
        if(scrollTarget === document.body || scrollTarget!.scrollHeight > scrollTarget!.clientHeight) {
            return scrollTarget;
        }
        if(scrollTarget) {
            scrollTarget = scrollTarget.parentNode as HTMLElement;
        }
    }
}