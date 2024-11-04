// src/app/layout.tsx

import { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import MenuComponent from '../components/MenuComponent';
import { Typography } from "@mui/material";

export const metadata = { title: 'Domov | ZoškaSnap' };

interface LayoutProps {
  children: ReactNode; // Type for children
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SessionProvider>
      <div>
        <MenuComponent />
        {children}
      </div>
    </SessionProvider>
  );
}
