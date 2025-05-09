import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { AppSidebar } from "@/components/AppSidebar"
import { Search, Bell, DollarSign, Users, Package, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react"
import StatusBadge  from "@/components/ui/status-badge"

// Example data for dashboard
const salesData = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 2400 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 2800 },
  { name: "May", total: 3200 },
  { name: "Jun", total: 2900 },
]

const recentOrders = [
  { id: "ORD-001", customer: "Alex Thompson", status: "Completed", amount: 125.99, date: "2025-05-08" },
  { id: "ORD-002", customer: "Sarah Chen", status: "Processing", amount: 249.50, date: "2025-05-08" },
  { id: "ORD-003", customer: "Michael Rodriguez", status: "Shipped", amount: 85.75, date: "2025-05-07" },
  { id: "ORD-004", customer: "Emma Wilson", status: "Completed", amount: 412.30, date: "2025-05-07" },
  { id: "ORD-005", customer: "James Liu", status: "Pending", amount: 65.20, date: "2025-05-06" },
]
export default function Dashboard() {
  return (
    <div>
      <AppSidebar />
      <div className="flex-1 overflow-auto">
        {/* Top navbar */}
        <header className="top-0 z-10  border-b">
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input 
                  type="search" 
                  placeholder="Search..." 
                  className="w-64 pl-8" 
                />
              </div>
              <Button variant="outline" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="p-6">
          {/* Tabs */}
          <Tabs defaultValue="overview" className="mb-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Stats cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <div className="flex items-center pt-1 text-xs text-green-600">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +20.1% from last month
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                <Users className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2,350</div>
                <div className="flex items-center pt-1 text-xs text-green-600">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +18.2% from last month
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                <Package className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <div className="flex items-center pt-1 text-xs text-red-600">
                  <ArrowDownRight className="mr-1 h-3 w-3" />
                  -3.4% from last month
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <CreditCard className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <div className="flex items-center pt-1 text-xs text-green-600">
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  +6.7% from last month
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts and tables */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            {/* Chart */}
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>Monthly revenue for the current year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 w-full">
                  {/* Placeholder for chart - would use recharts, chart.js, etc. */}
                  <div className="flex h-full items-end gap-2 border-b border-l">
                    {salesData.map((month, i) => (
                      <div key={i} className="relative flex-1">
                        <div 
                          className="absolute bottom-0 w-full bg-blue-600 rounded-t-sm"
                          style={{ height: `${(month.total / 3500) * 100}%` }}
                        ></div>
                        <div className="absolute -bottom-6 w-full text-center text-xs">
                          {month.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent orders */}
            <Card className="lg:col-span-3">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>Recent customer orders and status</CardDescription>
                </div>
                <Button variant="outline" size="sm">View All</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="font-medium">{order.customer}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <span>{order.id}</span>
                          <span>•</span>
                          <span>{order.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">${order.amount.toFixed(2)}</span>
                        <StatusBadge status={order.status} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button variant="ghost" className="w-full">View All Orders</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}