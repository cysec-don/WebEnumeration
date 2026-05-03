"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const phpInfoContent = `phpinfo()
PHP Version => 8.2.4

System => Linux prod-web-01 5.15.0-91-generic #101-Ubuntu SMP x86_64
Build Date => Mar 15 2024 09:42:31
Server API => Apache 2.0 Handler
Virtual Directory Support => disabled
Configuration File (php.ini) Path => /etc/php/8.2/apache2
Loaded Configuration File => /etc/php/8.2/apache2/php.ini
Scan this dir for additional .ini files => /etc/php/8.2/apache2/conf.d

PHP Variables

Variable                           => Value
$_SERVER['SERVER_SOFTWARE']        => Apache/2.4.52 (Ubuntu)
$_SERVER['SERVER_NAME']            => www.vulnerableart.shop
$_SERVER['SERVER_ADDR']            => 10.0.1.42
$_SERVER['SERVER_PORT']            => 443
$_SERVER['DOCUMENT_ROOT']          => /var/www/vulnerable-art-shop/public
$_SERVER['SCRIPT_FILENAME']        => /var/www/vulnerable-art-shop/public/phpinfo.php
$_SERVER['REMOTE_ADDR']            => 192.168.1.100
$_SERVER['HTTP_HOST']              => www.vulnerableart.shop
$_SERVER['APP_ENV']                => production
$_SERVER['APP_DEBUG']              => true
$_SERVER['DB_HOST']                => db.internal.vulnerableart.shop
$_SERVER['DB_PORT']                => 3306
$_SERVER['DB_DATABASE']            => artshop_production
$_SERVER['DB_USERNAME']            => artshop_admin
$_SERVER['REDIS_HOST']             => redis.internal.vulnerableart.shop:6379

Additional .ini files parsed
========================================
/etc/php/8.2/apache2/conf.d/10-mysqlnd.ini,
/etc/php/8.2/apache2/conf.d/10-opcache.ini,
/etc/php/8.2/apache2/conf.d/10-pdo.ini,
/etc/php/8.2/apache2/conf.d/15-xml.ini,
/etc/php/8.2/apache2/conf.d/20-bcmath.ini,
/etc/php/8.2/apache2/conf.d/20-curl.ini,
/etc/php/8.2/apache2/conf.d/20-dom.ini,
/etc/php/8.2/apache2/conf.d/20-fileinfo.ini,
/etc/php/8.2/apache2/conf.d/20-gd.ini,
/etc/php/8.2/apache2/conf.d/20-mbstring.ini,
/etc/php/8.2/apache2/conf.d/20-mysqli.ini,
/etc/php/8.2/apache2/conf.d/20-pdo_mysql.ini,
/etc/php/8.2/apache2/conf.d/20-readline.ini,
/etc/php/8.2/apache2/conf.d/20-simplexml.ini,
/etc/php/8.2/apache2/conf.d/20-tokenizer.ini,
/etc/php/8.2/apache2/conf.d/20-xmlreader.ini,
/etc/php/8.2/apache2/conf.d/20-xmlwriter.ini,
/etc/php/8.2/apache2/conf.d/20-zip.ini

Core
========================================
PHP Version => 8.2.4
Directive           => Local Value     => Master Value
allow_url_fopen     => On              => On
allow_url_include   => Off             => Off
display_errors      => On              => On
error_reporting     => 32767           => 32767
expose_php          => On              => On
log_errors          => On              => On
max_execution_time  => 30              => 30
max_input_time      => 60              => 60
memory_limit        => 256M            => 256M
open_basedir        => no value        => no value
post_max_size       => 64M             => 64M
upload_max_filesize => 32M             => 32M

Loaded Modules
========================================
core, mod_so, http_core, mod_access_compat, mod_actions, mod_alias,
mod_allowmethods, mod_auth_basic, mod_authn_core, mod_authn_file,
mod_authz_core, mod_authz_host, mod_authz_user, mod_autoindex,
mod_deflate, mod_dir, mod_env, mod_filter, mod_headers, mod_mime,
mod_php, mod_proxy, mod_proxy_fcgi, mod_rewrite, mod_setenvif,
mod_ssl, mod_status`;

export default function PhpInfoPage() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="border-b-2 border-purple-600 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
              php
            </div>
            <div>
              <h1 className="text-2xl font-bold text-purple-800">phpinfo()</h1>
              <p className="text-sm text-gray-500">PHP Version 8.2.4</p>
            </div>
          </div>
        </div>

        <div className="mb-6 bg-purple-50 border border-purple-200 rounded-lg p-4">
          <p className="text-sm text-purple-800 font-semibold">
            ⚠️ This page exposes sensitive server configuration information.
          </p>
          <p className="text-xs text-purple-600 mt-1">
            The phpinfo() function should never be accessible on production servers.
            It reveals internal paths, environment variables, and server configuration details.
          </p>
        </div>

        <TerminalDisplay content={phpInfoContent} title="phpinfo() Output" language="ini" />
      </div>
    </div>
  );
}
