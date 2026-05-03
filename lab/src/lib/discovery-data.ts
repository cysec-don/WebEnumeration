export type Difficulty = "easy" | "medium" | "hard" | "expert";

export interface DiscoverableResource {
  id: string;
  path: string;
  displayName: string;
  description: string;
  difficulty: Difficulty;
  category: string;
  tools: string[];
  hints: string[];
  isApiEndpoint?: boolean;
}

export const RESOURCES: DiscoverableResource[] = [
  // Easy
  {
    id: "admin-panel",
    path: "/admin-panel",
    displayName: "Admin Panel",
    description: "An unprotected admin login page with access to system management features.",
    difficulty: "easy",
    category: "Admin Interface",
    tools: ["DIRB", "DIRBUSTER", "Gobuster", "ffuf", "Photon"],
    hints: [
      "Common admin paths are often the first thing to check.",
      "Try common directory names like 'admin', 'admin-panel', 'administrator'.",
      "DIRB with the common.txt wordlist would find this quickly.",
    ],
  },
  {
    id: "dev-site",
    path: "/dev-site",
    displayName: "Development Site",
    description: "An old development version of the website left accessible on the production server.",
    difficulty: "easy",
    category: "Development",
    tools: ["DIRB", "Gobuster", "ffuf", "Photon"],
    hints: [
      "Developers often leave dev/staging sites accessible.",
      "Try variations: 'dev', 'dev-site', 'staging', 'test'.",
      "Check HTML comments — they sometimes reveal dev paths.",
    ],
  },
  {
    id: "phpinfo",
    path: "/phpinfo",
    displayName: "PHP Info Page",
    description: "A PHP information page exposing server configuration details.",
    difficulty: "easy",
    category: "Information Disclosure",
    tools: ["DIRB", "DIRBUSTER", "Gobuster", "ffuf"],
    hints: [
      "phpinfo.php is a classic information disclosure.",
      "Extension-based enumeration can find .php files.",
      "Try DIRB with the extensions flag: -X .php",
    ],
  },
  {
    id: "robots",
    path: "/api/robots",
    displayName: "robots.txt",
    description: "A robots.txt file that reveals hidden directories the site owner doesn't want indexed.",
    difficulty: "easy",
    category: "Information Disclosure",
    tools: ["Photon", "DIRB", "Gobuster"],
    hints: [
      "Always check /robots.txt first — it's the lowest-hanging fruit.",
      "Photon automatically crawls robots.txt entries.",
      "The Disallow entries reveal paths the admin wants to hide.",
    ],
  },
  // Medium
  {
    id: "backup",
    path: "/backup",
    displayName: "Backup Directory",
    description: "An exposed backup directory containing database dumps and archived files.",
    difficulty: "medium",
    category: "Sensitive Files",
    tools: ["DIRB", "DIRBUSTER", "Gobuster", "ffuf"],
    hints: [
      "Backup directories are often named 'backup', 'backups', 'db', 'dump'.",
      "Try common backup extensions: .sql, .zip, .tar.gz, .bak.",
      "DIRBUSTER's comprehensive wordlist is great for finding these.",
    ],
  },
  {
    id: "backup-db-dump",
    path: "/backup/db_dump",
    displayName: "Database Dump",
    description: "A SQL dump file containing user data including emails and password hashes.",
    difficulty: "medium",
    category: "Sensitive Files",
    tools: ["DIRB", "Gobuster", "ffuf"],
    hints: [
      "After finding /backup/, enumerate its contents for specific files.",
      "Try common SQL dump filenames: db.sql, dump.sql, backup.sql.",
      "ffuf with a file wordlist can recursively enumerate directories.",
    ],
  },
  {
    id: "api-v1-docs",
    path: "/api/v1/docs",
    displayName: "API v1 Documentation",
    description: "Exposed API documentation listing available endpoints and their parameters.",
    difficulty: "medium",
    category: "API",
    tools: ["Gobuster", "ffuf", "Photon"],
    hints: [
      "API documentation is often at /api/docs, /api/v1/docs, /swagger.",
      "Gobuster with api-wordlist can find these endpoints.",
      "Photon's crawling can discover linked API documentation.",
    ],
  },
  {
    id: "uploads-hidden",
    path: "/uploads/hidden",
    displayName: "Hidden Upload Directory",
    description: "A hidden upload directory containing files that shouldn't be publicly accessible.",
    difficulty: "medium",
    category: "Sensitive Files",
    tools: ["DIRB", "DIRBUSTER", "Gobuster", "ffuf"],
    hints: [
      "Upload directories are common: /uploads, /upload, /files.",
      "Look for subdirectories within found directories.",
      "ffuf's recursive mode (-recursion) can find nested paths.",
    ],
  },
  {
    id: "exports-users",
    path: "/exports/users",
    displayName: "User Export (CSV)",
    description: "A CSV export file containing user personal information.",
    difficulty: "medium",
    category: "Sensitive Files",
    tools: ["DIRB", "Gobuster", "ffuf"],
    hints: [
      "Export directories may contain data dumps in CSV, JSON, XML.",
      "Try /exports, /export, /data, /downloads.",
      "Gobuster can find these with a content-discovery wordlist.",
    ],
  },
  {
    id: "error-log",
    path: "/logs",
    displayName: "Error Logs",
    description: "Server error logs revealing internal paths, errors, and potential vulnerabilities.",
    difficulty: "medium",
    category: "Information Disclosure",
    tools: ["DIRB", "DIRBUSTER", "Gobuster", "ffuf"],
    hints: [
      "Log directories: /logs, /log, /var/log (on the server).",
      "Common log filenames: error.log, access.log, debug.log.",
      "Error logs often reveal stack traces and file paths.",
    ],
  },
  // Hard
  {
    id: "git",
    path: "/git",
    displayName: ".git Directory",
    description: "An exposed Git repository directory containing source code history and configuration.",
    difficulty: "hard",
    category: "Source Code",
    tools: ["Gobuster", "ffuf", "DIRB"],
    hints: [
      "The .git directory should never be web-accessible.",
      "Try accessing /.git/HEAD or /.git/config directly.",
      "ffuf can find dot-prefixed directories with the right wordlist.",
    ],
  },
  {
    id: "git-config",
    path: "/git/config",
    displayName: ".git/config",
    description: "Git configuration file revealing remote repository URLs and credentials.",
    difficulty: "hard",
    category: "Source Code",
    tools: ["Gobuster", "ffuf"],
    hints: [
      "Once .git is found, enumerate its contents for config files.",
      "The config file may contain remote URLs with embedded credentials.",
      "This is a critical finding — it can lead to full source code access.",
    ],
  },
  {
    id: "git-head",
    path: "/git/head",
    displayName: ".git/HEAD",
    description: "Git HEAD reference file showing the current branch and commit reference.",
    difficulty: "hard",
    category: "Source Code",
    tools: ["Gobuster", "ffuf"],
    hints: [
      "The HEAD file tells you which branch is checked out.",
      "Combined with other .git files, you can reconstruct the repo.",
      "Tools like git-dumper can automate the extraction process.",
    ],
  },
  {
    id: "config-settings-bak",
    path: "/config/settings-bak",
    displayName: "Settings Backup (.bak)",
    description: "A backup configuration file containing database credentials and API keys.",
    difficulty: "hard",
    category: "Sensitive Files",
    tools: ["Gobuster", "ffuf", "DIRB"],
    hints: [
      "Backup config files often have extensions: .bak, .old, .save, .orig.",
      "Try appending these extensions to known config file paths.",
      "ffuf can fuzz extensions: -e .bak,.old,.save,.orig",
    ],
  },
  {
    id: "debug-status",
    path: "/api/v1/debug/status",
    displayName: "Debug Status Endpoint",
    description: "A debug API endpoint exposing server status, environment variables, and internal details.",
    difficulty: "hard",
    category: "API",
    tools: ["Gobuster", "ffuf"],
    hints: [
      "Debug endpoints are often at /debug, /status, /health, /info.",
      "API enumeration requires a different wordlist than directory discovery.",
      "ffuf is excellent for API endpoint fuzzing with custom wordlists.",
    ],
  },
  // Expert
  {
    id: "api-v2-admin-users",
    path: "/api/v2/admin/users",
    displayName: "Admin Users API (v2)",
    description: "A secret admin API endpoint returning full user data including passwords and tokens.",
    difficulty: "expert",
    category: "API",
    tools: ["ffuf", "Gobuster"],
    hints: [
      "v2 APIs might exist alongside v1 — always check for version increments.",
      "Admin API endpoints often require specific headers or tokens.",
      "ffuf with API-specific wordlists and parameter fuzzing can discover these.",
    ],
  },
  {
    id: "api-v2-admin-config",
    path: "/api/v2/admin/config",
    displayName: "Admin Config API (v2)",
    description: "A secret admin API endpoint returning server configuration with encryption keys and secrets.",
    difficulty: "expert",
    category: "API",
    tools: ["ffuf", "Gobuster"],
    hints: [
      "After finding v1 API docs, try enumerating v2 endpoints.",
      "Config endpoints might be at /config, /settings, /env.",
      "Use ffuf's recursive mode with API-specific wordlists for deep enumeration.",
    ],
  },
];

