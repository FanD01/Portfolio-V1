'use client'

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, Mail, Phone, Globe} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* 导航 */}
      <header className="fixed top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold">一凡的作品集</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              首页
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              简历
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              项目
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">
              技能
            </Link>
          </nav>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-12">
          {/* 英雄区块 */}
          <div className="space-y-8">
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-blue-100 rounded-lg transform -skew-y-2"></span>
                  <span className="relative px-2">创造与用户产生共鸣的设计</span>
                </span>
              </h1>
            </div>

            {/* 占位区域 */}
            <div className="w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/hero-image.png"
                alt="主页图片"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* 统计栏 */}
            <div className="max-w-[800px] mx-auto flex justify-between items-center py-4">
              <div className="text-sm font-medium">以用户为中心的解决方案</div>
              <div className="text-sm font-medium">直观的界面设计</div>
              <div className="text-sm font-medium">平衡美学与功能性</div>
            </div>

            {/* 数据洞察部分 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                  我的项目
                </h2>
                <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="flex items-center">
                    更多
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </div>

              {/* 项目网格 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="overflow-hidden relative h-[200px]">
                  <Image
                    src="/1.png"
                    alt="项目1" 
                    width={300}
                    height={200}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="p-4 relative z-10 bg-black/50 h-full flex flex-col justify-end text-white">
                    <h3 className="font-semibold mb-2">数据可视化分析</h3>
                    <p className="text-sm">为决策提供实时洞察</p>
                  </div>
                </Card>
                <Card className="overflow-hidden relative h-[200px]">
                  <Image
                    src="/2.png"
                    alt="项目2"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="p-4 relative z-10 bg-black/50 h-full flex flex-col justify-end text-white">
                    <h3 className="font-semibold mb-2">AI聊天机器人</h3>
                    <p className="text-sm">通过机器学习提升客户支持</p>
                  </div>
                </Card>
                <Card className="overflow-hidden relative h-[200px]">
                  <Image
                    src="/3.png"
                    alt="项目3"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="p-4 relative z-10 bg-black/50 h-full flex flex-col justify-end text-white">
                    <h3 className="font-semibold mb-2">C端电子商务平台</h3>
                    <p className="text-sm">可扩展的在线零售业务解决方案</p>
                  </div>
                </Card>
                <Card className="overflow-hidden relative h-[200px]">
                  <Image
                    src="/4.png"
                    alt="项目4"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                  <div className="p-4 relative z-10 bg-black/50 h-full flex flex-col justify-end text-white">
                    <h3 className="font-semibold mb-2">移动健身APP</h3>
                    <p className="text-sm">个性化锻炼和健康追踪</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="flex justify-center w-full">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">联系方式</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  <a href="mailto:1621294073@qq.com" className="text-gray-600 hover:text-blue-600">1621294073@qq.com</a>
                </li>
                <li className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  <a href="tel:13132110242" className="text-gray-600 hover:text-blue-600">13132110242</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center w-full">
            <p className="text-gray-600">&copy; 2024 Yifan All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}