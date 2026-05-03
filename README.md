# WebEnumeration

**The Art of Web Enumeration: From Hidden Paths to Full Discovery**

A comprehensive cybersecurity educational project containing a professional-grade textbook and an interactive, deliberately vulnerable web application lab designed for mastering web content discovery and enumeration tools.

---

## 📖 Project Overview

This repository provides two tightly integrated learning resources:

1. **The Textbook** (`/book/`) — *"The Art of Web Enumeration: From Hidden Paths to Full Discovery"* — a professional-grade reference covering DIRB, DIRBUSTER, Photon, Gobuster, and ffuf in depth.
2. **The Lab** (`/lab/`) — *"The Vulnerable Art Shop"* — a fully interactive Next.js web application containing 17 hidden resources at four difficulty levels, designed for hands-on practice with the tools taught in the textbook.

---

## 📁 Repository Structure

```
WebEnumeration/
├── book/                           # 📖 The Textbook
│   └── The_Art_of_Web_Enumeration.docx
├── lab/                            # 🧪 The Vulnerable Art Shop Lab
│   ├── src/                        # Next.js source code
│   │   ├── app/                    # All pages and API routes
│   │   │   ├── page.tsx            # Art Shop Homepage
│   │   │   ├── gallery/            # Gallery page
│   │   │   ├── about/              # About page
│   │   │   ├── contact/            # Contact page
│   │   │   ├── lab/                # Lab Dashboard (progress tracking)
│   │   │   ├── admin-panel/        # 🟢 Easy - Unprotected admin panel
│   │   │   ├── dev-site/           # 🟢 Easy - Leftover development site
│   │   │   ├── phpinfo/            # 🟢 Easy - PHP info disclosure
│   │   │   ├── backup/             # 🟡 Medium - Exposed backup directory
│   │   │   │   └── db_dump/        # 🟡 Medium - Database SQL dump
│   │   │   ├── api/
│   │   │   │   ├── robots/         # 🟢 Easy - Revealing robots.txt
│   │   │   │   ├── v1/
│   │   │   │   │   ├── docs/       # 🟡 Medium - API documentation
│   │   │   │   │   ├── products/   # Public products API
│   │   │   │   │   ├── users/      # Public users API
│   │   │   │   │   ├── search/     # Public search API
│   │   │   │   │   └── debug/
│   │   │   │   │       └── status/ # 🟠 Hard - Debug status endpoint
│   │   │   │   └── v2/
│   │   │   │       └── admin/
│   │   │   │           ├── users/  # 🔴 Expert - Admin users API
│   │   │   │           └── config/ # 🔴 Expert - Admin config API
│   │   │   ├── uploads/hidden/     # 🟡 Medium - Sensitive uploaded files
│   │   │   ├── exports/users/      # 🟡 Medium - User data CSV export
│   │   │   ├── logs/               # 🟡 Medium - Server error logs
│   │   │   ├── git/                # 🟠 Hard - Exposed .git directory
│   │   │   │   ├── head/           # 🟠 Hard - .git/HEAD file
│   │   │   │   └── config/         # 🟠 Hard - .git/config with creds
│   │   │   └── config/settings-bak/# 🟠 Hard - Backup config with plaintext creds
│   │   ├── components/             # React components
│   │   │   ├── DiscoveryProvider.tsx  # State management
│   │   │   ├── DiscoveryToast.tsx     # Discovery notifications
│   │   │   ├── TerminalDisplay.tsx    # Terminal-style display
│   │   │   └── ui/                    # shadcn/ui components
│   │   ├── lib/
│   │   │   └── discovery-data.ts  # Resource definitions & tool info
│   │   └── hooks/                  # React hooks
│   ├── public/                     # Static files (robots.txt, logo)
│   ├── package.json                # Dependencies
│   ├── next.config.ts              # Next.js configuration
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   └── tsconfig.json               # TypeScript configuration
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** or **Bun**
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/cysec-don/WebEnumeration.git
cd WebEnumeration

# Install and run the lab
cd lab
npm install
npm run dev
```

The lab will be available at **http://localhost:3000**

### Quick Start in 3 Steps

```bash
git clone https://github.com/cysec-don/WebEnumeration.git
cd WebEnumeration/lab
npm install && npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## 🧪 Using the Lab

### Explorer Mode (Browser)

1. Open **http://localhost:3000** — you'll see the Art Shop storefront
2. Try different URL paths to discover hidden resources (e.g., `/admin-panel`, `/backup`, `/git`)
3. Visit **http://localhost:3000/lab** to open the Lab Dashboard and track your progress
4. Use the hint system if you get stuck — each resource has 3 progressive hints
5. Check the HTML source of the homepage for clues

### Command-Line Mode (Tools)

Use the enumeration tools covered in the textbook against the running lab:

```bash
# DIRB - Simple dictionary attack
dirb http://localhost:3000 /usr/share/wordlists/dirb/common.txt

# Gobuster - Fast directory brute-forcing
gobuster dir -u http://localhost:3000 -w /usr/share/wordlists/dirb/common.txt -x php,bak,old

# ffuf - Fast web fuzzer with recursive mode
ffuf -u http://localhost:3000/FUZZ -w /usr/share/wordlists/dirb/common.txt -mc 200,301,302 -recursion

# Photon - Intelligent web crawler
python3 photon.py -u http://localhost:3000 -l 3

