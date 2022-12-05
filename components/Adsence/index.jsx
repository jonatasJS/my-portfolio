import React, { useEffect } from "react";

export default function Adsense() {
  const loadAds = () => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log("adsense error", error.message);
    }
  };

  useEffect(() => {
    loadAds();
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "inline-block", width: "120px !important", height: "120px !important" }}
      data-ad-client="ca-pub-4515639184646084"
      data-ad-slot="6793505140"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}