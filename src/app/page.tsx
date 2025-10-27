import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import KPIGrid from "@/components/KPIGrid";
import ActionButtons from "@/components/ActionButtons";


export default async function DashboardPage() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/auth/sign-in')
  }

   return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Taller Mecánico Rápido C.A.</h1>
      <KPIGrid />
      <h2 className="text-2xl font-bold text-gray-800 mb-5 border-b pb-2">
        Acciones Rápidas y Gestión
      </h2>
      <ActionButtons />
    </div>
  );
}
