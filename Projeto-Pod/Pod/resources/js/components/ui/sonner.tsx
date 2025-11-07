import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="!size-4" />,
        info: <InfoIcon className="!size-4" />,
        warning: <TriangleAlertIcon className="!size-4" />,
        error: <OctagonXIcon className="!size-4" />,
        loading: <Loader2Icon className="!size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast: "!bg-white !text-gray-900 !border !border-gray-200",
          description: "!text-gray-600",
          actionButton: "!bg-blue-600 !text-white",
          cancelButton: "!bg-gray-200 !text-gray-700",
          error: "!border-red-400 !bg-red-50",
          success: "!border-green-500 !bg-gradient-to-r !from-green-50 !to-emerald-50",
          warning: "!border-yellow-400 !bg-yellow-50",
          info: "!border-blue-400 !bg-blue-50",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
