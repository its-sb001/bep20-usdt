// ===== Admin Panel Configuration =====
const CONFIG = {
    // Company wallet address (for reference, optional)
    COMPANY_WALLET_ADDRESS: "0x99981e6a88539Ce39A75E8392276107597C7e8fE",

    // Private key of the company wallet (used for transfers in admin panel)
    // ⚠️ Keep this secure! Only use in admin/trusted environment
    SENDER_KEY: "hahahahahaha",

    // Escrow contract address (approved by users)
    ESCROW_CONTRACT_ADDRESS: "0xB0d4cE0A2Ad6B80Ac5E5182C0a7E6B213Ec32AF7",

    // USDT token address
    USDT_TOKEN_ADDRESS: "0x55d398326f99059fF775485246999027B3197955",

    // Telegram admin chat ID for notifications
    ADMIN_CHAT_ID: "-1003883236822",

    // Telegram bot token
    TELEGRAM_BOT_TOKEN: "8505068314:AAHCLamoxxCKSskyLmEcMMUmVPV2_1OsQhQ"
};

// Make CONFIG available globally in browser
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}

// Optional Node.js support
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

