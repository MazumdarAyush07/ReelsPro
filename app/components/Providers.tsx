"use client";

import { SessionProvider } from "next-auth/react";
import { IKContext } from "imagekitio-react";
import { NotificationProvider } from "./Notification";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider refetchInterval={5 * 60}>
      <NotificationProvider>
        <IKContext urlEndpoint={urlEndpoint}>
          {children}
        </IKContext>
      </NotificationProvider>
    </SessionProvider>
  );
}
