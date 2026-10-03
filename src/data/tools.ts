export type Tool = {
    name: string;
    slug: string;
    description: string;
    category: string;
    icon: string;
    popular?: boolean;
};

export const tools: Tool[] = [
    {
        name: "JSON Formatter",
        description: "Format, beautify, and indent JSON payloads for easy reading.",
        category: "JSON",
        icon: "{ }",
        slug: "json-formatter"
    },
    {
        name: "JSON Validator",
        description: "Validate JSON syntax, detect parse errors, and inspect structure.",
        category: "JSON",
        icon: "✓",
        slug: "json-validator"
    },
    {
        name: "JSON Viewer",
        description: "Explore hierarchical JSON structures in an interactive collapsible tree.",
        category: "JSON",
        icon: "⊞",
        slug: "json-viewer"
    },
    {
        name: "JSON Minifier",
        description: "Strip whitespace and newlines to produce compact single-line JSON.",
        category: "JSON",
        icon: "↘",
        slug: "json-minifier"
    },
    {
        name: "JSON Diff",
        description: "Compare two JSON payloads side-by-side to track differences.",
        category: "JSON",
        icon: "⇄",
        slug: "json-diff"
    },
    {
        name: "Base64 Encoder",
        slug: "base64-encoder",
        description: "Encode text and data to Base64 format.",
        category: "Encoding",
        icon: "#",
        popular: true,
    },

    {
        name: "Base64 Decoder",
        slug: "base64-decoder",
        description: "Decode Base64 strings back into readable text.",
        category: "Encoding",
        icon: "#",
    },

    {
        name: "URL Encoder",
        slug: "url-encoder",
        description: "Encode URLs and text for safe URL usage.",
        category: "Encoding",
        icon: "%",
    },

    {
        name: "URL Decoder",
        slug: "url-decoder",
        description: "Decode URL-encoded strings into readable text.",
        category: "Encoding",
        icon: "%",
    },
    {
        name: "Hash Generator",
        slug: "hash-generator",
        description: "Generate secure hash values from text using common hashing algorithms.",
        category: "Developer Utilities",
        icon: "#",
    },
    {
        name: "JWT Decoder",
        description: "Decode JSON Web Tokens to inspect headers, payload claims, and expiration status.",
        category: "Developer Utilities",
        icon: "🔑",
        slug: "jwt-decoder"
    },
    

    {
        name: "UUID Generator",
        slug: "uuid-generator",
        description: "Generate random UUIDs instantly.",
        category: "Developer Utilities",
        icon: "✦",
        popular: true,
    },

    {
        name: "Timestamp Converter",
        description: "Convert Unix epoch timestamps to human-readable dates and back.",
        category: "Developer Utilities",
        icon: "⏱️",
        slug: "timestamp-converter"

    },
    {
        name: "Cron Expression Builder",
        description: "Generate and decipher cron schedules with human-readable explanations.",
        category: "Developer Utilities",
        icon: "⏰",
        slug: "cron-expression-builder"

    },
    {
        name: "Regex Tester",
        description: "Test regular expressions with real-time match highlighting and capture group inspection.",
        category: "Developer Utilities",
        icon: ".*",
        slug: "regex-tester"
    }
];