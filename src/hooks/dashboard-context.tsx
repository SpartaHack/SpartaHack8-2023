import { createContext } from "react";
import { DashboardProps } from "../../types";

export const DashboardContext = createContext<DashboardProps | undefined>(undefined)