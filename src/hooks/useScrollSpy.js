import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds, offset = 120) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const onScroll = () => {
      const y = window.scrollY + offset;
      const firstEl = document.getElementById(sectionIds[0]);
      if (firstEl && y < firstEl.offsetTop - 32) {
        setActiveId("");
        return;
      }
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
