export const loadLeanSDK = (): Promise<NonNullable<Window["Lean"]>> => {

    return new Promise((resolve, reject) => {
        if (window.Lean) {
            resolve(window.Lean);
            return;
        }

        const script = document.createElement("script");
        script.src = "https://cdn.leantech.me/link/loader/prod/ae/latest/lean-link-loader.min.js";
        script.async = true;

        script.onload = () => {
            if (window.Lean) {
                resolve(window.Lean);
            } else {
                reject(new Error("Lean SDK failed to load"));
            }
        };

        script.onerror = () => reject(new Error("Failed to load Lean SDK script"));

        document.body.appendChild(script);
    });
};

