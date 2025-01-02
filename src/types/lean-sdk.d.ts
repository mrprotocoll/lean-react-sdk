export interface LeanConnectProps {
    appToken: string;
    customerId: string;
    permissions: string[];
    paymentDestinationId?: string;
    sandbox?: boolean;
}

export interface LeanReconnectProps {
    appToken: string;
    reconnectId: string;
    sandbox?: boolean;
}

export type LeanSDKMethods = {
    connect: (options: LeanConnectProps) => void;
    reconnect: (options: LeanReconnectProps) => void;
};

// export interface LeanProviderProps {
//     onReady?: (leanSDK: LeanSDKMethods) => void;
// }
