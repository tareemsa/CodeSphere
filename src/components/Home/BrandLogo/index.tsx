'use client';
import { AiFillApi } from 'react-icons/ai';
import { FaLaravel, FaReact, FaPython, FaWordpress } from 'react-icons/fa';
import { SiDjango, SiFlutter, SiPostman, SiNumpy, SiPandas, SiPytorch, SiScikitlearn, SiTensorflow } from 'react-icons/si';
import Slider from 'react-infinite-logo-slider';

const brandIcons = [
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

export default function BrandLogo() {
  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="gap-4">
            <div className="flex justify-center text-center py-4 relative">
              <p className="text-white font-medium">
                We build with <span className='text-primary'>the best tools & frameworks</span>
              </p>
            </div>

            <div className="py-3 Xsm:py-7">
              <Slider
                width="80px"
                duration={20}
                pauseOnHover={true}
                blurBorders={false}
              >
                {brandIcons.map((item, index) => (
                  <Slider.Slide key={index}>
                    <div className='mr-10 w-full h-full flex items-center justify-center'>
                      {item.icon}
                    </div>
                  </Slider.Slide>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
