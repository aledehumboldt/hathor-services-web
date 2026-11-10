create table if not exists public.contact_messages (
  id bigint generated always as identity primary key,
  name text not null,
  email text not null,
  phone text not null default '',
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

-- No public SELECT/INSERT policy is created. The Next.js API route inserts
-- with the service-role key, which must remain server-side in Vercel env vars.
