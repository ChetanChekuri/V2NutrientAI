"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function Analytics() {
  const [visits, setVisits] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Get the current timestamp
    const now = new Date().getTime();
    const lastVisit = localStorage.getItem('lastVisit');
    const totalVisits = parseInt(localStorage.getItem('totalVisits') || '0');

    // If no last visit or it was more than 1 hour ago, count as new visit
    if (!lastVisit || (now - parseInt(lastVisit)) > 3600000) {
      localStorage.setItem('totalVisits', (totalVisits + 1).toString());
      localStorage.setItem('lastVisit', now.toString());
      setVisits(totalVisits + 1);
    } else {
      setVisits(totalVisits);
    }
  }, [pathname]);

  if (pathname !== '/sources') return null;

  return (
    <div className="text-center py-4 text-sm text-gray-500 border-t">
      Total Visits: {visits}
    </div>
  );
}