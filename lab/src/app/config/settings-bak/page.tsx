"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const settingsBak = `; ========================================
; The Vulnerable Art Shop
; Production Configuration Backup
; Generated: 2024-01-10 09:00:00
; ========================================
; ⚠️ THIS IS A BACKUP FILE - DO NOT USE IN PRODUCTION
; Contains plaintext credentials - should be deleted

[database]
driver = mysql
host = db.internal.vulnerableart.shop
port = 3306
database = artshop_production
username = artshop_admin
password = Sup3r_S3cur3_DB_P4ssw0rd!
charset = utf8mb4
prefix = vas_

[cache]
driver = redis
host = redis.internal.vulnerableart.shop
port = 6379
password = r3d1s_c4ch3_s3cr3t
database = 0
ttl = 3600

[mail]
driver = smtp
host = smtp.mailgun.org
port = 587
username = postmaster@mg.vulnerableart.shop
password = m41lgun_smtp_k3y_2024
encryption = tls
from_address = noreply@vulnerableart.shop
from_name = "The Vulnerable Art Shop"

[stripe]
public_key = demo_pk_51Oa2b3c4d5e6f7g8
secret_key = demo_sk_51Oa2b3c4d5e6f7g8h9i0j1k2l3m4n5o
webhook_secret = demo_webhook_a1b2c3d4e5f6g7h8i9j0

[aws]
access_key_id = DEMOKEY5KEY2024
secret_access_key = DEMO_SECRET_KEY_12345_NOT_REAL
region = us-west-2
bucket = vulnerable-art-shop-uploads
cdn_domain = d3x4mpl3.cloudfront.net

[jwt]
secret = jwt_s3cr3t_k3y_f0r_t0k3n_s1gn1ng_2024
algorithm = HS256
expiration = 86400
refresh_expiration = 604800

[app]
name = "The Vulnerable Art Shop"
env = production
debug = true
url = https://www.vulnerableart.shop
timezone = UTC
locale = en
encryption_key = b4s3_64_3ncr4pt10n_k3y_v3ry_s3cr3t_2024!
maintenance_mode = false

[logging]
channel = daily
level = debug
path = /var/log/vulnerable-art-shop/
max_files = 30

[cors]
allowed_origins = *
allowed_methods = GET,POST,PUT,DELETE,PATCH
allowed_headers = *
max_age = 86400

[backup]
schedule = "0 2 * * *"
path = /backup/
retention_days = 30
compress = true`;

export default function SettingsBakPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
            <span className="text-red-400 font-bold text-xs">BAK</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">settings.ini.bak</h1>
            <p className="text-xs text-slate-500">Backup configuration file — /config/settings.ini.bak</p>
          </div>
        </div>
        <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-3 mb-6">
          <p className="text-xs text-red-400">
            🔴 CRITICAL: This backup configuration file contains plaintext credentials for databases,
            Stripe, AWS, SMTP, JWT secrets, and encryption keys. This is a catastrophic security breach.
          </p>
        </div>
        <TerminalDisplay content={settingsBak} title="settings.ini.bak" language="ini" />
      </div>
    </div>
  );
}
