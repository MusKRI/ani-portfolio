import { create } from "zustand";

interface ActiveSectionHookProps {
  activeSection: string;
  timeOfLastClick: number;
  setActiveSection: (newSection: string) => void;
  setTimeOfLastClick: (newTime: number) => void;
}

export const useActiveSection = create<ActiveSectionHookProps>()((set) => ({
  activeSection: "Home",
  timeOfLastClick: 0,
  setActiveSection: (newSection) =>
    set(() => ({
      activeSection: newSection,
    })),
  setTimeOfLastClick: (newTime) => set(() => ({ timeOfLastClick: newTime })),
}));
