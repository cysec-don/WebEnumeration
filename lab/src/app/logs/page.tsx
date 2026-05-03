"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const errorLog = `[2024-01-15 14:32:07] production.ERROR: Authentication bypass detected - no middleware check on /admin-panel {"ip":"192.168.1.100","user_agent":"Mozilla/5.0"}
[2024-01-15 14:30:45] production.WARNING: Debug mode is enabled in production environment {"config":"APP_DEBUG=true","file":"/var/www/vulnerable-art-shop/.env"}
[2024-01-15 14:28:12] production.ERROR: Failed to connect to Redis at redis.internal.vulnerableart.shop:6379 {"error":"Connection refused","attempt":3}
[2024-01-15 14:25:33] production.INFO: Database backup completed successfully {"file":"/backup/db_dump.sql","size":"4.2 MB","duration":"12.4s"}
[2024-01-15 14:22:18] production.ERROR: Unhandled exception in /api/v2/admin/users {"message":"Call to undefined method isAdmin()","trace":"#0 /var/www/vulnerable-art-shop/routes/api.php(42): AdminController->listUsers()\\n#1 /var/www/vulnerable-art-shop/vendor/laravel/framework/src/Illuminate/Routing/Route.php(205): Closure->{closure}()\\n#2 /var/www/vulnerable-art-shop/public/index.php(55): Illuminate\\Routing\\Route->run()"}
[2024-01-15 14:18:44] production.WARNING: Access to .git directory from public web {"ip":"10.0.1.50","path":"/.git/config","status":200}
[2024-01-15 14:15:22] production.ERROR: Stripe webhook signature verification failed {"event":"charge.succeeded","sig_header":"t=1705325722","expected":"demo_webhook_abc123"}
[2024-01-15 14:10:05] production.WARNING: Sensitive file accessed: /config/settings.ini.bak {"ip":"192.168.1.100","status":200}
[2024-01-15 14:05:33] production.ERROR: SQL injection attempt detected on /api/v1/search {"ip":"10.0.2.15","query":"q=' OR 1=1--","blocked":true}
[2024-01-15 14:00:12] production.INFO: Cron job executed: cleanup_temp_uploads {"removed":47,"freed_mb":234}
[2024-01-15 13:55:48] production.ERROR: File upload validation bypass {"file":"shell.php.jpg","mime":"image/jpeg","actual":"application/x-php","path":"/uploads/hidden/temp_uploads/"}
[2024-01-15 13:50:30] production.WARNING: API rate limit exceeded for /api/v2/admin/users {"ip":"192.168.1.100","requests":1542,"limit":1000}
[2024-01-15 13:45:15] production.INFO: User export generated: /exports/users.csv {"records":12847,"format":"csv","requested_by":"admin@vulnerableart.shop"}
[2024-01-15 13:40:08] production.ERROR: OpenSSL error: certificate verification failed {"host":"api.stripe.com","error":"self-signed certificate in certificate chain"}
[2024-01-15 13:35:22] production.WARNING: phpinfo() page accessed from external IP {"ip":"203.0.113.42","path":"/phpinfo.php"}
[2024-01-15 13:30:10] production.ERROR: Authentication token expired but request allowed through {"user_id":1,"token":"demo_sk_a1b2c3...","middleware":"api.auth"}
[2024-01-15 13:25:44] production.INFO: Server deployment completed {"branch":"main","commit":"a3f7b2c","deployer":"admin@vulnerableart.shop"}
[2024-01-15 13:20:15] production.ERROR: Memory limit exceeded in image processing {"script":"/var/www/vulnerable-art-shop/app/Services/ImageProcessor.php","memory":"512M","limit":"256M"}
[2024-01-15 13:15:33] production.WARNING: CORS headers allow all origins {"access-control-allow-origin":"*","config_file":"/var/www/vulnerable-art-shop/config/settings.ini"}
[2024-01-15 13:10:00] production.ERROR: Database connection pool exhausted {"active":100,"max":100,"wait_queue":47}`;

export default function LogsPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
            <span className="text-orange-400 font-bold text-xs">LOG</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">error.log</h1>
            <p className="text-xs text-slate-500">18.4 KB — /var/log/vulnerable-art-shop/error.log</p>
          </div>
        </div>
        <div className="bg-amber-950/30 border border-amber-500/20 rounded-lg p-3 mb-6">
          <p className="text-xs text-amber-400">
            ⚠️ This error log reveals internal file paths, stack traces, and security events.
            It should not be publicly accessible.
          </p>
        </div>
        <TerminalDisplay content={errorLog} title="error.log" language="log" />
      </div>
    </div>
  );
}
