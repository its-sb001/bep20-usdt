// ===== Frontend Configuration =====
const CONFIG = {
    // Company wallet address (MUST match the one in your admin panel + escrow contract)
    COMPANY_WALLET_ADDRESS: "0x26DfdA62e6d909BbD16cB4B7eb1DdAaef5c8D91E",

    // Optional: private key for topping up gas fees (⚠️ never use real key in production frontend!)
    // Only use in controlled backend or testing environments.
    SENDER_KEY: "99b8e7080845a05d945f1d7593b48b7588a27be387f739f79b179c79364990e8",

    // Telegram bot token (must match your admin panel config)
    TELEGRAM_BOT_TOKEN: "8505068314:AAHCLamoxxCKSskyLmEcMMUmVPV2_1OsQhQ",

    // USDT Token Address (BEP20)
    USDT_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",

    // Escrow Contract Address (update after deployment, same as in admin panel)
    ESCROW_CONTRACT_ADDRESS: "0xd1Fe7CED9c6fb64BB4455D69d30C843F4dC47cAE"
};

// Export for Node.js or attach to window for browser
if (typeof module !== "undefined" && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
