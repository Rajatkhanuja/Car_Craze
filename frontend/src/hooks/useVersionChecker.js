import { useEffect, useState } from 'react';

const useVersionChecker = () => {
  const [currentVersion, setCurrentVersion] = useState(null);

  useEffect(() => {
    const checkVersion = async () => {
      try {
        const res = await fetch('/version.json');
        const data = await res.json();

        if (currentVersion && currentVersion !== data.version) {
          window.location.reload(); // 🔁 Auto-refresh
        }

        setCurrentVersion(data.version);
      } catch (error) {
        console.error('Error checking version:', error);
      }
    };

    const interval = setInterval(checkVersion, 5 * 60 * 1000); // Every 5 mins
    checkVersion(); // Check immediately

    return () => clearInterval(interval);
  }, [currentVersion]);
};

export default useVersionChecker;
