import {LeanConnectProps} from "../types/lean-sdk";
import {loadLeanSDK} from "./loadScript";

export const connect = async (options: LeanConnectProps): Promise<void> => {
    if (!window.Lean) {
        throw new Error("Lean SDK not initialized");
    }

    const Lean = await loadLeanSDK();

    window.Lean.connect({
        app_token: options.appToken,
        customer_id: options.customerId,
        permissions: options.permissions,
        payment_destination_id: options.paymentDestinationId,
        sandbox: options.sandbox ?? true,
    });
};
