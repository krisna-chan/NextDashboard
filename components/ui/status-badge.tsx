import { Badge } from "@/components/ui/badge"

type StatusType = "Completed" | "Processing" | "Shipped" | "Pending"

interface StatusBadgeProps {
  status: StatusType
}

function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles: Record<StatusType, string> = {
    Completed: "bg-green-100 text-green-800",
    Processing: "bg-blue-100 text-blue-800",
    Shipped: "bg-purple-100 text-purple-800",
    Pending: "bg-yellow-100 text-yellow-800",
  }

  return (
    <Badge className={`font-medium ${statusStyles[status]}`} variant="outline">
      {status}
    </Badge>
  )
}

export default StatusBadge
