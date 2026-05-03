"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const debugStatus = `{
  "status": "ok",
  "timestamp": "2024-01-15T14:32:07.000Z",
  "server": {
    "hostname": "prod-web-01",
    "ip": "10.0.1.42",
    "os": "Ubuntu 22.04.3 LTS",
    "kernel": "5.15.0-91-generic",
    "uptime": "14 days, 6:32:15",
    "cpu_usage": "23.4%",
    "memory": {
      "total": "16 GB",
      "used": "11.2 GB",
      "free": "4.8 GB",
      "swap_used": "0 B"
    },
    "disk": {
      "total": "500 GB",
      "used": "342 GB",
      "available": "158 GB"
    }
  },
  "application": {
    "name": "The Vulnerable Art Shop",
    "version": "2.4.1",
    "framework": "Laravel 10.42.0",
    "php_version": "8.2.4",
    "environment": "production",
    "debug_mode": true,
    "maintenance_mode": false
  },
  "services": {
    "database": {
      "status": "connected",
      "host": "db.internal.vulnerableart.shop:3306",
      "database": "artshop_production",
      "connections": 47,
      "max_connections": 100
    },
    "redis": {
      "status": "connected",
      "host": "redis.internal.vulnerableart.shop:6379",
      "memory_used": "234 MB",
      "keys": 15420
    },
    "queue": {
      "status": "running",
      "pending_jobs": 12,
      "failed_jobs": 3,
      "workers": 4
    }
  },
  "environment_variables": {
    "APP_NAME": "The Vulnerable Art Shop",
    "APP_ENV": "production",
    "APP_DEBUG": "true",
    "APP_KEY": "base64:b4s3_64_3ncr4pt10n_k3y_v3ry_s3cr3t_2024!",
    "APP_URL": "https://www.vulnerableart.shop",
    "DB_CONNECTION": "mysql",
    "DB_HOST": "db.internal.vulnerableart.shop",
    "DB_PORT": "3306",
    "DB_DATABASE": "artshop_production",
    "DB_USERNAME": "artshop_admin",
    "DB_PASSWORD": "Sup3r_S3cur3_DB_P4ssw0rd!",
    "REDIS_HOST": "redis.internal.vulnerableart.shop",
    "REDIS_PASSWORD": "r3d1s_c4ch3_s3cr3t",
    "MAIL_HOST": "smtp.mailgun.org",
    "MAIL_USERNAME": "postmaster@mg.vulnerableart.shop",
    "MAIL_PASSWORD": "m41lgun_smtp_k3y_2024",
    "STRIPE_KEY": "demo_pk_51Oa2b3c4d5e6f7g8",
    "STRIPE_SECRET": "demo_sk_51Oa2b3c4d5e6f7g8h9i0j1k2l3m4n5o",
    "AWS_ACCESS_KEY_ID": "DEMOKEY5KEY2024",
    "AWS_SECRET_ACCESS_KEY": "DEMO_SECRET_KEY_12345_NOT_REAL",
    "JWT_SECRET": "jwt_s3cr3t_k3y_f0r_t0k3n_s1gn1ng_2024"
  },
  "security_warnings": [
    "APP_DEBUG is enabled in production",
    "CORS allows all origins (*)",
    "Debug endpoint is publicly accessible",
    "Backup files are in public directory",
    "Git directory is web-accessible"
  ]
}`;

export default function DebugStatusPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <span className="text-orange-400 font-bold text-xs">DBG</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Debug Status Endpoint</h1>
            <p className="text-xs text-slate-500">GET /api/v1/debug/status</p>
          </div>
        </div>
        <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-3 mb-6">
          <p className="text-xs text-red-400">
            🔴 CRITICAL: The debug endpoint exposes all environment variables including database
            passwords, API keys, and AWS credentials. This endpoint should be disabled in production.
          </p>
        </div>
        <TerminalDisplay content={debugStatus} title="Debug Status Response" language="json" />
      </div>
    </div>
  );
}
