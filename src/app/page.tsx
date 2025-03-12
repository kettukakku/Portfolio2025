import { redirect } from 'next/navigation';
import Sidebar from "@/components/Sidebar";

export default function Home() {
  redirect('/resume');
}
