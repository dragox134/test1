// src/app/layout.tsx

import { ReactNode } from 'react';
import { SessionProvider } from "next-auth/react";
import MenuComponent from '../components/MenuComponent';
import { CssBaseline } from "@mui/material";

export const metadata = { title: 'Domov | ZoškaSnap' };

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SessionProvider>
      <CssBaseline /> {/* This is optional but helps with Material UI styling */}
      <MenuComponent />
      {children}
    </SessionProvider>
  );
}
