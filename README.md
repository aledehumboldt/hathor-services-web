# Hathor Services C.A. — sitio web

Sitio institucional responsive construido con Next.js, listo para GitHub, Vercel y Supabase.

## Desarrollo local
1. Instale Node.js 20.9 o superior.
2. Ejecute `npm install`.
3. Copie `.env.example` a `.env.local` y complete las credenciales de Supabase.
4. Ejecute `npm run dev` y abra http://localhost:3000.

## Supabase
1. Cree un proyecto en Supabase.
2. Abra SQL Editor y ejecute `supabase/schema.sql`.
3. En Project Settings → API copie Project URL y `service_role` key.
4. Guárdelas como `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` en las variables de entorno de Vercel.
5. Nunca exponga la service role key en variables `NEXT_PUBLIC_*` ni en el navegador.

## GitHub y Vercel
1. Cree un repositorio en GitHub y suba todos los archivos de este proyecto.
2. En Vercel seleccione Add New → Project e importe el repositorio.
3. Añada `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` en Environment Variables.
4. Despliegue. Cada push a la rama principal activará un nuevo despliegue.

## Antes de publicar
- Sustituir el emblema provisional por el logotipo oficial en alta resolución.
- Confirmar el número de WhatsApp/teléfono y los textos legales/comerciales.
- La imagen del hero usa una fotografía remota de Unsplash; se puede cambiar por una imagen corporativa autorizada.
- Probar el formulario después de configurar Supabase.
