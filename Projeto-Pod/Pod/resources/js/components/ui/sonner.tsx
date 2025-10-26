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
      theme="dark"
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
          toast: "!bg-[#1a1a1a] !text-white !border !border-gray-800",
          description: "!text-gray-400",
          actionButton: "!bg-blue-600 !text-white",
          cancelButton: "!bg-gray-800 !text-gray-400",
          error: "!border-red-600 !bg-red-950",
          success: "!border-green-600 !bg-green-950",
          warning: "!border-yellow-600 !bg-yellow-950",
          info: "!border-blue-600 !bg-blue-950",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
