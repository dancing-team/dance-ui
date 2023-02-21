import type {linkActionConfig, elevatorActionConfig, buttonActionConfig, backTopActionConfig} from './types';
// 判断config的type是否为"link"，同时确定config.action的类型(对config.action进行类型缩小)
export function judgeLinkType(config: any, action: any):action is linkActionConfig {
    if(config.type === "link") {
        return true;
    }
    return false;
}

export function judgeElevatorType(config: any, action: any):action is elevatorActionConfig {
    if(config.type === "elevator") {
        return true;
    }
    return false;
}

export function judgeButtonType(config: any, action: any):action is buttonActionConfig {
    if(config.type === "button") {
        return true;
    }
    return false;
}

export function judgeBackTopType(config: any, action: any):action is backTopActionConfig {
    if(config.type === "button") {
        return true;
    }
    return false;
}