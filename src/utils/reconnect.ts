import {LeanReconnectProps} from "../types/lean-sdk";
import {loadLeanSDK} from "./loadScript";

export const reconnect = async (options: LeanReconnectProps): Promise<void> => {
    if (!window.Lean) {
        throw new Error("Lean SDK not initialized");
    }

    const Lean = await loadLeanSDK();

    window.Lean.reconnect({
        app_token: options.appToken,
        reconnect_id: options.reconnectId,
        sandbox: options.sandbox ?? true,
    });
};