# DIRBUSTER - OWASP GUI-based brute-forcer
dirbuster -u http://localhost:3000 -t 20 -l /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt
```

---

## 🎯 Lab Resources (17 Hidden Targets)

| Difficulty | Count | Resources |
|-----------|-------|-----------|
| 🟢 Easy | 4 | Admin Panel, Dev Site, PHP Info, robots.txt |
| 🟡 Medium | 6 | Backup Directory, DB Dump, API v1 Docs, Hidden Uploads, User Export, Error Logs |
| 🟠 Hard | 5 | .git Directory, .git/HEAD, .git/config, Settings Backup, Debug Status |
| 🔴 Expert | 2 | Admin Users API (v2), Admin Config API (v2) |
| **Total** | **17** | |

### Detailed Resource Descriptions

#### 🟢 Easy (4 resources)

| Route | Resource | What You Find |
|-------|----------|---------------|
| `/admin-panel` | Admin Panel | Unprotected admin login (any creds work) with full dashboard showing user stats, revenue, server info |
| `/dev-site` | Development Site | Old dev environment with links to other hidden resources, reveals internal tools and build info |
| `/phpinfo` | PHP Info Page | Simulated `phpinfo()` exposing server config, internal IPs, database host, debug mode enabled |
| `/api/robots` | robots.txt | Disallow entries revealing all hidden directories (`/admin-panel/`, `/backup/`, `/git/`, etc.) |

#### 🟡 Medium (6 resources)

| Route | Resource | What You Find |
|-------|----------|---------------|
| `/backup` | Backup Directory | Apache directory listing with `db_dump.sql`, `config_backup.zip`, `website_backup_2024.tar.gz` |
| `/backup/db_dump` | Database Dump | Full SQL dump with 10 user records (password hashes, API tokens) and payment data with credit card last-4 |
| `/api/v1/docs` | API v1 Documentation | Swagger-style docs listing all endpoints, revealing v2 admin endpoints lack authentication |
| `/uploads/hidden` | Hidden Upload Directory | Sensitive files including SSH keys (`id_rsa_backup`), server certs, and `.env.production` |
| `/exports/users` | User Export (CSV) | CSV with PII: emails, phone numbers, addresses, API tokens, credit card last-4 — GDPR/CCPA violation |
| `/logs` | Error Logs | 20 log entries revealing internal paths, stack traces, SQL injection attempts, auth bypass events |

#### 🟠 Hard (5 resources)

| Route | Resource | What You Find |
|-------|----------|---------------|
| `/git` | .git Directory | Exposed Git repository listing with HEAD, config, objects, refs — allows full source code recovery |
| `/git/head` | .git/HEAD | Shows `ref: refs/heads/main` — confirms active branch for repo reconstruction |
| `/git/config` | .git/config | Remote URL with embedded credentials: `admin:Gl4ss_Art1st_2024@gitlab.internal...` |
| `/config/settings-bak` | Settings Backup | Plaintext INI file with DB passwords, Stripe keys, AWS credentials, JWT secret, encryption key |
| `/api/v1/debug/status` | Debug Status | JSON endpoint with all env vars: DB passwords, API keys, AWS credentials, plus 5 security warnings |

#### 🔴 Expert (2 resources)

| Route | Resource | What You Find |
|-------|----------|---------------|
| `/api/v2/admin/users` | Admin Users API (v2) | Unauthenticated endpoint returning full user data: password hashes, API tokens, phone, address, CC last-4 |
| `/api/v2/admin/config` | Admin Config API (v2) | Unauthenticated endpoint returning complete server secrets: DB, Redis, Stripe, AWS, JWT, encryption keys |

---

## 📋 Route Mapping (Lab vs. Real-World)

Since this is a Next.js simulation, some paths are adapted from their real-world equivalents:

| Real-World Path | Lab Path |
|----------------|----------|
| `/.git/` | `/git/` |
| `/.git/config` | `/git/config/` |
| `/.git/HEAD` | `/git/head/` |
| `/phpinfo.php` | `/phpinfo/` |
| `/robots.txt` | `/api/robots/` |
| `/backup/db_dump.sql` | `/backup/db_dump/` |
| `/config/settings.ini.bak` | `/config/settings-bak/` |
| `/exports/users.csv` | `/exports/users/` |
| `/logs/error.log` | `/logs/` |

---

## 📚 About the Book

**Title:** The Art of Web Enumeration: From Hidden Paths to Full Discovery  
**Subtitle:** Mastering DIRB, DIRBUSTER, Photon, Gobuster, and ffuf  
**Author:** Cysec Don (cysecdon@gmail.com)  
**Format:** DOCX — professional formatting, Times New Roman, Deep Cyan accent theme  
**TOC Entries:** 82 indexed headings  

### Book Structure (6 Parts)

1. **Foundations** — HTTP fundamentals, status codes, URL structure, wordlist theory, enumeration mindset
2. **Tool Deep Dives** — Comprehensive chapters on DIRB, DIRBUSTER, Photon, Gobuster, and ffuf
3. **Hands-On Lab** — Step-by-step exercises using The Vulnerable Art Shop with Explorer Mode and Command-Line Mode
4. **Comparison & Strategy** — Tool comparison matrix, scenario-based selection, combining tools for max coverage
5. **Real-World Pentest Workflow** — Full engagement methodology, stealth techniques, evasion
6. **Cheatsheets** — Quick-reference cards for all five tools

---

## ⚠️ Disclaimer

This project is for **educational purposes only**. The Vulnerable Art Shop is a deliberately vulnerable application designed to teach web enumeration techniques in a safe, controlled environment. Do not use these techniques against systems you do not own or have explicit permission to test.

---

*Built with Next.js 16 · React 19 · Tailwind CSS 4 · shadcn/ui · Framer Motion*
