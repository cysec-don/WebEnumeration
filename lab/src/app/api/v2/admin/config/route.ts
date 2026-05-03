import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "⚠️ UNAUTHENTICATED: This endpoint exposes server secrets",
    config: {
      database: {
        driver: "mysql",
        host: "db.internal.vulnerableart.shop",
        port: 3306,
        database: "artshop_production",
        username: "artshop_admin",
        password: "Sup3r_S3cur3_DB_P4ssw0rd!",
        max_connections: 100,
      },
      redis: {
        host: "redis.internal.vulnerableart.shop",
        port: 6379,
        password: "r3d1s_c4ch3_s3cr3t",
      },
      stripe: {
        public_key: "demo_pk_51Oa2b3c4d5e6f7g8",
        secret_key: "demo_sk_51Oa2b3c4d5e6f7g8h9i0j1k2l3m4n5o",
        webhook_secret: "demo_webhook_a1b2c3d4e5f6g7h8i9j0",
      },
      aws: {
        access_key_id: "DEMOKEY5KEY2024",
        secret_access_key: "DEMO_SECRET_KEY_12345_NOT_REAL",
        region: "us-west-2",
        bucket: "vulnerable-art-shop-uploads",
      },
      jwt: {
        secret: "jwt_s3cr3t_k3y_f0r_t0k3n_s1gn1ng_2024",
        algorithm: "HS256",
        expiration: 86400,
      },
      encryption: {
        key: "b4s3_64_3ncr4pt10n_k3y_v3ry_s3cr3t_2024!",
        cipher: "AES-256-CBC",
      },
      mail: {
        host: "smtp.mailgun.org",
        port: 587,
        username: "postmaster@mg.vulnerableart.shop",
        password: "m41lgun_smtp_k3y_2024",
      },
      security: {
        cors_origins: "*",
        rate_limit: 1000,
        debug_mode: true,
        maintenance_mode: false,
      },
    },
  });
}
