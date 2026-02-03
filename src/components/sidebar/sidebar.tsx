import { prisma } from '@/lib/prisma';
import { SidebarContent } from './sidebar-content';

export const Sidebar = async () => {
  // 1. Busca os dados
  const prompts = await prisma.prompt.findMany();

  // 2. VOCÊ PRECISA PASSAR A VARIÁVEL AQUI
  return <SidebarContent prompts={prompts} />;
};
