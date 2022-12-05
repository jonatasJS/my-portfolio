import React, { useEffect, useState } from "react";

export default function Adsense() {
  const [showAds, setShowAds] = useState(false);

  const loadAds = async () => {
    try {
      if (typeof window !== "undefined") {
        await (window.adsbygoogle = window.adsbygoogle || []).push({});
        setShowAds(true);
      }
    } catch (error) {
      setShowAds(false);
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return <>
    {showAds ? <ins
      className="adsbygoogle"
      style={{
        display: "inline-block",
        width: "120px !important",
        height: "120px !important",
      }}
      data-ad-client="ca-pub-4515639184646084"
      data-ad-slot="6793505140"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins> : ''}
  </>;
}