export const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  easy: "text-green-400",
  medium: "text-yellow-400",
  hard: "text-orange-400",
  expert: "text-red-400",
};

export const DIFFICULTY_BG: Record<Difficulty, string> = {
  easy: "bg-green-500/20 border-green-500/30",
  medium: "bg-yellow-500/20 border-yellow-500/30",
  hard: "bg-orange-500/20 border-orange-500/30",
  expert: "bg-red-500/20 border-red-500/30",
};

export const DIFFICULTY_BADGE: Record<Difficulty, string> = {
  easy: "bg-green-600 hover:bg-green-700",
  medium: "bg-yellow-600 hover:bg-yellow-700",
  hard: "bg-orange-600 hover:bg-orange-700",
  expert: "bg-red-600 hover:bg-red-700",
};

export const TOOL_INFO: Record<string, { name: string; description: string; exampleCommand: string; strengths: string[]; tips: string[] }> = {
  DIRB: {
    name: "DIRB",
    description: "A web content scanner that launches dictionary-based attacks against a web server, analyzing responses to find hidden directories and files.",
    exampleCommand: "dirb http://target.com /usr/share/wordlists/dirb/common.txt",
    strengths: ["Simple and fast", "Great for common directories", "Supports custom extensions", "Good for beginners"],
    tips: [
      "Start with the default common.txt wordlist",
      "Use -X flag for extensions: dirb http://target.com -X .php,.bak,.old",
      "The -r flag disables recursive scanning for faster results",
      "Use -N 404 to ignore 'not found' status codes",
    ],
  },
  DIRBUSTER: {
    name: "DIRBUSTER",
    description: "An OWASP tool designed to brute-force directories and files on web servers using a GUI interface with comprehensive wordlists.",
    exampleCommand: "dirbuster -u http://target.com -t 20 -l /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt",
    strengths: ["GUI interface", "Comprehensive wordlists", "Multi-threaded", "Part of OWASP toolkit"],
    tips: [
      "Use the medium wordlist for a good balance of speed and coverage",
      "The directory-list-2.3-small.txt is faster but less thorough",
      "Set thread count based on target server capacity",
      "Results can be exported for further analysis",
    ],
  },
  Photon: {
    name: "Photon",
    description: "An incredibly fast crawler designed for OSINT that extracts URLs, endpoints, and intelligence from target websites.",
    exampleCommand: "python3 photon.py -u http://target.com -l 3 -d 5",
    strengths: ["Intelligent crawling", "Extracts URLs from JS files", "Parses robots.txt", "OSINT capabilities"],
    tips: [
      "Photon automatically checks robots.txt entries",
      "Use -l flag to set crawl depth (try -l 3 for this lab)",
      "The -d flag sets delay between requests",
      "Use -e flag to extract specific data types (emails, social media)",
    ],
  },
  Gobuster: {
    name: "Gobuster",
    description: "A fast directory/file brute-forcing tool written in Go, known for its speed and flexibility with multiple modes.",
    exampleCommand: "gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt",
    strengths: ["Very fast (Go-based)", "Multiple modes (dir, dns, vhost)", "Pattern matching", "Extension support"],
    tips: [
      "Use -x flag for extensions: gobuster dir -u http://target.com -x php,bak,old",
      "The -t flag controls threads (default: 10, increase for faster scanning)",
      "Use -s to filter status codes: -s '200,204,301,302,307'",
      "Try different modes: dir, dns, vhost for comprehensive enumeration",
    ],
  },
  ffuf: {
    name: "ffuf",
    description: "A fast web fuzzer written in Go that supports recursive discovery, filtering, and multi-position fuzzing.",
    exampleCommand: "ffuf -u http://target.com/FUZZ -w /usr/share/wordlists/dirb/common.txt",
    strengths: ["Extremely fast", "Recursive mode", "Advanced filtering", "Multi-position fuzzing"],
    tips: [
      "Use -recursion flag for recursive directory discovery",
      "Filter by size: -fs 1234 to ignore default response sizes",
      "Use -e for extensions: ffuf -u http://target.com/FUZZ -e .php,.bak,.old",
      "Multiple wordlists: -w word1:FUZZ1,word2:FUZZ2",
      "Use -mc to match status codes: -mc 200,301,302",
    ],
  },
};
