"use client";

import { TerminalDisplay } from "@/components/TerminalDisplay";

const csvContent = `id,username,email,full_name,role,phone,address,api_token,credit_card_last4,created_at,last_login
1,admin,admin@vulnerableart.shop,System Administrator,super_admin,+1-555-0100,123 Admin St, San Francisco CA 94102,demo_sk_DEMO_SECRET_KEY_12345_NOT_REAL,4242,2020-01-15 00:00:00,2024-01-15 14:32:07
2,sarah.smith,sarah.smith@gmail.com,Sarah Smith,admin,+1-555-0142,456 Oak Ave, Portland OR 97201,demo_sk_q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2,8910,2021-03-22 10:15:30,2024-01-14 09:18:42
3,john.doe,john.doe@outlook.com,John Doe,user,+1-555-0188,789 Pine Dr, Seattle WA 98101,demo_sk_g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7,1234,2021-06-10 14:22:18,2024-01-13 16:45:33
4,emily.johnson,emily.johnson@yahoo.com,Emily Johnson,user,+1-555-0234,321 Elm Blvd, Austin TX 78701,,5678,2021-08-05 08:30:45,2024-01-12 11:22:10
5,michael.brown,m.brown@company.org,Michael Brown,user,+1-555-0276,654 Maple Ct, Denver CO 80202,demo_sk_w8x9y0z1a2b3c4d5e6f7g8h9i0j1k2l3,6789,2022-01-20 16:45:12,2024-01-11 08:15:27
6,lisa.wang,lisa.wang@techcorp.io,Lisa Wang,admin,+1-555-0318,987 Cedar Ln, San Jose CA 95110,demo_sk_m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9,3456,2022-04-15 12:10:33,2024-01-10 14:30:55
7,david.garcia,david.garcia@mail.com,David Garcia,user,+1-555-0360,147 Birch Way, Miami FL 33101,,9012,2022-07-30 09:05:47,2024-01-09 18:42:16
8,anna.kowalski,anna.k@european-art.eu,Anna Kowalski,user,+44-20-7946-0958,258 Spruce Rd, London UK EC1A 1BB,demo_sk_c2d3e4f5g6h7i8j9k0l1m2n3o4p5q6r7,7890,2022-11-12 15:28:09,2024-01-08 12:17:38
9,robert.chen,r.chen@asiantech.cn,Robert Chen,user,+86-21-6100-1234,369 Willow St, Shanghai CN 200000,,2345,2023-02-28 07:42:51,2024-01-07 09:33:20
10,maria.santos,maria.santos@artmail.br,Maria Santos,user,+55-11-3003-4567,480 Ash Ave, São Paulo BR 01310-100,demo_sk_s2t3u4v5w6x7y8z9a0b1c2d3e4f5g6h7,6789,2023-05-14 11:55:23,2024-01-06 20:08:45`;

export default function UsersCsvPage() {
  return (
    <div className="min-h-screen bg-slate-950 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <span className="text-amber-400 font-bold text-sm">CSV</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">users.csv</h1>
            <p className="text-xs text-slate-500">2.1 KB — Last modified: 2024-01-15 02:30:00</p>
          </div>
        </div>
        <div className="bg-red-950/30 border border-red-500/20 rounded-lg p-3 mb-6">
          <p className="text-xs text-red-400">
            🔴 CRITICAL: This CSV export contains PII (personally identifiable information) including
            emails, phone numbers, addresses, and API tokens. This is a GDPR/CCPA violation.
          </p>
        </div>
        <TerminalDisplay content={csvContent} title="users.csv" language="csv" />
      </div>
    </div>
  );
}
