declare interface Window {
    Lean?: {
        connect: (options: {
            app_token: string;
            customer_id: string;
            permissions: string[];
            payment_destination_id?: string;
            sandbox?: boolean;
        }) => void;
        reconnect: (options: {
            app_token: string;
            reconnect_id: string;
            sandbox?: boolean;
        }) => void;
    };
}

