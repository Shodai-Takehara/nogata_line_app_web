'use client';

import { useEffect, useState } from 'react';
import liff from '@line/liff';
import styles from "../styles/Home.module.css";

export default function Home() {
  const [liffObject, setLiffObject] = useState<typeof liff | null>(null);
  const [liffError, setLiffError] = useState<string | null>(null);

  useEffect(() => {
    // LIFFの初期化
    liff
      .init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! })
      .then(() => {
        setLiffObject(liff);
      })
      .catch((error: Error) => {
        setLiffError(error.toString());
      });
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <h1>create-liff-app</h1>
        {liffObject && <p>LIFF init succeeded.</p>}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}
        <a
          href="https://developers.line.biz/ja/docs/liff/"
          target="_blank"
          rel="noreferrer"
        >
          LIFF Documentation
        </a>
      </main>
    </div>
  );
}
