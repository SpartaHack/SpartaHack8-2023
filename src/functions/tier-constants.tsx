import { Icon } from "@iconify/react/dist/iconify.js"
import { Features } from "../../types"

export const freePlanBenefits: Features[] = [
    {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Chat upto 10 content"},
    {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Upto AI 10 responses per content",},
    {icon: <Icon icon="mingcute:lock-line" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Beta Access to New Features",},
    {icon: <Icon icon="mingcute:lock-line" className='w-4 h-4 lg:w-5 lg:h-5 mt-1 text-tertiary dark:text-secondary'/>  , label: "Folder Chat Bot",},
  ]
  
  export const premiumMonthlyPlanBenefits: Features[] = [
    {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Chat with unlimited videos & PDFS"},
    {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Unlimited AI responses"},
    {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/>  , label: "Beta Access to New Features"},
    {icon: <Icon icon="mdi:tick-circle-outline" className='w-4 h-4 lg:w-5 lg:h-5 mt-0.5 text-tertiary dark:text-secondary'/> , label:  "Folder Chat Bot"},
  ]