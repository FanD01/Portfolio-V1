/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useEffect, useState } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import * as THREE from 'three'

export default function Model() {
  const ref = useRef()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // 在组件挂载时加载模型
  useEffect(() => {
    const loader = new GLTFLoader()
    
    // 可选：如果模型使用了 Draco 压缩
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/') // 确保你有 draco 解码器文件
    loader.setDRACOLoader(dracoLoader)
    
    loader.load(
      '/cube.glb',
      (gltf) => {
        const model = gltf.scene
        model.scale.set(1, 1, 1) // 调整大小
        model.position.set(0, 0, 0) // 调整位置
        if (ref.current) {
          ref.current.add(model)
        }
      },
      (progress) => {
        console.log('加载进度:', (progress.loaded / progress.total) * 100, '%')
      },
      (error) => {
        console.error('加载出错:', error)
      }
    )
    // 添加鼠标移动和滚轮事件监听
    const handleMouseMove = (event) => {
      // 检查事件目标是否是Canvas元素
      if (event.target.tagName === 'CANVAS') {
        const rect = event.target.getBoundingClientRect()
        // 计算相对于Canvas的坐标
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
        setMousePosition({ x, y })
      }
    }

    const handleWheel = (event) => {
      if (event.target.tagName === 'CANVAS' && ref.current) {
        // 阻止默认滚动行为
        event.preventDefault()
        
        // 获取当前缩放值
        const currentScale = ref.current.scale.x
        
        // 根据滚轮方向计算新的缩放值
        const delta = event.deltaY * -0.001
        const newScale = Math.max(0.5, Math.min(2, currentScale + delta))
        
        // 应用新的缩放值
        ref.current.scale.set(newScale, newScale, newScale)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  useFrame(() => {
    if (ref.current) {
      // 根据鼠标位置平滑旋转模型
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.y,
        mousePosition.x * Math.PI / 2, // 移除负号使旋转方向正确
        0.1
      )
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        -mousePosition.y * Math.PI / 2, // 保持y轴旋转方向不变
        0.1
      )
    }
  })

  return <group ref={ref} />
}