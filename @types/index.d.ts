export declare class UnityContent {
    static uniqueID: number;
    buildJsonPath: string;
    unityLoaderJsPath: string;
    uniqueID: number;
    unityEvents: Array<{ eventName: string, callback: any }>;
    unityConfig: {
        unityVersion: string,
        modules: any,
        adjustOnWindowResize: any,
        id: any,
    };
    unityComponent: any;
    unityInstance: any;
    unityComponent: any;

    triggerUnityEvent(eventName: string, eventValue: any): void

    on(eventName: string, callback: any): void

    send(gameObjectName: string, methodName: string, parameter: any): void

    remove(): void

    setFullscreen(isfull: boolean): void

    setUnityInstance(instance: any): void

    setComponentInstance(instance: any): void
}

export declare class LoggingService {
    warnUnityContentRemoveNotAvailable(additionalDetails: string): void

    errorUnityLoaderNotFound(additionalDetails: string): void

    warn(message: Array<any>): void

    error(message: Array<any>): void

    info(message: Array<any>): void

}