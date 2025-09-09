// src/components/Home/BrandLogo/data.ts
import { FaLaravel, FaReact, FaWordpress } from 'react-icons/fa';
import { SiDjango, SiFlutter, SiPostman, SiNumpy, SiPandas, SiPytorch, SiScikitlearn, SiTensorflow } from 'react-icons/si';
import { ReactNode } from 'react';

export interface BrandItem {
  icon: ReactNode;
  title: string;
}

export const brandIcons: BrandItem[] = [
  { icon: <FaLaravel size={50} color="#FF2D20" />, title: 'Laravel' },
  { icon: <SiDjango size={50} color="#092E20" />, title: 'Django' },
  { icon: <SiFlutter size={50} color="#02569B" />, title: 'Flutter' },
  { icon: <FaReact size={50} color="#61DAFB" />, title: 'React' },
  { icon: <SiPostman size={50} color="#FF6C37" />, title: 'Postman' },
  { icon: <FaWordpress size={50} color="#21759B" />, title: 'WordPress' },
  { icon: <SiNumpy size={50} color="#013243" />, title: 'NumPy' },
  { icon: <SiPandas size={50} color="#150458" />, title: 'Pandas' },
  { icon: <SiPytorch size={50} color="#EE4C2C" />, title: 'PyTorch' },
  { icon: <SiScikitlearn size={50} color="#F7931E" />, title: 'Scikit-learn' },
  { icon: <SiTensorflow size={50} color="#FF6F00" />, title: 'TensorFlow' },
];
